/**
 * shared.js — Karol Jasztal Portfolio & Case Studies Global Script
 * Single Source of Truth for Theme, Footer, & Interactive Primitives
 */

// 1. Immediate Theme Pre-Initialization (Prevents Dark Mode Flash / FOUC)
(function applyThemeEarly() {
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    // Ignored in restricted environments
  }
})();

// 2. Safe Storage Access Helpers
function getStoredTheme() {
  try {
    return localStorage.getItem('theme');
  } catch (e) {
    return null;
  }
}

function setStoredTheme(val) {
  try {
    localStorage.setItem('theme', val);
  } catch (e) {
    // Ignored in restricted environments
  }
}

// 3. Theme Toggle & Icon Management
function updateThemeIcon(isDark) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (isDark) {
    icon.innerHTML = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>';
  } else {
    icon.innerHTML = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>';
  }
}

function initTheme() {
  const savedTheme = getStoredTheme();
  const isDark = savedTheme === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon(isDark);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn && !toggleBtn.dataset.themeBound) {
    toggleBtn.dataset.themeBound = 'true';
    toggleBtn.addEventListener('click', () => {
      const willBeDark = !document.documentElement.classList.contains('dark');
      if (willBeDark) {
        document.documentElement.classList.add('dark');
        setStoredTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        setStoredTheme('light');
      }
      updateThemeIcon(willBeDark);
    });
  }
}

// 4. Centralized Footer Component (Single Source of Truth)
function renderSiteFooter() {
  const footer = document.getElementById('site-footer') || document.querySelector('footer');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `<p>&copy; ${year} Karol Jasztal &bull; Hosted on GitHub Pages &bull; All Rights Reserved</p>`;
  }
}

// 5. Hardened Clipboard Copy Engine with Fallback & Null-Checks
function copySnippet(id, btn) {
  const el = document.getElementById(id);
  if (!el || !btn) return;
  const text = el.innerText;
  const orig = btn.innerText;

  function onCopySuccess() {
    btn.innerText = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerText = orig;
      btn.classList.remove('copied');
    }, 2000);
  }

  function onCopyFailure() {
    btn.innerText = 'Copy Failed';
    setTimeout(() => {
      btn.innerText = orig;
    }, 2000);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(onCopySuccess)
      .catch(() => tryFallbackCopy(text, onCopySuccess, onCopyFailure));
  } else {
    tryFallbackCopy(text, onCopySuccess, onCopyFailure);
  }
}

function tryFallbackCopy(text, onSuccess, onFailure) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.className = 'clipboard-hidden-area';
    document.body.appendChild(textarea);
    textarea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    if (successful) onSuccess(); else onFailure();
  } catch (err) {
    onFailure();
  }
}

// 6. Safe HTML Escaper Utility
function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// 7. Auto-Initialization on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSiteFooter();
  });
} else {
  initTheme();
  renderSiteFooter();
}
