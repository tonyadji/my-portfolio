// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://tonyadji-portfolio.netlify.app',
	i18n: {
		locales: ['en', 'fr'],
		defaultLocale: 'en',
		routing: { prefixDefaultLocale: false },
	},
});
