import PageIndex from './pages/Index'
import PageSites from './pages/Index/Sites'
import PageCreateSiteForm from './pages/Index/Sites/CreateSiteForm.vue'

import PageNotes from './pages/Index/Notes'

import PageAuth from './pages/Auth'

export default [{
        path: '/',
        component: PageIndex,
        name: 'home',
        meta: {
            requireAuth: true
        },
        children: [{
                path: 'sites',
                component: PageSites,
                name: 'sites',
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'sites/create',
                component: PageCreateSiteForm,
                name: "create_site",
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'notes',
                component: PageNotes,
                name: 'notes',
                meta: {
                    requireAuth: true
                }
            }
        ]
    },
    {
        path: '/auth',
        component: PageAuth,
        name: 'auth',
        meta: {
            requireAuth: false
        }
    }
]