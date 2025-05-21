# README – Basic & More web (studieprojekt)

Dette dokument giver et hurtigt overblik over **hjemmesiden** (forside + */ugens‑fund*) til vores MMD‑projekt for Basic & More..

---

## 1. Formål

* **Brandløfte:** *“Mere inspiration. Mindre pris.”*
* **Kerneidé:** Skabe FOMO omkring ugentlige restpartier (3‑5 varer) via en enkel, mobil‑først oplevelse.
* **Succeskriterier:** Flere klik fra hero, højere konvertering på */ugens‑fund* og øget butikstrafik.

---

## 2. Sider & indhold

| Side                                | Hvad brugeren ser                                        | Hovedfunktioner            |
| ----------------------------------- | -------------------------------------------------------- | -------------------------- |
| **Forside** (`index.html`)          | Hero‑slider med kampagner \| Kategorilinks \| Brand‑USPs | • Hero opdateres månedligt |
| • Knap til */ugens‑fund*            |                                                          |                            |
| **Ugens fund** (`ugens‑fund.html`)  | Scroll‑oplevelse med 3‑5 nye varer                       | • Live badge “Kun X stk.”  |
| • Countdown til næste tirsdag 09.00 |                                                          |                            |
| • Knap “Reserver & hent”            |                                                          |                            |

---

## 3. Tech stack

* **HTML5** – semantiske tags (+ ARIA landemærker)
* **CSS3** – mobil‑først, BEM‑navngivning, CSS‑variabler til farver/typografi
* **Vanilla JavaScript** – lettere interaktion (scroll‑effekter, nedtælling, badge‑opdatering)

---

## 4. Designretningslinjer

| Element            | Retning                                                                   |
| ------------------ | ------------------------------------------------------------------------- |
| **Farver**         | Terracotta `#98502E` + Dusty Pink `#DBAA9B`                               |
| **Typografi**      | Open Sans (Google Fonts)                                                  |
| **Billedstil**     | Packshot‑collager & nedlægninger på farvet baggrund                       |
| **Tilgængelighed** | Kontrast ≥ 4,5 : 1, synlige fokusrammer, `prefers‑reduced‑motion` support |
| **Performance**    | Hero‑billeder ≤ 150 kB, LCP ≤ 2 sek. (3G)                                 |

---

## 5. Arbejdsgang – *Ugens fund*

1. **Mandag 15:00**  Indkøb sender liste med 3‑5 varer (pris, lager, billeder).
2. **Mandag aften**   Billeder konverteres til WebP, tekst klargøres.
3. **Tirsdag 08:30**  Opdatér `ugens‑fund.html` (data‑attributter + billeder).
4. **Tirsdag 09:00**  Side publiceres + SoMe‑post / push‑notits laves.
5. **Fredag**          Tjek KPI’er (klik, salg, lager) og noter til næste uge.

---

## 6. Sådan ser du projektet lokalt

1. Download / clone mappen.
2. Åbn `index.html` i din browser.
3. Klik på hero‑knappen for at teste */ugens‑fund*.

Der kræves ingen terminal‑kommandoer – alt kører i browseren.

---

## 7. Licens

Kun til undervisningsbrug – © 2025 MMD 2. semester, Basic & More case.
