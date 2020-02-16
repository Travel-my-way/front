import Axios from 'axios'
import fakeJourney from '../../fakeJourney'

export const api = Axios.create({
  baseURL: API_URL
})

export const getJourney = (departureLat, departureLng, arrivalLat, arrivalLng, date) => 
// fakeJourney
// ⬇ Dé-commenter pour avoir la vraie data
  api.get(
    `/journey?from=${departureLat},${departureLng}&to=${arrivalLat},${arrivalLng}&start=${date}`
  )


