import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Router} from "@angular/router";
import {IPokemons} from "../../interfaces/pokemons";
import {IPokemon} from "../../interfaces/pokemon";
import {Observable, range} from "rxjs/index";

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {
  pokemonId: string;
  private pokemons: Array<IPokemon>;
  currentPageIndex: number;
  private error: boolean;

  constructor(private router: Router, private pokemonService:PokemonService) {
    this.pokemonId = "";
    this.currentPageIndex = 1;
    this.error = false;
  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemonIndex(url) {
    if(url) {
      url=url.split('/');
      return url[url.length-2];
    }
  }

  getPokemons() {
    console.log(this.currentPageIndex);
    this.pokemonService.getPokemons(this.currentPageIndex).subscribe(value => {
        this.pokemons = value.results;
        this.pokemons.map(pokemon => {
          pokemon.id = this.getPokemonIndex(pokemon.url);
          pokemon.appUrl= `pokemons/${pokemon.id}`;
        });
      },
      error2 => {
        this.error = true;
        this.pokemonId = "";
      })
  }
  searchPokemon(pokemonId: string) {
    let id = parseInt(pokemonId);
    if(id) {
      this.router.navigate([`/pokemons/${id}`]);
    } else {
      this.error = true;
    }
  }

  changePage(i) {
    this.currentPageIndex = i;
    this.getPokemons();
    console.log(this.pokemons);
    console.log('Page, changed!');
  }
}
