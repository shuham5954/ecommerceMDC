import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistClientComponent } from './wishlist-client.component';

describe('WishlistClientComponent', () => {
  let component: WishlistClientComponent;
  let fixture: ComponentFixture<WishlistClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
