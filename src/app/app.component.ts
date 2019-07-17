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
  loading: ClrLoadingState = ClrLoadingState.DEFAULT;
  weather: string = 'NO_WEATHER';
  show_pokemon_list: boolean  = false;
  gen_1_full = ['Venusaur',
    'Charizard',
    'Blastoise',
    'Butterfree',
    'Beedrill',
    'Pidgeot',
    'Raticate',
    'Fearow',
    'Arbok',
    'Raichu',
    'Sandslash',
    'Nidoqueen',
    'Nidoking',
    'Clefable',
    'Ninetales',
    'Wigglytuff',
    'Vileplume',
    'Parasect',
    'Venomoth',
    'Dugtrio',
    'Persian',
    'Golduck',
    'Primeape',
    'Arcanine',
    'Poliwrath',
    'Alakazam',
    'Machamp',
    'Victreebel',
    'Tentacruel',
    'Golem',
    'Rapidash',
    'Slowbro',
    'Farfetchd',
    'Dodrio',
    'Dewgong',
    'Muk',
    'Cloyster',
    'Gengar',
    'Onix',
    'Hypno',
    'Kingler',
    'Electrode',
    'Exeggutor',
    'Marowak',
    'Hitmonlee',
    'Hitmonchan',
    'Lickitung',
    'Weezing',
    'Rhydon',
    'Chansey',
    'Tangela',
    'Kangaskhan',
    'Seaking',
    'Starmie',
    'MrMime',
    'Scyther',
    'Jynx',
    'Electabuzz',
    'Magmar',
    'Pinsir',
    'Tauros',
    'Gyarados',
    'Lapras',
    'Vaporeon',
    'Jolteon',
    'Flareon',
    'Porygon',
    'Omastar',
    'Kabutops',
    'Aerodactyl',
    'Snorlax',
    'Articuno',
    'Zapdos',
    'Moltres',
    'Dragonite',
    'Mewtwo'];

  gen_2_full = ['Meganium',
    'Typhlosion',
    'Feraligatr',
    'Furret',
    'Noctowl',
    'Ledian',
    'Ariados',
    'Crobat',
    'Lanturn',
    'Xatu',
    'Ampharos',
    'Bellossom',
    'Azumarill',
    'Sudowoodo',
    'Politoed',
    'Jumpluff',
    'Sunflora',
    'Quagsire',
    'Espeon',
    'Umbreon',
    'Slowking',
    'Unown',
    'Wobbuffet',
    'Girafarig',
    'Forretress',
    'Dunsparce',
    'Steelix',
    'Granbull',
    'Qwilfish',
    'Scizor',
    'Shuckle',
    'Heracross',
    'Ursaring',
    'Magcargo',
    'Piloswine',
    'Corsola',
    'Octillery',
    'Delibird',
    'Mantine',
    'Skarmory',
    'Houndoom',
    'Kingdra',
    'Donphan',
    'Porygon2',
    'Stantler',
    'Smeargle',
    'Hitmontop',
    'Miltank',
    'Blissey',
    'Raikou',
    'Entei',
    'Suicune',
    'Tyranitar',
    'Lugia',
    'Ho-oh',
    'Banette',
    'Tropius',
    'Chimecho',
    'Absol',
    'Glalie',
    'Walrein',
    'Huntail',
    'Gorebyss',
    'Relicanth',
    'Luvdisc',
    'Salamence',
    'Metagross',
    'Regirock',
    'Regice',
    'Registeel',
    'Latias',
    'Latios',
    'Kyogre',
    'Groudon',
    'Rayquaza',
    'Deoxys'
  ];

  gen_3_full = ['Sceptile',
    'Blaziken',
    'Swampert',
    'Mightyena',
    'Linoone',
    'Beautifly',
    'Dustox',
    'Ludicolo',
    'Shiftry',
    'Swellow',
    'Pelipper',
    'Gardevoir',
    'Masquerain',
    'Breloom',
    'Slaking',
    'Ninjask',
    'Shedinja',
    'Exploud',
    'Hariyama',
    'Delcatty',
    'Sableye',
    'Mawile',
    'Aggron',
    'Medicham',
    'Manectric',
    'Plusle',
    'Minun',
    'Volbeat',
    'Illumise',
    'Roselia',
    'Swalot',
    'Sharpedo',
    'Wailord',
    'Camerupt',
    'Torkoal',
    'Grumpig',
    'Spinda',
    'Flygon',
    'Cacturne',
    'Altaria',
    'Zangoose',
    'Seviper',
    'Lunatone',
    'Solrock',
    'Whiscash',
    'Crawdaunt',
    'Claydol',
    'Armaldo',
    'Milotic',
    'Giratina',
    'Cresselia',
    'Arceus'
  ];

  gen_4_full = ['Torterra',
    'Infernape',
    'Empoleon',
    'Staraptor',
    'Bibarel',
    'Kricketune',
    'Luxray',
    'Roserade',
    'Rampardos',
    'Bastiodon',
    'Mothim',
    'Vespiquen',
    'Pachirisu',
    'Floatzel',
    'Cherrim',
    'Gastrodon',
    'Ambipom',
    'Drifblim',
    'Lopunny',
    'Mismagius',
    'Honchkrow',
    'Purugly',
    'Skuntank',
    'Bronzong',
    'Chatot',
    'Spiritomb',
    'Garchomp',
    'Lucario',
    'Hippowdon',
    'Drapion',
    'Toxicroak',
    'Carnivine',
    'Lumineon',
    'Abomasnow',
    'Weavile',
    'Magnezone',
    'Lickilicky',
    'Rhyperior',
    'Tangrowth',
    'Electivire',
    'Magmortar',
    'Togekiss',
    'Yanmega',
    'Leafeon',
    'Glaceon',
    'Gliscor',
    'Mamoswine',
    'Porygon-Z',
    'Gallade',
    'Probopass',
    'Dusknoir',
    'Froslass',
    'Uxie',
    'Mesprit',
    'Azelf',
    'Dialga',
    'Palkia',
    'Heatran',
    'Regigigas'];


  gen_1 = ['Venusaur',
    'Charizard',
    'Raichu',
    'Nidoqueen',
    'Nidoking',
    'Arcanine',
    'Poliwrath',
    'Alakazam',
    'Machamp',
    'Gengar',
    'Exeggutor',
    'Rhydon',
    'Chansey',
    'Tangela',
    'Scyther',
    'Gyarados',
    'Lapras',
    'Vaporeon',
    'Jolteon',
    'Flareon',
    'Articuno',
    'Zapdos',
    'Moltres',
    'Dragonite',
    'Mewtwo'];

  gen_2 = [
    'Politoed',
    'Espeon',
    'Granbull',
    'Scizor',
    'Houndoom',
    'Kingdra',
    'Donphan',
    'Blissey',
    'Raikou',
    'Entei',
    'Suicune',
    'Tyranitar',
    'Lugia',
    'Ho-oh'
  ];

  gen_3 = [
    'Shiftry',
    'Gardevoir',
    'Breloom',
    'Hariyama',
    'Aggron',
    'Sharpedo',
    'Absol',
    'Walrein',
    'Salamence',
    'Metagross',
    'Regirock',
    'Regice',
    'Registeel',
    'Latias',
    'Latios',
    'Kyogre',
    'Groudon',
    'Rayquaza',
    'Deoxys'
  ];

  gen_4 = [
    'Luxray',
    'Roserade',
    'Rampardos',
    'Floatzel',
    'Bronzong',
    'Garchomp',
    'Lucario',
    'Hippowdon',
    'Weavile',
    'Magnezone',
    'Rhyperior',
    'Tangrowth',
    'Electivire',
    'Magmortar',
    'Togekiss',
    'Yanmega',
    'Leafeon',
    'Glaceon',
    'Gliscor',
    'Mamoswine',
    'Porygon-Z',
    'Gallade',
    'Uxie',
    'Mesprit',
    'Azelf',
    'Dialga',
    'Palkia',
    'Heatran',
    'Regigigas',
    'Giratina',
    'Cresselia',
    'Arceus'];

  pokemons = [this.gen_1, this.gen_2, this.gen_3, this.gen_4];

  constructor(private raidService: RaidsService, private pokemonList: ListPokemon) {}

  async ngOnInit() {
    // await this.callData();

  }

  async callData() {
    this.loading = ClrLoadingState.LOADING;
    this.poks.pokemons = [];

    this.data20 = await this.raidService.callPokerBattlerWsA(20, this.name, this.level, this.weather);
    this.data20 = this.data20['attackers']['0']['randomMove']['defenders'];
    this.data = this.data20;
    this.prepareList();

    this.data25 = await this.raidService.callPokerBattlerWsA(25, this.name, this.level, this.weather);
    this.data25 = this.data25['attackers']['0']['randomMove']['defenders'];
    this.data = this.data25;
    this.prepareList();

    this.data30 = await this.raidService.callPokerBattlerWsA(30, this.name, this.level, this.weather);
    this.data30 = this.data30['attackers']['0']['randomMove']['defenders'];
    this.data = this.data30;
    this.prepareList();

    this.data35 = await this.raidService.callPokerBattlerWsA(35, this.name, this.level, this.weather);
    this.data35 = this.data35['attackers']['0']['randomMove']['defenders'];
    this.data = this.data35;
    this.prepareList();

    this.data40 = await this.raidService.callPokerBattlerWsA(40, this.name, this.level, this.weather);
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
    return 0;
  }


  getMinPlayer(time: number) {
      if (this.level == 5) {
        if (time < 280) return "SOLO"; else
        if (time < 560) return "DUO"; else
        if (time < 840) return "TRIO"; else
        return "4+";
      } else {
        if (time < 170) return "SOLO"; else
        if (time < 340) return "DUO"; else
        if (time < 510) return "TRIO"; else
          return "4+";
      }
  }

  selectPokemon(pokemon: string) {
    this.name = pokemon;
    this.show_pokemon_list = false;
  }
}
