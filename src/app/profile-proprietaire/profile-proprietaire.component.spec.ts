import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProprietaireComponent } from './profile-proprietaire.component';

describe('ProfileProprietaireComponent', () => {
  let component: ProfileProprietaireComponent;
  let fixture: ComponentFixture<ProfileProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileProprietaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
