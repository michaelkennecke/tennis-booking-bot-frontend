import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking';
import { first, lastValueFrom, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(
    private bookingService: BookingService,
    private snackBar: MatSnackBar,
  ) {}
  
  ngOnInit(): void {
    this.initBookings();
  }

  async onDelete(booking: Booking): Promise<void> {
    const date = formatDate(booking.localDateOfEvent, 'yyyy-MM-dd', 'en-US');
    const deleteBookingSubs = this.bookingService.deleteBooking(date)
      .subscribe({
        error: (_error) => this.snackBar.open('Cannot delete booking!', 'OK', {
          duration: 5 * 1000
        }),
    });
    await lastValueFrom(of(deleteBookingSubs));
    this.initBookings();
  }

  private initBookings(): void {
    this.bookingService.getBookings().pipe(first()).subscribe({
      next: (bookings) => {
        this.bookings = this.formatBookingDates(bookings);
      },
      error: (_error) => this.snackBar.open('Cannot fetch bookings!', 'OK', {
        duration: 5 * 1000
      })
    });
  }

  private formatBookingDates(bookings: Array<Booking>): Array<Booking> {
    const bookingsCpy = bookings.slice();
    const options: any = { weekday: 'short', month: 'short', day: 'numeric'};
    bookingsCpy.forEach(booking => {
      booking.localDateTimeOfBookingStart = new Date(booking.localDateTimeOfBookingStart)
        .toLocaleTimeString('en-us', options).replace(':00:00', ':00');
      booking.localDateTimeOfBookingEnd = new Date(booking.localDateTimeOfBookingEnd)
        .toLocaleTimeString('en-us', options).replace(':00:00', ':00');
      
      booking.localDateOfEvent = new Date(booking.localDateOfEvent)
      .toLocaleDateString('en-us', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'});
    });
    return bookingsCpy;
  } 
}
