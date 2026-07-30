/* Le 13'OR bar — interactions
   Aucun cookie, aucun stockage local, aucune animation décorative.
   Seule requête tierce possible : la carte Google Maps, chargée au clic. */
(function () {
  'use strict';

  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Ouverture : rideau boiserie, lockup or, levée --------------------- */
  var intro = document.getElementById('intro');
  var delaiIntro = 0;
  if (intro) {
    if (reduit) {
      intro.remove();
    } else {
      delaiIntro = 1350;
      document.body.style.overflow = 'hidden';
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () { intro.classList.add('est-prete'); });
      });
      window.setTimeout(function () { intro.classList.add('est-levee'); }, delaiIntro);
      window.setTimeout(function () {
        intro.remove();
        document.body.style.overflow = '';
      }, delaiIntro + 1000);
    }
  }

  /* ---- En-tête : état « posée » au défilement --------------------------- */
  var entete = document.getElementById('entete');
  if (entete) {
    var majEntete = function () {
      entete.classList.toggle('est-posee', window.scrollY > 40);
    };
    majEntete();
    window.addEventListener('scroll', majEntete, { passive: true });
  }

  /* ---- Menu mobile ------------------------------------------------------ */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu-mobile');

  if (burger && menu) {
    var ouvrir = function (etat) {
      burger.setAttribute('aria-expanded', String(etat));
      burger.setAttribute('aria-label', etat ? 'Fermer le menu' : 'Ouvrir le menu');
      menu.hidden = !etat;
      menu.classList.toggle('est-ouvert', etat);
      document.body.style.overflow = etat ? 'hidden' : '';
    };

    burger.addEventListener('click', function () {
      ouvrir(burger.getAttribute('aria-expanded') !== 'true');
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { ouvrir(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        ouvrir(false);
        burger.focus();
      }
    });
  }

  /* ---- Carte Google Maps : chargée uniquement au clic -------------------- */
  var gmaps = document.getElementById('gmaps');
  var gmapsBtn = document.getElementById('gmaps-charger');
  if (gmaps && gmapsBtn) {
    gmapsBtn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = gmaps.getAttribute('data-src');
      iframe.title = "Carte Google Maps — Le 13'OR bar, 2 rue des Carmélites, Nantes";
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.allowFullscreen = true;
      gmaps.appendChild(iframe);
      gmaps.classList.add('est-chargee');
    });
  }

  /* ---- Apparitions au défilement ----------------------------------------
     Un bloc = un mouvement. Déclenchées une seule fois, jamais rejouées. */
  var cibles = document.querySelectorAll('.rv, .rv-clip');
  if (cibles.length) {
    if (!('IntersectionObserver' in window) || reduit) {
      cibles.forEach(function (el) { el.classList.add('est-vu'); });
    } else {
      var obs = new IntersectionObserver(function (entrees) {
        entrees.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('est-vu');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

      cibles.forEach(function (el) {
        // ce qui est déjà à l'écran au chargement apparaît sans attendre un
        // défilement — mais seulement une fois le rideau d'ouverture levé
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
          window.setTimeout(function () {
            window.requestAnimationFrame(function () { el.classList.add('est-vu'); });
          }, delaiIntro);
          return;
        }
        obs.observe(el);
      });
    }
  }

  /* ---- Navigation de la carte : rubrique active ------------------------- */
  var liensCarte = document.querySelectorAll('.carte-nav a');
  if (liensCarte.length && 'IntersectionObserver' in window) {
    var familles = document.querySelectorAll('.famille');
    var obsCarte = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (!e.isIntersecting) return;
        liensCarte.forEach(function (a) {
          a.classList.toggle('est-actif', a.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    familles.forEach(function (f) { obsCarte.observe(f); });
  }

  /* ---- Rubrique active dans la navigation principale -------------------- */
  var liensNav = document.querySelectorAll('.nav-bureau a[href^="#"]');
  if (liensNav.length && 'IntersectionObserver' in window) {
    var obsNav = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (!e.isIntersecting) return;
        liensNav.forEach(function (a) {
          a.classList.toggle('est-actif', a.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { obsNav.observe(s); });
  }
})();
