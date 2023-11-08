import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisteComponent } from './artiste.component';

describe('ArtistComponent', () => {
  let component: ArtisteComponent;
  let fixture: ComponentFixture<ArtisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtisteComponent]
    });
    fixture = TestBed.createComponent(ArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
