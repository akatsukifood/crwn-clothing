import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HVcADIZn2Ioh3uXJPFYvQlw9Y4JD51DpGinOyOQJ2hOy8EYAyfKSJCiq9bGc2lPtgCz7As0lid9YX3DXK8Pq2HZ00MaJk4Eex'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Payer maintenant'
            name='Amaop'
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Votre total est de ${price}€`}
            amount={priceForStripe}
            panelLabel='Payer maintenant'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
