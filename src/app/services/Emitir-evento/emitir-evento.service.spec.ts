import { TestBed } from '@angular/core/testing';

import { EmitirEventoService } from './emitir-evento.service';

describe('EmitirEventoService', () => {
  let service: EmitirEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitirEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
