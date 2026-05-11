// Privacy Policy scaffold.
//
// Structure mirrors the live theagoramedia.com/privacy-policy-2/ page.
// Body text for each section is left empty so you can paste the EXACT
// current language from your live policy without an intermediate copy.
//
// To populate: open https://theagoramedia.com/privacy-policy-2/, copy the
// paragraphs under each heading, and paste them as the `body` value.
// You can use multi-paragraph strings with \n\n between paragraphs.

export interface PrivacySection {
  heading: string;
  body: string;
}

export const privacyPolicy = {
  title: 'Privacy Policy',
  effectiveDate: 'May 1, 2020',
  sections: [
    { heading: 'Who we are', body: '' },
    { heading: 'Information Collection and Use', body: '' },
    { heading: 'Types of Data Collected', body: '' },
    { heading: 'Use of Data', body: '' },
    { heading: 'Transfer Of Data', body: '' },
    { heading: 'Disclosure Of Data', body: '' },
    { heading: 'Security Of Data', body: '' },
    { heading: 'Service Providers', body: '' },
    { heading: 'Analytics', body: '' },
    { heading: 'Links to Other Sites', body: '' },
    { heading: "Children's Privacy", body: '' },
    { heading: 'Changes To This Privacy Policy', body: '' },
    { heading: 'Contact Us', body: 'For privacy policy questions, contact: info@theagoramedia.com' },
  ] as PrivacySection[],
} as const;
