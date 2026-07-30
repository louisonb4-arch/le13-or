# Le 13'OR bar — Audit juridique du site

Audit réalisé le **29 juillet 2026**, avant rédaction des pages juridiques.

> **CONTENU JURIDIQUE À FAIRE VALIDER PAR LE PROPRIÉTAIRE DE L'ENTREPRISE AVANT MISE EN LIGNE.**
> Ce document est une base de travail établie à partir des fonctionnalités réellement présentes
> dans le projet et des sources officielles consultées. Il ne vaut pas conseil juridique.

---

## 1. Périmètre réel du site

| Question | Réponse | Conséquence |
|---|---|---|
| Pays d'établissement | France (Nantes, 44) | Droit français + RGPD |
| Forme juridique | SASU PROBAR | Mentions légales « société » : dénomination, forme, capital, RCS, TVA, siège |
| Public | Consommateurs (B2C) + demandes de privatisation (B2C et B2B) | Droit de la consommation applicable → médiation obligatoire |
| Vente en ligne | **Non** | Pas de CGV de vente en ligne |
| Paiement en ligne | **Non** | Pas de prestataire de paiement, pas de PCI-DSS |
| Abonnement | **Non** | Pas de résiliation en ligne (art. L215-1-1 c. consom. non applicable) |
| Réservation en ligne | **Non** — aucune plateforme, aucun formulaire de réservation | Pas de conditions de réservation/annulation |
| Commande / livraison en ligne | **Non** | — |
| Compte utilisateur / espace membre | **Non** | Pas de CGU |
| Publication de contenu par les visiteurs | **Non** | Pas de CGU |
| Formulaire de contact | **Non** — le site utilise un **lien `mailto:`** vers `bar.13or@outlook.fr` | **Aucune donnée personnelle n'est collectée par le site** |
| Newsletter | **Non** | Pas de consentement prospection à gérer |
| Outils analytiques | **Non** | — |
| Pixels publicitaires | **Non** | — |
| Vidéos intégrées | **Non** | — |
| Carte interactive tierce | **Oui, bloquée avant clic** — iframe Google Maps créée uniquement au clic « Afficher la carte » | Aucun traceur avant action explicite du visiteur |
| Widgets sociaux | **Non** — simples liens sortants vers Instagram | Pas de traceur Meta |
| Chat / support | **Non** | — |
| Polices web | **Auto-hébergées** (`assets/fonts/*.woff2`) — aucun appel à Google Fonts | Pas de transfert d'IP vers Google |
| Hébergement | Vercel Inc. (à confirmer) — logs techniques serveur | Voir §5 et `legal-information-required.md` |
| Transferts hors UE | Selon l'hébergeur retenu | **[À CONFIRMER]** |
| Activité réglementée | **Oui — débit de boissons alcooliques** | Loi Évin + licence + protection des mineurs (voir §6) |

**Conclusion : le site est un site vitrine strictement statique, sans collecte de données
personnelles côté site et sans requête vers un domaine tiers avant action du visiteur — le seul
contenu tiers (carte Google Maps) est bloqué derrière un clic explicite.**

---

## 2. Matrice des documents

| Document / fonctionnalité | Obligatoire | Recommandé | Non applicable | Raison | Info manquante | Source officielle consultée | Action |
|---|:--:|:--:|:--:|---|---|---|---|
| **Mentions légales** | ✅ | | | Art. 6-III LCEN — toute personne éditant un site pro | Capital, RCS, TVA, directeur de publication, hébergeur | [entreprendre.service-public.gouv.fr F31228](https://entreprendre.service-public.gouv.fr/vosdroits/F31228) | Page créée avec placeholders visibles |
| **Politique de confidentialité** | | ✅ | | Aucune donnée collectée *par le site*, mais l'hébergeur journalise des IP et le lien `mailto:` amène un traitement d'e-mail chez l'établissement → transparence RGPD (art. 13/14) | Hébergeur, durées de conservation | [CNIL](https://www.cnil.fr/) | Page créée, périmètre honnête |
| **Mention sous formulaire** | | | ❌ | Aucun formulaire sur le site | — | — | Mention d'information placée à côté du lien e-mail |
| **Politique de cookies** | | | ❌ | Aucun cookie, aucun `localStorage`, aucun traceur | — | [CNIL — mesure d'audience](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience) | **Non créée.** Un paragraphe « Cookies » dans la politique de confidentialité indique l'absence de traceur |
| **Bandeau / gestionnaire de consentement** | | | ❌ | Aucun traceur soumis à consentement (art. 82 loi Informatique et Libertés) | — | CNIL | **Non créé — un bandeau serait un faux bandeau.** À créer le jour où un outil de mesure ou une carte tierce sera ajouté |
| **CGV** | | | ❌ | Aucune vente ni conclusion de contrat sur le site ; les consommations se règlent sur place | — | [DGCCRF](https://www.economie.gouv.fr/dgccrf) | Non créées |
| **CGU** | | | ❌ | Pas de compte, pas d'espace membre, pas de contenu utilisateur | — | — | Non créées |
| **Médiation de la consommation** | ✅ | | | Art. L612-1 et L616-1 c. consom. — tout professionnel vendant à des consommateurs doit adhérer à un médiateur et **communiquer ses coordonnées, notamment sur son site** | **Médiateur non désigné** | [Service-Public / DGCCRF](https://www.economie.gouv.fr/mediation-conso) | Bloc prévu dans les mentions légales avec `[MÉDIATEUR À DÉSIGNER]` — **aucun nom inventé** |
| **Formulaire de rétractation** | | | ❌ | Pas de vente à distance | — | — | Non créé |
| **Résiliation en ligne** | | | ❌ | Aucun contrat souscrit en ligne | — | — | Non créée |
| **Informations précontractuelles** | | | ❌ | Pas de contrat conclu en ligne. L'affichage des prix des boissons relève de l'affichage en établissement, pas du site | — | — | Prix affichés à titre informatif + mention « tarifs à confirmer » |
| **Conditions de réservation / annulation** | | | ❌ | Aucune réservation en ligne | — | — | Non créées. Si une réservation est mise en place → à rédiger |
| **Propriété intellectuelle** | ✅ | | | Textes, photographies, logo, fresque murale | Titularité des photos et de la fresque | — | Clause rédigée **sans affirmer** que l'établissement détient tous les droits photo |
| **Activité réglementée — alcool** | ✅ | | | Loi Évin (art. L3323-2 et L3323-4 CSP), licence de débit de boissons, protection des mineurs | N° et catégorie de licence | Code de la santé publique | Voir §6 |
| **Accessibilité (RGAA)** | | ✅ | | Obligation légale réservée au secteur public et aux grandes entreprises (> 250 M€ CA). Bonnes pratiques appliquées volontairement | — | — | WCAG 2.1 AA visé |

---

## 3. Inventaire des cookies et traceurs

Audit technique du projet réalisé le 29/07/2026 : recherche de `document.cookie`, `localStorage`,
`sessionStorage`, `IndexedDB`, balises `<script src>` externes, `<iframe>`, `<img>` distantes,
`fetch`/`XHR`, `@import` et `@font-face` distants dans l'ensemble des fichiers du projet.

| Nom | Fournisseur | Finalité | Durée | Domaine | Catégorie | Consentement | Blocage |
|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — |

**Avant toute action du visiteur : aucun cookie, aucun traceur, aucun stockage local, aucune requête vers un domaine tiers.** Un seul contenu tiers existe — la carte Google Maps de la section « Nous trouver » — et il ne se charge qu'après un clic explicite sur « Afficher la carte » (le clic vaut consentement, il n'est pas mémorisé entre les visites).

Détail des points sensibles habituels et de leur traitement ici :

| Point habituellement problématique | Traitement retenu |
|---|---|
| Google Fonts | **Supprimé** — polices Bodoni Moda et Poppins auto-hébergées en `.woff2` |
| Google Maps embarqué | **Bloqué avant clic** — façade sans requête tierce ; l'iframe Google Maps n'est créée qu'au clic sur « Afficher la carte » (consentement par action, non mémorisé). Lien « Itinéraire » séparé pour ceux qui ne veulent pas la charger |
| Widget / feed Instagram | **Supprimé** — simple lien sortant |
| Google Analytics / Matomo | Non installé |
| Meta Pixel, TikTok Pixel, Hotjar | Non installés |
| YouTube / Vimeo | Aucune vidéo embarquée |
| Bandeau de consentement | Non installé — **il n'y a rien à consentir** |
| Préférence de thème / animation | Lue via `prefers-reduced-motion` (média query), **jamais stockée** |

**Journaux serveur de l'hébergeur** : adresse IP, user-agent, URL demandée. Traitement fondé sur
l'intérêt légitime (sécurité et bon fonctionnement), hors périmètre du consentement traceurs.
Durée et localisation **[À CONFIRMER auprès de l'hébergeur]**.

> ⚠️ **Si un outil est ajouté plus tard** (mesure d'audience, carte tierce, module de réservation,
> feed Instagram, pixel publicitaire) : un véritable gestionnaire de consentement devient
> nécessaire, avec « Tout accepter » / « Tout refuser » de même niveau visuel dès le premier écran,
> une gestion par catégorie et un blocage effectif avant choix.

---

## 4. Tests de consentement

Sans traceur ni bandeau, les scénarios se réduisent à une vérification :

| Scénario | Attendu | Résultat 29/07/2026 |
|---|---|---|
| Chargement initial (navigation privée) | 0 cookie, 0 requête tierce | ✅ à revérifier après déploiement via l'onglet Réseau |
| Rechargement / changement de page | 0 cookie, 0 stockage | ✅ |
| Navigation clavier complète | tous les liens et le menu atteignables, focus visible | ✅ |
| `prefers-reduced-motion: reduce` | animations neutralisées | ✅ |

**À refaire après mise en ligne réelle** : DevTools → Application → Storage (doit être vide) et
Network → filtre « 3rd party » (doit être vide).

---

## 5. Données personnelles

| Traitement | Données | Base légale | Durée | Destinataire |
|---|---|---|---|---|
| Journaux techniques d'hébergement | IP, user-agent, horodatage, URL | Intérêt légitime (sécurité) | **[À CONFIRMER — hébergeur]** | Hébergeur |
| E-mail envoyé via le lien `mailto:` | Ce que la personne écrit elle-même depuis sa messagerie | Mesures précontractuelles / intérêt légitime | **[À DÉFINIR par l'établissement]** | L'établissement + son fournisseur de messagerie (Outlook / Microsoft) |

⚠️ L'adresse `bar.13or@outlook.fr` est une boîte **Microsoft Outlook** : les messages reçus sont
hébergés chez Microsoft, ce qui implique un possible transfert hors UE encadré par les clauses
contractuelles types et le cadre UE–États-Unis. **[À CONFIRMER et à mentionner dans la politique
de confidentialité]** — une adresse professionnelle sur un domaine propre serait préférable.

---

## 6. Activité réglementée — débit de boissons

| Obligation | Applicable au site ? | Traitement |
|---|---|---|
| **Message sanitaire** (art. L3323-4 CSP) — toute publicité pour une boisson alcoolique doit être accompagnée du message *« L'abus d'alcool est dangereux pour la santé, à consommer avec modération »* | ✅ Oui — la carte des cocktails constitue une publicité en ligne | Message affiché **en pied de chaque page**, lisible, contrasté, non dissimulé |
| **Contenu autorisé** (art. L3323-4 CSP) — la publicité doit se limiter à des indications objectives : degré, origine, composition, mode d'élaboration, modalités de vente et de consommation | ✅ Oui | Les textes du site décrivent la carte, le lieu, les horaires. **Aucune évocation d'ivresse, de performance sociale ou de séduction associée à l'alcool** |
| **Supports autorisés** (art. L3323-2 CSP) — les services de communication en ligne sont autorisés, sauf ceux destinés à la jeunesse ou aux activités sportives | ✅ Conforme | Site destiné à un public adulte |
| **Interdiction de vente aux mineurs** (art. L3342-1 CSP) | Affichage obligatoire **en établissement** | Rappel dans les mentions légales |
| **Licence de débit de boissons** | Détention obligatoire | `[N° ET CATÉGORIE DE LICENCE À FOURNIR]` — non inventée |
| **Affichage des prix** (arrêté du 27 mars 1987) | En établissement (vitrine + salle) | Le site publie les prix à titre informatif avec date de relevé |

---

## 7. Ce qui doit être fait avant de qualifier le site de conforme

- [ ] Compléter tous les placeholders des mentions légales (capital, RCS, TVA, licence)
- [ ] Confirmer le directeur de la publication
- [ ] Confirmer l'hébergeur et ses coordonnées
- [ ] **Désigner un médiateur de la consommation** et publier ses coordonnées
- [ ] Confirmer les durées de conservation et le sort des e-mails reçus
- [ ] Valider les droits sur les photographies et sur la fresque murale
- [ ] Confirmer les horaires et les tarifs
- [ ] Rejouer le test « 0 cookie / 0 requête tierce » sur l'URL de production
- [ ] Faire relire les pages juridiques par le propriétaire
