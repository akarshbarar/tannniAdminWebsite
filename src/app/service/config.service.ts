import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Item } from '../class/data';
import { OrderDetails } from '../class/Order';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getConfig() {
    return this.http.get(this.configUrl);
  }
  addData(item): Observable<Item> {
    return this.http.post<Item>(this.configUrl + '/corporate/addItems', item, this.httpOptions);
  }
  addCommercialData(item): Observable<Item> {
    return this.http.post<Item>(this.configUrl + '/commercial/addItems', item, this.httpOptions);
  }

  getData(): Observable<Item> {
    return this.http.get<Item>(this.configUrl + '/corporate/getItems')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getCommercialData(): Observable<Item> {
    return this.http.get<Item>(this.configUrl + '/commercial/getItems')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getOrderDetails(): Observable<OrderDetails>{
    return this.http.get<OrderDetails>(this.configUrl + '/corporate/getOrderDetails')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getCorporateDetailsHistory(): Observable<OrderDetails>{
    return this.http.get<OrderDetails>(this.configUrl + '/corporate/getOrderDetailsHistory')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getCommercialDetails(): Observable<OrderDetails>{
    return this.http.get<OrderDetails>(this.configUrl + '/commercial/getOrderDetails')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getCommercialDetailsHistory(): Observable<OrderDetails>{
    return this.http.get<OrderDetails>(this.configUrl + '/commercial/getOrderDetailsHistory')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  getResidentialDetails(): Observable<OrderDetails>{
    return this.http.get<OrderDetails>(this.configUrl + '/residential/getOrderDetails')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getResidentialDetailsHistory(): Observable<OrderDetails>{
    return this.http.get<OrderDetails>(this.configUrl + '/residential/getOrderDetailsHistory')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateItem(NumberOfBottles,price): Observable<Item>{
    const id = {
      NumberOfBottle : NumberOfBottles,
      Price : price
    };
    return this.http.post<Item>(this.configUrl + '/corporateItemUpdate/', id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateCommercialItem(numberOfBottles,price): Observable<Item>{
    const id = {
      NumberOfBottles : numberOfBottles,
      Price : price
    };
    return this.http.post<Item>(this.configUrl + '/commercialItemUpdate/', id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteItem(id): Observable<Item>{
    return this.http.post<Item>(this.configUrl + '/item/', id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteCommercialItem(id): Observable<Item>{
    return this.http.post<Item>(this.configUrl + '/commercial/deleteItem', id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}
