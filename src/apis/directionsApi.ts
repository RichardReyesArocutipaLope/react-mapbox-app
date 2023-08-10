import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoicmljaGFyZC1yZXllcyIsImEiOiJjbGwzOXE4emcxa2IwM3Jsc2MyZTR0NTV1In0.uAQCbH6jltO1CzTZ6AJ_Og'
    }
})


export default directionsApi


