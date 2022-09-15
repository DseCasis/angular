import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {Usuario} from "../../models/usuarios";

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  public usuarios: Usuario[] = []

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.cargarUsuarios()

      .subscribe(usuarios => {

        console.log(usuarios);
        this.usuarios = usuarios;
      });

  }

}
