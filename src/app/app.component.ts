import { Component } from '@angular/core';
import { Animal } from './animal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Список чарівних тварин';
  animals!: Animal[];
  async populate() {
    const requestURL = 'https://api.jsonbin.io/v3/b/654a3dd712a5d376599618c7';
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (response.ok) {
      const ani = await response.json();
      this.animals = ani.record;
    } else alert('Помилка');
  }
  //Викликаємо при завантажені сторінки
  ngOnInit() {
    this.populate();
  }
}
