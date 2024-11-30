import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from '../../common/commonServices/common.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf , NgClass , NgFor ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private commmonS:CommonService){  }

}
