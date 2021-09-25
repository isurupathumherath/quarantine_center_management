import { combineReducers } from 'redux';

import invoice from './invoice';
import invoicebooking from './invoicebooking';
import payer from './payer';
import payment from './payment';
import posts from './posts';


export const reducers = combineReducers({
    invoice,
    invoicebooking,
    payer,
    payment,
    posts
});

