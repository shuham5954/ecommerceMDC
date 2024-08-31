import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterCardUserProfileComponent } from './help-center-card-user-profile.component';

describe('HelpCenterCardUserProfileComponent', () => {
  let component: HelpCenterCardUserProfileComponent;
  let fixture: ComponentFixture<HelpCenterCardUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpCenterCardUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpCenterCardUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
