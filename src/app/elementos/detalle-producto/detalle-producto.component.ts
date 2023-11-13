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
        // Supongamos que tienes un identificador único para cada producto, 
    // // aquí estoy usando '1' como ejemplo. Deberías reemplazarlo con el id real del producto.
    // const productoId = '1'; 

    // // Navegar a la ruta del producto con el identificador específico.
    // this.router.navigate(['/productos/producto', productoId]);
    this.clic.emit(this.id);
  }
}
