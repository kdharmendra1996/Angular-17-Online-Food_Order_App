import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

  
  @Input() visibleMessage:boolean=false;
  @Input() notFoundMessage:string  ='Page Not Found Please try next time..'
  @Input() resetLinkText:string  = 'Reset';
  @Input() resetLinkRoute:string = '/'

  constructor(){}

  ngOnInit(): void {
    
  }


}
