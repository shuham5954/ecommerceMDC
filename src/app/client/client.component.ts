import { Component } from '@angular/core';
import { NavBarComponent } from "../header/nav-bar/nav-bar.component";
import { HeaderComponent } from "../header/header/header.component";
import { HomeComponent } from "../home/home/home.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [NavBarComponent, HeaderComponent, HomeComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

}
