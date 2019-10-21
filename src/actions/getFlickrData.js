import $ from 'jquery';

const API_KEY = 'f186e590ff216cfdeeb9b1b219683d50'
const PUBLIC_FEED = 'https://api.flickr.com/services/feeds/photos_public.gne?&tags=cats&format=json&jsoncallback=?';
const SEARCH = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1`

export const getFlickrData = (props) => {
    console.log(`getFlickrData is running with props: ${props}`)
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
        resolve(response);
    }).catch((err) => {
        // TODO this is unhandled
        reject(err);
    });
});
}

export const makePhotoURL = (data) => {
    let url = data.media ? data.media.m : `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_n.jpg`;
    return url;
}