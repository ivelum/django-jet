module.exports = function(str) {
    if (!window.gettext) {
        return str;
    }
    return gettext(str);
};
