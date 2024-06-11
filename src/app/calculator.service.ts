import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  url = "http://localhost/api/testAPI";
  data = "";

  async getCalculator(): Promise<[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  constructor() {
    
   }
}
