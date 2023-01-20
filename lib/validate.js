export default function login_validate(values){
    const errors = {};

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validation for password
    if(!values.password){
        errors.password = "Password required";
    } else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "Invalid password";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid password";
    }

    return errors;

}

export function registerValidate(values){
    const errors = {};

    if (!values.email) {
        errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

       // validation for password
       if(!values.password){
        errors.password = "Password required";
    } else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "Must be greater then 8 and less then 20 characters long";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid password";
    }

    // validate confirm password
    if(!values.cpassword){
        errors.cpassword = "Confirm your password";
    } else if(values.password !== values.cpassword){
        errors.cpassword = "Passwords do not match"
    } else if(values.cpassword.includes(" ")){
        errors.cpassword = "Passwords do not match"
    }

    return errors;
}