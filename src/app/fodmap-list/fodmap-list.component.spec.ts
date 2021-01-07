import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodmapListComponent } from './fodmap-list.component';

describe('FodmapListComponent', () => {
  let component: FodmapListComponent;
  let fixture: ComponentFixture<FodmapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FodmapListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FodmapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
