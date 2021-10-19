import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimerNoneComponent} from './timer-none.component';

describe('TimerNoneComponent', () => {
    let component: TimerNoneComponent;
    let fixture: ComponentFixture<TimerNoneComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimerNoneComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimerNoneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
