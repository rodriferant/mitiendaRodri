import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
  @Input() id: string = '';
  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() precio: string = '';

  @Output() clic = new EventEmitter<string>();


  constructor(private router: Router) {}
  verProducto(){


    // // Navegar a la ruta del producto con el identificador específico.
    this.router.navigate(['/productos/producto/', this.id]);
    this.clic.emit(this.id);
  }
}
