import React, { useState } from 'react';
import './EmailForm.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const EmailForm = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = () => {
      if (!message) {
        setError('Message is required.');
        return;
      }
      else{
        setError('');
      }
  
      // Generate the mailto link
      const mailtoLink = `mailto:your-email@example.com?subject=Contact Form Submission&body=${encodeURIComponent(message)}`;
      
      // Open the default email client
      window.location.href = mailtoLink;
    };
  
    return (
      <div className="email container">
        <h1 className='display-1'>Connect</h1>
        <h3 className='display-1'>With Me :)</h3>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required 
          />
          {error && <p className="text-danger">{error}</p>}
        </div>
        
        <button className="btn btn-primary" onClick={handleSubmit}>
          Send
        </button>
      </div>
    );
};

export default EmailForm;