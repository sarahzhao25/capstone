// import { fetchYelpRestaurants, createMidpointUrl } from '../../Utils/restaurantAPI';
import axios from 'axios';
import { SERVER } from '../../serverInfo';

const GET_RESTAURANTS = 'GET_RESTAURANTS';
const CLEAR_RESTAURANTS = 'CLEAR_RESTAURANTS';

const getRestaurants = (restaurants) => {
  return {
    type: GET_RESTAURANTS,
    restaurants
  }
}

export const clearingRestaurants = () => {
  return {
    type: CLEAR_RESTAURANTS
  }
}

export const fetchRestaurants = (midpoint) => {
  return (dispatch) => {
    //let url = createMidpointUrl(midpoint);
    //return fetchYelpRestaurants(url)
    return axios.put(`${SERVER}/api/restaurants`, midpoint)
    .then(restaurants => dispatch(getRestaurants(restaurants.data)))
    .catch(console.error);
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return action.restaurants;
    case CLEAR_RESTAURANTS:
      return [];
    default:
      return state;
  }
}
