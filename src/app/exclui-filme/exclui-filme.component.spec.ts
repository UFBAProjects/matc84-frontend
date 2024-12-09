import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluiFilmeComponent } from './exclui-filme.component';

describe('ExcluiFilmeComponent', () => {
  let component: ExcluiFilmeComponent;
  let fixture: ComponentFixture<ExcluiFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluiFilmeComponent]
    });
    fixture = TestBed.createComponent(ExcluiFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
