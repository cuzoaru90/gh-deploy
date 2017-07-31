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

    var dict = {
     0: ['0'],
     1: ['1'],
     2: ['a', 'b', 'c'],
     3: ['d', 'e', 'f'],
     4: ['g', 'h', 'i'],
     5: ['j', 'k', 'l'],
     6: ['m', 'n', 'o'],
     7: ['p', 'q', 'r', 's'],
     8: ['t', 'u', 'v'],
     9: ['w', 'x', 'y', 'z'],
   };

    return dict[input];
  };

}
