import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreStackComponent } from './genre-stack.component';

describe('GenreStackComponent', () => {
  let component: GenreStackComponent;
  let fixture: ComponentFixture<GenreStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreStackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenreStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
