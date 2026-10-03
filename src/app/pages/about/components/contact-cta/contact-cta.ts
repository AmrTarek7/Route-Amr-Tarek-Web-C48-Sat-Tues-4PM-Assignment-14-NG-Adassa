import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

//CTA: اختصار Call To Action، يعني دعوة المستخدم لاتخاذ إجراء.
//Last section in this page

@Component({
  selector: 'app-contact-cta',
  imports: [RouterLink],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.css',
})
export class ContactCta {}
