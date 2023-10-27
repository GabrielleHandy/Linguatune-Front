import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { UserService } from '../../user.service';
import { CardsService } from '../../cards.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show = false;
  user: any;
  pages : any[]= [];
  studyPage:string='';
  constructor(private authService: AuthServiceService, private userService:UserService, private cardsService: CardsService){}
  ngOnInit(): void {
    this.user =this.authService.getUser();
    
    this.loadDashboard();

 
}
loadDashboard(){
  this.userService.getPages().subscribe(p => 
    {if((p as any).message == 'Success'){
      this.pages = (p as any).data;
      this.pages.forEach(page => {
        sessionStorage.setItem(page.language.languageCode, page.id)
        
        this.cardsService.getStacks(page.id).subscribe(result => page["stacks"]= (result as any).data.length)})}

})
}
showAddPage(){
  
  this.show = !this.show
}
alreadyHave(language: string){
  if(this.pages.length > 0){
    return this.pages.find(page => page.language.name == language)? true : false;
  }
  return false;
}

makeStudyPage(){
  
  if(this.studyPage.length >0){
    this.userService.createPage(this.studyPage).subscribe(data => {
      alert("Successfullly created!")
      this.showAddPage()
      this.loadDashboard();
    })
    
    return;
  }
  alert("Please choose a studyPage option");
}
}
    

 

