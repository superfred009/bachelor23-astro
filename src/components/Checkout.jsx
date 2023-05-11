import { useState } from 'react';

const Checkout = ({ products = [] }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay of 2 seconds before showing the success notification
    setTimeout(() => {
      setIsSubmitting(false);
      setShowNotification(true);

      // Hide the success notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }, 2000);
  };

  console.log(products);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            {product.quantity > 1 && ` x ${product.quantity}`} - {product.price}
          </li>
        ))}
      </ul>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>

      {showNotification && (
        <div>
          <p>Form submitted successfully!</p>
          <button onClick={() => window.location.reload()}>Hjem</button>
        </div>
      )}
    </form>
  );
};

export default Checkout;
