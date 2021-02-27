import { Component, OnInit } from '@angular/core';
import { Mod1Service } from '../mod1/mod1.service';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css'],
  providers: [Mod1Service]
})
export class Mod2Component implements OnInit {

  constructor(public mod1: Mod1Service) { }

  ngOnInit(): void {
  }

}
