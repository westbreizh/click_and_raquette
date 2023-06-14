import { useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {

  console.log("erby");
  const stripe = useStripe();

  const handleCheckout = async () => {
    // Créez une session de paiement avec les détails appropriés
    const response = await fetch('http://localhost:3001/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    const session = await response.json();
    console.log(session);
    // Redirigez l'utilisateur vers la page de paiement Stripe
    const result = await stripe.redirectToCheckout({
      
      sessionId: session.id,
    });

    if (result.error) {
      console.log("stripeerreur");
      // Gérez les erreurs de redirection
      console.error(result.error.message);
    }
  };

  return (
    <form onSubmit={handleCheckout}>
      <button 
      className='btn btn-green btn-commander btn-cart'
      type="submit">
        Commander via stripe
      </button>

    </form>
  );
};

export default CheckoutForm;
