/**
 * Components are lazy-loaded - See "Grouping Components in the Same Chunk"
 * http://router.vuejs.org/en/advanced/lazy-loading.html
 */
/* eslint-disable global-require */
export const FileManager = r => require.ensure([], () => r(require('./main')), 'advanced-bundle');
