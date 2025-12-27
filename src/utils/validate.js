export const validate=(email,Password)=>{
    const isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if(!isEmailValid){
        return "Email ID is not valid";
    }
    const  isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(Password);

    if(!isPasswordValid){
        return "password is not valid";
    }
    return null;
};