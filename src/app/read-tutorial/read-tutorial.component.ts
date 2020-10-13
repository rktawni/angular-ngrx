import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tutorial } from '../../models/tutorial.model';
import { AppState } from '../store/app.state';
import * as TutorialAction from '../store/actions/tutorial.actions';

@Component({
  selector: 'app-read-tutorial',
  templateUrl: './read-tutorial.component.html',
  styleUrls: ['./read-tutorial.component.scss']
})
export class ReadTutorialComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {
    this.tutorials = this.store.select('tutorial');
    // Value inside store.select() should be same as what you passed
    // at the time of registering your reducer to StoreModule in AppModule.
   }

  ngOnInit() {
  }

  deleteTutorial(index: number) {
    this.store.dispatch(new TutorialAction.RemoveTutorial(index));
  }

}
