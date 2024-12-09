import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFilme } from 'src/app/models/IFilme';

@Component({
  selector: 'app-tile-filme',
  templateUrl: './tile-filme.component.html',
  styleUrls: ['./tile-filme.component.scss'],
})
export class TileFilmeComponent {
  @Input() filme: IFilme = {} as IFilme;

  constructor() {}
}
