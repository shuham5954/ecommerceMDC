import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaymentCardUserProfileComponent } from './my-payment-card-user-profile.component';

describe('MyPaymentCardUserProfileComponent', () => {
  let component: MyPaymentCardUserProfileComponent;
  let fixture: ComponentFixture<MyPaymentCardUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPaymentCardUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPaymentCardUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
