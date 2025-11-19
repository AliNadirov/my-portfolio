import './Contact.scss';
export default function Contact() {
  return (
    <section id="contacts">
      <div className="text-center">
        <h2 className="section-title">Contact</h2>
        <div className="section-underline"></div>
      </div>

      <form>
        <label>
          Name
          <input id='Full Name' type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input id='Gmail' type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea id='Message' placeholder="Your message"></textarea>
        </label>
        <div className="submit-button">
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}