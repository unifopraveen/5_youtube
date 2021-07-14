import axios from 'axios';

const KEY = 'AIzaSyAaTtoV22_rllnhyy0F73Avm8wxA3b9qgg';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 10,
        type: 'video',
        key : KEY

    }
})