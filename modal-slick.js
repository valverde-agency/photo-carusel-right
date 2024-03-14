window.addEventListener("load", function () {
    if (document.documentElement.clientWidth < 767) return;

    const gallerySlider = document.querySelectorAll('.single-product__gallery .slick-slide');
console.log(gallerySlider)
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    gallerySlider.forEach((item) => {
        item.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
        });

        item.addEventListener('mouseup', (e) => {
            if (isDragging) {
                const endX = e.clientX;
                const endY = e.clientY;
                const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));

                if (distance < 5) {
                    const modal = document.createElement('div');
                    modal.classList.add('modal');

                    const modalContent = document.createElement('img');
                    modalContent.src = item.querySelector('img').src;
                    modal.appendChild(modalContent);

                    const modalClose = document.createElement('div');
                    modalClose.classList.add('modal_close');
                    modalClose.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 29 29" fill="none">
                            <path d="M1 1L28 28" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M28 1L1 28" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                    `;
                    modal.appendChild(modalClose);

                    modal.style.position = 'fixed';
                    modal.style.top = '0';
                    modal.style.left = '0';
                    modal.style.width = '100%';
                    modal.style.height = '100%';
                    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    modal.style.display = 'flex';
                    modal.style.alignItems = 'center';
                    modal.style.justifyContent = 'center';
                    modal.style.zIndex = '10000';

                    modalContent.style.maxWidth = '80%';
                    modalContent.style.maxHeight = '80%';

                    modalClose.style.position = 'absolute';
                    modalClose.style.width = '25px';
                    modalClose.style.height = '25px';
                    modalClose.style.cursor = 'pointer';

                    modalContent.onload = () => {
                        const pageWidth = document.documentElement.clientWidth
                        const pageHeight = document.documentElement.clientHeight;
                        const modalWidth = modalContent.clientWidth;
                        const modalHeight = modalContent.clientHeight;

                        console.log('pageWidth - ', pageWidth);
                        console.log('pageHeight - ', pageHeight);
                        console.log('modalWidth - ', modalWidth);
                        console.log('modalHeight - ', modalHeight);

                        modalClose.style.top = (pageHeight / 2 - modalHeight / 2 - 40) + 'px';
                        modalClose.style.right = (pageWidth / 2 - modalWidth / 2 - 40) + 'px';
                    }

                    modalClose.addEventListener('click', () => {
                        modal.remove();
                    });

                    document.body.appendChild(modal);
                }

                isDragging = false;
            }
        });
    });

});
