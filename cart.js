// // Set rates + misc
// var taxRate = 0.05;
// var fadeTime = 300;

// // Assign actions
// $('.product-quantity input').change(function () {
//     updateQuantity(this);
// });

// $('.product-removal button').click(function () {
//     removeItem(this);
// });

// // Recalculate cart
// function recalculateCart() {
//     var subtotal = 0;

//     // Sum up row totals
//     $('.product').each(function () {
//         subtotal += parseFloat($(this).children('.product-line-price').text());
//     });

//     // Calculate totals
//     var tax = subtotal * taxRate;
//     var total = subtotal + tax;

//     // Update totals display
//     $('.totals-value').fadeOut(fadeTime, function () {
//         $('#cart-subtotal').html(subtotal.toFixed(2));
//         $('#cart-tax').html(tax.toFixed(2));
//         $('#cart-total').html(total.toFixed(2));
//         if (total == 0) {
//             $('.checkout').fadeOut(fadeTime);
//         } else {
//             $('.checkout').fadeIn(fadeTime);
//         }
//         $('.totals-value').fadeIn(fadeTime);
//     });
// }

// // Update quantity
// function updateQuantity(quantityInput) {
//     var productRow = $(quantityInput).closest('.product');
//     var price = parseFloat(productRow.find('.product-price').text());
//     var quantity = parseInt($(quantityInput).val());
//     var linePrice = price * quantity;

//     productRow.find('.product-line-price').fadeOut(fadeTime, function () {
//         $(this).text(linePrice.toFixed(2));
//         recalculateCart();
//         $(this).fadeIn(fadeTime);
//     });
// }

// // Remove item from cart
// function removeItem(removeButton) {
//     var productRow = $(removeButton).closest('.product');
//     productRow.slideUp(fadeTime, function () {
//         productRow.remove();
//         recalculateCart();
//     });
// }
