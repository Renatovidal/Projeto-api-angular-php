import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { curso } from './curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  // Construtor
  constructor(private http:HttpClient) { }

  // Cadastrar curso
  cadastrar(f : FormGroup){
    console.log(f.value);
    return this.http.post<curso>('http://localhost/api/php/cadastro.php', f.value);
  }

  // Listar cursos
  listar(){
    return this.http.get<curso[]>('http://localhost/api/php/lista.php');
  }
}
