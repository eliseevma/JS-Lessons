class MenuItem {
    constructor(href, title){
        this.href = href;
        this.title = title;
    }
    render(){
        return `<li><a href="${this.href}" id="${this.id}">${this.title}</a></li>`;
    }
}