import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';

/** Project entries live in `src/content/projects/<lang>/<slug>.md`. */
export async function getProjects(lang: Lang) {
	const entries = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
	return entries
		.map((entry) => ({ entry, slug: entry.id.slice(lang.length + 1) }))
		.sort((a, b) => a.entry.data.order - b.entry.data.order);
}
