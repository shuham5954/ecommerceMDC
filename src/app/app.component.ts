import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Router} from '@angular/router';
import { NavBarComponent } from "./header/nav-bar/nav-bar.component";
import { HeaderComponent } from "./header/header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeaderComponent,RouterLink,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router:Router , private http:HttpClient){
    let data = '';
    this.http.post<any>('https://dummyjson.com/c/eb3d-d728-4cdf-ab19',data).subscribe((data)=>{console.log(data,'dataas');
    })
  }
swichRoute() {
this.router.navigate(['logIn'])
}
  title = 'ecommerceMDC';
}
