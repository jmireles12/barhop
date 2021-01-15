import dummyStore from "./store";

export default {
    API_ENDPOINT: dummyStore,
    API_KEY: process.env.REACT_APP_API_KEY,
    API_SEARCH: `https://maps.googleapis.com/maps/api/place/textsearch/`,
}