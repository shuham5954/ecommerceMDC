import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddressesCardUserProfileComponent } from './my-addresses-card-user-profile.component';

describe('MyAddressesCardUserProfileComponent', () => {
  let component: MyAddressesCardUserProfileComponent;
  let fixture: ComponentFixture<MyAddressesCardUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAddressesCardUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAddressesCardUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
