import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodmapListPageComponent } from './fodmap-list-page.component';

describe('FodmapListPageComponent', () => {
  let component: FodmapListPageComponent;
  let fixture: ComponentFixture<FodmapListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FodmapListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FodmapListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
