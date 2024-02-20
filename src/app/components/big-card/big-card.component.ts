import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent{
  @Input() text__titleH2:string="O mercado de Angular apresenta crescimento";
  @Input() text__descriptionP:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, iusto assumenda. Totam doloremque nihil nostrum, illo labore natus beatae non laborum suscipit cumque libero, exercitationem tenetur odit pariatur quod autem?"
  constructor() { }



}
