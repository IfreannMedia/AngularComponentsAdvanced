import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TimerService} from '../services/timer.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {

    @Output() onComplete = new EventEmitter<void>();
    @Input() init = 20;
    private countdown = 0;
    private subscriptions: Subscription[] = [];

    // the TimerComponent is a stateful component and interfaces with the TimerService
    // where the actual logic of the handling the Timer Data is offloaded
    constructor(public timerService: TimerService) {
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
        });
        this.subscriptions.push(...[sub, sub2]);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.timerService.destroy();
    }


}
