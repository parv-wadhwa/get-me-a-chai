#  Get Me A Chai

A full-stack web application where users can support creators by buying them a chai (similar to "Buy Me a Coffee"). Built using modern web technologies with secure authentication and payment integration.

---

##  Features

*  User Authentication (Google / GitHub login)
*  User Dashboard to manage profile and details
*  Razorpay Payment Integration
*  Supporters can send messages with payments
*  Dashboard to view supporters & transactions
*  Fully responsive UI
*  Fast performance with Next.js

---

##  Tech Stack

**Frontend:**

* HTML
* CSS
* JavaScript
* Next.js

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB

**Other Integrations:**

* Razorpay (Payments)
* NextAuth (Authentication)

---

##  Folder Structure

```
/app
/components
/models
/db
/public
```

---

##  Environment Variables

Create a `.env.local` file and add the following:

```
GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_KEY_ID=
KEY_SECRET=

MONGODB_URI=
```

---

##  Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/get-me-a-chai.git
```

2. Navigate to project folder

```
cd get-me-a-chai
```

3. Install dependencies

```
npm install
```

4. Run the development server

```
npm run dev
```

5. Open in browser

```
http://localhost:3000
```

---

##  How It Works

* Users sign in using Google or GitHub
* Each user gets a personalized page (username-based route)
* Supporters can send money along with a message
* Payments are processed via Razorpay
* User can view supporters in dashboard


---

## 🌍 Deployment

Deployed on **Vercel**

To deploy:

* Push code to GitHub
* Import project in Vercel
* Add environment variables
* Deploy 🚀

---

##  Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

##  Show Your Support

If you like this project, give it a ⭐ on GitHub!
