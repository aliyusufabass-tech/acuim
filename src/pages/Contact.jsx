import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import api from "../services/api";

const initialForm = {
  full_name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  project_location: "",
  subject: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");
    try {
      await api.post("/contact/", form);
      setForm(initialForm);
      setStatus("Thank you. Your inquiry has been sent to ACUIM Development Ltd.");
    } catch {
      setStatus("Please check the form and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero"><span className="eyebrow">Contact</span><h1>Start a project conversation with ACUIM Development Ltd.</h1></section>
      <section className="section contact-grid">
        <div className="contact-panel">
          <h2>ACUIM DEVELOPMENT LTD</h2>
          <p><Mail /> acuimdevelopment@gmail.com</p>
          <p><Phone /> +225 703 717 173</p>
          <p>Share a project, site, service need or strategic question. The team will review your inquiry and respond directly.</p>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <input name="website" value={form.website} onChange={update} className="honeypot" tabIndex="-1" autoComplete="off" />
          <div className="two-column">
            <label>Full name<input required name="full_name" value={form.full_name} onChange={update} /></label>
            <label>Email address<input required type="email" name="email" value={form.email} onChange={update} /></label>
          </div>
          <div className="two-column">
            <label>Phone number<input required name="phone" value={form.phone} onChange={update} /></label>
            <label>Company or organization<input name="company" value={form.company} onChange={update} /></label>
          </div>
          <div className="two-column">
            <label>Service of interest<input required name="service" value={form.service} onChange={update} /></label>
            <label>Project location<input name="project_location" value={form.project_location} onChange={update} /></label>
          </div>
          <label>Subject<input required name="subject" value={form.subject} onChange={update} /></label>
          <label>Message<textarea required minLength="20" name="message" value={form.message} onChange={update} rows="7" /></label>
          <button className="button" disabled={submitting}>{submitting ? "Submitting..." : "Submit"}</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </>
  );
}
