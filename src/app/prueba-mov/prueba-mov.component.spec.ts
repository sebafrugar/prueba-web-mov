import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaMovComponent } from './prueba-mov.component';

describe('PruebaMovComponent', () => {
  let component: PruebaMovComponent;
  let fixture: ComponentFixture<PruebaMovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaMovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
