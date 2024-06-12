import {
  Component
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';

import {
  NgTemplateOutlet
} from '@angular/common';
import {
  NgbToastModule
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgTemplateOutlet, NgbToastModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
}
