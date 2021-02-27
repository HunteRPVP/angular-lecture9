import { Component } from '@angular/core';
import { HostService } from './mod1/host.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [
    HostService
  ]
})
export class AppComponent {
  title = 'angular-lecture9';
}
