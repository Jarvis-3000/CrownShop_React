import React from "react"

import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton=({price})=>{
    
    const priceForStripe=price * 100
    const publishableKey='pk_test_51IKFcQCDdAYyEQy0MDeastLKBJhB4xGN4KozIw4eEj2ipMOVw3KhZ4dCpWRep2mgHrycTwPoimkWEAwZF1pVZv4M00JJ5m1Y9H'

    const onToken=(token)=>{
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN CLOTHING SHOP'
            billingAddress
            shippingAddress
            image='http://localhost:3000/crown.png '
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton