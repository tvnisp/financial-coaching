import {Asset, AssetFields} from 'contentful';
import {useMemo} from 'react';

type TResizeImageOptions = {
	width?: number;
	height?: number;
};

function resizeImage(options: TResizeImageOptions & {src: string}) {
	const {src, width, height} = options;
	let url = src;

	if (width && height) url + `?w=${width}&h=${height}`;
	return url;
}

interface IContentfulImageProps {
	asset?: Asset;
	options?: TResizeImageOptions;
	contentDimensions?: boolean;
}

export function useContentfullImage(props: IContentfulImageProps) {
	const {asset, options, contentDimensions = false} = props;
	const imageValues = useMemo(() => {
		const src = `https:${asset?.fields.file?.url}`;
		const castedAsset = asset?.fields as AssetFields;
		const w = castedAsset?.file?.details?.image?.width;
		const h = castedAsset?.file?.details?.image?.height;

		const imageUrl = resizeImage({
			src,
			width: contentDimensions ? w : options?.width,
			height: contentDimensions ? h : options?.height,
		});
		const imageTitle = asset?.fields.title;
		const imageDescription = asset?.fields.description;

		return {
			imageUrl,
			imageTitle,
			imageDescription,
		};
	}, [asset, options, contentDimensions]);

	return imageValues as {
		imageUrl: string;
		imageTitle: string;
		imageDescription: string;
	};
}
