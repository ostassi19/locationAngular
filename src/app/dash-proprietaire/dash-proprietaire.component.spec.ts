import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProprietaireComponent } from './dash-proprietaire.component';

describe('DashProprietaireComponent', () => {
  let component: DashProprietaireComponent;
  let fixture: ComponentFixture<DashProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashProprietaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
