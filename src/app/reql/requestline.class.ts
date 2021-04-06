import { Product } from "../prod/product.class";

export class Requestline {
    id: number = 0;
    requestId: number = 0;
    productId: number = 0;
    product: Product = null;
    quantity: number = 1;
}
