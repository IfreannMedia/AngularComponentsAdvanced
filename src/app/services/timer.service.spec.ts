import {inject, TestBed} from '@angular/core/testing';

import {TimerService} from './timer.service';

describe('TimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerService]
    });
  });

  it('should ...', inject([TimerService], (service: TimerService) => {
    expect(service).toBeTruthy();
  }));
});
