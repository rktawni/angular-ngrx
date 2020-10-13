import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from 'src/models/tutorial.model';
import { AppState } from '../store/app.state';
import { AddTutorial } from '../store/actions/tutorial.actions';
import * as TutorialAction from '../store/actions/tutorial.actions';

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.scss']
})
export class CreateTutorialComponent implements OnInit {


  constructor(private store: Store<AppState>) {}

  addTutorial(url: string, name: string) {
    this.store.dispatch(new TutorialAction.AddTutorial({name: name, url: url}));
  }

  ngOnInit() {
  }

}
