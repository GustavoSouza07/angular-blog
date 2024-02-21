import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent{
  @Input()
  date__smallCardArticle:string=""
  @Input()
  title__smallCardArticle:string=""
  @Input()
  img__smallCardArticle:string=""
  constructor() { }

}
