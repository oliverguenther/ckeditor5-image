/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module image/utils
 */

import { widgetize, isWidget } from './widget/utils';

const imageSymbol = Symbol( 'isImage' );

/**
 * Converts given {@link module:engine/view/element~Element} to image widget:
 * * adds {@link module:engine/view/element~Element#setCustomProperty custom property} allowing to recognize image widget element,
 * * calls {@link module:image/widget/utils~widgetize widgetize}.
 *
 * @param {module:engine/view/element~Element} viewElement
 * @returns {module:engine/view/element~Element}
 */
export function toImageWidget( viewElement ) {
	viewElement.setCustomProperty( imageSymbol, true );

	return widgetize( viewElement );
}

/**
 * Checks if given view element is an image widget.
 *
 * @param {module:engine/view/element~Element} viewElement
 * @returns {Boolean}
 */
export function isImageWidget( viewElement ) {
	return !!viewElement.getCustomProperty( imageSymbol ) && isWidget( viewElement );
}