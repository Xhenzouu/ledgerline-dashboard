# Ledgerline — SaaS Analytics Dashboard

A premium, multi-page B2B SaaS analytics dashboard designed to rival the UI of Stripe and Vercel. Built with React and Tailwind CSS, featuring custom SVG data visualizations with zero external chart libraries.

**Live Demo:** [ledgerline-dashboard.lovable.app](https://ledgerline-dashboard.lovable.app)

## Features

- **Multi-Page Routing:** Fully functional sidebar navigation (Dashboard, Analytics, Customers, Billing, Settings).
- **KPI Cards:** Data grids for MRR, Active Users, Churn Rate, and ARPU with conditional positive/negative styling.
- **Custom SVG Charts:** A 12-month revenue area chart built using pure React SVG `<polyline>` and `<polygon>` elements (no Recharts or Chart.js).
- **Data Tables & Funnels:** Clean recent transactions table and a pure CSS conversion funnel.
- **Premium Dark UI:** Strict flat charcoal design system with no gradients or glowing effects.

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router (or equivalent)

## Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/Xhenzouu/ledgerline-dashboard.git
   cd ledgerline-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```
