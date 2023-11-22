import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadButtonsStackComponent } from './download-buttons-stack.component';

describe('DownloadButtonsStackComponent', () => {
  let component: DownloadButtonsStackComponent;
  let fixture: ComponentFixture<DownloadButtonsStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadButtonsStackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadButtonsStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
