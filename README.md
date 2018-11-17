# warsawjs-workshop-26-my-photos

[![dependencies](https://david-dm.org/piecioshka/warsawjs-workshop-26-my-photos.svg)](https://github.com/piecioshka/warsawjs-workshop-26-my-photos)

**WarsawJS Workshop #26**: Projekt będący portfolio pewnego fotografa

## Lista funkcji w projekcie

* :white_check_mark: Done
* :no_entry: Not done

* :white_check_mark: Pobieranie zdjęć (Fetch API, Async / Await, Function Definition)
    + Stworzenie funkcji `fetchPhotos`
* :white_check_mark: Prezentacja listy zdjęć (DOM, Array, Loops, Async Function)
    + Stworzenie funkcji `renderGallery`
    + Dodatkowo: Stworzenie palety kolorów za pomocą `CSS Variables`
    + Dodatkowo: Osadzenie fontów z https://fonts.google.com (nagłówki i tekst)
    + Dodatkowo: Ułożenie listy za pomocą `CSS Flexbox`
    + Dodatkowo: Dodanie stopki z ikonką &copy;
    + Dodatkowo: Dodanie `GitHub Ribbon`: https://blog.github.com/2008-12-19-github-ribbons/
* :white_check_mark: Prezentacja zdjęć w formie lightboxa
    (Podobny projekt: https://github.com/piecioshka/warsawjs-workshop-1-gallery)
    + Stworzenie funkcji `zoomPhoto`
    + Refactoring: Stworzenie funkcji, która tworzy obrazek
    + Uwaga: Usuwanie poprzedniego zdjęcia przed pokazaniem kolejnego
    + Po uruchomieniu aplikacji powiększyć pierwsze zdjęcie z listy
    + Dodatkowo: Deployment na Heroku
        - Stworzyć nową aplikację na https://dashboard.heroku.com/apps/
        - Połączyć lokalne repozytorium z aplikacją za pomocą polecenia
            `heroku git:remote -a NAZWA_APLIKACJI_NA_HEROKU`
        - Opublikować projekt na Heroku za pomocą `git push heroku master`
        - Wspierać zmienną środowiskową `$PORT` poprzez dopisanie `--port $PORT`
            na końcu polecenia `npm start`
    + Dodatkowo: Wspierać przeglądarki z wyłączonym JavaScriptem
        - Zarejestrować się na https://prerender.io/
        - Na stronie https://prerender.io/ wygnerować token
        - Zaktualizować wartość stałej `PRERENDER_TOKEN` w pliku `server/start.js`
* Dodawanie cech zdjęciom: autor, kategoria
    + Filtrowanie zdjęć według kategorii
* Wyszukiwania zdjęć po dowolnej cesze
* Dodawanie zdjęć do ulubionych
    + Filtrowanie zdjęć według ulubionych

## Wykorzystywane narzędzia

* `json-server`

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
