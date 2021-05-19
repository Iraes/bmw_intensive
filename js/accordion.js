document.addEventListener('DOMContentLoaded', () => {
   
    const fetureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');
    

    fetureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('feature__link_active')) {
                btn.classList.remove('feature__link_active');
                featureSubElems[index].classList.add('hidden');
            } else {
                featureSubElems.forEach((featureSubElems) => {
                    featureSubElems.classList.add('hidden');
                });
                featureSubElems.forEach((featureSubElems) => {
                    featureSubElems.classList.remove('feature__link_active');
                });
                featureSubElems[index].classList.remove('hidden');
                btn.classList.add('feature__link_active');
            };
        });
    });
});