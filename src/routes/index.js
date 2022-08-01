import Home from '~/pages/Home'
import Schedule from '~/pages/Schedule';
import Ticket from '~/pages/Ticket';
import MovieType from '~/pages/MovieType';

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/schedule', component: Schedule},
    { path: '/ticket', component: Ticket},
    { path: '/movietype', component: MovieType}
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }