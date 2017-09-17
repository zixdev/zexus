/**
 * Components are lazy-loaded - See "Grouping Components in the Same Chunk"
 * http://router.vuejs.org/en/advanced/lazy-loading.html
 */
/* eslint-disable global-require */
export const AllRoles = r => require.ensure([], () => r(require('./all')), 'accounts-bundle')
export const CreateRole = r => require.ensure([], () => r(require('./create')), 'accounts-bundle')
export const Permissions = r => require.ensure([], () => r(require('./permissions')), 'accounts-bundle')
