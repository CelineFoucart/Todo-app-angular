import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent implements OnInit {
  title!:string;

  constructor() { }

  ngOnInit(): void {
    this.title = "Bienvenue sur todo-app";
  }

}
