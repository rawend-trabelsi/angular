import { Component } from "@angular/core";
import { Car } from './car';

@Component({
  selector: 'app-root',
  template: `
    <table>
      <tr *ngFor="let car of cars">
        <td>{{ car.make }}</td>
        <td>{{ car.model }}</td>
        <td><button (click)="showCar(car)">Click me!</button></td>
      </tr>
    </table>
  `,
  styles: []
})
export class AppComponent {
  cars: Car[] = [
    new Car('car1', 2002, 'BMW', 'M3', 'https://en.wikipedia.org/wiki/BMW_M3'),
    new Car('car2', 2017, 'Acura', 'NSX', 'https://en.wikipedia.org/wiki/HONDA_NSX'),
    new Car('car3', 2016, 'Chevy', 'Camaro', 'https://en.wikipedia.org/wiki/Chevrolet_Camaro')
  ];

  showCar(car: Car) {
    const desc = car.make;
    if (window.confirm(`Click "OK" to be redirected to ${car.article}`)) {
      window.location.href = car.article;
    }
  }
}
