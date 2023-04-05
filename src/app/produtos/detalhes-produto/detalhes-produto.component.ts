import {Component, OnInit} from '@angular/core';
import {ProdutosService} from "../../produtos.service";
import {IProduto, IProdutoCarrinho} from "../../produtos";
import {ActivatedRoute} from "@angular/router";
import {NotificacaoService} from "../../notificacao.service";
import {CarrinhoService} from "../../carrinho.service";

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  // Criando propriedades
  produto: IProduto | undefined;
  quantidade = 1;

  // Construtor
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoServico: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) {}


    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      // Pegando o id do produto
      const produtoId = Number(routeParams.get("id")); // Converter a string no parâmentro em número
      this.produto = this.produtosService.getOne(produtoId);
    }

    adicionarAoCarrinho() {
      this.notificacaoServico.notificar("O produto foi adicionado ao carrinho");
      const produto: IProdutoCarrinho = {
        ...this.produto!,
        quantidade: this.quantidade
      }
      this.carrinhoService.adicionarAoCarrinho(produto);
    }
}
