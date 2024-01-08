import validateEmail from "./validateEmail";
import validatePassword from "./validatePassword";
export default function validateUserLoginForm(userData) {
    let errors = {};
    if (!validateEmail(userData.email)) {
        errors.emailText = "Invalid email format";
    }

    if (!validatePassword(userData.password)) {
        errors.passwordText =
            "The password does not meet the password policy requirements";
    }

    return errors;
}
