/**
 * Components are lazy-loaded - See "Grouping Components in the Same Chunk"
 * http://router.vuejs.org/en/advanced/lazy-loading.html
 */
/* eslint-disable global-require */
export const AllSites = r => require.ensure([], () => r(require('./all')), 'advanced-bundle');
export const CreateSites = r => require.ensure([], () => r(require('./create')), 'advanced-bundle');
export const ConfigSites = r => require.ensure([], () => r(require('./config')), 'advanced-bundle');