# warsawjs-workshop-26-my-photos

[![dependencies](https://david-dm.org/piecioshka/warsawjs-workshop-26-my-photos.svg)](https://github.com/piecioshka/warsawjs-workshop-26-my-photos)
[![heroku](https://heroku-badge.herokuapp.com/?app=warsawjs-workshop-26-my-photos&style=flat&svg=1)](https://warsawjs-workshop-26-my-photos.herokuapp.com/)

**WarsawJS Workshop #26**: Projekt będący portfolio pewnego fotografa

## Demo :tada:

<https://warsawjs-workshop-26-my-photos.herokuapp.com/>

## Lista funkcji w projekcie

* :white_check_mark: Pobieranie zdjęć (Fetch API, Async / Await, Function Definition)
    + Stworzenie funkcji `fetchPhotos`
* :white_check_mark: Prezentacja listy zdjęć (DOM, Array, Loops, Async Function)
    + Wykorzystać `appendChild` w procesie renderowania
    + Stworzenie funkcji `renderGallery`
    + **Dodatkowo:** Stworzyć paletę kolorów za pomocą `CSS Variables`
    + **Dodatkowo:** Osadzić fonty z https://fonts.google.com (nagłówki i tekst)
    + **Dodatkowo:** Ułożyć listy za pomocą `CSS Flexbox`
    + **Dodatkowo:** Dodać stopkę z encją `&copy;`
    + **Dodatkowo:** Dodać `GitHub Ribbon`: https://blog.github.com/2008-12-19-github-ribbons/
* :white_check_mark: Deployment
    + Heroku
        - Stworzyć nową aplikację na https://dashboard.heroku.com/apps/
        - Połączyć lokalne repozytorium z aplikacją za pomocą polecenia
            `heroku git:remote -a NAZWA_APLIKACJI_NA_HEROKU`
        - Stworzyć polecenie `npm run deploy`, które będzie uruchamiało
            `git push heroku master`
    + GitHub Pages
        - Zainstalować paczkę `gh-pages`
        - Stworzyć polecenie `npm run deploy`, które będzie uruchamiało
            `NODE_DEBUG=gh-pages gh-pages -d client/`
    + Microsoft Azure
        - TODO
        - Stworzuć polecenie `npm run deploy`
* :white_check_mark: Prezentacja wybranego zdjęcia w formie lightboxa

    _Podobny projekt: https://github.com/piecioshka/warsawjs-workshop-1-gallery_

    + Stworzyć funkcję `zoomPhoto`
    + Uwaga: Usuwać poprzednie powiększone zdjęcie przed pokazaniem kolejnego
    + Po uruchomieniu aplikacji powiększyć pierwsze zdjęcie z listy automatycznie
    + **Dodatkowo:** Dodać loader pod duży obrazek — wykorzystać https://loading.io/
* :white_check_mark: **Dodatkowo:** Wsparcie przeglądarek bez JavaScriptu
    + Zarejestrować się na https://prerender.io/
    + Wygnerować token na stronie https://prerender.io/
    + Zaktualizować wartość stałej `PRERENDER_TOKEN` w pliku `server/start.js`
* Prezentowanie danych nt. zdjęcia: autora, tagu
    + Wykorzystać `innerHTML` w procesie renderowania
    + Tagi przechowywać w formie wyrazów (bez hashy)
    + Tagi wyświetlać poprzedzając każdego z nich hashem
    + Chować kontener z tagami, kiedy ich nie ma
* Filtrowanie zdjęć według tagu
* Wyszukiwania zdjęć po dowolnej cesze
* Dodawanie zdjęć do ulubionych
    + Prezentowanie tylko ulubionych zdjęć
* **Dodatkowo:** Prezentacja zdjęć w formie before / after za pomocą slidera
    + Wykorzystać https://github.com/piecioshka/slider-before-after
* ...
* :white_check_mark: Done
* :no_entry: Not done

## Wykorzystywane narzędzia

* `eslint`
* `markdownlint-cli`
* `json-server`
* **Dodatkowo:** `prerender-node`
* **Dodatkowo:** `heroku`

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
