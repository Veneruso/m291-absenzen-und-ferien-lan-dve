# m291-absenzen-und-ferien-lan-dve


# Login Auswahl Seite

# Projektübersicht

Dieses Projekt stellt eine Anmeldeseite dar, auf der der Benutzer zwischen zwei Optionen wählen kann:

- Login als Lernpartner
- Login als Lernbegleiter

Die Seite enthält grundlegende Animationen und ein responsives Design, das sich auf verschiedene Bildschirmgrössen anpasst.

## Features

- Responsive Design: Die Seite passt sich je nach Bildschirmgrösse an und sieht auf mobilen und Desktop-Geräten gut aus.
- Animationen: Ein schwebendes Logo und ein sanftes Aufgleiten des Anmeldeformulars sowie Hover-Effekte auf den Buttons.
- Zwei Anmeldeoptionen: Verlinkte Buttons leiten den Benutzer zu verschiedenen Login-Seiten weiter.




# Login als Lernpartner

Dies ist eine einfache Webseite, die es einem Lernpartner ermöglicht, sich anzumelden, indem er seinen Namen und seine Lernpartner-ID auswählt bzw. eingibt. Die Seite bietet danach weitere Optionen wie die Anmeldung von Absenzen oder das Einsehen von Ferienansprüchen.

## Projektübersicht

Die Webseite enthält:
- Ein Dropdown-Menü, aus dem der Benutzer seinen Namen wählen kann.
- Ein Eingabefeld für die Lernpartner-ID.
- Einen Weiter-Button, der die Eingaben überprüft und weitere Optionen zur Verfügung stellt.

## Features

- Dropdown-Menü: Dynamisch geladenes Dropdown-Menü mit den Namen der Lernpartner, die von einer API abgefragt werden.
- Verifikation: Die Benutzerinformationen werden lokal gespeichert, und es erscheinen zusätzliche Optionen zur Navigation nach erfolgreicher Verifikation.
- Responsive Design: Die Seite passt sich verschiedenen Bildschirmgrössen an und ist auf Desktop- und mobilen Geräten nutzbar.
- Animationen: Es gibt Animationen für das Logo, die Überschrift und das Anmeldeformular.

### API-Anbindung

- Die Daten für das Dropdown-Menü werden über eine API abgerufen. Im Beispielcode wird die API `https://api-sbw-plc.sbw.media/Student[0,78]` verwendet, die eine Liste von Lernpartnern zurückgibt.
- Die API antwortet im JSON-Format, und die Namen sowie IDs der Lernpartner werden dynamisch in das Dropdown-Menü eingefügt.

## Nutzung der Seite

1. Benutzer wählt seinen Namen aus dem Dropdown-Menü aus.
2. Gibt die Lernpartner-ID in das entsprechende Feld ein.
3. Drückt den Button „Weiter“, um seine Daten zu überprüfen.
4. Nach erfolgreicher Eingabe erscheinen weitere Optionen wie „Absenz anmelden“ und „Ferienansprüche ansehen“.





# Lernbegleiter Login

Dies ist eine einfache Webseite, die es einem Lernbegleiter ermöglicht, sich mithilfe seiner E-Mail und eines Passworts anzumelden. Nach erfolgreicher Anmeldung wird der Lernbegleiter zur Absenzen-Liste weitergeleitet.

## Projektübersicht

Die Seite enthält:
- Ein Eingabefeld für die E-Mail-Adresse.
- Ein Eingabefeld für das Passwort.
- Ein Weiter-Button, der die Anmeldedaten überprüft.
- Ein Zurück-Link, um zur vorherigen Seite zu gelangen.

## Features

- E-Mail und Passwort Eingabe: Benutzer müssen ihre E-Mail-Adresse und ihr Passwort eingeben, um sich anzumelden.
- Einfache Authentifizierung: Ein einfacher Login-Vorgang prüft die E-Mail und das Passwort gegen vorgegebene Werte.
- Weiterleitung: Nach erfolgreicher Anmeldung wird der Benutzer auf eine neue Seite mit der Absenzen-Liste weitergeleitet.
- Responsives Design: Die Seite passt sich verschiedenen Bildschirmgrößen an und funktioniert sowohl auf mobilen als auch auf Desktop-Geräten.
- Animationen: Die Seite enthält Animationen, die für einen modernen und flüssigen Effekt sorgen.

### Standard-Login-Daten
- E-Mail: `kingma@sbw-media.ch`
- Passwort: `1234`


## Nutzung der Seite

1. Benutzer gibt die E-Mail und das Passwort in die entsprechenden Felder ein.
2. Nach Klick auf den Button „Weiter“ werden die Daten überprüft.
3. Erfolgreiche Anmeldung: Der Benutzer wird zur Seite „Absenzen-Liste“ weitergeleitet.
4. Fehlerhafte Anmeldung: Bei falschen Eingaben erhält der Benutzer eine Fehlermeldung.





# Ferienansprüche

Diese Webseite zeigt die verbleibenden Ferientage für Lernpartner an. Die Daten werden lokal gespeichert und angezeigt, sobald die Seite geladen wird. Sie nutzt Vue.js zur dynamischen Anzeige der Informationen.

## Projektübersicht

Die Webseite bietet folgende Funktionalitäten:
- Tabelle: Zeigt den Namen des Lernpartners und die verbleibenden Ferientage an.
- Vue.js-Integration: Dynamisches Laden der Daten aus dem `localStorage`.
- Zurück-Link: Leitet den Benutzer zurück zur Login-Seite.

## Features

- Dynamische Datenanzeige: Der Name des Lernpartners und die verbleibenden Ferientage werden basierend auf den im `localStorage` gespeicherten Daten angezeigt.
- Vue.js-basierte Datenverarbeitung: Vue.js wird verwendet, um die Daten beim Laden der Seite zu rendern und dynamisch anzuzeigen.
- Tabelle: Zeigt die verbleibenden Ferientage in einem tabellarischen Format an, mit einem responsiven und ansprechenden Design.
- Zurück-Button: Führt den Benutzer zurück zur Login-Seite.

## Nutzung der Seite

1. Benutzer loggt sich ein und wird auf die Ferienansprüche-Seite weitergeleitet.
2. Verbleibende Ferientage werden basierend auf den Daten im `localStorage` angezeigt.
3. Der Benutzer kann zur vorherigen Seite zurückkehren, indem er auf den Zurück-Button klickt.





# Absenzen Liste

Diese Webseite zeigt die Liste der Absenzen von Lernpartnern an. Die Daten werden aus dem `localStorage` geladen und in einer Tabelle angezeigt. Benutzer können Einträge durch einen Klick auf eine Zeile entfernen.

## Projektübersicht

Die Webseite enthält:
- Tabelle: Zeigt eine Liste von Absenzen, die aus dem `localStorage` geladen werden.
- Vue.js-Integration: Dynamisches Laden und Löschen von Absenzen mit Vue.js.
- Zurück-Link: Ermöglicht dem Benutzer, zur vorherigen Seite zurückzukehren.


## Features

- Dynamische Datenanzeige: Die Absenzen-Liste wird aus den im `localStorage` gespeicherten Daten geladen.
- Vue.js-basierte Interaktion: Benutzer können Einträge aus der Absenzen-Liste durch Klicken auf eine Zeile entfernen. Die Liste wird in Echtzeit aktualisiert.
- Responsives Design: Die Seite passt sich verschiedenen Bildschirmgrößen an, einschließlich mobiler Geräte.
- Löschen: Wenn man auf die gewünschte Zeile klickt, wird die entsprechende Liste aus der Liste entfernt.
- Zurück-Button: Führt den Benutzer zurück zur Login-Seite.

## Nutzung der Seite

1. Benutzer öffnet die Seite, und die Absenzen-Liste wird aus dem `localStorage` geladen.
2. Der Benutzer kann durch Klicken auf einen Eintrag eine Absenz aus der Liste löschen.
3. Der Benutzer kann zur vorherigen Seite zurückkehren, indem er auf den Zurück-Button klickt.

