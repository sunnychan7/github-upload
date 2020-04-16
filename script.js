(function(){
'use strict';

document.addEventListener("DOMContentLoaded", function(){
    var currentYear = document.getElementById("current-year"),
        d = new Date(),
        year = d.getFullYear();

    currentYear.innerHTML = '&copy;' + year;
});

})();