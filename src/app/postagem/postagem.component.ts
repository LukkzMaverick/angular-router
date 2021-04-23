import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss']
})
export class PostagemComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
  }

}
