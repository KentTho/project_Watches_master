import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:5000';

export const FOODS_URL = BASE_URL + '/api/foods';
export const FOODS_TAGS_URL = FOODS_URL + '/tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';
export const FOOD_BY_ID_URL = FOODS_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
export const USER_UPDATE_URL = BASE_URL + '/api/users/update/'
export const USER_LIST_URL = BASE_URL + '/api/users/list/'
export const USER_DELETE_URL = BASE_URL + '/api/users/delete/'




export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';
export const ORDER_LIST_URL = ORDERS_URL + '/ordersForCurrentUser'
export const ORDER_DETAIL_URL = ORDERS_URL + '/order'
export const ORDER_UPDATE_STATUS_URL = ORDERS_URL + '/updateStatus'
export const ORDER_ALL = ORDERS_URL + '/all'
