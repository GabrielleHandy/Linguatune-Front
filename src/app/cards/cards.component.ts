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
  newStack: boolean = false;
  chosenName: string = "";
  chosenVal : string = "";
  editStack: boolean = false;
  constructor(private userService: UserService,  private cardsService: CardsService, private router: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    
    (this.router.parent as ActivatedRoute).params.subscribe(params => {
      this.studyPageId = params['id'];
      
      this.cardsService.getStacks(this.studyPageId).subscribe(stack => {
        
        this.stacks = ( stack as any).data})
    });
    
  }
  seeMakeNewStack(){
    this.newStack = !this.newStack;
  }
  makeNewStack(){
    const stack:any = {}
    if(this.chosenName){
     stack['title'] = this.chosenName;

    }
    this.cardsService.makeAStack(this.studyPageId, stack).subscribe(data =>{
      this.cardsService.getStacks(this.studyPageId).subscribe(stack => {
        console.log( (stack as any).data)
        this.stacks = ( stack as any).data})
      alert("Successfully created!")
    })}

    edit(closed: boolean = false){
      if(closed){
        this.removeHightlight();
      }
      this.editStack = !this.editStack;
    }

    highlightStack(): void{
      this.removeHightlight();
      
      (document.getElementById(this.chosenVal) as HTMLElement).style.border = "5px solid red";
    }

    deleteStack(){
      this.cardsService.deleteStackById(this.chosenVal).subscribe(card =>{
        this.cardsService.getStacks(this.studyPageId).subscribe(stack => {
          this.stacks = ( stack as any).data})
          alert("Deleted successfully!")
          this.edit();
      }
        
      );
      

    }
    removeHightlight(): void {
      let stackList: NodeListOf<Element> = document.querySelectorAll('.stack');
      
      for(let stack of stackList as unknown as any[]){
        (stack as HTMLElement).style.border= ""

      }
      
    }

}
