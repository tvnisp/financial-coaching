import {Entry} from 'contentful';
import dynamic from 'next/dynamic';
import {ComponentType} from 'react';

function createDynamicComponent(entry: Entry<any>) {
	const componentName = entry.sys.contentType.sys.id;
	const style = entry.fields.style;

	try {
		// Attempt to dynamically import the component
		const Component = dynamic(
			() => import(`../${componentName}${style ? '/' + style : ''}`),
			{ssr: true}
		);

		// Return the dynamic component
		return Component;
	} catch (error) {
		// Handle any import errors here
		console.error(`Failed to import component: ${componentName}`, error);
		return null;
	}
}

export function ContentBlock(entry: Entry<any>) {
	const DynamicComponent: ComponentType<any> | null =
		createDynamicComponent(entry);

	if (!DynamicComponent) return null;

	return (
		<section>
			<DynamicComponent {...entry.fields} />
		</section>
	);
}

export function ContentBlockRaw(entry: Entry<any>) {
	const DynamicComponent: ComponentType<any> | null =
		createDynamicComponent(entry);

	if (!DynamicComponent) return null;

	return <DynamicComponent {...entry.fields} />;
}
