import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  getBookings(): Observable<Array<Booking>> {
    return this.httpClient.get<Booking[]>('/api/v1/tennis/bookings');
  }

  addBooking(booking: Booking): Observable<string> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post('/api/v1/tennis/booking', JSON.stringify(booking), {
      headers: headers,
      responseType: 'text'
    });
  }

  deleteBooking(localDateOfEvent: string): Observable<string> {
    return this.httpClient.delete('/api/v1/tennis/booking/' + localDateOfEvent, 
    { responseType: 'text' });
  }
}
