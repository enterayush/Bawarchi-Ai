🍽️ **BAWARCHI AI — EAT WHAT YOU HAVE**
======================================

Bawarchi AI is a smart recipe generator that helps you cook meals using the ingredients you already have.  
Just enter your ingredients — and the app suggests creative recipes powered by AI.

🌐 **Live Website:** https://bawarchi-ai.vercel.app/  
⚛️ **Built With:** **React • Vite • Gemini API (Serverless Backend)**

---

✨ **FEATURES**
--------------

- 🧾 Add ingredients dynamically  
- 🤖 AI-generated recipes from your ingredient list  
- 🧩 Soft paper-texture floating-card UI  
- 📱 Fully responsive — mobile, tablet & desktop  
- 💨 Secure serverless backend (no exposed keys)  
- 🎨 Warm, cozy food-brand color theme  

---

🧠 **HOW IT WORKS**
-------------------

1. Enter your ingredients  
2. Click **Get Recipe**  
3. Ingredients are sent to the **Gemini AI model**  
4. The model returns a structured recipe in Markdown  
5. The recipe is rendered beautifully in the UI  

---

🏗️ **TECH STACK**
-----------------

**Frontend**
- React + Vite  
- Custom Responsive CSS  

**Backend**
- Vercel Serverless Function (`/api/recipe`)
- Gemini API (environment-secured key)

**Deployment**
- Vercel (Auto builds + HTTPS)

---

🚀 **RUN LOCALLY**
------------------

```bash
git clone <repo-url>
cd bawarchi-ai
npm install
npm run dev

Backend (serverless):
vercel dev

Environment variable:
GEMINI_API_KEY=your_key_here
```


🌍 **LIVE DEPLOYMENT**
----------------------

Hosted on **Vercel** with secure API routing.

👉 https://bawarchi-ai.vercel.app/


📱 **RESPONSIVE DESIGN**
------------------------

- Mobile-first layout  
- Smooth card scaling  
- Stacked form on smaller screens  
- Adaptive spacing & shadows  


🧩 **FUTURE IMPROVEMENTS**
--------------------------

- ⏳ Typing animation while recipe generates  
- ⚠️ Better API quota & failure handling  
- 🗄️ Saved ingredients & recipe history  
- 👤 Personalized recipe suggestions  


🤝 **CONTRIBUTIONS**
--------------------

Contributions and suggestions are welcome — feel free to open issues or PRs.
