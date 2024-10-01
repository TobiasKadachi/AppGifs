import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SearchBoxComponent,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
