import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { RouterModule } from '@angular/router';


 const myComponents = [
   CharacterDetailsComponent,
   CharacterListComponent,
   //CharacterComponent,
 ];


@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule], //InfiniteScrollModule],
  exports: [...myComponents],
})
export class CharactersModule {}
