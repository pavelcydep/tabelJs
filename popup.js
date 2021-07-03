class Popup {
	constructor(toogleNavElement) {
		this.toogleNavElement= toogleNavElement;
	}

	openClose (buttonElement,toogleMainElement) {
		
        buttonElement.addEventListener('click',()=>{
            this.toogleNavElement.classList.toggle('navigation_display');
            toogleMainElement.classList.toggle('main_display');
        });
    }
        openCloseMobile (buttonElement) {
		
            buttonElement.addEventListener('click',()=>{
                buttonElement.classList.remove('navigation_display');
                this.toogleNavElement.classList.toggle('navigation_mobile');
            });
             


	}
}
