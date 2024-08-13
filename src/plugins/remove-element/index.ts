/*
 * HSRemoveElement
 * @version: 2.4.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */

import { afterTransition, querySelectorAllOrMatch } from '../../utils';

import { IRemoveElementOptions, IRemoveElement } from './interfaces';

import HSBasePlugin from '../base-plugin';
import { ICollectionItem } from '../../interfaces';

class HSRemoveElement
	extends HSBasePlugin<IRemoveElementOptions>
	implements IRemoveElement
{
	private readonly removeTargetId: string | null;
	private readonly removeTarget: HTMLElement | null;
	private readonly removeTargetAnimationClass: string;

	constructor(el: HTMLElement, options?: IRemoveElementOptions) {
		super(el, options);

		const data = el.getAttribute('data-hs-remove-element-options');
		const dataOptions: IRemoveElementOptions = data ? JSON.parse(data) : {};
		const concatOptions = {
			...dataOptions,
			...options,
		};

		this.removeTargetId = this.el.getAttribute('data-hs-remove-element');
		this.removeTarget = document.querySelector(this.removeTargetId);
		this.removeTargetAnimationClass =
			concatOptions?.removeTargetAnimationClass || 'hs-removing';

		if (this.removeTarget) this.init();
	}

	private init() {
		this.createCollection(window.$hsRemoveElementCollection, this);

		this.el.addEventListener('click', () => this.remove());
	}

	private remove() {
		if (!this.removeTarget) return false;

		this.removeTarget.classList.add(this.removeTargetAnimationClass);

		afterTransition(this.removeTarget, () => {
			this.removeTarget.remove();
		});
	}

	// Static method
	static autoInit(target: HTMLElement | Document = document) {
		if (!window.$hsRemoveElementCollection)
			window.$hsRemoveElementCollection = [];

		querySelectorAllOrMatch(target, '[data-hs-remove-element]:not(.--prevent-on-load-init)')
			.forEach((el: HTMLElement) => {
				if (
					!window.$hsRemoveElementCollection.find(
						(elC) => (elC?.element?.el as HTMLElement) === el,
					)
				)
					new HSRemoveElement(el);
			});
	}

    static autoClean(target: Document | HTMLElement = document) {
        querySelectorAllOrMatch(target, '[data-hs-remove-element]')
			.forEach((el: HTMLElement) => {
				window.$hsRemoveElementCollection = window.$hsRemoveElementCollection.filter(
					(elC) => elC.element.el !== el,
				);
			})
    }
}

declare global {
	interface Window {
		HSRemoveElement: Function;
		$hsRemoveElementCollection: ICollectionItem<HSRemoveElement>[];
	}
}

window.addEventListener('load', () => {
	HSRemoveElement.autoInit();

	// Uncomment for debug
	// console.log('Remove element collection:', window.$hsRemoveElementCollection);
});

if (typeof window !== 'undefined') {
	window.HSRemoveElement = HSRemoveElement;
}

export default HSRemoveElement;
