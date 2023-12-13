import { Injectable } from '@angular/core';
import { Food } from '../shared/food';
import { Food_Data, Tag_Data } from '../../data';
import { Tag } from '../shared/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_By_TAGS_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL)
  }

  getFoodBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm)
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL)
  }

  getAllFoodByTag(tag:string):Observable<Food[]>{
    return tag === "All"? this.getAll():this.http.get<Food[]>(FOODS_By_TAGS_URL +tag)
  }

  getFoodById(id:number):Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL + id)
  }
}
