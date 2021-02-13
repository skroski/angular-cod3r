import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.scss"],
})
export class ProductDeleteComponent implements OnInit {
  product!: Product;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get("id") as unknown as number;
    //const id = 4;
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id as number).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
