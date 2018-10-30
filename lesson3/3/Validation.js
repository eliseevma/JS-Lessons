class Validatin {
    constructor (form) {
        this.patterns = {
            name: /^\w+$/,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w.-_]+@\w+\.\w{2,4}$/
        };
        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон подчиняется шаблон +7(000)000-0000',
            email: 'E-mail выглядит как email@email.ru или e.mail@email.ru или e-mail@email.ru'
        };
        this.erorClass = 'error-msq';
        this.form = form;
    }
}