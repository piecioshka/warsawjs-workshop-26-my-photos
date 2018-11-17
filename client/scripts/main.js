function createImage(url) {
    const $photo = document.createElement('img');
    $photo.setAttribute('src', url);
    return $photo;
}

async function fetchPhotos() {
    const response = await fetch('/photos');
    return await response.json();
}

function renderGallery(photos = []) {
    const $gallery = document.querySelector('#gallery');
    const $photos = document.createElement('ul');

    photos.forEach((photo, index) => {
        const $photo = createImage(photo.thumb);

        if (index === 0) {
            zoomPhoto(photo);
        }

        const $link = document.createElement('a');
        $link.setAttribute('href', photo.image);
        $link.appendChild($photo);

        $photo.addEventListener('click', (evt) => {
            evt.preventDefault();
            zoomPhoto(photo);
        });

        const $item = document.createElement('li');
        $item.appendChild($link);

        $photos.appendChild($item);
    });

    $gallery.innerHTML = '';
    $gallery.appendChild($photos);
}

function zoomPhoto(photo) {
    const $magnifier = document.querySelector('#magnifier');
    const template = (data) => `
        <figure>
            <img src="${data.image}" alt="" />
            <p class="author">Autor: <strong>${data.author}</strong></p>
            <p class="tags">${data.tags.map(x => `#${x}`).join(', ')}</p>
            <figcaption>${data.title}</figcaption>
        </figure>
    `;
    const compiledTemplate = template(photo);
    $magnifier.innerHTML = compiledTemplate;
}

function removeZoomPhoto() {
    const $magnifier = document.querySelector('#magnifier');
    $magnifier.innerHTML = '';
}

function handleSearchForm(photos) {
    const $searchForm = document.querySelector('#search');

    $searchForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const data = new FormData($searchForm);
        const query = data.get('query');
        const words = query.split(',')
            .map(s => s.trim())
            .filter(s => s)
            .map(s => s.toLowerCase());
        const tags = words
            .filter(w => (/^#/).test(w));

        if (words.length === 0) {
            renderGallery(photos);
            return;
        }

        const filteredPhotos = photos.filter((photo) => {
            const isMatchedTag = photo.tags
                .filter(photoTag => tags.includes(`#${photoTag}`)).length;

            const isFoundAuthor = words
                .filter(word => photo.author.toLowerCase().match(word)).length;

            const isFoundTitle = words
                .filter(word => photo.title.toLowerCase().match(word)).length;

            return isMatchedTag || isFoundAuthor || isFoundTitle;
        });

        if (filteredPhotos.length === 0) {
            removeZoomPhoto();
            renderGallery();
            return;
        }

        renderGallery(filteredPhotos);
    });
}

async function setup() {
    const photos = await fetchPhotos();
    renderGallery(photos);
    handleSearchForm(photos);
}

setup();
