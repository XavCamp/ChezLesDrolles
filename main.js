(function (window) {
    window.Drolles = {};

    Drolles.scrollToTarget = function (event, target) {
        var elTarget = window.document.querySelector('#' + target);

        if (elTarget.scrollIntoView) {
            elTarget.scrollIntoView({ behavior: 'smooth' });
        }

        event.preventDefault();
        event.stopPropagation();
        return false;
    };
})(window);