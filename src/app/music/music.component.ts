import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  songs: Array<any>  = [];
  searchedSongs: Array<any> = [];
  studypageId: any;
  pageSize: number = 1;
  totalItems: number = 1;
  guessMade: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 2;
  artistSearch: boolean = false;
  search: string = '';

  get totalNumberOfPages(): number {
    return Math.ceil(this.songs.length / this.itemsPerPage);
  }
  constructor(private userService: UserService, private router: ActivatedRoute){
    
  }
  ngOnInit(): void {
    (this.router.parent as ActivatedRoute).params.subscribe(params => {
      
      this.studypageId = params['id']
      
      this.getSongs(this.studypageId)

    });
    
  }

  getSongs(pageId:string){
    
    this.userService.getPageById(pageId).subscribe(data => {

      let lang = (data as any).data.language.languageCode
      
      if( lang == 'fr'){
        this.userService.getFrenchSongs().subscribe(data => {
          this.songs = (data as any).data

        })
      }else{

        this.userService.getSpanishSongs().subscribe(data => {
          this.songs = (data as any).data

        })
      }




    })
  }

  setPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  setArtistSearch(){
    
    console.log(this.artistSearch)
  }

}
