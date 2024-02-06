import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'María';
  public age: number = 32;

  get capitalizeName() :String {
    return 'Hola mundo'.toUpperCase();
  }

  getHeroDescription(): string{
      return `
      ${this.name} - ${this.age}
      `;

  }

  changeName() {
    this.name = 'captain american';

  }

  changeAge():void {

    this.age= 29;
  }

}
