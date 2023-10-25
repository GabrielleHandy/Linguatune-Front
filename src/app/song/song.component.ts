import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit{
  switchState: boolean = false; 
  clickedWord: string = "";
  defaultSong :any = ["Hello it's me and the song", "It's my song"];
lyrics:any =new Array;

wordClicked(wordClicked:string){
  console.log(wordClicked);
  this.clickedWord = wordClicked;
}
onSwitchChange(event: any) {
  
  this.switchState = event;
  console.log('Switch state:', this.switchState);
}
ngOnInit(): void {
 
    for(let line of this.defaultSong)
    
    this.lyrics.push({line: line, words:line.split(" ")})
    
    
  }

}
