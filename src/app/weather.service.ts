import {
  HttpClient,
  HttpParams
} from '@angular/common/http';

import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = "http://api.weatherbit.io/v2.0/current";
  key = "fb7d05dbb3b3495ba51cf33a7a2a671c";

  data: any;

  constructor(private http: HttpClient) {

  }
  
  getWeather(city: string): Observable < any > {
    const params = new HttpParams().set("key", this.key).set("city", city);
    return this.http.get<any>(this.url, { params });
  } 
}

// async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
//   const data = await fetch(`${this.url}/${id}`);
//   return (await data.json()) ?? {};
// }
