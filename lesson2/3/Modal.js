class Modal{
    constructor(modal){
        this.settings = modal;
        this.btn = null;
        this.imgWrap = null;
        this.block = null;
        this._build();
    }

    _build(){
        let template =  `
                            <div id="${this.settings.id}" class="modal-wrap">
                                <div class="top-block">
                                    <button type="button" class="${this.settings.btn}" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="${this.settings.imgWrap}"></div>
                            </div>`;
        document.body.innerHTML += template;
        this.imgWrap = document.querySelector(`.${this.settings.imgWrap}`);
        this.block = document.querySelector(`#${this.settings.id}`);
        this._initElements();
    }

    _initElements() {
        this.btn = document.querySelector(`.${this.settings.btn}`);
        this.btn.addEventListener('click', () => {
            this.block.classList.toggle('show');
        });
    }

    open(element){
        this._addImage(element.src, element.alt);
        this.block.classList.toggle('show');
        document.body.classList.toggle('no-scroll');
    }

    _addImage(src, alt){
        this.imgWrap.innerHTML = `<img src="${src}" alt="${alt}">`;
    }

}