function createImage(url) {
    const $photo = document.createElement('img');
    $photo.setAttribute('src', url);
    return $photo;
}

async function fetchPhotos() {
    const response = await fetch('/photos');
    return await response.json();
}

function renderGallery(photos) {
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

async function setup() {
    const photos = await fetchPhotos();
    renderGallery(photos);
}

setup();
