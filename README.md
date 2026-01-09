# Eventify Frontend

Eventify is a modern, responsive event management platform frontend built with **NextJs**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.  
It allows users to explore, join, and host events while providing a clean and interactive UI experience.

---

## 🌐 Live Deployment

- **Frontend:** [https://events-activities-frontend-ochre.vercel.app](https://events-activities-frontend-ochre.vercel.app)  
- **Backend API:** [https://events-activities-frontend-ochre.vercel.app](https://events-activities-frontend-ochre.vercel.app)

---

## 📦 Features

- **Explore Events**: Users can browse and filter upcoming events.
- **Event Details**: View detailed information about each event.
- **Join Events**: Register for events and view participant information.
- **Role-based UI**:
  - **USER**: Explore events, become a host.
  - **HOST**: Explore events, manage your events.
  - **ADMIN / SUPERADMIN**: Explore events, access the dashboard.
- **Contact Form**: Animated form with API integration and toast notifications.
- **FAQ Section**: Collapsible questions and answers.
- **Sponsors Section**: Show trusted sponsors with hover effects.
- **Animated Hero Section**: Parallax and scroll-based animations with changing headings.
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop.

---

## ⚡ Technologies Used

- **Frontend**:
  - Nextjs
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animations & scroll effects)
  - Lucide React Icons
  - react-hot-toast (notifications)
- **State Management & API Calls**:
  - Custom services for API requests
- **Routing**:
  - Next.js App Router (`app` directory)

---


## ⚙️ Setup Instructions

1. Clone the repo and navigate to the frontend folder:

```bash
git clone https://github.com/showorv/Events_Activities_Frontend.git

cd ../client-side

npm install

```
2. Create a .env file (if needed):

```bash
NEXT_PUBLIC_BASE_API_URL=https://yourbackendlink.com
```
3. Start development server:

```bash
npm run dev
```
---

## Credentials

```bash

## Super Admin
SUPER_ADMIN_EMAIL=yousufshowrov101@gmail.com
SUPER_ADMIN_PASSWORD=yousuf12

## Host

HOST_EMAIL=showrov124@gmail.com
HOST_PASSWORD=Hello12

## User

USER_EMAIL=showrov121@gmail.com
USER_PASSWORD=Hello123

```
## 🧑‍💻 Author

**Yousuf Showrov**

Feel free to reach out on `GitHub` or `LinkedIn` for suggestions or contributions.