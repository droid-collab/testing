import React from 'react';
import DelegatePage from '../components/DelegatePage';

const WITTY_REGISTER_URL = 'https://forms.gle/7C8jhkcvi8azLhUa7';

const steps = [
  'Click on the Register Now link at the top of this page to open the registration form.',
  'Fill in your correct details in the Google Form. (Google sign-in may be required)',
  "After submitting the form, you'll receive a unique delegate code via email. Keep this code safe for the payment step.",
  "Your application will go through a shortlisting process. If selected, you'll receive an email confirming your selection and it will contain the payment form link.",
  'Visit the front office with your delegate code and complete the registration payment.',
  'After payment, fill out the Payment Confirmation Form (link provided in your email) with your delegate code and payment screenshot.',
  'Once your payment is verified, you will receive an email confirming your successful registration for WISMUN.',
  'Shortly after, you will receive another email with your committee allocation to begin your MUN journey.',
];

export default function WittyDelegates() {
  return (
    <DelegatePage
      label="For Witty Students"
      title="Witty Delegates"
      intro="Delegates from Witty International School. Read the instructions below, then register through the Witty registration form."
      registerUrl={WITTY_REGISTER_URL}
      steps={steps}
    />
  );
}
