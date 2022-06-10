import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  
  constructor(private weatherSerivce:WeatherService) {}
   ngOnInit(): void {
    this.weatherSerivce.getWeatherData('Chennai').subscribe ({
next :(response: any)=>{
  console.log(response);
  
}

  });
   }
}
