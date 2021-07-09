"use strict";

const {media_breakpoints} = require("./static/js/css_variables");

module.exports = {
    plugins: {
        // Warning: despite appearances, order is significant
        "postcss-nested": {},
        "postcss-extend-rule": {},
        "postcss-mixins": {},
        "postcss-simple-vars": {
            variables: media_breakpoints,
        },
        "postcss-calc": {},
        "postcss-media-minmax": {},
        autoprefixer: {},
    },
};
