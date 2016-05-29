/**
 * Created by Haiduk on 29.05.2016.
 */

export default class HomeController {
    
    async index(ctx, next) {
            ctx.body = 'Hello world';
    }
    
    async dom(ctx, next) {
            ctx.body = 'Hello my world 2';
    }
    
}