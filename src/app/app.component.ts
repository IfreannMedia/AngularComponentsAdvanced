import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public isAddTimerVisible = false;
    public time = 0;
    public timers: Array<number> = [];

    constructor() {
        this.timers = [3, 20, 180];
    }

    showAddTimer() {
        this.isAddTimerVisible = true;
    }

    hideAddTimer() {
        this.isAddTimerVisible = false;
    }

    public submitAddTimer() {
        this.timers.push(this.time);
    }
}
