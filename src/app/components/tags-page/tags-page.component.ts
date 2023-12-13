import { Component,Input } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Tag } from '../../shared/tag';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrl: './tags-page.component.css'
})
export class TagsPageComponent {

  
  @Input()
  FoodPageTag?:string[];

  @Input()
  justifyContent?:string="center"

  tags?:Tag[]=[];
  constructor(private fs:FoodService){
    fs.getAllTags().subscribe(serverTag=>
      this.tags= serverTag
      )
  }

  ngOnInit(): void {
    //if(!this.FoodPageTag)
    //this.tags = this.fs.getAllTags();

 }


}
