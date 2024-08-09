import React, { useState } from 'react';

const OfferForm = ({ setOffers }) => {
  const [offer, setOffer] = useState('');

  const handleOffer = (e) => {
    e.preventDefault();
    setOffers((prevOffers) => [...prevOffers, offer]);
    setOffer('');
  };

  return (
    <form onSubmit={handleOffer}>
      <input
        type="text"
        value={offer}
        onChange={(e) => setOffer(e.target.value)}
        placeholder="Enter your offer"
        required
      />
      <button type="submit">Submit Offer</button>
    </form>
  );
};

export default OfferForm;
