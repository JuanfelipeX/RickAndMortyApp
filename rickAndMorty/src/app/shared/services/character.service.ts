import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getDetails(id: number) {
    return this.http
      .get<Character>(`${environment.baseUrlAPI}/${id}`)
      .pipe(catchError((err) => this.handleHttpError(err)));
  }

  searchCharacters(query = '', page = 200): Observable<Character[]> {
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }

  handleHttpError(err: any): never {
    throw new Error('Method not implemented.');
  }
}
