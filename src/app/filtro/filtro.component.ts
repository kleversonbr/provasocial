import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Masculino, Feminino } from '../nomes';
import { TextoComentarios, TextoRespostas } from '../textos';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})

export class FiltroComponent implements OnInit {

  ultimoId = 0;
  nomeMasc = Masculino;
  nomeFem = Feminino;
  textoComentario = TextoComentarios;
  textoResposta = TextoRespostas;
  adicionado = false;
  temComentario = false;
  likes: number[] = [];

  @Input() qtdMasc = 0;
  @Input() qtdFem = 0;
  @Input() qtdResp = 0;
  @Input() qtdCurt = 0;
  @Input() produto = '';
  @Input() pComentarios = 0;
  @Input() pCurtidas = 0;
  @Output() pessoaAdicionada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  adicionar() {
    let pessoa: Pessoa = {
        foto: '',
        nome: '',
        descricao: '',
        temResposta: false,
        curtidas: 0,
        tempo: 0,
        id: 0
      };

    if (this.produto === ''){
      this.produto = 'produto';
    }

    for (var i = 0; i = this.qtdMasc + this.qtdFem; i++) {
      if (this.qtdMasc > 0){
        pessoa = this.adicionarMem();
        --this.qtdMasc;

        if (this.qtdCurt > 0){
          if ((this.qtdMasc + this.qtdFem) === 0) {
            pessoa.curtidas = this.qtdCurt;
            this.likes[pessoa.id] = pessoa.curtidas;
          } else {
            pessoa.curtidas = this.retornarCurtidas(this.qtdCurt);
            this.likes[pessoa.id] = pessoa.curtidas;
          }
          this.qtdCurt = this.qtdCurt - pessoa.curtidas;
        }

        if (this.qtdResp > 0) {
          pessoa.resposta = this.adicionarResposta(1, pessoa.tempo);
          pessoa.temResposta = true;
          --this.qtdResp;

          if (this.qtdCurt > 0){
            if ((this.qtdMasc + this.qtdFem) === 0) {
              pessoa.resposta.curtidas = this.qtdCurt;
              this.likes[pessoa.resposta.id] = pessoa.resposta.curtidas;
            } else {
              pessoa.resposta.curtidas = this.retornarCurtidas(this.qtdCurt);
              this.likes[pessoa.resposta.id] = pessoa.resposta.curtidas;
            }
            this.qtdCurt = this.qtdCurt - pessoa.resposta.curtidas;
          }
        }
        this.pessoaAdicionada.emit(pessoa);
      }

      if (this.qtdFem > 0){
        pessoa = this.adicionarWomem();
        --this.qtdFem;

        if (this.qtdCurt > 0){
          if ((this.qtdMasc + this.qtdFem) === 0) {
            pessoa.curtidas = this.qtdCurt;
            this.likes[pessoa.id] = pessoa.curtidas;
          } else {
            pessoa.curtidas = this.retornarCurtidas(this.qtdCurt);
            this.likes[pessoa.id] = pessoa.curtidas;
          }
          this.qtdCurt = this.qtdCurt - pessoa.curtidas;
        }

        if (this.qtdResp > 0) {
          pessoa.resposta = this.adicionarResposta(0, pessoa.tempo);
          pessoa.temResposta = true;
          --this.qtdResp;

          if (this.qtdCurt > 0){
            if ((this.qtdMasc + this.qtdFem) === 0) {
              pessoa.resposta.curtidas = this.qtdCurt;
              this.likes[pessoa.resposta.id] = pessoa.resposta.curtidas;
            } else {
              pessoa.resposta.curtidas = this.retornarCurtidas(this.qtdCurt);
              this.likes[pessoa.resposta.id] = pessoa.resposta.curtidas;
            }
            this.qtdCurt = this.qtdCurt - pessoa.resposta.curtidas;
          }
        }
        this.pessoaAdicionada.emit(pessoa);
      }
    }

    this.adicionado = true;
    this.temComentario = true;
  }

  adicionarMem(): Pessoa {
    let id = this.retornarId();

    const pessoa: Pessoa = {
      foto: `https://randomuser.me/api/portraits/men/` + id + `.jpg`,
      nome: this.retornarNome(this.retornarNumero(1), 1),
      descricao: this.substituirPalavra(this.textoComentario[this.retornarNumero(0)], '%produto%', this.produto),
      temResposta: false,
      curtidas: 0,
      tempo: this.retornarTempo(0),
      id: ++this.ultimoId
    };

    return pessoa;
  }

  substituirPalavra(frase: string, palavra: string, nova:string): string{
    return frase.replace(new RegExp(palavra, "gi"), nova);
  }

  retornarTempo(tempo: number): number{
    if (tempo === 0){
      return Math.floor(Math.random() * 59);
    } else {
      return Math.floor(Math.random() * tempo);
    }
  }

  adicionarWomem(): Pessoa {
    let id = this.retornarId();

    const pessoa: Pessoa = {
      foto: `https://randomuser.me/api/portraits/women/` + id + `.jpg`,
      nome: this.retornarNome(this.retornarNumero(1), 0),
      descricao: this.substituirPalavra(this.textoComentario[this.retornarNumero(0)], '%produto%', this.produto),
      temResposta: false,
      curtidas: 0,
      tempo: this.retornarTempo(0),
      id: ++this.ultimoId
    };

    return pessoa;
  }

  adicionarResposta(tipo: number, tempo: number): Resposta {
    let imagem = '';
    let id = this.retornarId();

    if (tipo === 1){
      imagem = `https://randomuser.me/api/portraits/men/` + id + `.jpg`;
    } else {
      imagem = `https://randomuser.me/api/portraits/women/` + id + `.jpg`;
    };
    const pessoa: Resposta = {
      foto: imagem,
      nome: this.retornarNome(this.retornarNumero(1), tipo),
      descricao: this.substituirPalavra(this.textoResposta[this.retornarNumero(0)], '%produto%', this.produto),
      curtidas: 0,
      tempo: this.retornarTempo(tempo),
      id: ++this.ultimoId
    };
    return pessoa;
  }

  retornarNumero(tipo: number): number{
    let retorno = 1;
    //Tipo 1 => Para Buscar Nomes  // Outros => Para Buscar Comentários e Respostas
    if (tipo === 1){
      retorno = Math.floor(Math.random() * 5000);
    } else{
      retorno = Math.floor(Math.random() * 55);
    };
    return retorno;
  }

  retornarId(): number{
    let numero = Math.floor(Math.random() * 99);

    if (numero === this.ultimoId){
      numero = Math.floor(Math.random() * 99);
    }
    return numero;
  }

  retornarNome(id: number, tipo: number): string{
    let nome: string;

    if(tipo === 1){
      nome = this.nomeMasc[id];
    } else {
      nome = this.nomeFem[id];
    }
    return nome;
  };

  incrementarLike(id: number): number{
    return ++this.likes[id];
  }

  retornarCurtidas(aux: number): number{
    return Math.floor(Math.random() * aux);
  };
}

export interface Pessoa {
  foto: string,
  nome: string,
  descricao: string,
  resposta?: Resposta,
  temResposta: boolean,
  curtidas: number,
  tempo: number,
  id: number
}

export interface Resposta {
  foto: string,
  nome: string,
  descricao: string,
  curtidas: number,
  tempo: number,
  id: number
}


