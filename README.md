# 🌟 Bottoli Young Star Club Website

Official website of **Bottoli Young Star Club** — a non-political, volunteer-based social and sports organization established in **2012**.

This project is built to digitize the organization's activities, members, events, notices, committee information, and other official records.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Firebase Firestore
- **Authentication:** Firebase Authentication
- **Storage:** Firebase Storage
- **Hosting:** Cloudflare Pages
- **CDN & DNS:** Cloudflare
- **Image Optimization:** Next.js Image
- **Deployment:** Cloudflare Pages + GitHub

---

## 📁 Project Structure

```
app/
components/
lib/
hooks/
types/
public/
styles/
firebase/
```

---

## ⚙️ Requirements

- Node.js >= 20
- npm / pnpm / yarn
- Firebase Project
- Cloudflare Account
- GitHub Account

---

## 🔥 Firebase Setup

Create a Firebase project and enable:

- Authentication
- Firestore Database
- Storage

Create a `.env.local`

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-org/bottoli-young-star-club.git
```

Move into project

```bash
cd bottoli-young-star-club
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 🏗 Build

```bash
npm run build
```

Start production server

```bash
npm start
```

---

## ☁️ Cloudflare Deployment

### Install Wrangler

```bash
npm install -D wrangler
```

Login

```bash
npx wrangler login
```

Deploy

```bash
npm run deploy
```

Or connect the GitHub repository directly with **Cloudflare Pages**.

Build Settings

```
Framework Preset:
Next.js

Build Command:
npm run build

Output Directory:
.next
```

---

## 🌐 Environment Variables

Configure the following variables in **Cloudflare Pages**:

- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- NEXT_PUBLIC_FIREBASE_APP_ID

---

## ✨ Planned Features

- Home Page
- About Organization
- Committee Members
- Member Directory
- Events
- Gallery
- News & Notices
- Donation System
- Financial Transparency
- Volunteer Registration
- Contact Page
- Admin Dashboard
- Role-based Authentication
- File & Document Archive

---

## 🔒 Security

- Firebase Authentication
- Firestore Security Rules
- Cloudflare Security
- HTTPS
- Environment Variables
- Protected Admin Routes

---

## 🧪 Development

Run lint

```bash
npm run lint
```

Format

```bash
npm run format
```

Type checking

```bash
npm run type-check
```

---

## 📌 Git Workflow

Create feature branch

```bash
git checkout -b feature/new-feature
```

Commit

```bash
git commit -m "Add new feature"
```

Push

```bash
git push origin feature/new-feature
```

Create Pull Request.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 📄 License

This project is developed for **Bottoli Young Star Club**.

All organizational documents, logos, and media belong to the organization.

---

## ❤️ Developed By

IT Department  
Bottoli Young Star Club

Powered by

- Next.js
- Firebase
- Cloudflare
- GitHub
