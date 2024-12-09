import { Component, Input } from '@angular/core';
import { IFilmeResponse } from 'src/app/interfaces-api/src/filme/filme.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-tile-filme',
  templateUrl: './tile-filme.component.html',
  styleUrls: ['./tile-filme.component.scss'],
})
export class TileFilmeComponent {
  @Input() filme: IFilmeResponse = {} as IFilmeResponse;

  constructor(private SharedService: SharedService) {}
}
