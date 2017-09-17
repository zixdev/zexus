import {AllMenus, CreateMenu} from './menu';
import {AllBanners, CreateBanner} from './banner';


export default [
    {
        name: 'appearance.index',
        path: '/appearance',
        component: AllMenus,
        meta: {requiresAuth: true, permission: 'view_users', icon: 'desktop_mac', menu: true},
        children: [
            {
                name: 'appearance.menu.index',
                path: '/appearance/menu',
                component: AllMenus,
                meta: {requiresAuth: true, permission: 'view_menu', menu: true}
            },
            {
                name: 'appearance.menu.create',
                path: '/appearance/menu/create',
                component: CreateMenu,
                meta: {requiresAuth: true, permission: 'create_menu'}
            },
            {
                name: 'appearance.menu.edit',
                path: '/appearance/menu/:id/edit',
                component: CreateMenu,
                meta: {requiresAuth: true, permission: 'update_menu'}
            },
            {
                name: 'appearance.banner.index',
                path: '/appearance/banner',
                component: AllBanners,
                meta: {requiresAuth: true, permission: 'view_banner', menu: true}
            },
            {
                name: 'appearance.banner.create',
                path: '/appearance/banner/create',
                component: CreateBanner,
                meta: {requiresAuth: true, permission: 'create_banner'}
            },
        ]
    }
];