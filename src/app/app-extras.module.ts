import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyAiHb8ByUNWBdeKZWIZyUapBMxSggLiJIg',
  authDomain: 'otg2017-f4d23.firebaseapp.com',
  databaseURL: 'https://otg2017-f4d23.firebaseio.com',
  projectId: 'otg2017-f4d23',
  storageBucket: 'otg2017-f4d23.appspot.com',
  messagingSenderId: '131069844360'
};
// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
