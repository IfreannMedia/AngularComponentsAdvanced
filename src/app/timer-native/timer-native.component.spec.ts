import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimerNativeComponent} from './timer-native.component';

describe('TimerNativeComponent', () => {
    let component: TimerNativeComponent;
    let fixture: ComponentFixture<TimerNativeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimerNativeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimerNativeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
