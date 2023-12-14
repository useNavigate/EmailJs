import emailJs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export default function EmailForm() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name,setName] = useState("")
 const  [status,setStatus] =useState(false)
const [error,setError] = useState("")
 const service = process.env.REACT_APP_EMAIL_SERVICE_KEY
 const template = process.env.REACT_APP_EMAIL_TEMPLATE_KEY
 const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;


  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: email,
      from_email: email,
      to_name:name,
      message: message,
    };

    emailJs
      .send(service, template, templateParams, publicKey)
      .then((res) => {
        setStatus(true)
        console.log(res.text);

      })
      .catch((error) => {
        setError(error.text)
        console.log(error.text);
      });
  };

  return (
    <>
      <h1>Contact Us</h1>
      {status && <h3>Thank you for contacting us !</h3>}
      <form onSubmit={handleSubmit} ref={form} className="emailForm">
        <input
          type="text"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          value={message}
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" value="Send">
          Send Email
        </button>
      </form>
    </>
  );
}
