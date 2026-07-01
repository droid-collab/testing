import React from 'react';
import DelegatePage from '../components/DelegatePage';

const EXTERNAL_REGISTER_URL = 'https://forms.gle/2eFRa6JJyqsri3DQ7';

const steps = [
  'Click on the Register Now link at the top of this page. You will be redirected to a Google Form for external delegates.',
  'Fill in the required details correctly in the form. (Google sign-in may be required)',
  'After submitting the form, you will receive an email with your delegate code and the bank details for payment.',
  'Complete your payment using the bank details shared with you via email.',
  "Once payment is done, fill out the Payment Confirmation Form (link provided in your email). You'll need to upload your payment screenshot and enter your delegate code.",
  "Once your payment is verified, you'll receive an email confirming your successful registration and selection for WISMUN.",
  'Shortly after, you will receive another email with your committee allocation to begin your MUN journey.',
];

export default function ExternalDelegates() {
  return (
    <DelegatePage
      label="For Non-Witty Students"
      title="External Delegates"
      intro="Delegates from other schools and institutions. Read the instructions below, then register through the external registration form."
      registerUrl={EXTERNAL_REGISTER_URL}
      steps={steps}
    />
  );
}
