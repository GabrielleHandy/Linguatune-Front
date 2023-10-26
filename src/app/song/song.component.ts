import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  studyPageId!: string;
  switchState: boolean = false; 
  chosenVal: string = "";

  chosenName: string = "";
  newStack: boolean = false;
  //Variables for word interactiveness
  translatedWord: string = "";
  clickedWord: string = "";


  defaultSong :any;
  stacks: any;

  //Lyrics of the song both translated and original
  lyrics:any;
  lyricsData: any[] = [];


  // Variables used for highlighting the lyrics of the song
  currentLyric: any;
  currentLyricIndex = -1;
  displayedLyricsOffset = 2; // Number of lines to display before and after the current lyric
  startDisplayIndex = this.currentLyricIndex - this.displayedLyricsOffset;
  endDisplayIndex = this.currentLyricIndex + this.displayedLyricsOffset;
  
  constructor(private userService: UserService, private router: ActivatedRoute, private http: HttpClient, private cardService: CardsService ){

  }

  wordClicked(wordClicked:string, time:number):void{
    this.gotToTime(time)
    wordClicked = wordClicked.replace(/(^[^a-zA-Z0-9']+)|([^a-zA-Z0-9']+$)/g, '')
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
    

        this.getStudyPageStacks();









      
      })

  }
  gotToTime(time: number): void{
    const audioElement = document.querySelector('audio')
    audioElement?.pause;
    (audioElement as HTMLAudioElement).currentTime = ((time - 1000 )/ 1000 ) ;
    (audioElement as HTMLAudioElement).pause;

  }

  translateWord(word: string): void{
    // const url = `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=en&api-version=3.0&from=${this.defaultSong.originalLan}&profanityAction=NoAction&textType=plain`;
    // const 
    // headers = new HttpHeaders({
    // 'content-type': 'application/json',
    // 'X-RapidAPI-Key': 'e1c24ca7f0mshe2dc52971ce201ap1ccd39jsnde62d2a67291',
    // 'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    // })

    // const body = [{Text: word}]

    // this.http.post(url, body, {headers: headers}).subscribe(data => {
    // this.translatedWord = ( data as any)[0].translations[0].text
    // })
    this.translatedWord = "translated";

  }
  getStudyPageStacks(){
    this.studyPageId =((sessionStorage.getItem(this.defaultSong.originalLan)) as string);
    this.cardService.getStacks(this.studyPageId).subscribe(data => {
      this.stacks = (data as any).data
      

    })
  }

  createCard(id:string){
    const card = {translatedText: this.translatedWord,
    originalText: this.clickedWord}
    let stackId:string = '';
    if(id != ""){

      stackId = id;
    }else{
      stackId = (document.querySelector("select") as HTMLSelectElement).value;
    }
    
    
    if(stackId != "0") {
      this.cardService.makeCard(card, (stackId as string), this.defaultSong.id).subscribe(card => {
        
        alert("Card added")
      this.clickedWord = "";
      })
      

    }else{
      ((document.querySelector("select")as HTMLElement).style.border ) = "1px solid red"
      alert("please choose a stack to add card to")

    }
    
  }
  makeNewStack(){
    const stack:any = {}
    if(this.chosenName){
     stack['title'] = this.chosenName;

    }
    this.cardService.makeAStack(this.studyPageId, stack).subscribe(data =>{

      let id = (data as any).data.id
      this.createCard(id)


    })

  }

  showNewStack(){
    this.newStack = (this.chosenVal === "makeAStack");
  }


}






