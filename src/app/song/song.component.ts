import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  switchState: boolean = false; 
  clickedWord: string = "";
  defaultSong :any;
lyrics:any;
lyricsData: any[] = [ /* Your lyrics data */ ];
currentLyric: any;
  currentLyricIndex = -1;
 displayedLyricsOffset = 2; // Number of lines to display before and after the current lyric
 startDisplayIndex = this.currentLyricIndex - this.displayedLyricsOffset;
 endDisplayIndex = this.currentLyricIndex + this.displayedLyricsOffset;
 
constructor(private userService: UserService, private router: ActivatedRoute){

}
  
wordClicked(wordClicked:string, time:number):void{
  const audioElement = document.querySelector('audio')
  audioElement?.pause;
  (audioElement as HTMLAudioElement).currentTime = ((time - 1000 )/ 1000 ) ;
  audioElement?.pause;
  console.log(wordClicked);
  this.clickedWord = wordClicked;
  
}
onSwitchChange(event: any) {
  
  this.switchState = event;
  console.log('Switch state:', this.switchState);
}
ngOnInit(): void {
   
    this.userService.getSong
    this.router.params.subscribe(params => {
      const songId = params['id']
      this.userService.getSong(songId).subscribe(song => {
        this.defaultSong = (song as any).data;
        console.log(this.defaultSong);
        this.lyrics = JSON.parse(( song as any).data.lyrics)
        this.lyricsData = JSON.parse(( song as any).data.lyrics)
        for(let line of this.lyricsData){
          line['split'] = line.words.split(" ")}
      

          









        
        })})


      
        




        
        }
        
        onAudioTimeUpdate(event: Event): void {
          const audioElement = event.target as HTMLAudioElement;
          const currentTime = audioElement.currentTime * 1000; // Convert to milliseconds
          
          let possibleLyric = this.lyricsData.find(lyric => currentTime >= lyric.startTimeMs && currentTime - 3000 <= lyric.startTimeMs);
          possibleLyric?this.currentLyric = possibleLyric: this.currentLyric = this.currentLyric;
         
          // Update the currentLyricIndex
          this.currentLyricIndex = this.currentLyric ? this.lyricsData.indexOf(this.currentLyric) : -1;
          this.startDisplayIndex = this.currentLyricIndex - this.displayedLyricsOffset;
        this.endDisplayIndex = this.currentLyricIndex + this.displayedLyricsOffset;
        
        // Ensure that the indices are within the bounds of your lyricsData
        this.startDisplayIndex = Math.max(this.startDisplayIndex, 0);
        this.endDisplayIndex = Math.min(this.endDisplayIndex, this.lyricsData.length - 1);


        }
      
        isCurrentLyric(lyric: any): boolean {
          return this.lyricsData.indexOf(lyric) === this.currentLyricIndex;
        }
       
      }
       
       

   
        
      
      

    
   
    
    
  


