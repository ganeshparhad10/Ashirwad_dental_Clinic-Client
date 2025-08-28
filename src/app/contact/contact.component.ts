import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  appointment: any = {
    access_key: '18cd4b8e-0849-408a-9a6d-e848c3f548d6', // 🔑 Your Web3Forms access key (from dashboard)
    name: '',
    phone: '',
    date: '',
    time: '',
    subject: '`🦷 New Appointment from ',     // ✅ custom subject line for doctor's email
    from_name: 'Ashirwad Dental Clinic' ,// ✅ will show who sent the email
    emails: 'ganeshparhad42@gmail.com'
  };

  today: string = '';
  successMsg = '';
  errorMsg = '';

  ngOnInit(): void {
    const todayDate = new Date();
    this.today = todayDate.toISOString().split('T')[0];
  }

  async submitForm(): Promise<void> {
    try {
      // ✅ dynamically set subject line with patient details before sending
      this.appointment.subject = `🦷 New Appointment from ${this.appointment.name}`;

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(this.appointment)
      });

      const result = await response.json();

      if (result.success) {
        this.successMsg = 'Appointment booked successfully! Doctor will be notified.';
        this.errorMsg = '';
        this.resetForm();
      } else {
        this.errorMsg = 'Something went wrong. Please try again.';
        this.successMsg = '';
      }
    } catch (error) {
      this.errorMsg = 'Network error. Please try again later.';
      this.successMsg = '';
    }
  }

  resetForm(): void {
    this.appointment = {
      access_key: '18cd4b8e-0849-408a-9a6d-e848c3f548d6', // keep your key here
      name: '',
      phone: '',
      date: '',
      time: '',
      subject: '',
      from_name: 'Ashirwad Dental Clinic'
    };
  }
}
