# 🚀 Portfolio - Ruturaj Chaubey

A modern, high-performance portfolio website built with **Next.js 15**, **React 19**, **Tailwind CSS**, **Sanity CMS**, and **Supabase**. This project showcases a blend of clean UI/UX and interactive animations to provide a premium user experience.

## ✨ Features

- **Dynamic Content**: Managed seamleslly via **Sanity CMS**.
- **Visitor Tracking**: Real-time visitor counts powered by **Supabase**.
- **Interactive Animations**: Smooth transitions and micro-interactions using **GSAP** and **Framer Motion**.
- **GitHub Contribution Chart**: Integrated visualization of coding activity.
- **Projects Showcase**: A dedicated section for highlight-worthy projects with detail cards.
- **Experience Timeline**: A structured view of professional journey.
- **Dark Mode**: Native support for light and dark themes using `next-themes`.
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Database**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📂 Project Structure

```text
├── app/               # Next.js App Router (pages and API routes)
├── components/        # Reusable UI components
│   ├── About/         # Components related to the About section
│   ├── Projects/      # Project list and cards
│   ├── ui/            # Shared UI elements (buttons, cards, etc.)
│   └── animation/     # Wrapper components for motion effects
├── data/              # Static configuration and project data
├── lib/               # Utility functions and shared logic
├── public/            # Static assets (images, audio, fonts)
├── sanity/            # Sanity CMS schemas and configuration
└── types/             # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18+
- **pnpm**: v9+ (recommended)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RChaubey16/portfolio-xyz.git
   cd portfolio-xyz
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add your credentials:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=...
   NEXT_PUBLIC_SANITY_DATASET=...
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

4. **Run the development server**:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is [MIT](LICENSE) licensed.
