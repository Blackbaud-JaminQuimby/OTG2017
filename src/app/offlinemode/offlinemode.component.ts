import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { SkyModalService, SkyModalCloseArgs } from '@blackbaud/skyux/dist/core';
import { OfflineModeContext } from './offlinemode.context';
import { OfflineModeModalComponent } from './offlinemodemodal.component';

@Component({
  selector: 'my-offlinemode',
  templateUrl: './offlinemode.component.html'
})
export class OfflineModeComponent {

  public items: Observable<Array<any>> = Observable.of([
    { id: '1', column1: 101, column2: 'Apple', column3: 'Anne eats apples' },
    { id: '2', column1: 202, column2: 'Banana', column3: 'Ben eats bananas' },
    { id: '3', column1: 303, column2: 'Pear', column3: 'Patty eats pears' },
    { id: '4', column1: 404, column2: 'Grape', column3: 'George eats grapes' },
    { id: '5', column1: 505, column2: 'Banana', column3: 'Becky eats bananas' },
    { id: '6', column1: 606, column2: 'Lemon', column3: 'Larry eats lemons' },
    { id: '7', column1: 707, column2: 'Strawberry', column3: 'Sally eats strawberries' }
  ]);

  constructor(private af: AngularFire, private modal: SkyModalService) {
    const tasks = af.database.list('tasks');
    tasks.push('new item');
  }

  public openModal(type: string) {
    let context = new OfflineModeContext();

    let windowMode: any = {
      'defaultModal': {
        'providers': [{ provide: OfflineModeContext, useValue: context }]
      }
    };
    let modalInstance = this.modal.open(OfflineModeModalComponent, windowMode[type]);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
    });
  }
}
