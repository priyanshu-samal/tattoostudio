# Takshila Tattoo Studio - Landing Page

A premium, high-performance landing page for Takshila Tattoo Studio, built with **Next.js 15**, **Tailwind CSS**, and **Google Authentication**.

## 🚀 Status: Completed
*   **Live Demo:** [Insert Vercel Link]
*   **Authentication:** Fully integrated with Google OAuth + Custom Backend API.

---

## 🛠️ Tech Stack
*   **Framework:** Next.js 15 (App Router)
*   **Styling:** Tailwind CSS (Utility-first)
*   **Fonts:** `Rozha One` (Headings), `Playfair Display` (Italic accents), `Inter` (Body).
*   **Authentication:** `@react-oauth/google` + Backend Proxy Pattern.
*   **Analytics:** Vercel Analytics.

---

## ✨ Key Features

### 1. **Premium Aesthetic & UI**
*   **Hero Section:** Magazine-style layout with Hindi typography ("तक्षशिला").
*   **The Makers:** 3D Flip cards showcasing artists and their work.
*   **Video Carousel:** Infinite scrolling marquee for vertical video content.
*   **The Ritual:** Smooth accordion/FAQ section for process details.
*   **Responsive:** Fully optimized for mobile, tablet, and desktop.

### 2. **Authentication (BFF Pattern)**
*   **Google Sign-In:** Integrated via `@react-oauth/google`.
*   **BFF Proxy:** Implemented a **Backend-for-Frontend (BFF)** proxy using Next.js API Routes (`api/auth/login`, `api/user/profile`) to:
    *   Bypass CORS restrictions.
    *   Securely handle Cookies (Forwarding `Set-Cookie` headers).
*   **Protected Dashboard:**
    *   **Middleware Protection**: Server-side redirect if not authenticated.
    *   **Client Verification**: Fetches user profile immediately on load.
    *   **Server-Side Logout**: dedicated API route to strictly clear session cookies.

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/priyanshu-samal/tattoostudio.git
cd tattoostudio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
NEXT_PUBLIC_API_URL=https://smarttattooautomation.saturnai.in/api
```

### 4. Run Locally
```bash
npm run dev
```
Visit `http://localhost:3000` to see the site.

---

## 🔒 Authentication Deployment Notes

To make Google Login work on a deployed URL (e.g., Vercel):

1.  **Google Cloud Console**:
    *   Go to your OAuth Client settings.
    *   Add your deployment domain (e.g., `https://your-app.vercel.app`) to **Authorized JavaScript origins**.
    *   *Note: Using a proxy does not bypass this requirement for the initial Google Popup.*

2.  **Backend Whitelist**:
    *   Ensure the email address you are testing with is whitelisted by the backend API.

---

## 📂 Project Structure

```
├── app/
│   ├── api/               # Proxy API Routes (Auth, User)
│   ├── dashboard/         # Protected User Dashboard
│   ├── layout.tsx         # Root Layout (Fonts, Google Wrapper)
│   └── page.tsx           # Home Page composition
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Landing Page Sections (Hero, Ritual, Makers...)
│   └── providers/         # Context Providers
├── lib/                   # Utilities (Middleware logic)
├── middleware.ts          # Server-side Route Protection
└── public/                # Static assets (images, fonts)
```
