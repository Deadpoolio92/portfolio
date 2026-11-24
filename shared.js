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
  const text = el.innerText || el.textContent;
  const origHtml = btn.innerHTML;
  const copySvg = btn.querySelector('.copy-icon-svg');
  const checkSvg = btn.querySelector('.check-icon-svg');

  function onCopySuccess() {
    btn.classList.add('copied');
    if (copySvg && checkSvg) {
      copySvg.style.display = 'none';
      checkSvg.style.display = 'inline-block';
      btn.setAttribute('title', 'Copied!');
    } else {
      btn.innerText = 'Copied!';
    }
    setTimeout(() => {
      btn.classList.remove('copied');
      if (copySvg && checkSvg) {
        copySvg.style.display = 'inline-block';
        checkSvg.style.display = 'none';
        btn.setAttribute('title', 'Copy to clipboard');
      } else {
        btn.innerHTML = origHtml;
      }
    }, 2000);
  }

  function onCopyFailure() {
    btn.classList.add('copy-failed');
    if (!copySvg) btn.innerText = 'Copy Failed';
    setTimeout(() => {
      btn.classList.remove('copy-failed');
      btn.innerHTML = origHtml;
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

// 7. Interactive Tabs Component (Dual-Mode: Interactive on Screen, Unrolled in Print)
function initTabs() {
  const containers = document.querySelectorAll('.tabs-container');
  containers.forEach(container => {
    const tabButtons = container.querySelectorAll('.tab-btn');
    const tabPanels = container.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        if (!targetId) return;

        // Deactivate all buttons in this container
        tabButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });

        // Deactivate all panels in this container
        tabPanels.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-hidden', 'true');
        });

        // Activate clicked button
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Activate target panel
        const targetPanel = container.querySelector('#' + targetId) || document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add('active');
          targetPanel.setAttribute('aria-hidden', 'false');
        }
      });
    });
  });
}

// 7. Capsule Pill Tab Switcher
function switchCapsuleTab(paneId, btn) {
  const container = btn.closest('.capsule-tabs-container');
  if (!container) return;
  const allBtns = container.querySelectorAll('.capsule-tab-btn');
  const allPanes = container.querySelectorAll('.capsule-tab-pane');

  allBtns.forEach(b => b.classList.remove('active'));
  allPanes.forEach(p => p.classList.remove('active'));

  btn.classList.add('active');
  const targetPane = document.getElementById(paneId);
  if (targetPane) targetPane.classList.add('active');
}

// 8. Auto-Initialization on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSiteFooter();
    initTabs();
    initScrollSpy();
    initStickyHeaderReveal();
    initDirectDownloads();
  });
} else {
  initTheme();
  renderSiteFooter();
  initTabs();
  initScrollSpy();
  initStickyHeaderReveal();
  initDirectDownloads();
}


// 9. Table Row Expansion Engine (Collapsible long tables with print-mode unrolling)
function toggleTableRows(btn, tbodyId, labelSingular, totalCount, previewCount) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody || !btn) return;
  const isExpanded = tbody.classList.toggle('is-expanded');
  const btnText = btn.querySelector('.btn-table-text');
  const chevron = btn.querySelector('.chevron-icon');

  if (isExpanded) {
    if (btnText) btnText.textContent = `Show Fewer ${labelSingular} (First ${previewCount})`;
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  } else {
    if (btnText) btnText.textContent = `Show All ${totalCount} ${labelSingular} (${totalCount - previewCount} More)`;
    if (chevron) chevron.style.transform = 'rotate(0deg)';
    
    // Smooth scroll back to table header if user scrolled far down
    const tableWrap = tbody.closest('.table-frame') || tbody.closest('table');
    if (tableWrap) {
      const rect = tableWrap.getBoundingClientRect();
      if (rect.top < 100) {
        window.scrollBy({ top: rect.top - 120, behavior: 'smooth' });
      }
    }
  }
}

// 10. Dynamic Scroll Spy & Click Tracking for Chapter Navigation
function initScrollSpy() {
  const pills = Array.from(document.querySelectorAll('.sticky-nav-bar .nav-tag-pill, .nav-grid-track .nav-tag-pill, .chapter-bar .chapter-pill'));
  if (!pills.length) return;

  const sections = [];
  pills.forEach(pill => {
    const href = pill.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        sections.push({ pill, target });
      }
    }

    // Instant active feedback when clicked
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  if (!sections.length) return;

  function getTriggerLine() {
    const header = document.querySelector('header.site-header');
    const stickyNav = document.getElementById('sticky-nav') || document.querySelector('.sticky-nav-bar');
    if (header && stickyNav) {
      return Math.max(130, header.getBoundingClientRect().height + stickyNav.getBoundingClientRect().height + 40);
    }
    return 130;
  }

  function updateActivePill() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Edge case: bottom of the page (activate the final chapter)
    if (scrollY + windowHeight >= docHeight - 50) {
      pills.forEach(p => p.classList.remove('active'));
      sections[sections.length - 1].pill.classList.add('active');
      return;
    }

    // Active section detection synced with dynamic header + sticky nav scroll-margin-top
    const triggerLine = getTriggerLine();
    let current = sections[0];
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].target.getBoundingClientRect();
      if (rect.top <= triggerLine) {
        current = sections[i];
      }
    }

    pills.forEach(p => p.classList.remove('active'));
    if (current && current.pill) {
      current.pill.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateActivePill, { passive: true });
  updateActivePill();
}

// 11. Floating Tooltip Helper for Header Action Buttons
function showNavTooltip(btn, message, duration = 2000) {
  if (!btn) return;
  let tip = btn.querySelector('.nav-tooltip');
  if (!tip) {
    tip = document.createElement('span');
    tip.className = 'nav-tooltip';
    tip.setAttribute('role', 'status');
    btn.appendChild(tip);
  }
  tip.textContent = message;
  // Force reflow so transition plays if re-triggered
  void tip.offsetWidth;
  tip.classList.add('visible');
  clearTimeout(btn._tooltipTimer);
  btn._tooltipTimer = setTimeout(() => {
    tip.classList.remove('visible');
  }, duration);
}

// 12. Copy Case Study Markdown to Clipboard
function copyMarkdown(mdPath, btn) {
  if (!mdPath || !btn) return;
  const copySvg = btn.querySelector('.copy-icon-svg');
  const checkSvg = btn.querySelector('.check-icon-svg');

  function onCopySuccess() {
    btn.classList.add('copied');
    if (copySvg && checkSvg) {
      copySvg.style.display = 'none';
      checkSvg.style.display = 'inline-block';
    }
    showNavTooltip(btn, 'Copied!');
    clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(() => {
      btn.classList.remove('copied');
      if (copySvg && checkSvg) {
        copySvg.style.display = 'inline-block';
        checkSvg.style.display = 'none';
      }
    }, 2000);
  }

  function onCopyFailure(msg) {
    btn.classList.add('copy-failed');
    showNavTooltip(btn, msg || 'Copy failed');
    clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(() => {
      btn.classList.remove('copy-failed');
    }, 2000);
  }

  fetch(mdPath)
    .then(res => {
      if (!res.ok) {
        const err = new Error('HTTP ' + res.status);
        err.status = res.status;
        throw err;
      }
      return res.text();
    })
    .then(text => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text)
          .then(onCopySuccess)
          .catch(() => tryFallbackCopy(text, onCopySuccess, () => onCopyFailure('Copy failed')));
      }
      tryFallbackCopy(text, onCopySuccess, () => onCopyFailure('Copy failed'));
    })
    .catch((err) => {
      if (window.location.protocol === 'file:') {
        onCopyFailure('Use live site to copy');
      } else if (err && err.status === 404) {
        onCopyFailure('Markdown unavailable');
      } else {
        onCopyFailure('Copy failed');
      }
    });
}

// 13. Language Switcher (EN <-> DE using /de/ subfolder)
function getLanguageTargetUrl() {
  const path = window.location.pathname;
  const isGerman = document.documentElement.lang === 'de' || /\/de(\/|$)/.test(path);

  if (isGerman) {
    return path.replace(/\/de(\/|$)/, '$1') || './';
  }

  if (path.endsWith('/')) {
    return path + 'de/index.html';
  }
  const lastSlash = path.lastIndexOf('/');
  const dir = lastSlash >= 0 ? path.slice(0, lastSlash + 1) : '';
  const file = lastSlash >= 0 ? path.slice(lastSlash + 1) : path;
  return dir + 'de/' + (file || 'index.html');
}

function switchLanguage(btn) {
  const targetUrl = getLanguageTargetUrl();
  const isGerman = document.documentElement.lang === 'de' || /\/de(\/|$)/.test(window.location.pathname);

  if (isGerman) {
    window.location.href = targetUrl;
    return;
  }

  // Check if German page exists; show "Coming soon" tooltip until /de/ pages are published
  fetch(targetUrl, { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        window.location.href = targetUrl;
      } else {
        showNavTooltip(btn, 'Coming soon');
      }
    })
    .catch(() => {
      showNavTooltip(btn, 'Coming soon');
    });
}

// 14. Force Immediate Blob Download for Header PDF/MD Links
function initDirectDownloads() {
  document.querySelectorAll('a.nav-action-btn[download]').forEach(link => {
    if (link.dataset.downloadBound) return;
    link.dataset.downloadBound = 'true';
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || window.location.protocol === 'file:') return;
      e.preventDefault();
      const filename = link.getAttribute('download') || href.split('/').pop().split('?')[0];
      fetch(href)
        .then(res => {
          if (!res.ok) {
            const err = new Error('HTTP ' + res.status);
            err.status = res.status;
            throw err;
          }
          return res.blob();
        })
        .then(blob => {
          const blobUrl = URL.createObjectURL(blob);
          const tmp = document.createElement('a');
          tmp.href = blobUrl;
          tmp.download = filename;
          document.body.appendChild(tmp);
          tmp.click();
          document.body.removeChild(tmp);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        })
        .catch((err) => {
          if (err && err.status === 404) {
            showNavTooltip(link, 'File unavailable');
          } else {
            window.location.href = href;
          }
        });
    });
  });
}

// 15. Reveal Top Navigation Bar on Scroll Up, Hide on Scroll Down
function initStickyHeaderReveal() {
  const header = document.querySelector('header.site-header');
  const stickyNav = document.getElementById('sticky-nav') || document.querySelector('.sticky-nav-bar');
  if (!header || !stickyNav) return;

  const root = document.documentElement;
  let headerHeight = header.getBoundingClientRect().height;
  let isHidden = false;
  let anchorY = Math.max(0, window.scrollY || 0);
  let lastY = anchorY;
  let lastDir = 0; // 1 = down, -1 = up
  let rafPending = false;

  function syncDimensions() {
    headerHeight = header.getBoundingClientRect().height;
    const stickyNavHeight = stickyNav.getBoundingClientRect().height;
    root.style.setProperty('--site-header-height', `${Math.round(headerHeight)}px`);
    root.style.setProperty('--sticky-nav-height', `${Math.round(stickyNavHeight)}px`);
    root.style.setProperty('--sticky-nav-top', isHidden ? '0px' : `${Math.round(headerHeight)}px`);
  }

  function applyState(hide) {
    if (hide === isHidden) return;
    isHidden = hide;
    if (isHidden && document.activeElement && header.contains(document.activeElement)) {
      try {
        if (!document.activeElement.matches(':focus-visible')) {
          document.activeElement.blur();
        }
      } catch (e) {
        document.activeElement.blur();
      }
    }
    header.classList.toggle('is-hidden', isHidden);
    root.style.setProperty('--sticky-nav-top', isHidden ? '0px' : `${Math.round(headerHeight)}px`);
  }

  function updateOnScroll() {
    rafPending = false;
    const currentY = Math.max(0, window.scrollY || 0);

    // Always reveal when back near the top of the document
    if (currentY <= headerHeight + 8) {
      applyState(false);
      anchorY = currentY;
      lastY = currentY;
      lastDir = 0;
      return;
    }

    const stepDelta = currentY - lastY;
    if (stepDelta === 0) return;

    const dir = stepDelta > 0 ? 1 : -1;
    if (dir !== lastDir) {
      anchorY = lastY;
      lastDir = dir;
    }
    lastY = currentY;

    const travel = currentY - anchorY;
    if (!isHidden && travel > 10) {
      applyState(true);
    } else if (isHidden && travel < -8) {
      applyState(false);
    }
  }

  syncDimensions();

  window.addEventListener('scroll', () => {
    if (!rafPending) {
      rafPending = true;
      window.requestAnimationFrame(updateOnScroll);
    }
  }, { passive: true });

  window.addEventListener('resize', syncDimensions, { passive: true });

  if (typeof ResizeObserver === 'function') {
    const ro = new ResizeObserver(syncDimensions);
    ro.observe(header);
    ro.observe(stickyNav);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncDimensions);
  }

  header.addEventListener('focusin', (e) => {
    try {
      if (e.target && e.target.matches(':focus-visible')) {
        applyState(false);
      }
    } catch (err) {
      applyState(false);
    }
  });
}
