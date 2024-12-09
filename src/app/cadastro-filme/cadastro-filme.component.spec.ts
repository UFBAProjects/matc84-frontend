import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFilmeComponent } from './cadastro-filme.component';

describe('CadastroFilmeComponent', () => {
  let component: CadastroFilmeComponent;
  let fixture: ComponentFixture<CadastroFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroFilmeComponent]
    });
    fixture = TestBed.createComponent(CadastroFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
