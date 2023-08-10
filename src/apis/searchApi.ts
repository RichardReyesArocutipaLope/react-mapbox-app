import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        language: 'es',
        limit: 5,
        access_token: 'pk.eyJ1IjoicmljaGFyZC1yZXllcyIsImEiOiJjbGwzOXE4emcxa2IwM3Jsc2MyZTR0NTV1In0.uAQCbH6jltO1CzTZ6AJ_Og'
    }
})


export default searchApi


