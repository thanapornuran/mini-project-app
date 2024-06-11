import {
  Component
} from '@angular/core';
import {
  WeatherService
} from '../../weather.service';

import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city = "";
  data: any;
  constructor(private weatherService: WeatherService) {

  }

  // weatherForm = new FormGroup({
  //   city: new FormControl("")
  // });

  handleSubmit(form: NgForm) {
    this.city = form.value.city;
    // this.weatherService.getWeather(this.city).subscribe(response => {
    //   this.data = response;
    // });
    console.log(this.data);
  }
  

  // showWeather(city: string) {
  //   console.log(city);
  //   this.weatherService.getWeather(city).subscribe(response => {
  //     console.log(response);
  //   });
  // }
}
