export function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" body={["ACUIM Development Ltd collects contact information submitted through this website only to respond to inquiries and manage client communications.", "We do not sell personal data. Contact submissions are stored securely in the backend database and may be reviewed by authorized administrators.", "Uploaded content and media managed through the admin dashboard are used to operate the ACUIM website and project portfolio."]} />;
}

export function TermsAndConditions() {
  return <LegalPage title="Terms and Conditions" body={["This website provides general information about ACUIM Development Ltd services, projects and insights.", "Website content should not be treated as a binding technical proposal, contract or professional advice unless confirmed in a signed agreement.", "All website materials belong to ACUIM Development Ltd or their respective rights holders."]} />;
}

function LegalPage({ title, body }) {
  return (
    <>
      <section className="page-hero"><span className="eyebrow">Legal</span><h1>{title}</h1></section>
      <section className="section article">{body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
    </>
  );
}
