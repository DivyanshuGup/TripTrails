# ✈️ TripTrails — Explore Your Perfect Destination

TripTrails is a travel booking website where users can explore destinations, browse curated tour packages, and connect with travel experts — all in one place. It's built to feel clean, fast, and genuinely enjoyable to use.

---

## 🌍 What Is This Project?

This is a fully responsive, single-page travel website built entirely with **HTML, CSS, JavaScript, and PHP** — no frameworks, no dependencies. Just clean, well-organized code that anyone can open, read, and understand.

The goal was simple: build a beautiful travel platform where users can plan their next trip without feeling overwhelmed.

---

## ✨ What's Inside

Here's a quick walkthrough of everything the website includes:

**Hero Section**
A full-screen landing area with key stats — 500+ Destinations, 12,000+ Happy Travelers, and a 98% Satisfaction rate.

**Smart Search Bar**
Users can filter by Destination, Check-in Date, Trip Duration, and Number of Travelers right from the homepage.

**Featured Destinations**
Clickable destination cards for Bali, Paris, Maldives, Santorini, and Tokyo — each showing ratings, reviews, and starting price.

**Travel Categories**
A horizontally scrollable filter strip: Beach, Mountains, City Tours, Adventure, Culture, Wildlife, and Cruise.

**Tour Packages**
6 all-inclusive packages with clear pricing, included features (flights, hotel, meals, transfers), and a direct "Book Now" button.

**How It Works**
A simple 4-step booking flow: Choose Destination → Select Package → Book & Pay → Pack & Travel.

**Travel Gallery**
A grid of real travel photos that gives the website a genuine, lived-in feel.

**Testimonials**
Reviews from real traveler profiles with photos, destinations visited, and star ratings.

**Newsletter Section**
Email subscription with PHP backend so signups are actually captured.

**Contact & Booking Form**
A full inquiry form where users can mention their preferred destination and budget. Also handled by a PHP backend.

**Destination Modal**
Clicking any destination opens a detailed popup with a description, pricing, and a booking CTA.

**Wishlist**
Users can heart-save their favourite destinations and packages.

**Toast Notifications**
Small popup messages give users instant feedback on every action — adding to wishlist, submitting a form, subscribing, etc.

**Back to Top Button**
Appears after scrolling down and smoothly takes you back to the top.

**Responsive Navbar**
On mobile, the nav collapses into a hamburger menu with a smooth open/close animation.

---

## 🗂️ Project Structure

```
TripTrails/
│
├── index.html              # The entire website lives here
│
├── css/
│   └── style.css           # All styling — layout, colors, animations, responsive breakpoints
│
├── js/
│   └── script.js           # All interactivity — modal, search, wishlist, toast, filters
│
├── php/
│   ├── contact.php         # Handles contact form submissions
│   └── newsletter.php      # Handles newsletter email subscriptions
│
└── images/
    ├── destinations/       # Hero images for each destination
    ├── packages/           # Card images for tour packages
    ├── gallery/            # Travel gallery photos
    └── avatars/            # Profile pictures used in testimonials
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and content |
| **CSS3** | Styling, layout, animations, and responsive design |
| **JavaScript (Vanilla)** | All interactive behavior — modals, filters, toasts, wishlist |
| **PHP** | Backend handling for contact and newsletter forms |
| **Google Fonts** | Playfair Display (headings) + DM Sans (body text) |
| **Intersection Observer API** | Scroll-triggered reveal animations |

---

## 🚀 How to Run It Locally

No build tools, no package installs. Just clone and open.

**1. Clone the repository**
```bash
git clone https://github.com/your-username/TripTrails.git
```

**2. Navigate into the folder**
```bash
cd TripTrails
```

**3. Open the website**
Simply open `index.html` in any browser and you're good to go.

> **Need PHP forms to work?** Run the project through a local server like **XAMPP**, **WAMP**, or **MAMP**. The HTML, CSS, and JavaScript parts work perfectly fine without a server.

---

## 📦 Tour Packages at a Glance

| Destination | Package | Duration | Starting Price |
|---|---|---|---|
| 🌴 Bali, Indonesia | Bali Island Bliss | 7 Days | $899 / person |
| 🗼 Paris, France | Paris Romantic Getaway | 5 Days | $1,299 / person |
| 🏝️ Maldives | Overwater Villa Escape | 6 Days | $2,499 / person |
| 🌅 Santorini, Greece | Santorini Sunset Escape | 8 Days | $1,599 / person |
| 🗾 Tokyo, Japan | Tokyo Sakura Explorer | 10 Days | $1,199 / person |
| 🌊 Amalfi Coast, Italy | Amalfi Coastal Drive | 7 Days | $1,799 / person |

---

## 📱 Responsive Design

The website is designed to look great on every screen size.

- **Desktop** — Full-width grids, multi-column sections, hover effects
- **Tablet** — Adjusted spacing, two-column layouts where needed
- **Mobile** — Single-column layout, hamburger nav, touch-friendly buttons and tap targets
