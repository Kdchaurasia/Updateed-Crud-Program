import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }


getData(){
  return this.http.get("https://ty-shop.herokuapp.com/api/products")
}



addData(product:any){
  return this.http.post("https://ty-shop.herokuapp.com/api/products",product)
}




updateData(id: any,product: any){
  return this.http.put(`https://ty-shop.herokuapp.com/api/products/${id}`,product)

}


deleteData(id: any){
        return this.http.delete(`https://ty-shop.herokuapp.com/api/products/${id}`)
      }
 }
