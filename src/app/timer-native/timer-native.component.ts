import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {TimerService} from '../services/timer.service';
import {ComponentWithSubscriptions} from '../base-component-classes/ComponentWithSubscriptions';

@Component({
    selector: 'app-timer-native',
    templateUrl: './timer-native.component.html',
    styleUrls: ['./timer-native.component.scss'],
    providers: [TimerService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // for some reason this throws errors
    encapsulation: ViewEncapsulation.Native
})
export class TimerNativeComponent extends ComponentWithSubscriptions implements OnInit, OnDestroy {

    @Output() onComplete = new EventEmitter<void>();
    @Input() init = 20;
    private countdown = 0;

    // the TimerComponent is a stateful component and interfaces with the TimerService
    // where the actual logic of the handling the Timer Data is offloaded
    constructor(public timerService: TimerService,
                private changeDetRef: ChangeDetectorRef) {
        super();
    }

    // replaced async pipe with this getter
    get progress() {
        return (this.init - this.countdown) / this.init * 100;
    }

    ngOnInit(): void {
        this.timerService.restartCountdown(this.init);
        const sub = this.timerService.countdownEnd$.subscribe(() => {
            console.log('hoorey, countdown ended');
            this.onComplete.emit();
        });
        const sub2 = this.timerService.countdown$.subscribe((countDown) => {
            this.countdown = countDown;
            this.changeDetRef.markForCheck();
        });
        this.subscriptions.push(...[sub, sub2]);
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        this.timerService.destroy();
    }


}
