import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelspageComponent } from './hotelspage.component';

describe('HotelspageComponent', () => {
  let component: HotelspageComponent;
  let fixture: ComponentFixture<HotelspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
