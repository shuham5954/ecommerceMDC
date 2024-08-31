import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdesCardUserProfileComponent } from './my-ordes-card-user-profile.component';

describe('MyOrdesCardUserProfileComponent', () => {
  let component: MyOrdesCardUserProfileComponent;
  let fixture: ComponentFixture<MyOrdesCardUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOrdesCardUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrdesCardUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
