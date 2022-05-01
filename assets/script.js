class ValidatorStatic {

    static isEmail( str ) {
        if ( !str ) {
            return false;
        }
        return /^[a-zA-Z0-9]{1,}[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z0-9_-]{2,}$/.test(str.trim());
    }
    static isDomain( str ) {
        if ( !str ) {
            return false;
        }
        // версия только для названий на латинице
        return /^([a-z0-9]{1}[a-z0-9-_]+\.){1,}([a-z0-9]{1,}[a-z]{1})$/i.test(str);
        // заканчиваться строка должна 1 латинской буквой
    }

    static isDate( str ) {
        if ( !str ) {
            return false;
        }
        return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(str.trim());
    }
    static isPhone( str ) {
        if ( !str ) {
            return false;
        }
        return /^(\+?7|8)-?\(?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(str.trim());
    }

}


class Validator {
    isEmail( str ) {
        if ( !str ) {
            return false;
        }
        return /^[a-zA-Z0-9]{1,}[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9_-]{2,}\.[a-zA-Z0-9_-]{2,}$/.test(str.trim());
    }
    isDomain( str ) {
        if ( !str ) {
            return false;
        }
        // версия только для названий на латинице
        return /^([a-z0-9]{1}[a-z0-9-_]+\.){1,}([a-z0-9]{1,}[a-z]{1})$/i.test(str.trim());
        // заканчиваться строка должна 1 латинской буквой
    }
    isDate( str ) {
        if ( !str ) {
            return false;
        }
        return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(str.trim());
    }
    isPhone( str ) {
        if ( !str ) {
            return false;
        }
        return /^(\+?7|8)-?\(?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(str.trim());
    }

}

//стандартная вызывается вот так
let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('it.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67')); //тут используем формат своей страны

console.log("=========");
//а статическая так
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны