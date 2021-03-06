import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-resultado-final',
  templateUrl: './resultado-final.component.html',
  styleUrls: ['./resultado-final.component.css']
})
export class ResultadoFinalComponent implements OnInit {

  public campeao: string;
  public vice: string;

  public constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.campeao = params["campeao"];
      this.vice = params["vice"];
    });
  }

  ngOnInit() {
  }

  gerarNovoCampeonato(): void{
    this.router.navigate(["selecao-filmes"]);
  }

}
