export function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export function validatePassword(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }
    // Password must contain at least one uppercase letter, one lowercase letter, and one number
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (!hasUppercase || !hasLowercase || !hasNumber) {
        return false;
    }
    return true;
}

