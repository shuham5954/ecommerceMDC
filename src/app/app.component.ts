import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { RouterModule , Routes  , Router} from '@angular/router';
import { NavBarComponent } from "./header/nav-bar/nav-bar.component";
import { HeaderComponent } from "./header/header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeaderComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router:Router){}
swichRoute() {
this.router.navigate(['logIn'])
}
  title = 'ecommerceMDC';
}
