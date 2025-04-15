
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Inventory } from '../Models/inventroy.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private GetAllInventoriesApiUrl = 'https://localhost:7028/api/Inventory';
  private DeleteInventoryApiUrl = 'https://localhost:7028/api/Inventory';
  private EditInventoryApiUrl = 'https://localhost:7028/api/Inventory';
  private AddInventoryApiUrl = 'https://localhost:7028/api/Inventory';

  constructor(private http: HttpClient) {}

  getInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.GetAllInventoriesApiUrl).pipe(
      catchError(this.handleError)
    );
  }

  deleteInventory(inventoryId: number): Observable<void> {
    let params = new HttpParams().set("inventoryId", inventoryId.toString());
    return this.http.delete<void>(`${this.DeleteInventoryApiUrl}/${inventoryId}`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  editInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.EditInventoryApiUrl}/${inventory.inventoryID}`, inventory, { responseType: 'text' as 'json' }).pipe(
      catchError(this.handleError)
    );
  }

  addInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this.AddInventoryApiUrl, inventory, { responseType: 'text' as 'json' }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}

