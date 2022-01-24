import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotsComponent } from './pilots.component';

xdescribe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
