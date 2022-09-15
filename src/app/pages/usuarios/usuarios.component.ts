import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {Usuario} from "../../models/usuarios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: Usuario[] = []

  constructor( private usuariosService: UsuariosService, private router: Router ) { }

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios()

      .subscribe( usuarios => {

        console.log(usuarios);
        this.usuarios = usuarios;

      });

  }

}
