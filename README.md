# Opticlink — Website

Στατικό website (HTML/CSS/JS), έτοιμο για δωρεάν φιλοξενία στο **GitHub Pages**.

## Δημοσίευση στο GitHub Pages
1. Στο github.com → **New repository** → όνομα `opticlink-website` → Public → Create.
2. **Add file → Upload files** → σύρτε όλα τα αρχεία αυτού του φακέλου → **Commit changes**.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. Σε 1–2 λεπτά το site είναι online στο `https://<username>.github.io/opticlink-website/`.

## Σύνδεση του domain σας
1. **Settings → Pages → Custom domain** → γράψτε π.χ. `www.opticlink.gr` → Save (δημιουργείται αρχείο `CNAME`).
2. Στον πάροχο του domain, στο DNS:
   - `CNAME`  `www`  →  `<username>.github.io`
   - `A`  `@`  →  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Όταν ενεργοποιηθεί, τσεκάρετε **Enforce HTTPS**.

## Φόρμα ραντεβού
Η φόρμα στέλνει email μέσω [Formspree](https://formspree.io) (δωρεάν πλάνο):
1. Φτιάξτε λογαριασμό → **New form** → αντιγράψτε το ID (π.χ. `xabcdwxy`).
2. Στο `index.html` αντικαταστήστε το `YOUR_FORM_ID` με αυτό.

## Τι να ενημερώσετε
- Τηλέφωνο, email, ωράριο, περιοχή (ενότητα `#booking` στο `index.html`)
- Αριθμούς στα στατιστικά (`data-count` στο hero)
- Κείμενα υπηρεσιών / FAQ
