import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SkyModalService, SkyModalCloseArgs } from '@blackbaud/skyux/dist/core';
import { OfflineModeContext } from './offlinemode.context';
import { OfflineModeModalComponent } from './offlinemodemodal.component';

@Component({
  selector: 'my-offlinemode',
  templateUrl: './offlinemode.component.html'
})
export class OfflineModeComponent {
  public tasks: FirebaseListObservable<any>;
  public items: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  constructor(private af: AngularFire, private modal: SkyModalService) {
    this.tasks = af.database.list('tasks');
    this.tasks.first().subscribe(x => {
      this.items.next(x);
    });
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
