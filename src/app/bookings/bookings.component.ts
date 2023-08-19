import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking';
import { catchError, first, take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(
    private bookingService: BookingService,
    private snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.bookingService.getBookings().subscribe({
      next: (bookings) => this.bookings = bookings,
      error: (_error) => this.snackBar.open('Cannot fetch bookings!', 'OK', {
        duration: 3 * 1000
      })
    });
  }

  handleError(error: any) {
    console.log(error);
  }

}
