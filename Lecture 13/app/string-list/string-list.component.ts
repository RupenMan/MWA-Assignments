import { Component, OnInit, Input, Output, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.css']
})
export class StringListComponent implements OnInit {
  newString:string;
  arrayString: string[];
  optionSelected: string="false";
  myOption:boolean=false;

  

  constructor() { 
    this.newString="";
  }
  
  ngOnInit() {
    this.arrayString=[];
  }  
  
  onInsert(){
    this.myOption = (this.optionSelected==="true")?true:false;
    if(this.newString!="" || this.newString!=null){
      this.arrayString.push(this.newString);
    }
    this.newString="";
  }

  onClick(){
    // this.myColor
  }
}
