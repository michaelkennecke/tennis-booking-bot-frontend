import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Booking } from '../models/booking';

const TIME_OPTIONS = [
  '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '13.00', '14:00', '15:00', '16:00', '17:00', '18:00',
  '19:00', '20:00', '21:00', '22:00'
]

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent {
  timeOptions = TIME_OPTIONS;
  
  isStartNowChecked: boolean = false;

  playingDate: string = '';
  playingTimes: string[] = [];
  botStartDate: string = '';
  botStartTime: string = '';
  botEndDate: string = '';
  botEndTime: string = '';

  addBookingForm = this.formBuilder.group({
    playingDate: new FormGroup({
      playingDateCtrl: new FormControl('', Validators.required),
    }),
    playingTimes: new FormGroup({
      playingTimesCtrl: new FormControl('', Validators.required)
    }),
    botStartTime: new FormGroup({
      botStartDateCtrl: new FormControl('', Validators.required),
      botStartTimeCtrl: new FormControl('', Validators.required)
    }),
    botEndTime: new FormGroup({
      botEndDateCtrl: new FormControl('', Validators.required),
      botEndTimeCtrl: new FormControl('', Validators.required)
    })
  });

  constructor(private formBuilder: FormBuilder) { }

  onChangePlayingDate(playingDate: string): void {
    this.playingDate = this.formatMatDate(playingDate);
  }

  onChangePlayingTimes(playingTimes: string[]): void {
    this.playingTimes = playingTimes;
  }

  onChangeBotStartDate(botStartDate: string): void {
    this.botStartDate = this.formatMatDate(botStartDate);
  }

  onSelectStartNow(isChecked: boolean): void {
    if (isChecked) {
      this.addBookingForm.get('botStartTime')!.disable();
    } else {
      this.addBookingForm.get('botStartTime')!.enable();
    }
    this.isStartNowChecked = isChecked; 
  }

  onChangeBotStartTime(botStartTime: string): void {
    this.botStartTime = botStartTime;
  }

  onChangeBotEndDate(botEndDate: string): void {
    this.botEndDate = this.formatMatDate(botEndDate);
  }

  onChangeBotEndTime(botEndTime: string): void {
    this.botEndTime = botEndTime;
  }

  onSubmit(): void {
    const booking: Booking = {
      localDateOfEvent: new Date(this.playingDate),
      localDateTimeOfBookingStart: !this.isStartNowChecked ? 
        this.botStartDate + 'T' + this.botStartTime 
        : '',
      localDateTimeOfBookingEnd: this.botEndDate + 'T' + this.botEndTime,
      preferences: this.playingTimes
    }
    console.log(booking);
  }

  private formatMatDate(matDate: string): string {
    return formatDate(matDate, 'yyyy-MM-dd', 'en-US');
  }
}
