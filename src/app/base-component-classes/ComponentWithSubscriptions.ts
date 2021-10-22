import {OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

/*
* to prevent memory leaks, any component using multiple subscriptions
* can extend this class, and any subscriptions in the child class
* can simply be added to the subscriptions array
* If the child component also needs to use ngOnDestroy, then
* simply call super.ngOnDestroy() from there */
export class ComponentWithSubscriptions implements OnDestroy {

    protected subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
