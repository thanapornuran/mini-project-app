import {
  Component
} from '@angular/core';
import {
  CalculatorService
} from '../../calculator.service';

import {
  JsonPipe
} from '@angular/common';

import {
  NgbToast,
  NgbToastModule
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [JsonPipe, NgbToast, NgbToastModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  data: any;
  
  show = false;
  autohide = true;

  constructor(calculatorService: CalculatorService) {
    calculatorService.getCalculator().then((String: String[]) => {
      this.data = String;
    })
  }

}


// constructor() {
//   this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
//     this.housingLocationList = housingLocationList;
//     this.filteredLocationList = housingLocationList;
//   });
// }
