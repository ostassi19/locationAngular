import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarrageComponent } from './garrage.component';

describe('GarrageComponent', () => {
  let component: GarrageComponent;
  let fixture: ComponentFixture<GarrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
