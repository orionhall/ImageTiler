import $ from 'jquery';

const API_KEY = 'f186e590ff216cfdeeb9b1b219683d50'
const PUBLIC_FEED = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?';
const GET_POPULAR = `https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=${API_KEY}&format=json&nojsoncallback=1`;
const SEARCH = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1`

export const getFlickrData = (props) => {
    return new Promise((resolve, reject) => {
        let requestURL = PUBLIC_FEED;
    if (props && (props.tags || props.text)) {
        requestURL = SEARCH;
        const fields = {...props},
            keys = Object.keys(fields);
        keys.forEach((key) => {
            requestURL += `&${key}=${fields[key]}`;
        });
    }
    $.getJSON(requestURL).then((response) => {
        // do stuff
        console.log(response);
        resolve(response);
    }).catch((err) => {
        // ruh roh
        resolve(err);
    });
});
}

export const makePhotoURL = (data) => {
    let url = data.media ? data.media.m : `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_n.jpg`;
    return url;
}