import {Component, OnInit} from '@angular/core';
import {CarrinhoService} from "../carrinho.service";
import {IProdutoCarrinho} from "../produtos";
import {Router} from "@angular/router";
import {NotificacaoService} from "../notificacao.service";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private notificacaoServico: NotificacaoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removeProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    // Depois de remover os itens do localstorage, calcula o total outra vez
    this.calcularTotal();
  }

  comprar() {
    this.notificacaoServico.notificar("Parabéns! Compra realizada com sucesso.");
    // alert(("Parabéns, sua comprar foi finalizada com sucesso!"));
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);

  }
}
