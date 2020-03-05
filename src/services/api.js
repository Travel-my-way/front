import Axios from 'axios'
import fakeJourney from '../../fakeJourney'

export const api = Axios.create({
  baseURL: API_URL
})

export const getJourney = (departureLat, departureLng, arrivalLat, arrivalLng, date) =>
  new Promise(resolve => resolve(fakeJourney))
// api.get(
//   `/journey?from=${departureLat},${departureLng}&to=${arrivalLat},${arrivalLng}&start=${date}`
// )
