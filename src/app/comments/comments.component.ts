import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3> Comentarios </h3>
    <img src="https://duet-cdn.vox-cdn.com/thumbor/0x0:900x500/2400x1600/filters:focal(450x250:451x251):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/6438793/this-is-fine.jpg"/>
  `,
  styles: `
  img{
    width: 50%;
    height: auto;
  }
  `
})
export class CommentsComponent {

}
