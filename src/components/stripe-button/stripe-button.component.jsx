import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IJ4KLB4cWFQKq7G2NiYUJWYHGAiS2L7Sgk2Zt9bfNzARYTKo03Wa3FoFKN1iuiAfvtuHTDY2m0yI4wN0vJlkShG00maAiibgX';

    const onToken = (token) => {
        alert('Payment successful')
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Yamaninni Smart Dressing Ltd'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        >

        </StripeCheckout>
    );
}

export default StripeCheckoutButton