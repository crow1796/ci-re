import PageIndex from './pages/Index'
import PageSites from './pages/Index/Sites'
import PageCreateSiteForm from './pages/Index/Sites/CreateSiteForm.vue'
import PageCreateNoteForm from './pages/Index/Sites/CreateNoteForm.vue'
import PageGeneratePassword from './pages/Index/GeneratePassword.vue'

import PageNotes from './pages/Index/Notes'

import PageAuth from './pages/Auth'

import EmbedsIndex from './embeds/Index.vue'
import EmbedsSites from './embeds/Index/Sites.vue'
import EmbedsCreateSiteForm from './pages/Index/Sites/CreateSiteForm.vue'

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
            }, {
                path: 'notes/create',
                component: PageCreateNoteForm,
                name: 'create_note',
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'generate-password',
                component: PageGeneratePassword,
                name: 'create_note',
                meta: {
                    requireAuth: false
                }
            }
        ]
    },
    {
        path: '/embeds',
        component: EmbedsIndex,
        name: 'embeds',
        meta: {
            requireAuth: false
        },
        children: [
            {
                path: 'sites',
                component: EmbedsSites,
                name: 'embed_sites',
                meta: {
                    requireAuth: true,
                    embedded: true
                }
            },
            {
                path: 'sites/create',
                component: EmbedsCreateSiteForm,
                name: 'embed_create_sites',
                meta: {
                    requireAuth: true,
                    embedded: true
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