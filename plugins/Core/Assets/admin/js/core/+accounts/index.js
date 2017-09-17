import {AllUsers, CreateUsers, UserRoles, UserDetails} from './users';

export default [
    {
        name: 'accounts.index',
        path: '/accounts',
        component: AllUsers,
        meta: {requiresAuth: true, permission: 'view_users', icon: 'person', menu: true},
        children: [
            {
                name: 'accounts.users.index',
                path: '/accounts',
                component: AllUsers,
                meta: {requiresAuth: true, permission: 'view_users', menu: true},
            },
            {
                name: 'accounts.users.create',
                path: '/accounts/create',
                component: CreateUsers,
                meta: {requiresAuth: true, permission: 'create_users'},
            },
            {
                name: 'accounts.users.edit',
                path: '/accounts/:id/edit',
                component: CreateUsers,
                meta: {requiresAuth: true, permission: 'update_users'},
            },
            {
                name: 'accounts.users.details',
                path: '/accounts/:id/details',
                component: UserDetails,
                meta: {requiresAuth: true, permission: 'update_users'},
            },
            {
                name: 'accounts.users.roles',
                path: '/accounts/:id/roles',
                component: UserRoles,
                meta: {requiresAuth: true, permission: 'update_roles'},
            },
        ]
    }
];