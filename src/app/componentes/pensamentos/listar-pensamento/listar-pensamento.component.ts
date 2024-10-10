import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componete filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Bombardeios israelenses em duas áreas diferentes no centro de Beirute, capital do Líbano, nesta quinta-feira (10) mataram 18 pessoas e deixaram ao menos 92 feridos, segundo o Ministério da Saúde libanês. O ataque teve como alvo pelo menos um membro sênior do Hezbollah, de acordo com fontes de segurança ouvidas pela agência Reuters.',
      autoria: 'globo.com',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
