class Gallery {
    constructor(source, container, modal = {id: 'modal', imgWrap: 'img-wrap', btn: 'close'}){
        this.container = container;
        this.modal = new Modal(modal);
        this._getData(source);
    }

    _getData(source){
        fetch(source)
            .then(result => {return result.json()})
            .then(data => this._buildGallery(data));
    }

    _addImage(image){
        this.container.innerHTML += `<img src="${image.src}" alt="${image.alt}">`
    }

    _buildGallery(data){
        this.container = document.querySelector(this.container);
        for (let image of data){
            this._addImage(image);
        }
        this._initGallery();
    }

    _initGallery() {
        this.container.addEventListener('click', event => {
            if (event.target.tagName !== 'IMG'){
                return;
            }
            this.modal.open(event.target);
        });
    }
}