import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  value = '';
  onEnter(value: string) { this.value = value; }
  
  letterCombos = function(input:string){
    return input + input;
  };

}
