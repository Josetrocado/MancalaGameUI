import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import {HttpClientModule } from '@angular/common/http';
import { GameService } from './game-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
