/**
 * Components are lazy-loaded - See "Grouping Components in the Same Chunk"
 * http://router.vuejs.org/en/advanced/lazy-loading.html
 */
/* eslint-disable global-require */
export const Index = r => require.ensure([], () => r(require('./all')), 'pages-bundle')
export const Create = r => require.ensure([], () => r(require('./create')), 'pages-bundle')
export const View = r => require.ensure([], () => r(require('./view')), 'pages-bundle')
