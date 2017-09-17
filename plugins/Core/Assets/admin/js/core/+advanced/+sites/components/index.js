/**
 * Components are lazy-loaded - See "Grouping Components in the Same Chunk"
 * http://router.vuejs.org/en/advanced/lazy-loading.html
 */
/* eslint-disable global-require */
export const EmailContact = r => require.ensure([], () => r(require('./email-contact')), 'advanced-bundle');
export const EmailSettings = r => require.ensure([], () => r(require('./email-settings')), 'advanced-bundle');
export const General = r => require.ensure([], () => r(require('./general')), 'advanced-bundle');
export const Maintenance = r => require.ensure([], () => r(require('./maintenance')), 'advanced-bundle');
export const Security = r => require.ensure([], () => r(require('./security')), 'advanced-bundle');
export const SEO = r => require.ensure([], () => r(require('./seo')), 'advanced-bundle');
export const SocialApi = r => require.ensure([], () => r(require('./social-api')), 'advanced-bundle');