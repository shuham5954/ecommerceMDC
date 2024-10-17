import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersDetailsPopUpComponent } from './admin-orders-details-pop-up.component';

describe('AdminOrdersDetailsPopUpComponent', () => {
  let component: AdminOrdersDetailsPopUpComponent;
  let fixture: ComponentFixture<AdminOrdersDetailsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminOrdersDetailsPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrdersDetailsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
