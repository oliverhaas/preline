export interface ISpaCollectionItem {
	key: string;
	fn: {
		autoInit: (target?: HTMLElement) => void;
	};
	collection: string;
}
