# Play & Gamble · Golfclub Bostalsee

Eine Progressive Web App (PWA) für Golf-Zockformate. Läuft vollständig im Browser – kein Login, kein Server, kein App-Store.

## Unterstützte Formate

| Format | Spieler | Beschreibung |
|---|---|---|
| **Bingo Bango Bongo** | 2–8 | 3 Punkte je Loch: erster aufs Grün, näher zur Fahne, erster eingelocht |
| **Wolf** | 3–5 | Rotierender Wolf wählt Partner oder spielt allein gegen den Rest |
| **Vegas** | 4 (2×2) | Schläge werden zur zweistelligen Zahl kombiniert – Differenz zählt |
| **Aggregat** | 4 (2×2) | Bester Einzelscore und niedrigere Team-Summe je ein Punkt |
| **Skins** | 2–8 | Niedrigster Score gewinnt das Loch – Gleichstand lässt den Skin wandern |

## Features

- Spieleranzahl und Namen frei wählbar (werden lokal gespeichert)
- Einsatz in € konfigurierbar – automatische Netto-Abrechnung am Ende
- Live-Leaderboard im Header während der Runde
- Unterbrochene Runden werden automatisch gespeichert und können fortgesetzt werden
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
