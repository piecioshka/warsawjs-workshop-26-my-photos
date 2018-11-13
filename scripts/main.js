(function () {

    const DEFAULT_VALUE = 33;

    /**
     * Go go go!!1
     */
    function setup() {
        const $slider = document.querySelector('.slider-before-after');
        const $after = document.querySelector('.images-after');

        $slider.addEventListener('input', (evt) => {
            const percent = Number(evt.target.value);
            $after.style.width = `${percent}%`;
        });

        $slider.value = DEFAULT_VALUE;
        $slider.dispatchEvent(new Event('input'));
    }

    window.addEventListener('load', setup);

}());
