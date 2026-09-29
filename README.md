# OpticLink — Website

Στατικό website (HTML/CSS/JS) που φιλοξενείται στο **GitHub Pages**:
https://opticlink.gr

## Αρχεία
- `index.html` — περιεχόμενο της σελίδας
- `styles.css` — εμφάνιση
- `script.js` — μενού κινητού, animations, slideshow hero, parallax, lightbox gallery, φόρμα ραντεβού
- `images/brand/` — λογότυπο OpticLink (`logo.png` για ανοιχτό φόντο, `logo-on-dark.png` για το site), favicon και apple-touch-icon
- `favicon.svg` — παλιό εικονίδιο καρτέλας (δεν χρησιμοποιείται πλέον)
- `images/` — φωτογραφίες έργων (WebP, `-sm` 640px / `-lg` 1100px), εικόνες hero, `og.jpg` για social sharing και `clients/` με λογότυπα πελατών (SVG)
- `CNAME` — το domain του site (`opticlink.gr`)
- `robots.txt`, `sitemap.xml` — για τις μηχανές αναζήτησης

Κάθε αλλαγή στο branch `main` δημοσιεύεται αυτόματα σε 1–2 λεπτά.

## Εκκρεμότητες
- [ ] Φόρμα ραντεβού: σύνδεση με [Formspree](https://formspree.io) — αντικατάσταση του `YOUR_FORM_ID` στο `index.html`. Μέχρι τότε η φόρμα είναι κρυφή και εμφανίζεται κάρτα με τηλέφωνο/email· μόλις μπει το ID, η φόρμα εμφανίζεται αυτόματα.
- [ ] Διεύθυνση επιχείρησης στα δομημένα δεδομένα (JSON-LD `address`), αν θέλετε να εμφανίζεται δημόσια
- [x] Τηλέφωνο και email
- [ ] Ωράριο και περιοχή εξυπηρέτησης
- [ ] Πραγματικοί αριθμοί στα στατιστικά (`data-count`)
- [x] Custom domain `opticlink.gr` (DNS στο papaki.gr)
- [ ] Enforce HTTPS (Settings → Pages)
