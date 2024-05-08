import { Component } from '@angular/core';

@Component({
  selector: 'app-car-description',
  template: `
    <h1 [textContent]="car.model"></h1>
    <!--img [src]="car.img" /-->
    <br>
    <button [disabled]="!car.available">Button</button>
  `
})

export class CarDescriptionComponent {
  car = {
    model: 'Bottone disabilitato',
    img: 'assets/images/alfa-giulia.jpg',
    available: false
  };
  constructor() {
    setTimeout(() => {
      this.car.model = this.car.model.replace("disabilitato", "funzionante");
      this.car.img = 'assets/images/nuova-alfa-giulia.jpg';
      this.car.available = true;
    }, 5500);
  }
}
