import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../prod/product.class';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string = ''): Product[] {
    if(searchCriteria.length == 0) return products;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedProducts: Product[] = [];
    for(let product of products) {
      if(
          product.id.toString().toLowerCase().includes(searchCriteria)
          || product.partNbr.toLowerCase().includes(searchCriteria)
          || product.description.toLowerCase().includes(searchCriteria)
          || product.price.toString().toLowerCase().includes(searchCriteria)
          || product.unit.toLowerCase().includes(searchCriteria)
      ) {
        selectedProducts.push(product);
      }
    }
    return selectedProducts;
  }

}
