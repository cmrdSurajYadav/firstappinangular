import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToolbarComponent,HomepageComponent,FooterComponent,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'firstappinangular';

  // @HostListener('click',['$event'])
  //  show() {
  //   alert("You Click on something ")
  // }
}
