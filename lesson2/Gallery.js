class Gallery {
    constructor(source, container, modal = {id: 'modal', imgWrap: 'img-wrap', btn: 'close-btn'}){
        this.container = container;
        this.modal = new Modal(modal);
        this._getData(source);
    }

    _getData(source){
        fetch(source)
            .then(result => {return result.json()})
            .then(data => this._buildGallery(data));
    }
    
    _buildGallery(data){
        this.container = document.querySelector(this.container);
        for (let image of data) {
            this._addImage(image);
        }
    }
}