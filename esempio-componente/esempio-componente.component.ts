/* file esempio-componente.component.ts modificato*/
import { Component } from '@angular/core';

/*  
*   definiamo una costante FONT_FAMILY
*   che usiamo come valore della proprietà font-family
*/
const FONT_FAMILY = '\'Courier New\', Courier, monospace;';

@Component({
  selector: 'app-esempio-componente',
  template: `<h2>Componente: {{ nomeComponente }}</h2>`,
  styles: [
    `h2 {
      color: midnightblue;
      font-family: ${FONT_FAMILY}
    }

    h2:hover {
      color: crimson;
    }`
  ]
})
export class EsempioComponenteComponent {
  nomeComponente = `${this.constructor.name}`;
}
