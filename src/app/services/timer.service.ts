import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class TimerService {

    private countdownTimerRef: any = null;
    public paused = true;
    private init = 0;
    public countdownEndSource: Subject<void> = new Subject<void>();
    public countdownEnd$: Observable<void> = this.countdownEndSource.asObservable();
    public countdownSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public countdown$: Observable<number> = this.countdownSource.asObservable();

    constructor() {
    }


    destroy(): void {
        this.clearTimeout();
    }

    restartCountdown(init?) {
        if (init) {
            this.init = init;
        }
        if (this.init && this.init > 0) {
            this.paused = true;
            this.clearTimeout();
            this.countdownSource.next(this.init);
        }
    }

    public toggleCountdown(): void {
        this.paused = !this.paused;

        if (!this.paused) {
            this.doCountdown();
        } else {
            this.clearTimeout();
        }
    }

    private doCountdown() {
        this.countdownTimerRef = setTimeout(() => {
            this.countdownSource.next(this.countdownSource.getValue() - 1);
            this.processCountdown();
        }, 1000);
    }

    private processCountdown() {
        console.log('process countdown');
        if (this.countdownSource.getValue() <= 0) {
            console.log('one');
            this.countdownEndSource.next();
        } else {
            console.log('two');
            this.doCountdown();
        }
    }

    private clearTimeout() {
        if (this.countdownTimerRef) {
            clearTimeout(this.countdownTimerRef);
            this.countdownTimerRef = null;
        }
    }

}
