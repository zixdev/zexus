import {AllSites, CreateSites, ConfigSites} from './+sites';
import {FileManager} from './+storage';
import {SystemLogs} from './+logs';

export default [
    {
        name: 'system.index',
        path: '/advanced',
        component: AllSites,
        meta: {requiresAuth: true, permission: 'view_admin', icon: 'settings', menu: true},
        children: [
            {
                name: 'system.sites.index',
                path: '/advanced/sites',
                component: AllSites,
                meta: {requiresAuth: true, permission: 'view_sites', menu: true},
            },
            {
                name: 'system.sites.create',
                path: '/advanced/sites/create',
                component: CreateSites,
                meta: {requiresAuth: true, permission: 'create_sites'},
            },
            {
                name: 'system.sites.edit',
                path: '/advanced/sites/:id/edit',
                component: CreateSites,
                meta: {requiresAuth: true, permission: 'update_sites'},
            },
            {
                name: 'system.sites.config.index',
                path: '/advanced/sites/:id/config',
                component: ConfigSites,
                meta: {requiresAuth: true, permission: 'view_site_configs'},
            },
            {
                name: 'system.file_manager.index',
                path: '/advanced/file-manager',
                component: FileManager,
                meta: {requiresAuth: true, permission: 'view_sites', menu: true},
            },
            {
                name: 'system.logs.index',
                path: '/advanced/logs',
                component: SystemLogs,
                meta: {requiresAuth: true, permission: 'view_sites', menu: true},
            }
        ]
    }
];