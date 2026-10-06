require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const http = require('http');
const https = require('https');
const { URL } = require('url');

const app = express();
const PORT = process.env.PORT || 3000;
const ERP_URL = process.env.ERP_URL || 'http://localhost:5000';

app.set('trust proxy', 1);
app.use(cors());
app.use(compression());

// Parse JSON and form data for standard requests if needed
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static Assets
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/images', express.static(path.join(__dirname, 'public', 'assets')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname, { redirect: false }));

// Prevent well-known 404s
app.get('/.well-known/*', (req, res) => res.status(204).end());

// ==========================================
// Proxy API requests to ERP Backend
// ==========================================
app.use('/api', (req, res) => {
  const targetUrl = new URL(req.originalUrl, ERP_URL);
  const clientLib = targetUrl.protocol === 'https:' ? https : http;

  const headers = { ...req.headers };
  delete headers['host']; // Let the target host header be set
  headers['x-forwarded-host'] = req.get('host') || `localhost:${PORT}`;
  headers['x-forwarded-proto'] = req.protocol;

  const proxyReq = clientLib.request(
    targetUrl,
    {
      method: req.method,
      headers: headers
    },
    (proxyRes) => {
      res.status(proxyRes.statusCode);
      for (const [key, value] of Object.entries(proxyRes.headers)) {
        res.setHeader(key, value);
      }
      proxyRes.pipe(res);
    }
  );

  proxyReq.on('error', (err) => {
    console.error(`[API Proxy Error] Failed to reach ERP at ${targetUrl.href}:`, err.message);
    res.status(502).json({
      error: 'ERP Service Unavailable',
      message: `Could not connect to ERP backend at ${ERP_URL}. Ensure ERP server is running on port 5000.`
    });
  });

  if (req.body && Object.keys(req.body).length > 0) {
    const bodyData = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    if (!req.headers['content-type']?.includes('application/json')) {
      // urlencoded re-encode
      const params = new URLSearchParams(req.body).toString();
      proxyReq.setHeader('Content-Length', Buffer.byteLength(params));
      proxyReq.write(params);
    } else {
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      proxyReq.write(bodyData);
    }
  }

  req.pipe(proxyReq);
});

// ==========================================
// Auth & Navigation Routes
// ==========================================
app.get(['/login', '/login.html'], (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get(['/signup', '/signup.html', '/register'], (req, res) => res.sendFile(path.join(__dirname, 'signup.html')));
app.get('/portal', (req, res) => res.redirect('/login'));
app.use(['/admin', '/admin/*'], (req, res) => res.redirect(`${ERP_URL}${req.originalUrl}`));
app.use(['/student', '/student/*'], (req, res) => res.redirect(`${ERP_URL}${req.originalUrl}`));
app.get('/verify-certificate', (req, res) => res.redirect(`${ERP_URL}/cert/index.html`));
app.use(['/cert', '/cert/*'], (req, res) => res.redirect(`${ERP_URL}${req.originalUrl}`));
app.use(['/attendance', '/attendance/*'], (req, res) => res.redirect(`${ERP_URL}${req.originalUrl}`));
app.use(['/offerletter', '/offerletter/*'], (req, res) => res.redirect(`${ERP_URL}${req.originalUrl}`));
app.use(['/project', '/project/*'], (req, res) => res.redirect(`${ERP_URL}${req.originalUrl}`));

// ==========================================
// Website Public Page Routes
// ==========================================
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get(['/about', '/about.html'], (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get(['/services', '/services.html'], (req, res) => res.sendFile(path.join(__dirname, 'services.html')));
app.get(['/courses', '/courses.html'], (req, res) => res.sendFile(path.join(__dirname, 'courses.html')));
app.get(['/contact', '/contact.html'], (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));
app.get(['/apply', '/apply.html'], (req, res) => res.sendFile(path.join(__dirname, 'apply.html')));
app.get('/course/:slug', (req, res) => res.sendFile(path.join(__dirname, 'detail.html')));
app.get('/training', (req, res) => res.redirect('/courses.html'));
app.get('/internships', (req, res) => res.redirect('/courses.html?tab=internship'));
app.get('/footer.html', (req, res) => res.sendFile(path.join(__dirname, 'footer.html')));

// 404 Handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start Website Server
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════════╗
  ║                                          ║
  ║     🌐  AROX Marketing Website Running   ║
  ║                                          ║
  ║     Port:     ${PORT}                       ║
  ║     URL:      http://localhost:${PORT}       ║
  ║     ERP Host: ${ERP_URL}             ║
  ║                                          ║
  ╚══════════════════════════════════════════╝
  `);
});

module.exports = app;
