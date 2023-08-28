export interface Booking {
  localDateOfEvent: string,
  localDateTimeOfBookingStart: string,
  localDateTimeOfBookingEnd: string,
  preferences: string[],
  bookingStatus?: string,
  timerTask?: Object,
  bookingAttempts?: number
}