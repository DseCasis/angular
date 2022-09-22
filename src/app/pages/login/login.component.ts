import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {Usuarios} from "../../models/usuarios";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuarios: Usuarios[] = []

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.cargarUsuarios()

      .subscribe(usuarios => {

        console.log(usuarios);
        this.usuarios = usuarios;
      });

  }

}
