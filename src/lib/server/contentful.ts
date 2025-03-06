import * as contentful from 'contentful'

async function getClient(preview?: false) {
	if (preview) {
		return contentful.createClient({
			space: '63wthzi2ru8c',
			accessToken: '--',
			environment: 'financial-coaching',
			host: 'preview.contentful.com',
		});
	}

	return contentful.createClient({
		space: '63wthzi2ru8c',
		accessToken: '--',
		environment: 'financial-coaching',
	});
}


export async function getEntry(id: string) {
	const client = await getClient();
	return await client.getEntry(id, {include: 10});
}
