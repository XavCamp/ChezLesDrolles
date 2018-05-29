(function (window) {
    window.Drolles = {};

    Drolles.scrollToTarget = function (event, target) {
        var elTarget = window.document.getElementById(target);

        if (elTarget.scrollIntoView) {
            elTarget.scrollIntoView({ behavior: 'smooth' });
        }

        event.preventDefault();
        event.stopPropagation();
        return false;
    };

    Drolles.openDialog = function (event, target) {
        closeDialog();
        
        var dialogContent = window.document.getElementById('pizza-' + target).innerHTML;

        var dialog = document.createElement("div");
        dialog.setAttribute('id', 'dialog');
        dialog.setAttribute('class', 'blackboard');
        dialog.innerHTML = dialogContent;
        
        window.document.querySelector('body').appendChild(dialog);

        event.preventDefault();
        event.stopPropagation();
        return false;
    };
    
    window.onclick = closeDialog;
    // window.ontouchend = closeDialog;
    
    function closeDialog() {
        var dialog = window.document.getElementById('dialog');
        if (dialog) {
            dialog.remove();
        }
    }
})(window);