import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers :[DataService]
})
export class TestComponent implements OnInit {

  constructor( public  dataservice: DataService) { }

  name ='Gowtham';

  ngOnInit(): void {
  }


}