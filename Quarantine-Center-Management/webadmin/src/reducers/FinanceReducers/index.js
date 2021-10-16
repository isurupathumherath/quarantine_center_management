import { combineReducers } from 'redux';

import invoice from './invoice';
import invoicebooking from './invoicebooking';
import payer from './payer';
import payment from './payment';
import posts from './posts';


import FbookingData from './fbookingData';
import FroomData from './froomData';
import ForderData from './forderData'
import Fpayer from './fpayer'
import Finquary from './finquary';

import Foods from './food'


export const reducers = combineReducers({
    invoice,
    invoicebooking,
    payer,
    payment,
    posts,
    FbookingData,
    FroomData,
    ForderData,
    Fpayer,
    Finquary,
    Foods
});

