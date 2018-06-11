import { Component, OnInit } from '@angular/core';
import { homeTransition } from '../shared/animations/router.animation';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [homeTransition],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@homeTransition]': ''
  }
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
