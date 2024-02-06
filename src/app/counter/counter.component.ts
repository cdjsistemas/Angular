import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
  <p> esto es una prueba {{ counter}}</p>

<button (click)="increaseBy(+1)"> +1</button>
<button (click)="resetBy(10)"> reset 10</button>

<button (click)="increaseBy(-1)">-1</button>
<hr>

  `,
})
export class CounterComponer{
  public counter: number = 2;

  increaseBy( value: number):void{
this.counter +=value;
  }

  resetBy( value: number):void{
    this.counter =value;
      }


}
