import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  stacks: any[] = [];
  studyPageId: string = "";
  constructor(private userService: UserService,  private cardsService: CardsService, private router: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    
    (this.router.parent as ActivatedRoute).params.subscribe(params => {
      this.studyPageId = params['id'];
      
      this.cardsService.getStacks(this.studyPageId).subscribe(stack => {
        console.log( (stack as any).data)
        this.stacks = ( stack as any).data})
    });
    
  }


}
