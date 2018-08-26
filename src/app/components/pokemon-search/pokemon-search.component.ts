import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {
  pokemonId: string;

  constructor(private pokemonService: PokemonService) {
    this.pokemonId = "";
  }

  ngOnInit() {
  }

  searchPokemon(pokemonId: string) {
    this.pokemonService.getPokemon();
  }
}
