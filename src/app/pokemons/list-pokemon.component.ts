import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

import { Router } from '@angular/router';
  
@Component({
  selector: 'list-pokemon',
  templateUrl: `./app/pokemons/list-pokemon.component.html`
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;
  private title: string = "Liste des Pokémons";

  constructor(private router: Router, private pokemonsService: PokemonsService){ }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon){
      console.log(pokemon)
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}