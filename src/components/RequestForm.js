import React, { useState } from 'react';

const RequestForm = ({ setRequests }) => {
  const [request, setRequest] = useState('');

  const handleRequest = (e) => {
    e.preventDefault();
    setRequests((prevRequests) => [...prevRequests, request]);
    setRequest('');
  };

  return (
    <form onSubmit={handleRequest}>
      <input
        type="text"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        placeholder="Enter your request"
        required
      />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default RequestForm;
