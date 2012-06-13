Helpers
=======

A selection of helper scripts for building Tumblr themes and other worthy pursuits. All scripts are released under the [WTFPL license](http://sam.zoy.org/wtfpl/).

FixVimeo
--------

This plugin rewrites Vimeo embed code to add an accent colour to the player controls, and to remove optional interface elements including the video’s name and author, if allowed by the owner.

It was first published for `<object>` embeds [here](http://matthewbuchanan.name/post/141302328/better-vimeo-embeds-on-tumblr), and subsequently updated to support `<iframe>` embeds [here](http://matthewbuchanan.name/tumblr/vimeo-embeds/).

Sample usage:

    $(".posts").fixVimeo("#c0ffee");

The plugin takes a single string parameter representing the hexadecimal colour for the controls.

HexColorToRGB
-------------

This plugin converts a three- or six-digit hexadecimal colour value into its RGB component values. This is useful when converting Tumblr’s custom colour tag output into RGBA values for use in CSS.

Sample usage:

    var rgb = $.hexColorToRGB("#ace");

The returned variable is an object with `r`, `g` and `b` properties represented as integer values between 0 and 255.

Using the `rgb` object, you can generate an RGBA string for use as a CSS attribute. For example, to output the colour with 50% opacity:

    var rgba = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.5)";