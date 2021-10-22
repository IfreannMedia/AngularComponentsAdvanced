import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {Tab} from '../tab/tab.interface';
import {TabComponent} from '../tab/tab.component';
import {ComponentWithSubscriptions} from '../base-component-classes/ComponentWithSubscriptions';


@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent extends ComponentWithSubscriptions implements AfterContentInit {

    // access the (projected) child content
    @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;

    constructor() {
        super();
    }

    ngAfterContentInit(): void {
        this.tabs.forEach(tab => {
            this.subscriptions.push(tab.onClick.subscribe(() => {
                console.log(`tab: ${tab.title}`);
            }));
        });

        this.selectTab(this.tabs.first);
    }

    public selectTab(tab: Tab) {
        this.tabs.forEach(t => t.isActive = false);
        tab.isActive = true;
    }

}
