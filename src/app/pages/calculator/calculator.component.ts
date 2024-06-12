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
  
  number = 0.0;

  show = false;
  autohide = true;

  constructor(calculatorService: CalculatorService) {
    calculatorService.getCalculator().then((String: String[]) => {
      this.data = String;
    })
  }

  addNumber() {
    this.number += 1; 
  }

  minusNumber() {
    this.number -= 1;
  }
}


// constructor() {
//   this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
//     this.housingLocationList = housingLocationList;
//     this.filteredLocationList = housingLocationList;
//   });
// }
