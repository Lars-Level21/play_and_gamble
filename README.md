# Play & Gamble

Eine Progressive Web App (PWA) für Golf-Zockformate. Läuft vollständig im Browser – kein Login, kein Server, kein App-Store.

## Unterstützte Formate

| Format | Spieler | Modus | Beschreibung |
|---|---|---|---|
| **Bingo Bango Bongo** | 2–4 | Brutto | 3 Punkte je Loch: erster aufs Grün, näher zur Fahne, erster eingelocht |
| **Wolf** | 3–4 | Brutto | Rotierender Wolf wählt Partner oder spielt allein gegen den Rest |
| **Vegas** | 4 (2×2) | Brutto | Schläge werden zur zweistelligen Zahl kombiniert – Differenz zählt |
| **Aggregat** | 4 (2×2) | Brutto / Netto | Bester Einzelscore und niedrigere Team-Summe je ein Punkt |
| **Skins** | 2–4 | Brutto / Netto | Niedrigster Score gewinnt das Loch – Gleichstand lässt den Skin wandern |
| **Matchplay** | 2 | Brutto / Netto | Loch-für-Loch-Duell; zeigt Dormie und „Match entschieden" automatisch an |

## Features

- Spieleranzahl und Namen frei wählbar (werden lokal gespeichert)
- Einsatz in € konfigurierbar – automatische Netto-Abrechnung am Ende
- Live-Leaderboard im Header: relative Differenz statt Absolutwerte (Matchplay: AS/+2/−2; Vegas/Aggregat: Teamdifferenz)
- Unterbrochene Runden werden automatisch gespeichert und können fortgesetzt werden
- Netto-Modus (Aggregat, Skins, Matchplay) mit Playing HCP und Stroke-Index-Konfiguration je Bahn
- Installierbar als PWA (Home-Screen-Icon, Offline-Betrieb via Service Worker)
- Keine Abhängigkeiten, kein Build-Schritt – eine einzige `index.html`

## Verwendung

Einfach `index.html` in einem Browser öffnen oder auf einem Webserver hosten.

```
# Lokal mit einem beliebigen HTTP-Server
npx serve .
```

Für die PWA-Installation (Service Worker) ist HTTPS oder `localhost` erforderlich.

## Projektstruktur

```
index.html   – komplette App (HTML, CSS, JS in einer Datei)
sw.js        – Service Worker für Offline-Unterstützung
```

## Lizenz

[MIT](LICENSE) – frei verwendbar, kopierbar und anpassbar. Copyright © 2026 Lars-Level21.
