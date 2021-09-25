import { combineReducers } from 'redux';

import invoice from './invoice';
import invoicebooking from './invoicebooking';
import payer from './payer';


export const reducers = combineReducers({
    invoice,
    invoicebooking,
    payer
});

