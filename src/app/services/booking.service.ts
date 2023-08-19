import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  getBookings() {
    return this.httpClient.get<Booking[]>('/api/v1/tennis/bookings');
  }

  addBooking(booking: Booking) {
    this.httpClient.post('/api/v1/tennis/booking', JSON.stringify(booking));
  }
}
