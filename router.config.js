import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import List from './components/List.vue';

export default {
    '/home' : {
        component : Home
    },
    '/menu' : {
        component : Menu,
        subRoutes : {
            '/:cityId' : {
                component : List
            }
        }
    }
}