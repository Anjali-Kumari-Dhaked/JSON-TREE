import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { messages } from '../app/utilites/messages';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(private http:HttpClient) { }
  getLocal(templateId: string) {
    return this.http.get(templateId).pipe(catchError(this.handleError));
  }

  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error Occured: ${error.error.message}`;

    } else {
      // server-side error
      errorMessage = `Error Occured: ${error.message}`;

    }

    /// We are returning a generic error message
    return throwError(messages.genericErrorMessage);
  }
}
