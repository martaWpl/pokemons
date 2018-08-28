import {Component, OnInit} from '@angular/core';
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
  pokemons: Array<IPokemon>;
  currentPageIndex: number;
  error: boolean;

  constructor(private router: Router, private pokemonService: PokemonService) {
    this.pokemonId = "";
    this.currentPageIndex = 1;
    this.error = false;
  }

  /* get a list of pokemons for current page in pagination*/
  getPokemons() {
    this.pokemonService.getPokemons(this.currentPageIndex).subscribe(
      value => {
        this.pokemons = value.results;
        this.pokemons.map(pokemon => {
          pokemon.id = PokemonSearchComponent.getPokemonIndex(pokemon.url);
          pokemon.appUrl = `pokemons/${pokemon.id}`;
        });
      },
      error2 => {
        console.warn(error2);
        this.error = true;
        this.pokemonId = "";
      })
  }

  /* get an index based on url*/
  static getPokemonIndex(url) {
    if (url) {
      url = url.split('/');
      return url[url.length - 2];
    }
  }

  /*get a pokemon based on id*/
  searchPokemon(pokemonId: string) {
    let id = parseInt(pokemonId);
    if (id) {
      this.router.navigate([`/pokemons/${id}`]);
    } else {
      this.error = true;
    }
  }
  /* pagination */
  changePage(i) {
    this.currentPageIndex = i;
    this.getPokemons();
  }

  ngOnInit() {
    this.getPokemons();
  }
}
