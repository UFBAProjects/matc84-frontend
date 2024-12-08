import { Component, Input } from '@angular/core';
import { Filme} from '../interfaces-api/src/filme/filme.model';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.scss']
})

export class CardFilmeComponent {

  constructor () {

  }

  media = true;

 /*  @Input() media!: Filme */



}
