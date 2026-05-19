// Privacy Policy for Agora Media (theagoramedia.com).
//
// Migrated and modernised from the previous WordPress policy:
//  - "Children's Privacy" section removed at the owner's request.
//  - Updated to current EU GDPR / ePrivacy expectations (operator is Finland-based).
//  - Rewritten to reflect the NEW site's actual data practices: a static site with
//    no accounts, no comment system, and contact handled via email links only.
//
// NOTE: This is a practical, good-faith draft — not legal advice. Have it reviewed
// by a data-protection lawyer before relying on it, especially the controller
// identity, retention periods, and any analytics tooling you actually deploy.

export interface PrivacySection {
  heading: string;
  body: string;
}

export const privacyPolicy = {
  title: 'Privacy Policy',
  effectiveDate: 'May 19, 2026',
  sections: [
    {
      heading: 'Who We Are',
      body:
        `Agora Media ("Agora Media", "we", "us", or "our") operates the website https://theagoramedia.com (the "Service"). For the purposes of the EU General Data Protection Regulation (GDPR) and the Finnish Data Protection Act, Agora Media is the data controller for personal data processed through the Service.\n\nIf you have any questions about this policy or how we handle your information, contact us at info@theagoramedia.com.`,
    },
    {
      heading: 'Scope',
      body:
        `This policy explains what personal data we collect when you visit or interact with the Service, why we collect it, the legal bases on which we rely, how long we keep it, who we share it with, and the rights you have. It applies only to the Service and not to any third-party site we link to.`,
    },
    {
      heading: 'Information We Collect',
      body:
        `Information you give us. The Service does not offer user accounts or on-site forms. The main way you share personal data with us is by contacting us directly — for example, by emailing info@theagoramedia.com or replying to a briefing. In that case we receive your name, email address, and anything you choose to include in your message.\n\nInformation collected automatically. Like most websites, when you visit the Service our hosting provider and any analytics we use may record technical data such as your IP address, browser type and version, device type, the pages you view, referring pages, and the date, time, and duration of your visit. This data is used in aggregate to keep the Service secure and to understand readership.\n\nWe do not knowingly collect special categories of data (such as health, political, or biometric data) through the Service.`,
    },
    {
      heading: 'Cookies and Similar Technologies',
      body:
        `The Service uses a small number of cookies and local-storage entries that are strictly necessary for the site to function and to remember your preferences (for example, your light/dark display setting).\n\nIf we enable analytics or measurement cookies, those are set only with your consent where required by the EU ePrivacy rules, and you can withdraw consent at any time. Most browsers let you refuse or delete cookies through their settings; disabling strictly necessary cookies may affect how the Service works.`,
    },
    {
      heading: 'How We Use Your Information',
      body:
        `We use personal data to: operate, maintain, and secure the Service; respond to your enquiries and correspondence; produce aggregate, non-identifying statistics about how the Service is used; improve our reporting and the site experience; and comply with our legal obligations.\n\nWe do not sell your personal data, and we do not use it for automated decision-making that produces legal or similarly significant effects.`,
    },
    {
      heading: 'Legal Bases for Processing',
      body:
        `Under the GDPR we rely on the following legal bases: your consent (for non-essential cookies and analytics, where applicable); our legitimate interests in operating, securing, and improving the Service and in responding to people who contact us, balanced against your rights and freedoms; and compliance with a legal obligation where the law requires us to retain or disclose data.`,
    },
    {
      heading: 'Sharing and Disclosure',
      body:
        `We share personal data only as needed: with service providers who host the site, deliver email, or provide analytics on our behalf, under contracts that require them to protect the data and use it only for the services they provide to us; and where required to comply with applicable law, enforce our terms, protect the rights, property, or safety of Agora Media or others, or respond to a lawful request by public authorities.\n\nWe do not share your personal data with third parties for their own marketing.`,
    },
    {
      heading: 'International Data Transfers',
      body:
        `Agora Media operates from Finland and covers events across multiple regions. Some of our service providers may process data outside the European Economic Area. Where that happens, we rely on appropriate safeguards — such as the European Commission's Standard Contractual Clauses or an adequacy decision — so that your data continues to receive an equivalent level of protection.`,
    },
    {
      heading: 'Data Retention',
      body:
        `We keep personal data only for as long as necessary for the purposes described in this policy. Correspondence is kept for as long as needed to handle your request and for a reasonable period afterwards for record-keeping; technical and analytics logs are kept for a limited period and then deleted or anonymised. When data is no longer needed, we delete or irreversibly anonymise it.`,
    },
    {
      heading: 'Your Privacy Rights',
      body:
        `Subject to the conditions in the GDPR, you have the right to: access the personal data we hold about you; have inaccurate data corrected; have your data erased; restrict or object to our processing; receive your data in a portable format; and, where processing is based on consent, withdraw that consent at any time without affecting prior processing.\n\nTo exercise any of these rights, email info@theagoramedia.com. You also have the right to lodge a complaint with a supervisory authority. In Finland this is the Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto, tietosuoja.fi).`,
    },
    {
      heading: 'Security',
      body:
        `We use reasonable technical and organisational measures to protect personal data against loss, misuse, and unauthorised access. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.`,
    },
    {
      heading: 'Links to Other Sites',
      body:
        `The Service contains links to sites we do not operate. We are not responsible for the content or privacy practices of those sites, and this policy does not apply to them. We encourage you to review the privacy policy of every site you visit.`,
    },
    {
      heading: 'Changes to This Policy',
      body:
        `We may update this policy from time to time. When we do, we will revise the "Effective date" above and, where the changes are significant, provide a more prominent notice. We encourage you to review this page periodically.`,
    },
    {
      heading: 'Contact Us',
      body:
        `For any question about this policy or your personal data, contact us at info@theagoramedia.com.`,
    },
  ] as PrivacySection[],
} as const;
