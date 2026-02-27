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
let allAlbums = [];
let allPhotos = [];
let offset = 0;

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
            .then((res) => {
                allAlbums = res
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
    getElementByPhoto(valueOfAlbum)
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
})
function createCard(allPhotos){
    console.log(allPhotos)
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
            wrapper.innerHTML = `<div class="card" style="width: 18rem;">
                      <img src="${photosUrl}" class="card-img-top" >
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">${photosTitle}</p>
                        <a href = '${photosHref}' target='_blank'> Open</a>
                      </div>
                    </div>
               `
            containerPhoto.append(wrapper)
        })
    offset+= 12;
}
