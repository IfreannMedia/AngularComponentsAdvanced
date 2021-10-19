import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public isAddTimerVisible = false;
    public isEndTimerAlertVisible = false;
    public time = 0;
    public timers: Array<number> = [];

    constructor() {
        this.timers = [3, 3, 180];
    }

    showAddTimer() {
        this.isAddTimerVisible = true;
    }

    hideAddTimer() {
        this.isAddTimerVisible = false;
    }

    public setIsEndTimerAlertVisible(visible: boolean): void {
        this.isEndTimerAlertVisible = visible;
    }

    public submitAddTimer() {
        this.timers.push(this.time);
    }
}
