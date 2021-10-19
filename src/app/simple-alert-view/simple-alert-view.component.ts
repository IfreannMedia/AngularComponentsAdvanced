import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-simple-alert-view',
    templateUrl: './simple-alert-view.component.html',
    styleUrls: ['./simple-alert-view.component.scss']
})
export class SimpleAlertViewComponent implements OnInit {

    @Input() message: string;
    @Input() title: string;
    public visible = false;

    constructor() {
    }


    ngOnInit() {
    }

    public dismiss() {
        this.visible = false;
    }

    public show() {
        this.visible = true;
    }

}
