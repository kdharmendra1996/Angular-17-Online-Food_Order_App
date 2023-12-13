import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { TagsPageComponent } from './components/tags-page/tags-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './components/title/title.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagsPageComponent,
    PageNotFoundComponent,
    CartPageComponent,
    TitleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:4000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    }) 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
