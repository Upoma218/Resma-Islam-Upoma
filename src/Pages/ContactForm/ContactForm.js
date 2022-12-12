import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqkjrjej");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <h1 className="text-5xl font-semibold text-center mt-12 text-info uppercase">Contact Form</h1>
      <div className='p-12 m-20 lg:mx-80 border border-slate-600'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
          </label>
          <br />
          <input
            id="name"
            type="text"
            name="name"
            className='w-full h-8 mr-3 rounded mb-5 mt-3'
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
          <br />
          <label htmlFor="email">
            Email Address
          </label>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            className='w-full h-8 mr-3 rounded mb-5 mt-3'
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <br />
          <label htmlFor="message">
            Message
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            className='w-full mr-3 rounded mb-5 mt-3 h-20'
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <button className='btn btn-info btn-sm' type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
function ContactMe() {
  return (
    <ContactForm />
  );
}
export default ContactMe;

