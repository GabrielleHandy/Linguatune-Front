import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  switchState: boolean = false; 
  translatedWord: string = "";
  clickedWord: string = "";
  defaultSong :any;
  
lyrics:any;
lyricsData: any[] = [];
currentLyric: any;
  currentLyricIndex = -1;
 displayedLyricsOffset = 2; // Number of lines to display before and after the current lyric
 startDisplayIndex = this.currentLyricIndex - this.displayedLyricsOffset;
 endDisplayIndex = this.currentLyricIndex + this.displayedLyricsOffset;
 
constructor(private userService: UserService, private router: ActivatedRoute, private http: HttpClient){

}
  
wordClicked(wordClicked:string, time:number):void{
  this.gotToTime(time)
  wordClicked = wordClicked.replace(/[^\w\s]/g, '')
  this.translateWord(wordClicked);
  
  this.clickedWord = wordClicked;
}
onSwitchChange(event: any) {
  
  this.switchState = event;
  
}
ngOnInit(): void {
   
    this.userService.getSong
    this.router.params.subscribe(params => {
      const songId = params['id']
      this.getSong(songId)
      this.getTranslation(songId)
        









        
        })


      
        




        
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
        
        // Ensure that the indices are within the bounds of my lyricsData
        this.startDisplayIndex = Math.max(this.startDisplayIndex, 0);
        this.endDisplayIndex = Math.min(this.endDisplayIndex, this.lyricsData.length - 1);


        }
      
        isCurrentLyric(lyric: any, lines: any) : boolean {

          return lines.indexOf(lyric) === this.currentLyricIndex;
        }
       





        getTranslation(songId: string): any{
          this.userService.getSongTranslation(songId).subscribe(translation =>{
            console.log(translation)
            this.lyrics = JSON.parse(( translation as any).data.lines)
            for(let line of this.lyrics){
              line['split'] = line.words.split(" ")}
          })

        }
        getSong(songId: string): any{
          this.userService.getSong(songId).subscribe(song => {
            this.defaultSong = (song as any).data;
            
            
            this.lyricsData = JSON.parse(( song as any).data.lyrics)
            for(let line of this.lyricsData){
              line['split'] = line.words.split(" ")}
          
    
            
    
    
    
    
    
    
    
    
    
            
            })

        }
        gotToTime(time: number): void{
          const audioElement = document.querySelector('audio')
          audioElement?.pause;
          (audioElement as HTMLAudioElement).currentTime = ((time - 1000 )/ 1000 ) ;
          (audioElement as HTMLAudioElement).pause;

        }

        translateWord(word: string): void{
          const url = `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=en&api-version=3.0&from=${this.defaultSong.originalLan}&profanityAction=NoAction&textType=plain`;
const 
	headers = new HttpHeaders({
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'e1c24ca7f0mshe2dc52971ce201ap1ccd39jsnde62d2a67291',
		'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
	})

	const body = [{Text: word}]
   
          this.http.post(url, body, {headers: headers}).subscribe(data => {
            this.translatedWord = ( data as any)[0].translations[0].text





          })

        }
      }
       
       

   
        
      
      

    
   
    
    
  


