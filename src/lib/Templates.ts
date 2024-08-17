export interface Template {
    id: string 
    name: string
    text: string
}

export const Templates: Template[] = [
    {
        id: "1",
        name: "Confirmation",
        text: `Margarita Machine Delivery Confirmation for {rental.startDate}

Hi {client.name},

Thank you for choosing Fiesta Freeze Rentals for your event! We’re all set to make your occasion a success. 

Below are the details of your margarita machine rental for {rental.startDate}:

1. Machine and Mixes:
    * Machine Model: {rental.machine} 
    * Margarita Mixes: {rental.mixes}
2. Accessories Included:
    * We will provide a utility cart for easy setup and mobility of the machine.
    * Accessories included: cups, straws, a pitcher and mixing container, and an extension cord for your convenience.
3. Delivery Details:
    * Delivery Address: {rental.address}
    * Delivery Time Window: {rental.startDate} between {rental.dropOffStart} and {rental.dropOffEnd}
4. Pick-Up Details:
    * Pick-Up Time Window: {rental.endDate} between {rental.pickupStart} and {rental.pickupEnd}

To ensure a smooth setup, could you please confirm if there are stairs leading to the setup area?

Please review the above details and let us know if there are any changes or additional requirements. Your satisfaction and the smooth running of your event are our top priorities!

Additionally, attached to this document is a rental agreement for your review. You will be able to digitally sign the agreement in person on the day of delivery.

If everything looks good, you don’t need to do anything further. However, if you have any questions or need to adjust any details, feel free to contact us at fiestafreezerentals@gmail.com or (402) 616-1179.

Looking forward to making your event one for the books!

Best,
Jack and Maddie Davidson`
    },
    {
        id: "2",
        name: "Contract",
        text: `This Rental Agreement ("Agreement") is made and entered into as of {document.date}, by and between Fiesta Freeze Rentals ("Owner"), and {client.name} ("Renter").

1. EQUIPMENT RENTAL The Owner agrees to rent the following equipment to the Renter: {rental.machine} ("Equipment"), subject to the terms and conditions set forth in this Agreement.

2. RENTAL PERIOD The rental period shall commence on {rental.startDate} at {rental.startTime} and end on {rental.endDate} at {rental.endTime}.

3. RENTAL FEE The total rental fee is {rental.total}.

4. DELIVERY, SETUP, AND REMOVAL The Owner is responsible for the delivery, setup, and removal of the Equipment. The Renter shall provide a safe and appropriate environment for the Equipment.

5. USE OF EQUIPMENT The Renter agrees to operate the Equipment according to the Owner’s instructions. Misuse or damage to the Equipment during the rental period will be the sole responsibility of the Renter, who agrees to be charged for any repair or replacement costs.

6. CANCELLATION POLICY Cancellations must be made at least 7 days before the scheduled rental date to receive a full refund. Cancellations made less than 7 days from the rental date will result in a partial refund (75% of total cost).

7. LIABILITY THE OWNER SHALL NOT BE HELD LIABLE FOR ANY INJURIES, DAMAGES, OR LOSSES RESULTING FROM THE RENTER'S USE OF THE EQUIPMENT. THE RENTER AGREES TO INDEMNIFY AND HOLD THE OWNER HARMLESS FROM ANY CLAIMS, DAMAGES, LAWSUITS, AND EXPENSES ARISING FROM RENTER’S USE OF THE EQUIPMENT.

8. ENTIRE AGREEMENT This Agreement constitutes the entire agreement between the parties. Any modifications to this Agreement must be made in writing and signed by both parties.

ACCEPTANCE By signing below, the Renter agrees to all terms and conditions set forth in this Agreement and confirms that all information provided is accurate and true.`
    }
]