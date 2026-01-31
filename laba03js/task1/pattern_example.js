function validateEmail(email) {
    if (typeof email !== 'string') {
        throw new Error('Email must be a string');
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

try {
    console.log(validateEmail("test@gmail.com")); // true
    console.log(validateEmail("wrong")); // false 
}
    catch (error) {
    console.error(error.message);
}
