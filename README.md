# AROX Website — Marketing & Admissions Portal

Official public-facing marketing, course catalog, and internship application website for AROX Tech.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the website (Port 3000)
npm run dev
```

Visit: **http://localhost:3000**

---

## ⚙️ Configuration (.env)

| Variable | Default | Purpose |
|----------|---------|---------|
| `PORT` | `3000` | Port for the website server |
| `ERP_URL` | `http://localhost:5000` | Target URL for ERP portal redirections & API proxy |

---

## 🔗 ERP Integration

- **Portals & Login**: Clicking "Login" or accessing `/login` redirects visitors seamlessly to the ERP authentication portal at `${ERP_URL}/login`.
- **Application API**: Registrations submitted via `/apply` and `/courses` are transparently proxied to `${ERP_URL}/api/registrations/apply`, avoiding CORS limitations and keeping forms unified.
- **Certificate Verification**: Navigating to `/verify-certificate` redirects to the verified certificate engine in ERP.
