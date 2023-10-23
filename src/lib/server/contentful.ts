import * as contentful from 'contentful'

async function getClient(preview?: false) {
	if (preview) {
		return contentful.createClient({
			space: '63wthzi2ru8c',
			accessToken: 'JlYVL037RPi66xOC1RxYCrKunRz6ok6WF_8Al6CPZ1c',
			environment: 'financial-coaching',
			host: 'preview.contentful.com',
		});
	}

	return contentful.createClient({
		space: '63wthzi2ru8c',
		accessToken: 'JlYVL037RPi66xOC1RxYCrKunRz6ok6WF_8Al6CPZ1c',
		environment: 'financial-coaching',
	});
}


export async function getEntry(id: string) {
	const client = await getClient();
	return await client.getEntry(id, {include: 10});
}
