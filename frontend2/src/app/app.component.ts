import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'DotNet Angular Shopify App';
  ngOnInit(): void {

  }
  constructor() {

  }

  // showToad() {
  //   alert('');
  //   // @ts-ignore
  //   var t = Toast.create(this.app, {
  //     isError: true,
  //     message: 'Something went wrong',
  //     action: {
  //       content: 'ok'
  //     }
  //
  //   });
  //   t.dispatch(Action.SHOW);
  // }
}


