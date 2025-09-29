import "./contact.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

 const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

export default function ContactPage() {

  return (
    <div>
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>We’d love to hear from you! Fill out the form below or reach out via phone or email.</p>

        <div className="contact-container">
          {/* LEFT SIDE INFO */}
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Lahore, Pakistan</p>
            <p><FontAwesomeIcon icon={faPhoneAlt} /> +923868761, +923890312</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> support@clothingcollection.com</p>
            <p><FontAwesomeIcon icon={faClock} /> 10:00 AM – 6:00 PM, Mon - Sat</p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={schema}
              onSubmit={(values, { resetForm }) => {
                alert("Message sent! ✅");
                console.log(values);
                resetForm();
              }}
            >
              <Form>
                <Field name="name" type="text" placeholder="Your Name" />
                <ErrorMessage name="name" component="div" className="error" />

                <Field name="email" type="email" placeholder="Your Email" />
                <ErrorMessage name="email" component="div" className="error" />

                <Field as="textarea" name="message" rows="6" placeholder="Your Message" />
                <ErrorMessage name="message" component="div" className="error" />

                <button type="submit" className="send-btn">Send Message</button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>
    </div>
  );
}
