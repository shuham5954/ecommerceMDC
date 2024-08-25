import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelpCenterComponent } from './my-help-center.component';

describe('MyHelpCenterComponent', () => {
  let component: MyHelpCenterComponent;
  let fixture: ComponentFixture<MyHelpCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHelpCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
