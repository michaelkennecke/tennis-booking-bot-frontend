export interface Booking {
  localDateOfEvent: Date,
  localDateTimeOfBookingStart: string,
  localDateTimeOfBookingEnd: string,
  preferences: string[],
  bookingStatus?: string,
  timerTask?: Object,
  bookingAttempts?: number
}