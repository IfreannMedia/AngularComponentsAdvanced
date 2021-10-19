import {AfterContentInit, Component, ContentChildren, OnDestroy, OnInit, QueryList} from '@angular/core';
import {Tab} from '../tab/tab.interface';
import {TabComponent} from '../tab/tab.component';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {

    // access the (projected) child content
    @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;
    private subscriptions: Subscription[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        this.tabs.forEach(tab => {
            this.subscriptions.push(tab.onClick.subscribe(() => {
                console.log(`tab: ${tab.title}`);
            }));
        });

        this.selectTab(this.tabs.first);
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    public selectTab(tab: Tab) {
        this.tabs.forEach(t => t.isActive = false);
        tab.isActive = true;
    }


}
