import {AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChildren} from '@angular/core';
import {SimpleAlertViewComponent} from './simple-alert-view/simple-alert-view.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit {

    public isAddTimerVisible = false;
    public isEndTimerAlertVisible = false;
    public time = 0;
    public timers: Array<number> = [];

    @ViewChildren(SimpleAlertViewComponent) alerts: QueryList<SimpleAlertViewComponent>;

    constructor(private changeDetRef: ChangeDetectorRef) {
        this.timers = [3, 3, 180];
    }

    ngAfterViewInit() {
        this.alerts.forEach(alert => {
            if (!alert.title) {
                alert.title = 'yo';
                alert.message = 'american dad';
            }
            alert.show();
        });
        this.changeDetRef.detectChanges();
    }

    ngAfterContentInit() {
        // this.alerts.show();
        // this.alerts.title = 'i am a title';
        // this.alerts.message = 'i am a message';
    }

    showAddTimer() {
        this.isAddTimerVisible = true;
    }

    hideAddTimer() {
        this.isAddTimerVisible = false;
    }

    public setIsEndTimerAlertVisible(visible: boolean): void {
        this.isEndTimerAlertVisible = visible;
        if (visible) {
            this.alerts.first.show();
        }
    }

    public submitAddTimer() {
        this.timers.push(this.time);
    }
}
