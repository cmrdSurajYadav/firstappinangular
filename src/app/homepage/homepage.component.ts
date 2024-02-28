import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  inputs: ['Pdata'],
})
export class HomepageComponent {
  Cdata: any;
  isLogin: boolean = false;
  getData(val: any): any {
    this.Cdata = val;
  }
  loginHanderler(): void {
    alert('User Login....');
    this.isLogin = true;
  }
  logoutHanderler(): void {
    alert('User Logout...');
    this.isLogin = false;
  }

  technology: any[] = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'C#' },
    { id: 5, name: 'Ruby' },
    { id: 6, name: 'PHP' },
    { id: 7, name: 'Swift' },
    { id: 8, name: 'Kotlin' },
    { id: 9, name: 'Go' },
    { id: 10, name: 'Rust' },
  ];
}
