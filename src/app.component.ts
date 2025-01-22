import { Component } from '@angular/core';
import { HeaderComponent } from "./app/components/header/header.component";
import { BuscadorComponent } from "./app/components/buscador/buscador.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BuscadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
