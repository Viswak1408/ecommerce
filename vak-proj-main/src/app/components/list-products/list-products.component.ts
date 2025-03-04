import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-list-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{

  public products: Product[] = [];
  public spinner: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.getProducts();
  }

  public getProducts() {
    this.spinner = true;
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        this.products = data;
        this.spinner = false;
      }
    })
  }

  public viewProductDetails(title: string) {
    
  }
}
