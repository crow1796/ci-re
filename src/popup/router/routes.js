import PageIndex from './pages/Index'
import PageSites from './pages/Index/Sites'
import PageCreateSiteForm from './pages/Index/Sites/CreateSiteForm.vue'

import PageNotes from './pages/Index/Notes'

import PageAuth from './pages/Auth'

export default [
	{
		path: '/',
		component: PageIndex,
		name: 'home',
		children: [
			{
				path: 'sites',
				component: PageSites,
				name: 'sites'
			},
			{
				path: 'sites/create',
				component: PageCreateSiteForm,
				name: "create_site"
			},
			{
				path: 'notes',
				component: PageNotes,
				name: 'notes'
			}
		]
	},
	{
		path: '/auth',
		component: PageAuth,
		name: 'auth'
	}
]
