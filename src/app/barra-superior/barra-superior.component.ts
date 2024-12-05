import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss'],
})
export class BarraSuperiorComponent {
  constructor(private router: Router) {}
  rotas = this.router.config.map((route: Route) => route?.path || 'Home');
  tituloPagina = 'Home';

  ngOnInit(): void {
    console.log(this.rotas);
  }

  mudarRota(route: string): void {
    this.tituloPagina = route;
    const proxCaminho = route === 'Home' ? '/' : route;
    this.router.navigate([proxCaminho]);
  }
}