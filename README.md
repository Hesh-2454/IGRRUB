# 🛍️ IGRRUB - Gen Z/Gen Alpha E-Commerce Platform

> Shop like it's 2026

## Features

✨ **Simple & Fast** - Clean interface built for Gen Z/Gen Alpha  
💰 **Automated Price Calculator** - Instant cost calculations  
📱 **Responsive Design** - Works on all devices  
🌍 **Global Marketplace** - Amazon & Alibaba style  

## Price Calculator Engine

The calculator automatically computes landed costs:

1. **Base Price (USD)** - Product cost in dollars
2. **60% Markup** - Applied to base price
3. **AED 35 Delivery Fee** - Flat shipping cost
4. **Final Price** - Total in AED & USD

### Formula
```
Landed Cost (AED) = (Base Price USD × 1.60 × 3.67) + 35
Landed Cost (USD) = Landed Cost AED ÷ 3.67
```

## Quick Start

1. Open `index.html` in your browser
2. Enter a base price in USD
3. Click "Calculate Price"
4. See instant breakdown with final price

## Files

- `index.html` - Main website
- `style.css` - Styling
- `calculator.js` - Price calculation logic
- `README.md` - Documentation

## Exchange Rate

Current rate: 1 USD = 3.67 AED (update in `calculator.js` as needed)

---

Built for Gen Z. Made simple. 🚀