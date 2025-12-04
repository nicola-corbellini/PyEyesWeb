import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar: [
          {
            title : 'User Guide',
            to : '/user_guide/'
          }
		  ],
				sidebar: {
					// Add your sidebar configs here
				},
				github: 'https://github.com/Blackman99/sveltepress',
				logo: '/sveltepress.svg',
			}),
			siteConfig: {
				title: 'PyEyesWeb',
				description: 'Movement Analysis Toolkit',
			},
		}),
	],
})

export default config
