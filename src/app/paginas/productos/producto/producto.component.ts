import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
// import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  @Input() id: string = '';
  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() precio: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Obtener el id del producto de la ruta.
    const productoId = this.route.snapshot.paramMap.get('id');

    // Realizar las acciones necesarias con el id del producto.
    // Aquí puedes cargar los detalles del producto utilizando el id.
  }
}
