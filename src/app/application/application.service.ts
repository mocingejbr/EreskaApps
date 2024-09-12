import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { APPLICATION_DATA } from '../application-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Application, DataResponse, Datum } from './application.model';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  private apps = signal<Datum[] | undefined>(undefined);

  private bearerToken =
  'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjU1OFdGM1IyOTgifQ.eyJpc3MiOiI2OWE2ZGU4Ny01NmQxLTQ3ZTMtZTA1My01YjhjN2MxMWE0ZDEiLCJleHAiOjE3MjYxNDQzNzEsImF1ZCI6ImFwcHN0b3JlY29ubmVjdC12MSIsImlhdCI6MTcyNjE0MzE3Mn0.TmdCpDSYnBdoZWNRwkYlc2EvzPklvQdjlTIduoCgc4ZkK0K7XmaihGmV5uRXr9elcGVewAsh9FUmFCW7w3nMMQ'

  constructor() {
    console.log('SERVICE INIT');
    const subscription = this.loadAllApps().subscribe({
      next: (apps) => {
        this.apps.set(apps);
      },
      error: (error: Error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  get applications() {
    return APPLICATION_DATA;
  }

  get testApps() {
    return this.apps();
  }

  private loadAllApps() {
    return this.fetchApps(
      'https://api.appstoreconnect.apple.com/v1/apps',
      'Something went wrong fetching the available apps. Please try again later.'
    );
  }

  // private fetchApps(url: string, errorMessage: string) {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.bearerToken}`,
  //     'Access-Control-Allow-Origin': '*',
  //   });

  //   return this.httpClient.get(url, { headers }).pipe(
  //     tap((response) => console.log(response)), // Log the raw JSON response
  //     catchError((error) => {
  //       console.error('Error:', error);
  //       return throwError(() => new Error(errorMessage));
  //     })
  //   );
  // }

  private fetchApps(url: string, errorMessage: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.bearerToken}`,
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.get<{ data: Datum[] }>(url, { headers }).pipe(
      map((resData) => resData.data),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
