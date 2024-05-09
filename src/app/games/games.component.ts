import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  template: `
  <h3> Los juegos favoritos de {{ username }} son: </h3>
      <ul>
        @for (game of games; track game.id) {
          <li (click)="fav(game.name)">{{ game.name }} - {{ game.genre }} - {{ game.rating }}</li>
        }
      </ul>
  `,
  styles: ``
})
export class GamesComponent {

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [

    { id: 1, name: 'Call of Duty', genre: 'Shooter', rating: 5 },
    { id: 2, name: 'FIFA 21', genre: 'Sports', rating: 4 },
    { id: 3, name: 'Super Mario', genre: 'Adventure', rating: 5 },
    { id: 4, name: 'PUBG', genre: 'Shooter', rating: 4 },
    { id: 5, name: 'GTA V', genre: 'Action', rating: 5 },
    { id: 6, name: 'Among Us', genre: 'Social Deduction', rating: 4 },
    { id: 7, name: 'Valorant', genre: 'Shooter', rating: 5 },
    { id: 8, name: 'Fortnite', genre: 'Shooter', rating: 4 },
    { id: 9, name: 'Minecraft', genre: 'Sandbox', rating: 5 },
    { id: 10, name: 'Rocket League', genre: 'Sports', rating: 4 },
    { id: 11, name: 'Apex Legends', genre: 'Shooter', rating: 5 },
    { id: 12, name: 'League of Legends', genre: 'MOBA', rating: 4 },
    { id: 13, name: 'Dota 2', genre: 'MOBA', rating: 5 },
    { id: 14, name: 'World of Warcraft', genre: 'MMORPG', rating: 4 },
    { id: 15, name: 'Overwatch', genre: 'Shooter', rating: 5 },
    { id: 16, name: 'Rainbow Six Siege', genre: 'Shooter', rating: 4 },
    { id: 17, name: 'Counter Strike: Global Offensive', genre: 'Shooter', rating: 5 },
    { id: 18, name: 'The Witcher 3', genre: 'RPG', rating: 4 },
    { id: 19, name: 'Red Dead Redemption 2', genre: 'Action', rating: 5 },
    { id: 20, name: 'Assassin\'s Creed Valhalla', genre: 'Action', rating: 4 },
    { id: 21, name: 'Cyberpunk 2077', genre: 'RPG', rating: 5 },
    { id: 22, name: 'The Elder Scrolls V: Skyrim', genre: 'RPG', rating: 4 },
    { id: 23, name: 'Dark Souls III', genre: 'RPG', rating: 5 },
    { id: 24, name: 'Bloodborne', genre: 'RPG', rating: 4 },
    { id: 25, name: 'Sekiro: Shadows Die Twice', genre: 'Action', rating: 5 },
    { id: 26, name: 'Ghost of Tsushima', genre: 'Action', rating: 4 },
    { id: 27, name: 'Death Stranding', genre: 'Action', rating: 5 },
    { id: 28, name: 'Horizon Zero Dawn', genre: 'Action', rating: 4 },
    { id: 29, name: 'God of War', genre: 'Action', rating: 5 }
  ];
}
