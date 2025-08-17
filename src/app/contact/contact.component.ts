import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  appointment = {
    name: '',
    phone: '',
    date: '',
    time: ''
  };

  today: string = '';
  successMsg = '';
  errorMsg = '';

  // In-memory appointments (for conflict checking)
  appointments: { date: string; time: string }[] = [];

  ngOnInit(): void {
    const todayDate = new Date();
    this.today = todayDate.toISOString().split('T')[0];
  }

  submitForm(): void {
    const conflict = this.appointments.find(
      (a) => a.date === this.appointment.date && a.time === this.appointment.time
    );

    if (conflict) {
      this.errorMsg = 'Sorry, this slot is already booked.';
      this.successMsg = '';
    } else {
      this.appointments.push({
        date: this.appointment.date,
        time: this.appointment.time
      });

      this.successMsg = 'Appointment booked successfully!';
      this.errorMsg = '';

      this.resetForm();
    }
  }

  resetForm(): void {
    this.appointment = {
      name: '',
      phone: '',
      date: '',
      time: ''
    };
  }
}
