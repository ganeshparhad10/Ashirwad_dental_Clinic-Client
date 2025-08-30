import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  faqs = [
    {
      question: 'How often should I visit the dentist?',
      answer:
        'It is recommended to visit the dentist every 6 months for routine checkups and cleanings.',
      open: false
    },
    {
      question: 'Do dental treatments hurt?',
      answer:
        'Modern dentistry is virtually pain-free thanks to advanced techniques and anesthesia options.',
      open: false
    },
    {
      question: 'What should I do in case of a dental emergency?',
      answer:
        'Contact us immediately. For severe pain, broken teeth, or bleeding, call our emergency helpline right away.',
      open: false
    },
    {
      question: 'Are dental implants safe?',
      answer:
        'Yes, dental implants are a safe and long-lasting solution for missing teeth when performed by experienced dentists.',
      open: false
    },
    {
      question: 'Can kids get braces?',
      answer:
        'Yes! Kids as young as 7 can be evaluated for orthodontic treatment. Early correction ensures healthier smiles later.',
      open: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false; // Only one open at a time
    });
  }
}
