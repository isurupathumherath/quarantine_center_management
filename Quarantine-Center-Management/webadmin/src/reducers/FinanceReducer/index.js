import { combineReducers } from 'redux';

import posts from './posts';
import payers from './payers';

export default combineReducers({ posts, payers });
