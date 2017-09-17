import { Index, Create, View } from './components'

export default [
    {
        name: 'pages.index',
        path: '/pages',
        component: Index,
        meta: { requiresAuth: true, permission: 'view_pages', icon: 'pages', menu: true },
        children: [
            {
                name: 'pages.index',
                path: '/pages',
                component: Index,
                meta: { requiresAuth: true, permission: 'view_pages', menu: true }
            },
            {
                name: 'pages.add',
                path: '/pages/create',
                component: Create,
                meta: { requiresAuth: true, permission: 'create_pages', menu: true }
            },
            {
                name: 'pages.preview',
                path: '/pages/:id',
                component: View,
                meta: { requiresAuth: true, permission: 'view_pages' }
            },
            {
                name: 'pages.edit',
                path: '/pages/:id/edit',
                component: Create,
                meta: { requiresAuth: true, permission: 'view_pages' }
            }
        ]
    }

]
