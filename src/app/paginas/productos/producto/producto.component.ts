import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
// import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductosService } from 'src/app/servicios/productos.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent  implements OnInit{
  // 
  @Input() product?: Product;
  // // @Input() id: string = '';
  // // @Input() imagen: string = '';
  // // @Input() titulo: string = '';
  // // @Input() precio: string = '';

  constructor(private route: ActivatedRoute ,
    private productosService: ProductosService,
    private location: Location) {}

  ngOnInit() {
    // console.log("HOLA SONSA");
    this.getProduct();
  }
  goBack(): void {
    this.location.back();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productosService.getProductById(id)
      .subscribe(product => this.product = product);
  }
}
