import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { getCookie, getCookies, setCookie } from 'typescript-cookie';
import { JsonPipe } from "@angular/common";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'DotNet Angular Shopify App';
  protected cookieValue: any;
  ngOnInit(): void {

  }
  constructor() {
    this.cookieValue = getCookies();
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


