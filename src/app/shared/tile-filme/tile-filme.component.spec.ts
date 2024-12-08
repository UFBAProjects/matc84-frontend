import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileFilmeComponent } from './tile-filme.component';

describe('TileFilmeComponent', () => {
  let component: TileFilmeComponent;
  let fixture: ComponentFixture<TileFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TileFilmeComponent]
    });
    fixture = TestBed.createComponent(TileFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
