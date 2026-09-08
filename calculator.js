// IGRRUB Price Calculator Engine

const MARKUP_PERCENTAGE = 60; // 60% markup
const DELIVERY_FEE_AED = 35; // AED 35 delivery
const USD_TO_AED_RATE = 3.67; // Current exchange rate

function calculatePrice(basePrice = null) {
    // Get price from input or parameter
    if (basePrice === null) {
        basePrice = parseFloat(document.getElementById('basePrice').value);
    } else {
        basePrice = parseFloat(basePrice);
        document.getElementById('basePrice').value = basePrice;
    }

    // Validate input
    if (isNaN(basePrice) || basePrice < 0) {
        showError('Please enter a valid price');
        return;
    }

    // Calculate landed cost
    const markupAmount = basePrice * (MARKUP_PERCENTAGE / 100);
    const subtotal = basePrice + markupAmount;
    const subtotalAED = subtotal * USD_TO_AED_RATE;
    const totalAED = subtotalAED + DELIVERY_FEE_AED;
    const totalUSD = totalAED / USD_TO_AED_RATE;

    // Display results
    displayResults(basePrice, markupAmount, subtotal, subtotalAED, totalAED, totalUSD);
}

function displayResults(base, markup, subtotal, subtotalAED, totalAED, totalUSD) {
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = `
        <h3>💰 Price Breakdown</h3>
        <p><strong>Base Price (USD):</strong> $${base.toFixed(2)}</p>
        <p><strong>60% Markup:</strong> $${markup.toFixed(2)}</p>
        <p><strong>Subtotal (USD):</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>Subtotal (AED):</strong> د.إ${subtotalAED.toFixed(2)}</p>
        <p><strong>Delivery Fee:</strong> د.إ${DELIVERY_FEE_AED.toFixed(2)}</p>
        <div class="final-price">🎯 Final Price: د.إ${totalAED.toFixed(2)} / $${totalUSD.toFixed(2)}</div>
    `;
    resultDiv.classList.add('show');
}

function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p style="color: #e74c3c;">❌ ${message}</p>`;
    resultDiv.classList.add('show');
}

// Allow Enter key to calculate
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('basePrice');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculatePrice();
            }
        });
    }
});