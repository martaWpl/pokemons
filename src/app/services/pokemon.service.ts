import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemon() {
    console.log('Pokemon service works!');
  }
}
