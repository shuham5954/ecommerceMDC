import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPaymentPageComponent } from './cart-payment-page.component';

describe('CartPaymentPageComponent', () => {
  let component: CartPaymentPageComponent;
  let fixture: ComponentFixture<CartPaymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPaymentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
