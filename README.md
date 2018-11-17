# warsawjs-workshop-26-my-photos

[![dependencies](https://david-dm.org/piecioshka/warsawjs-workshop-26-my-photos.svg)](https://github.com/piecioshka/warsawjs-workshop-26-my-photos)
[![heroku](https://heroku-badge.herokuapp.com/?app=warsawjs-workshop-26-my-photos&style=flat&svg=1)](https://warsawjs-workshop-26-my-photos.herokuapp.com/)

**WarsawJS Workshop #26**: Projekt będący portfolio pewnego fotografa

## Demo :tada:

<https://warsawjs-workshop-26-my-photos.herokuapp.com/>

## Zakres funkcji projektu :memo:

* :white_check_mark: Pobieranie zdjęć (Fetch API, Async / Await, ClassDeclaration, FunctionDeclaration)
    + Stworzyć funkcję `fetchPhotos`
* :white_check_mark: Prezentacja listy zdjęć (DOM, Array, Loops, ArrowFunction, Default Parameters)
    + Wykorzystać `appendChild` w procesie renderowania
    + Stworzyć funkcję `renderGallery`
    + **Dodatkowo:** Stworzyć paletę kolorów za pomocą `CSS Variables`
    + **Dodatkowo:** Osadzić fonty z https://fonts.google.com (nagłówki i tekst)
    + **Dodatkowo:** Ułożyć listy za pomocą `CSS Flexbox`
    + **Dodatkowo:** Dodać stopkę z encją `&copy;`
    + **Dodatkowo:** Dodać `GitHub Ribbon`: https://blog.github.com/2008-12-19-github-ribbons/
* :white_check_mark: Deployment :rocket:
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
    + Firebase (https://firebase.google.com/)
        - TODO
    + Netlify (https://www.netlify.com/)
        - TODO
    + Surge (http://surge.sh/)
        - TODO
    + Microsoft Azure (https://azure.microsoft.com/)
        - TODO
* :white_check_mark: Prezentacja wybranego zdjęcia w formie lightboxa

    _Podobny projekt: https://github.com/piecioshka/warsawjs-workshop-1-gallery_

    + Stworzyć funkcję `zoomPhoto`
    + Uwaga: Usuwać poprzednie powiększone zdjęcie przed pokazaniem kolejnego
    + Po uruchomieniu aplikacji powiększyć pierwsze zdjęcie z listy automatycznie
    + **Dodatkowo:** Podczas ładowania dużego obrazka pokazać loader, pobrać
        go ze strony https://loading.io/
* :white_check_mark: **Dodatkowo:** Wsparcie przeglądarek bez JavaScriptu
    + Zarejestrować się na https://prerender.io/
    + Wygnerować token na stronie https://prerender.io/
    + Zaktualizować wartość stałej `PRERENDER_TOKEN` w pliku `server/start.js`
* :white_check_mark: Prezentowanie danych nt. zdjęcia: autora, tagu
    + Wykorzystać `innerHTML` w procesie renderowania
    + Tagi przechowywać w formie wyrazów (bez hashy)
    + Tagi wyświetlać poprzedzając każdego z nich hashem
    + Chować kontener z tagami, gdy ich nie ma
* :white_check_mark: Wyszukiwania zdjęć po dowolnej cesze
    + Stworzyć funkcję `handleSearchForm`
    + Obsługiwać kilka wpisanych fraz
    + W przypadku braku wyniku:
        - Usuwać wszystkie zdjęcia
        - Pokazać komunikat z informacją o braku wyników
    + W przypadku pustego zapytania:
        - Pokazywać wszystkie zdjęcia
    + Filtrowanie zdjęć według tagu
    + Filtrowanie zdjęć według autora
    + Filtrowanie zdjęć według tytułu
* :white_check_mark: Dodawanie zdjęć do ulubionych (Fetch API)
    + Stworzyć funkcję `handleLike`
    + UWAGA: w komunikacji z serwerem należy dodać nagłówek:
        ```js
        headers: {
            "Content-Type": "application/json"
        }
        ```
    + Prezentowanie tylko ulubionych zdjęć
    + Stworzyć funkcję `handleDisplayFavoritesPhotos`
* :white_check_mark: **Dodatkowo:** Prezentacja zdjęć w formie before / after za pomocą slidera
    + Wykorzystać https://github.com/piecioshka/slider-before-after

## Wykorzystywane narzędzia :hammer:

* `eslint`
* `markdownlint-cli`
* `json-server`
* **Dodatkowo:** `prerender-node`
* **Dodatkowo:** `heroku`

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
