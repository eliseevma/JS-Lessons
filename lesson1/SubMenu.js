class SubMenu extends  Menu{
    constructor (id, className, items) {
        super (id, className, items);
    }
    render() {
        let result = `<li class="li">`;
        result += super.render();
        result += `</li>`;
        return result;
    }
}