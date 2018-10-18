class MenuItem {
    constructor(href, title, id){
        this.href = href;
        this.title = title;
        this.id = id;
    }
    render(){
        return `<li><a href="${this.href}" id="${this.id}">${this.title}</a></li>`;
    }
}