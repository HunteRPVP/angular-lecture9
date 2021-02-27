import { Component, Host, Inject, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { HostService } from './host.service';
import { Mod1Service } from './mod1.service';
import { Serv1Service } from './serv1.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
  providers: [
    { provide: 'mod1', useClass: Mod1Service },
    { provide: 'serv1', useClass: Serv1Service },
    Mod1Service
  ],
  // viewProviders: [
  //   { provide: 'mod1', useClass: HostService },
  //   Mod1Service
  // ]
})
export class Mod1Component implements OnInit {
  constructor(
    @Optional() @Host() public mod1: HostService,
    @Optional() @Inject('serv1') public serv1: Serv1Service
  ) {}

  ngOnInit(): void {}
}
