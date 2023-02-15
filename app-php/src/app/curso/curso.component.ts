import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  // Objeto de formulario do tipo Curso
 formulario = new FormGroup({
  nomeCurso : new FormControl(''),
  valorCurso : new FormControl('')
 });

  // Vetor para listar os cursos
  vetor : curso[] = [];

  // Construtor
  constructor(private servico : CursoService) { }

  // Ao inicializar o componente, executa o método para listar os cursos
  ngOnInit(): void {
    this.listar();
  }

  // Método para cadastrar
  cadastrar(){
    this.servico.cadastrar(this.formulario).subscribe(retorno => {this.vetor.push(retorno)});
  }

  // Método para listar
  listar(){
    this.servico.listar().subscribe(dados => {this.vetor = dados});
  }

}

