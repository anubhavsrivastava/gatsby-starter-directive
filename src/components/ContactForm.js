import React from 'react';
export default function ContactForm() {
  return (
    <form method="post" action="#">
      <div className="row">
        <div className="col-6 col-12-mobilep">
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="col-6 col-12-mobilep">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="col-12">
          <textarea name="message" placeholder="Message" rows="6"></textarea>
        </div>
        <div className="col-12">
          <ul className="actions special">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}
