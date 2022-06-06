import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';

import { filter, take } from 'rxjs/operators';

import { Character } from '@shared/interfaces/character.interface';
import { CharacterService } from '@shared/services/character.service';

type RequestInfo = {
  next: string | null;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  info: RequestInfo = {
    next: null,
  };

  showGoUpButton = false;

  private pageNum = 1;

  private query!: string ;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void {
    this.characterSvc
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe(
        (res: any) => {
          if (res?.results?.length) {
            const { info, results } = res;
            this.characters = [...this.characters, ...results];
            this.info = info;
          } else {
            this.characters = [];
          }
        },
        //(error: TrackHttpError) => console.log(error.friendlyMessage)
      );
  }
}
