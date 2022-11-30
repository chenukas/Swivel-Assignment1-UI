export const nameValidation = (str = '') => {
    if (str.length >= 6 && str.length <= 10 && str.match(/^[A-Za-z]+$/)) {
        return true
    }
    return false
}

export const emailValidation = (email = '') => {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return true
    }
    return false
}

export const phoneValidation = (phone = '') => {
    if (phone.match(/^(?:\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/)) {
        return true
    }
    return false
}