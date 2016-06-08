/**
 * Created by Igor Haiduk on 22.05.2016.
 */
'use strict';

let actions = {
    method: function(data) {
        return {
            type: 'NAME',
            params: data
        }
    }
};

export default actions