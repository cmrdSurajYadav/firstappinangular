import { Component,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  inputs:['Pdata','Pnumber'],
   outputs:['childEvent']
})
export class TestComponent {
  Pdata:any;
  Pnumber:any;
  
  childEvent = new EventEmitter();
  sendData(val:any):any{
    
    this.childEvent.emit(val);

  }
}
