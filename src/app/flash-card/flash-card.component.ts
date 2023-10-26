import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent  implements OnInit {
  studypageId: any;
  cardId: any;
  cards: any;
  guess: string = "";
  pageSize: number = 1;
  totalItems: number = 1;
  guessMade: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 1; // Set the number of items per page

  // You may want to calculate the total number of pages based on your data.
  get totalNumberOfPages(): number {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }

  // Function to change the current page
  setPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  constructor(private userService: UserService,  private cardsService: CardsService, private router: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    
    this.router.params.subscribe(params => {
      this.cardId = params['cardId'];
      this.studypageId = params['studypageId']
      this.cardsService.getCards(this.cardId).subscribe(card => {
        console.log( (card as any).data)
        this.cards = ( card as any).data})

        
        this.totalItems = this.cards.length;
      
      

    });
    
    
  }
  onPageChange(event: any): void {
    const startIndex = event.pageIndex * event.pageSize;
    this.cards = this.cards.slice(startIndex, startIndex + event.pageSize);
    this.guessMade = false;
  }
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // Enter key was pressed
      this.handleEnterKey();
    }
  }

  handleEnterKey() {
    // Your logic for handling the Enter key press
    this.guessMade = true;
    if(this.guess){
      
    }
    console.log(this.guess);
    this.guess="";
    
  }

}
