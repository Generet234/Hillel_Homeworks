'use strict'

const userSelect = document.querySelector('#userSelect');
const photosContainer = document.querySelector('#photos');
const loadingStatus = document.querySelector('#status');
const albumSelect = document.querySelector('#albumSelect');
const hiddenTextUser = document.querySelector('.loadingUser');
const hiddenTextAlbum = document.querySelector('.loadingAlbum');
const loadPhotos = document.querySelector('#loadBtn');
const loadMore = document.querySelector('#loadMore');
const hiddenTextLoading = document.querySelector('.hiddenTextLoading');
let valueOfAlbum = 0;
let valueOfPhotos = 0;
let allPhotos = [];
let offset = 0;

/**
 * This script implements dynamic loading of users, albums, and photos using the JSONPlaceholder API.
 * On DOMContentLoaded, it fetches all users and populates the user select element. When a user is selected,
 * the script loads and renders that user's albums into the album select element. After selecting an album,
 * the "Load Photos" button becomes enabled and triggers a request to fetch photos for the chosen album.
 * Photos are stored in a global array (allPhotos) and rendered in batches of 12 items using the createCard function,
 * which dynamically creates Bootstrap-style card elements via DOM methods. Pagination is handled using the offset
 * variable, which tracks the current position in the photos array, while the "Load More" button appends additional
 * photo cards until all items are displayed. Loading indicators and button states are managed to provide proper
 * user feedback and prevent invalid interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    const getElementByUserId = () => {
        hiddenTextUser.hidden = false;
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                if(!res.ok) throw new Error('HTTP' + res.status);
                return res.json();
            })
            .then((users) => {
                userSelect.innerHTML = '<option value="">Select user...</option>';
                users.forEach(user => {
                    const option = document.createElement('option');
                    option.value = user.id;
                    option.textContent = user.name;
                    userSelect.append(option);
                })
            })
            .catch((err) => {
                loadingStatus.innerHTML = err.message;
            })
            .finally(() => hiddenTextUser.hidden = true)
    }
    getElementByUserId()
})

userSelect.addEventListener('change', (e) => {
    photosContainer.innerHTML = ' ';
    loadPhotos.disabled = true;
    albumSelect.disabled = true;
    hiddenTextAlbum.hidden = false;
    valueOfAlbum = e.target.value;
    const getElementByAlbum = (albumId) => {
        return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${albumId}`)
            .then((res) => {
                if(!res.ok) throw new Error('HTTP' + res.status);
                return res.json();
            })
            .then((albums) => {
                albumSelect.innerHTML = '<option value="">Select album...</option>';
                albums.forEach(album => {
                    const option = document.createElement('option');
                    option.value = album.id;
                    option.textContent = album.title
                    albumSelect.append(option);
                })
            })
            .then( () => {
                hiddenTextAlbum.hidden = true;
                loadingStatus.hidden = true;
                albumSelect.disabled = false;
            })
            .catch((err) => {
                loadingStatus.innerHTML = err.message;
            })
            .finally(() => hiddenTextAlbum.hidden = true)
    }
    getElementByAlbum(valueOfAlbum)
})

albumSelect.addEventListener('change', (e) => {
    valueOfPhotos = e.target.value;
    if(e.target.value){
        loadPhotos.disabled = false;
    }
    else{
        loadPhotos.disabled = true;
    }
})

loadPhotos.addEventListener('click', (e) => {
    photosContainer.innerHTML = ' ';
    hiddenTextLoading.hidden = false;
    getElementByPhoto(valueOfPhotos)
})
const getElementByPhoto = (photosId) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${photosId}`)
        .then(res => {
            if(!res.ok) throw new Error('HTTP' + res.status);
            return res.json()
        })
        .then((photos) => {
            allPhotos = photos;
            offset = 0;
            createCard(allPhotos);
        })
        .catch((err) => {
            loadingStatus.innerHTML = err.message})
        .finally(() => hiddenTextLoading.hidden = true)
    return allPhotos;
}
loadMore.addEventListener('click', (e) => {
    createCard(allPhotos);
    if(offset >= allPhotos.length) {
        loadMore.disabled = true;
    }
    else loadMore.disabled = false;
    if(offset < 13) {
        loadPhotos.disabled = false;
    }
    else {
        loadPhotos.disabled = true;
    }
})
function createCard(allPhotos){
        allPhotos.slice(offset, offset+12).forEach((photo) => {
            let photosUrl = photo.thumbnailUrl
            if(!photosUrl.startsWith('http')) photosUrl = 'https://via.placeholder.com' + photosUrl

            let photosHref = photo.url
            if(!photosHref.startsWith('http')) photosHref = 'https://via.placeholder.com' + photosHref

            let photosTitle = photo.title
            if (photosTitle.length >40) photosTitle = photosTitle.slice(0,40)
            const containerPhoto = document.querySelector('#photos');
            const wrapper = document.createElement('div');
            wrapper.className = 'card-wrapper';
            const card = document.createElement('div');
            card.className = 'card'
            card.style.width = '18rem;'
            const img = document.createElement('img');
            img.src = photosHref;
            img.className = 'card-img-top'
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body'
            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title'
            cardTitle.textContent = 'Card title';
            const p = document.createElement('p');
            p.className = 'card-text';
            p.textContent = photosTitle
            const a = document.createElement('a');
            a.href = photosHref;
            a.target = '_blank';
            a.textContent = 'Open'
            cardBody.append(cardTitle,p,a)
            card.append(img,cardBody)
            wrapper.append(card);
            containerPhoto.append(wrapper)
        })
    offset+= 12;
}
