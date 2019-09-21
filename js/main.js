(function() {
    /* TABBED CONTENT SECTION */

    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');

    function selectItem(e) {
        removeBorder();
        removeShow();
        // Add border to current tab
        this.classList.add('tab-border');
        // Grab content item from DOM
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        // Add show class
        tabContentItem.classList.add('show');
    }
    
    function removeBorder() {
        tabItems.forEach(item => item.classList.remove('tab-border'));
    }
    
    function removeShow() {
        tabContentItems.forEach(item => item.classList.remove('show'));
    }
    
    // Listen for tab click
    tabItems.forEach(item => item.addEventListener('click', selectItem));




    /* CLICK HANDLERS FOR MODAL WINDOW */

    const buttons = document.querySelectorAll('.button');     
    const close = document.querySelector('.close');

    // Open modal

    function openModal() {
        document.querySelector('.bg-modal').style.display = 'flex';
    }

    
    function closeModal() {
        close.addEventListener('click', function () {
            document.querySelector('.bg-modal').style.display = 'none';
        });
    }

    buttons.forEach(button => button.addEventListener('click', openModal));


    closeModal();



})();
