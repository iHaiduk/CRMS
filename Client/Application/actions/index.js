/**
 * Created by Igor Haiduk on 22.05.2016.
 */
'use strict';

let actions = {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    }
}

export default actions