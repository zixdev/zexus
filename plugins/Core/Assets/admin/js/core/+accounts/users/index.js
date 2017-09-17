/**
 * Components are lazy-loaded - See "Grouping Components in the Same Chunk"
 * http://router.vuejs.org/en/advanced/lazy-loading.html
 */
/* eslint-disable global-require */
export const AllUsers = r => require.ensure([], () => r(require('./all')), 'accounts-bundle')
export const CreateUsers = r => require.ensure([], () => r(require('./create')), 'accounts-bundle')
export const UserRoles = r => require.ensure([], () => r(require('./role')), 'accounts-bundle')
export const UserDetails = r => require.ensure([], () => r(require('./details')), 'accounts-bundle')