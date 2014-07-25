/*
 * Better Vimeo Embeds 2.2 by Matthew Buchanan
 * Modelled on the Vimeo Embedinator Script
 * http://mattbu.ch/tumblr/vimeo-embeds/
 *
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * First released July 14, 2009
 */
(function($) {
	$.fn.fixVimeo = function(hexColor) {
		var color = hexColor.split("#")[1];
		var opts = "title=0&byline=0&portrait=0";

		return this.each(function() {
			var $posts = $(this);

			$posts.find("iframe[src*='//player.vimeo.com']").each(function() {
				var src = $(this).attr("src");
				var w = $(this).attr("width");
				var h = $(this).attr("height");
				if (src.indexOf("?") === -1) {
					$(this).replaceWith("<iframe src='" + src
						+ "?" + opts + "&color=" + color
						+ "' width='" + w + "' height='" + h
						+ "' frameborder='0'></iframe>");
				}
			});
			$posts.find("object[data*='//vimeo.com']").each(function() {
				var $obj = $(this);
				var data = $obj.attr("data");
				var temp = data.split("clip_id=")[1];
				var id = temp.split("&")[0];
				var server = temp.split("&")[1];
				var w = $obj.attr("width");
				var h = $obj.attr("height");
				$obj.replaceWith("<iframe src='//player.vimeo.com/video/" + id
					+ "?" + server + "&" + opts + "&color=" + color
					+ "' width='" + w + "' height='" + h
					+ "' frameborder='0'></iframe>");
			});
		});
	}
})(jQuery);
