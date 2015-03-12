/* Markdown doesn't allow for target="_blank" on our links
 * so we're going to force them by some jQuery. - j
 */
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
