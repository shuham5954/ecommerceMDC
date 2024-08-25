import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckoutPageComponent } from './cart-checkout-page.component';

describe('CartCheckoutPageComponent', () => {
  let component: CartCheckoutPageComponent;
  let fixture: ComponentFixture<CartCheckoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCheckoutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
