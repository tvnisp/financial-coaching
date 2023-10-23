import {CONTENT_TYPE} from '@/types/generated/contentful';
import {Entry} from 'contentful';
import React from 'react';

function isType(entry: Entry<any>, contentType: CONTENT_TYPE) {
	return entry.sys.contentType.sys.id === contentType;
}

function filterToType<T extends Entry<any>>(
	collection: (Entry<any> | T)[],
	contentType: T['sys']['contentType']['sys']['id']
): T[] {
	return collection.filter(item => {
		return isType(item, contentType as CONTENT_TYPE);
	}) as T[];
}

export function useTypeAtomicEntries<T extends Entry<any>>(
	collection: (Entry<any> | T)[],
	contentType: T['sys']['contentType']['sys']['id']
): T[] {
	const filtered = React.useMemo(() => {
		return filterToType<T>(collection, contentType);
	}, [collection, contentType]);
	return filtered;
}
