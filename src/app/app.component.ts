import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public isAddTimerVisible = false;
    public time = 0;

    constructor() {
    }

    showAddTimer() {
        this.isAddTimerVisible = true;
    }

    hideAddTimer() {
        this.isAddTimerVisible = false;
    }
}
