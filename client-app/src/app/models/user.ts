export interface User 
{
    userName: string;
    email: string;
    token: string;
    image?: string;
    displayName: string;
}

export interface UserFormValues
{
    email: string;
    password: string;
    displayName?: string;
    userName?: string;
}