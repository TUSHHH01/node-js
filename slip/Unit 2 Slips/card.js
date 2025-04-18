// card.js
function maskCardNumber(cardnumber) {
    // if (!cardnumber) {
    //     throw new Error("Please provide a card number.");
    // }

    const maskednumber = "*******" + cardnumber.slice(-3);
    console.log(maskednumber) ;
}

module.exports = maskCardNumber;
