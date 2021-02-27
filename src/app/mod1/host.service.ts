import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  data = {name: 'host'}

  constructor() { }
}
