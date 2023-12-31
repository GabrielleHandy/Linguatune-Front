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
  fullSongList: Array<any> = [];
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
          this.fullSongList = (data as any).data

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

  searchSongs(){
    let filteredSongs; 
    if(!this.search && this.search.trim() == '') {
      this.songs = this.fullSongList;
      return
    }

    if(this.artistSearch){
       filteredSongs = this.songs.filter(song => {
        // Perform a case-insensitive search by converting both song title and search input to lowercase
        const songArtist = song.artist.toLowerCase();
        const searchQuery = this.search.toLowerCase();
      
        // Check if the song title contains the search input
        return songArtist.includes(searchQuery);
      });
  



    }else{
       filteredSongs = this.songs.filter(song => {
        // Perform a case-insensitive search by converting both song title and search input to lowercase
        const songTitle = song.title.toLowerCase();
        const searchQuery = this.search.toLowerCase();
      
        // Check if the song title contains the search input
        return songTitle.includes(searchQuery);
      });


    }
   

    this.songs = filteredSongs;
  }
 

}
