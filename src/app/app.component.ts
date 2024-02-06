import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponer } from "./counter/counter.component";
import { CommonModule, NgIf } from '@angular/common';
import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from "./heroes/list/list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CounterComponer, HeroComponent, ListComponent, NgIf]
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 2;

  increaseBy( value: number):void{
this.counter +=value;
  }

  resetBy( value: number):void{
    this.counter =value;
      }



}
