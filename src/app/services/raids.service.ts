import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {any} from 'codelyzer/util/function';
import {Observable} from 'rxjs';

@Injectable()
export class RaidsService {
   constructor(private http: HttpClient) {}

  // callPokerBattlerWs(): Promise<any> {
  //   const url = 'https://fight.pokebattler.com/raids/defenders/TOGETIC/levels/RAID_LEVEL_4/attackers/levels/35/strategies/CINEMATIC_ATTACK_WHEN_POSSIBLE/DEFENSE_RANDOM_MC?sort=TIME&weatherCondition=NO_WEATHER&dodgeStrategy=DODGE_REACTION_TIME&aggregation=AVERAGE&randomAssistants=-1&friendLevel=FRIENDSHIP_LEVEL_4';
  //   return this.http.get(url);
  // // }
  callPokerBattlerWs(): Observable<any> {
    const url = 'https://fight.pokebattler.com/raids/defenders/TOGETIC/levels/RAID_LEVEL_4/attackers/levels/35/strategies/CINEMATIC_ATTACK_WHEN_POSSIBLE/DEFENSE_RANDOM_MC?sort=TIME&weatherCondition=NO_WEATHER&dodgeStrategy=DODGE_REACTION_TIME&aggregation=AVERAGE&randomAssistants=-1&friendLevel=FRIENDSHIP_LEVEL_4';
    return this.http.get<any>(url);
  }
  async callPokerBattlerWsA(pokemon_level: number, target: string, raid_level: number, weather_condition: string): Promise<any> {
     console.log(weather_condition);
    const url = `https://fight.pokebattler.com/raids/defenders/${target.toUpperCase()}/levels/RAID_LEVEL_${raid_level}/attackers/levels/${pokemon_level}/strategies/CINEMATIC_ATTACK_WHEN_POSSIBLE/DEFENSE_RANDOM_MC?sort=TIME&weatherCondition=${weather_condition}&dodgeStrategy=DODGE_REACTION_TIME&aggregation=AVERAGE&randomAssistants=-1&friendLevel=FRIENDSHIP_LEVEL_4`;
    return await this.http.get<any>(url).toPromise();
  }
}
