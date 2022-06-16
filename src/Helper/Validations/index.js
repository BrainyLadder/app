const regexForNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

const ValidateNumber = (number) =>{
    return regexForNumber.test(number)
}
export {ValidateNumber}