import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCartClientComponent } from './main-cart-client.component';

describe('MainCartClientComponent', () => {
  let component: MainCartClientComponent;
  let fixture: ComponentFixture<MainCartClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCartClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCartClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
