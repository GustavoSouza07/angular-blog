import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent{
  @Input()
  date__bigCardArticle:string=""
  @Input()
  title__bigCardArticle:string=""
  @Input()
  img__bigCardArticle:string=""
  @Input()
  description__bigCardArticle:string=""
  @Input()
  linkTitle__bigCardArticle:string=""
  constructor() { }



}
