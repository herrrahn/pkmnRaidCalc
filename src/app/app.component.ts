import {Component, OnInit} from '@angular/core';
import {RaidsService} from './services/raids.service';
import {ListPokemon, Pokemon} from './list.pokemon';
import {ClrLoadingState} from '@clr/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  poks: ListPokemon = new ListPokemon();
  dataStr: string;
  data: any;
  data20: any;
  data25: any;
  data30: any;
  data35: any;
  data40: any;
  name = 'Mewtwo';
  level = 5;
  loading: ClrLoadingState = ClrLoadingState.DEFAULT

  constructor(private raidService: RaidsService, private pokemonList: ListPokemon) {}

  async ngOnInit() {
    // await this.callData();

  }

  async callData() {
    this.loading = ClrLoadingState.LOADING;
    this.poks.pokemons = [];

    this.data20 = await this.raidService.callPokerBattlerWsA(20, this.name, this.level);
    this.data20 = this.data20['attackers']['0']['randomMove']['defenders'];
    this.data = this.data20;
    this.prepareList();

    this.data25 = await this.raidService.callPokerBattlerWsA(25, this.name, this.level);
    this.data25 = this.data25['attackers']['0']['randomMove']['defenders'];
    this.data = this.data25;
    this.prepareList();

    this.data30 = await this.raidService.callPokerBattlerWsA(30, this.name, this.level);
    this.data30 = this.data30['attackers']['0']['randomMove']['defenders'];
    this.data = this.data30;
    this.prepareList();

    this.data35 = await this.raidService.callPokerBattlerWsA(35, this.name, this.level);
    this.data35 = this.data35['attackers']['0']['randomMove']['defenders'];
    this.data = this.data35;
    this.prepareList();

    this.data40 = await this.raidService.callPokerBattlerWsA(40, this.name, this.level);
    this.data40 = this.data40['attackers']['0']['randomMove']['defenders'];
    this.data = this.data40;
    this.prepareList();

    this.sortList();
    this.loading = ClrLoadingState.SUCCESS;
  }

  prepareList() {
    for (let i = 23; i >= 0 ; i--) {
     this.poks.pokemons.push(this.buildPokemon(Array.of(this.data[i])));
    }
  }

  private buildPokemon(pokemonData: any[]): Pokemon {

    const pokemon = new Pokemon();
    pokemon.name = pokemonData['0']['pokemonId'];
    pokemon.level = pokemonData['0']['stats']['level'];

    let moveset = pokemonData['0']['byMove']['0'];

    let indexBestMoveSet = 0;
    while (moveset !== null) {
      let auxi = pokemonData['0']['byMove'][indexBestMoveSet + 1];
      if (auxi === undefined) {
        break;
      }
      indexBestMoveSet++;
      moveset = auxi;
    }
    pokemon.timeToWin = moveset['result']['effectiveCombatTime'];
    pokemon.deaths  = moveset['result']['effectiveDeaths'];
    pokemon.bestMoveFast = moveset['move1'];
    pokemon.bestMoveFast = pokemon.bestMoveFast.replace('_FAST', '').replace('_', ' ');
    pokemon.bestMoveCharge = moveset['move2'];
    pokemon.bestMoveCharge = pokemon.bestMoveCharge.replace('_CHARGE', '').replace('_', ' ');

    return pokemon;
  }

  sortList() {
    this.poks.pokemons.sort(this.compare);
  }

  private compare(a, b) {
    if (a.timeToWin < b.timeToWin) {
      return -1;
    }
    if (a.timeToWin > b.timeToWin) {
      return 1;
    }
    // a muss gleich b sein
    return 0;
  }

  test() {
    console.log('sss');
  }
}
