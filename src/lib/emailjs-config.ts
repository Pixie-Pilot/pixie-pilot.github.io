// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the values below with your actual credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_xpm628c", // Replace with your EmailJS service ID
  TEMPLATE_ID: "template_pligqtr", // Replace with your EmailJS template ID
  PUBLIC_KEY: "tXd8SX9nDGYM0skbS", // Replace with your EmailJS public key
  TO_EMAIL: "contact@pixiepilot.com", // Replace with your email address
};

// Email template variables that will be available in your EmailJS template:
// - {{to_email}} - The email address where you want to receive notifications
// - {{from_email}} - The email address of the person signing up
// - {{from_name}} - The name of the person signing up
// - {{company}} - The company name (optional)
// - {{industry}} - The selected industry
// - {{use_case}} - The use case description
// - {{message}} - A formatted message with all the details

// Example EmailJS template:
/*
Subject: New PixiePilot Waitlist Signup - {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Industry: {{industry}}

Use Case:
{{use_case}}

{{message}}
*/ 