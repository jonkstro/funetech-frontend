export interface User {
    // username: string;
    first_name: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Forgot {
    email: string;
}

export interface ResetPassword {
    uid: string;
    token: string;
    new_password: string;
}

export interface ActivateUser {
    uid: string;
    token: string;
}