import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {IPokemons} from "../interfaces/pokemons";
import {IPokemon} from "../interfaces/pokemon";

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  limit: number = 10;

  constructor(private http: HttpClient) { }

  getPokemons(pageIndex):Observable<IPokemons>{
    let offset = (pageIndex-1)*this.limit;
    let endPoint = `${url}?limit=${this.limit}&offset=${offset}`;
    return this.http.get<IPokemons>(endPoint);
  }
  getPokemon(id):Observable<IPokemon>{
    let endPoint = url + id;
    return this.http.get<IPokemon>(endPoint);
  }
}
