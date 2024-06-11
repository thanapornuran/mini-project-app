import {
  Routes
} from '@angular/router';
import path from 'path';
import {
  CalculatorComponent
} from './pages/calculator/calculator.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "calculator", component: CalculatorComponent},
    {path: "weather", component: WeatherComponent},
];  
