import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileCardUserProfileComponent } from './my-profile-card-user-profile.component';

describe('MyProfileCardUserProfileComponent', () => {
  let component: MyProfileCardUserProfileComponent;
  let fixture: ComponentFixture<MyProfileCardUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfileCardUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfileCardUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
