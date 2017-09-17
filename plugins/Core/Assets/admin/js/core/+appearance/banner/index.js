/**
 * Components are lazy-loaded - See "Grouping Components in the Same Chunk"
 * http://router.vuejs.org/en/advanced/lazy-loading.html
 */
/* eslint-disable global-require */
export const AllBanners = r => require.ensure([], () => r(require('./all')), 'appearance-bundle')
export const CreateBanner = r => require.ensure([], () => r(require('./create')), 'appearance-bundle')