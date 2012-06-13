/*
 * HexColorToRGB 1.0 by Matthew Buchanan
 * http://mattbu.ch
 *
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */
(function($) {
	$.hexColorToRGB = function(hexColor) {
		// Convert a three- or six-digit hex colour to RGB component values.
		var r, g, b;
		var color = hexColor.split("#")[1];
		var chars = color.split("");
		if (color.length === 3) {
			r = parseInt(chars[0] + chars[0], 16);
			g = parseInt(chars[1] + chars[1], 16);
			b = parseInt(chars[2] + chars[2], 16);
		} else {
			r = parseInt(chars[0] + chars[1], 16);
			g = parseInt(chars[2] + chars[3], 16);
			b = parseInt(chars[4] + chars[5], 16);
		}
		return {r:r, g:g, b:b};
	}
})(jQuery);