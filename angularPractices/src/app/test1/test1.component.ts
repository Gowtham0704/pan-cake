import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
    <p>
      test1 works!
    </p>
  `,
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
