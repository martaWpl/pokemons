import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IPokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  private pokemonId: Params;
  private pokemon: IPokemon;
  private loading: boolean;
  private error: boolean;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) {
    this.error = false;
    //reload page after router's parameter change
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    //get pokemon Id using url
    this.route.params.subscribe(pokemon => {
      if (pokemon.id) {
        this.pokemonId = pokemon.id;
      } else {
        this.error = true;
        console.warn("Can't route pokemon's id!");
      }
    });
    this.loading = true;
  }

  /*arrows navigation */
  changeCard(id: number) {
    if (id) {
      this.router.navigate([`/pokemons/${id}`]);
    } else {
      console.warn('Error: incorrect id!');
    }
  }

  ngOnInit() {
    /*get pokemon's data based on pokemonId*/
    this.pokemonService.getPokemon(this.pokemonId).subscribe(
      (pokemon) => {
        this.pokemon = pokemon;
        this.loading = false;
      }, (error2 => {
        this.error = true;
        console.warn(error2);
      }))
  }
}
