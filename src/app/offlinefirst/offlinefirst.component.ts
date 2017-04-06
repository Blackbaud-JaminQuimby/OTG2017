import { Component } from '@angular/core';

@Component({
  selector: 'my-offlinefirst',
  templateUrl: './offlinefirst.component.html'
})
export class OfflineFirstComponent {
  public team = [
    {
      name: 'Robert Hernandez',
      email: 'rh@edu.org'
    },
    {
      name: 'Samantha Jones',
      email: 'sam@jones.com'
    },
    {
      name: 'Michael Jordan',
      email: 'michael@jordon.net'
    }
  ];

  constructor() {}
}
