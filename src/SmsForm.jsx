import React, { useRef, useState } from 'react';
import "./smsForm.css"

const SMSForm = () => {
  const messageTo = useRef(null);
  const messageBody = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(messageTo.current.value);
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: messageTo.current.value,
        body: messageBody.current.value
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setError(false);
          setSubmitting(false);
          messageTo.current.value = "";
          messageBody.current.value = "";
          setSuccess(true);
        } else {
          setError(true);
          setSubmitting(false);
          setSuccess(false);
        }
      });
  }

  return (
    <>
    <form
      onSubmit={onSubmit}
      className={error ? 'error sms-form' : 'sms-form'}
    >
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="tel"
          name="to"
          id="to"
          ref={messageTo}
          placeholder="+15304646285"
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          name="body"
          id="body"
          ref={messageBody}
          placeholder="Enter your message"
        />
      </div>
      <button type="submit" disabled={submitting}>
        Send message
      </button>
    </form>
    {success ? (<div>Your message is sended.</div>): null}
    {error ? (<div className="error-message">Your message is not sended.</div>): null}
    </>
  );
}
export default SMSForm;