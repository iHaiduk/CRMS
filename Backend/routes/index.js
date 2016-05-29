/**
 * Created by Haiduk on 29.05.2016.
 */

export default (function() {

    return [
        {
            get: '/',
            controller: 'Home'
        },
        {
            post: '/home',
            controller: 'Home::dom'
        }
    ];

})();