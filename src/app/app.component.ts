import { Component, ViewEncapsulation } from '@angular/core';
import { routerAnimation } from './shared/animations/router.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* Allow CSS in this component to cascade down to child components */
  encapsulation: ViewEncapsulation.None,
  animations: [routerAnimation]
})
export class AppComponent {
  constructor() {}
  prepareRouteTransition(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
