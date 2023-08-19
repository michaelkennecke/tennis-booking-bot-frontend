import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tennis-bot-frontend';
  bookings = '';
  isMobileDevice = false;

  constructor(
    private responsive: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.observeDeviceSwitch();
  }

  private observeDeviceSwitch(): void {
    this.responsive.observe(Breakpoints.Handset).subscribe(result => {
      if (result.matches) {
        this.isMobileDevice = true;
      } else {
        this.isMobileDevice = false;
      }
    });
  }
}
