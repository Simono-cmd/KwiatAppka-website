# KwiatAppka-website

Strona internetowa aplikacji KwiatAppka, docelowo pod adresem https://kwiat.app (GitHub Pages).

Czysty HTML i CSS. Bez JavaScriptu, bez budowania, bez zewnętrznych serwerów.

## Struktura

- `index.html` strona główna (na górze pliku są rysunki SVG używane na całej stronie)
- `404.html` strona błędu
- `css/style.css` wszystkie style
- `fonts/` fonty Cormorant Garamond, EB Garamond i Nunito (licencja SIL OFL, pliki licencji obok)
- `img/` logo, ikony, faktury papieru i obrazek podglądu linku (`og-image.png`)
- `img/botanika/` wycięte ilustracje roślin (opis źródeł niżej)
- `robots.txt`, `sitemap.xml`, `site.webmanifest`
- `.nojekyll` wyłącza przetwarzanie Jekyll na GitHub Pages

## Do uzupełnienia

- Link do Google Play: w `index.html` wyszukaj `TUTAJ_WSTAW_ID_APLIKACJI` (dwa miejsca).

## Podgląd lokalny

    python -m http.server 4173

Potem otwórz http://127.0.0.1:4173/

## Ilustracje

Rośliny w `img/botanika/` to wycinki z XIX-wiecznych tablic botanicznych w domenie publicznej, pobrane z Wikimedia Commons:

- `alokazja-krolewska.webp`: Alocasia reginae, L'Illustration horticole (File:Alocasia reginae.jpg)
- `alokazja-metaliczna.webp`: Alocasia metallica, Les plantes à feuillage coloré, pl. LX (File:Les plantes a feuillage coloré (PL. LX) (6306113868).jpg)
- `filodendron.webp`: Caladium pedatum (Philodendron pedatum), Exotic flora, pl. 206 (File:Exotic flora (Plate 206) (9145460542).jpg)
- `paproc.webp`: Nephrodium molle, Album of Indian ferns, pl. 14 (File:Album of Indian ferns (Plate 14) (6025785252).jpg)
- `adelaster.webp`: Adelaster albivenis, Les plantes à feuillage coloré, pl. XXII (File:Les plantes a feuillage coloré (plate 022 PL. XXII) (8717588700).jpg)
- `smilaks.webp`: Smilax macrophylla, Les plantes à feuillage coloré, pl. XXXI (File:Les plantes a feuillage coloré (plate 031 PL. XXXI) (8717591562).jpg)
- `begonia-maculata.webp`: Begonia maculata, drzeworyt z książki U. Dammera „Zimmerblattpflanzen” (1908), lekko podbarwiony (File:Begonia maculata.png)
- `begonia.webp`: Begonia falcifolia, Les plantes à feuillage coloré, pl. LI (File:Les plantes a feuillage coloré (plate 051 PL. LI) (8716478231).jpg)
- `amarantus.webp`: Amarantus melancholicus, Les plantes à feuillage coloré, pl. XXVII (File:Les plantes a feuillage coloré (plate 027 PL.. XXVII) (8717590224).jpg)
