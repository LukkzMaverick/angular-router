import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  post1 = 1
  post2 = 2

  constructor() { }

  ngOnInit(): void {
  }

}
