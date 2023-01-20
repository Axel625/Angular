import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  mostrarValor = true;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  materias: string[] = [
    'Matemáticas para Ingeniería',
    'Administracuión  de Base de Datos',
    'Desarrollo Web Profesional',
    'Inglés VII',
    'Planificación y Organización del Trabajo',
    'Seguridad en el Desarrollo de Aplicaciones',
  ];

  contador = 0;
}
