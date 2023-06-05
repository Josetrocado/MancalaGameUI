import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameService } from '../game-service.service';
import { ApiResponse } from '../domain/ApiResponse';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
  constructor(private gameService: GameService) { }

  ngOnInit(): void { }
  gameString: string | undefined;
  playerNumber : string | undefined = "ONE";

  @ViewChild('buttonOne') buttonOne!: ElementRef;
  @ViewChild('buttonTwo') buttonTwo!: ElementRef;


  
  getBoard(): void {
    this.gameService.getBoard().subscribe((transData: ApiResponse) => {
      this.gameString = transData.board;
    });
  }



  makeMove(house: string, playerNumber: string): void {

    this.gameService.makeMove(playerNumber, Number.parseInt(house)).subscribe((apiResponse: ApiResponse) => {
      this.gameString = apiResponse.board;
      this.playerNumber = apiResponse.nextPlayer;
      
      if(this.playerNumber == 'TWO'){
        this.buttonOne.nativeElement.disabled = true;
        this.buttonTwo.nativeElement.disabled = false;
      }
      if(this.playerNumber == 'ONE'){
        this.buttonTwo.nativeElement.disabled = true;
        this.buttonOne.nativeElement.disabled = false;
      }

      if(apiResponse.status == 'PLAYER_ONE_WIN'){
          alert("Player One has Won");
      }
      else if (apiResponse.status =='PLAYER_ONE_WIN'){
        alert("Player Two has Won");
      } 
      else if (apiResponse.status == 'DRAW'){
        alert("It's a draw");
      }
    });
  }
}