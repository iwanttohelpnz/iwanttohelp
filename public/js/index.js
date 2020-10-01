document.addEventListener('DOMContentLoaded', function() {
    let slider = document.querySelectorAll('.slider');
    let instances = M.Slider.init(slider);
});

// Or with jQuery

$(document).ready(function(){
    $('.slider').slider();
});