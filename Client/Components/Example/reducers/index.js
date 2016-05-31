/**
 * Created by Igor Haiduk on 22.05.2016.
 */
'use strict';

let todoReducer = function(defaultParam = [], action) {
    switch (action.type) {
        case 'NAME':
            return {
                params: action.params
            };
        default:
            return defaultParam;
    }
};

export default todoReducer