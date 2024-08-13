export interface ISpaCollectionItem {
	key: string;
	fn: {
		autoInit: (target: HTMLElement | null) => void;
	};
	collection: string;
}
