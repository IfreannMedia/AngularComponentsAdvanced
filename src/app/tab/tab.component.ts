import {Component, Input, OnInit} from '@angular/core';
import {Tab} from './tab.interface';
import {TabsComponent} from '../tabs/tabs.component';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

    @Input() title: string;
    public isActive = false;

    // use DI to access the parent tabs component
    constructor(public tabs: TabsComponent) {
    }

    ngOnInit() {
        // add self to parent tabs
        console.log('this: ', this, 'tabsComponent: ', this.tabs);
        this.tabs.addTab(this);
    }

}
