import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

// swagger ui seems not working with Angular 7
// import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.scss']
})
export class SwaggerComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // const ui = SwaggerUI({
    //   url: 'http://petstore.swagger.io/v2/swagger.json',
    //   dom_id: '#swagger-ui'
    //   deepLinking: true,
    //   presets: [
    //     SwaggerUI.presets.apis
    //   ],
    // });
  }

}
