import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileSettingComponent } from './admin-profile-setting.component';

describe('AdminProfileSettingComponent', () => {
  let component: AdminProfileSettingComponent;
  let fixture: ComponentFixture<AdminProfileSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProfileSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProfileSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
