import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsDetailsComponent } from './home-products-details.component';

describe('HomeProductsDetailsComponent', () => {
  let component: HomeProductsDetailsComponent;
  let fixture: ComponentFixture<HomeProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProductsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
