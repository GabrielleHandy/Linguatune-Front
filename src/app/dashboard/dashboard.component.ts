import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { UserService } from '../user.service';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  pages : any[]= [];
  constructor(private authService: AuthServiceService, private userService:UserService, private cardsService: CardsService){}
  ngOnInit(): void {
    this.user =this.authService.getUser();
    


  this.userService.getPages().subscribe(p => 
      {if((p as any).message == 'Success'){
        this.pages = (p as any).data;
        this.pages.forEach(page => {
          sessionStorage.setItem(page.language.name, page.id)
          
          this.cardsService.getStacks(page.id).subscribe(result => page["stacks"]= (result as any).data.length)})}

  })
}
}
    

 

