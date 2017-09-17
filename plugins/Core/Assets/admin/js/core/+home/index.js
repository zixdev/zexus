import {Home} from './components'
export default [{
    name: 'dashboard',
    path: '/',
    component: Home,
    meta: {
        requiresAuth: true,
        icon:  'dashboard',
        menu: true
    }
}]
