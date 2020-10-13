import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { tutorialReducer } from './store/reducers/tutorial.reducer';
import { ReadTutorialComponent } from './read-tutorial/read-tutorial.component';
import { CreateTutorialComponent } from './create-tutorial/create-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadTutorialComponent,
    CreateTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({tutorial: tutorialReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
