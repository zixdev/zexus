export const AppHeader = r => require.ensure([], () => r(require('./header')), 'base-bundle')
export const AppFooter = r => require.ensure([], () => r(require('./footer')), 'base-bundle')
export const AppSideBar = r => require.ensure([], () => r(require('./sidebar')), 'base-bundle')
export const AppSnackBar= r => require.ensure([], () => r(require('./snackbar')), 'base-bundle')
