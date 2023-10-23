export function parseCTA(entry: any) {
	return {
		imageUrl: 'https:' + entry.fields.image.fields.file.url,
		title: entry.fields.title,
		subtitle: entry.fields.subtitle,
		description: entry.fields.description,
		button: entry.fields.button,
	};
}