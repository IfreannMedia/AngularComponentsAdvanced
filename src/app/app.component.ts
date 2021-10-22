import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    ElementRef,
    OnDestroy,
    Renderer2,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {SimpleAlertViewComponent} from './simple-alert-view/simple-alert-view.component';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit, OnDestroy {

    public isAddTimerVisible = false;
    public isEndTimerAlertVisible = false;
    public time: number = null;
    public timers: Array<number> = [];
    public simpleAlert: ComponentRef<SimpleAlertViewComponent> = null;
    private timerEndSubscription: Subscription;
    @ViewChild('timerInput') timeInput: ElementRef;
    @ViewChild('alert', {read: ViewContainerRef}) alertContainer: ViewContainerRef;

    constructor(private renderer: Renderer2,
                private resolver: ComponentFactoryResolver) {
        this.timers = [3, 3, 180];
    }

    ngAfterViewInit() {
        this.renderer.setAttribute(this.timeInput.nativeElement, 'placeholder', 'enter seconds');
        this.renderer.addClass(this.timeInput.nativeElement, 'time-in');
    }

    ngAfterContentInit() {

    }

    ngOnDestroy() {
        if (this.timerEndSubscription) {
            this.timerEndSubscription.unsubscribe();
        }
    }

    showAddTimer() {
        this.isAddTimerVisible = true;
        setTimeout(() => this.renderer.selectRootElement(this.timeInput.nativeElement).focus());
    }

    hideAddTimer() {
        this.isAddTimerVisible = false;
    }

    public setIsEndTimerAlertVisible(visible: boolean): void {
        this.isEndTimerAlertVisible = visible;
        if (visible) {
            this.configureSimpleTimerEndAlertComponent();
            this.subscribeToTimerEndDismiss();
            this.simpleAlert.instance.show();
        }
    }

    public submitAddTimer() {
        this.timers.push(this.time);
    }

    private configureSimpleTimerEndAlertComponent() {
        const alertFactory = this.resolver.resolveComponentFactory(SimpleAlertViewComponent);
        this.simpleAlert = this.alertContainer.createComponent(alertFactory);
        this.simpleAlert.instance.title = 'Timer has ended';
        this.simpleAlert.instance.message = 'You may now go in peace';
    }

    private subscribeToTimerEndDismiss() {
        if (!this.timerEndSubscription) {
            this.timerEndSubscription = this.simpleAlert.instance.onDismiss.subscribe(() => this.simpleAlert.destroy());
        }
    }
}
