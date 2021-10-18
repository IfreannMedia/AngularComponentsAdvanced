import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TimerService} from '../services/timer.service';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
    providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {

    @Output() onComplete = new EventEmitter<void>();
    @Input() init = 20;

    // the TimerComponent is a stateful component and interfaces with the TimerService
    // where the actual logic of the handling the Timer Data is offloaded
    constructor(public timerService: TimerService) {
    }

    ngOnInit(): void {
        this.timerService.restartCountdown(this.init);
    }

    ngOnDestroy(): void {
        this.timerService.destroy();
    }


}
