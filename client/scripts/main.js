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
        $photo.addEventListener('click', () => zoomPhoto(photo));

        if (index === 0) {
            zoomPhoto(photo);
        }

        const $item = document.createElement('li');
        $item.appendChild($photo);

        $photos.appendChild($item);
    });

    $gallery.appendChild($photos);
}

function zoomPhoto(photo) {
    const $magnifier = document.querySelector('#magnifier');
    const $photo = createImage(photo.image);
    if ($magnifier.firstChild) {
        $magnifier.firstChild.remove();
    }
    $magnifier.appendChild($photo);
}

async function setup() {
    const photos = await fetchPhotos();
    renderGallery(photos);
}

setup();
