import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  searchItems:string=''
  constructor(private activeRoute:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        this.searchItems = params['searchTerm'];
      }
    })
  }

  searchBtn(terms:string):void{
    if(terms){
      this.router.navigateByUrl('/search/'+terms)
    }
  }


}
