export interface ICreateMovieRequest {
    title: string;
    description: string;
    uri: string; 
}
export interface ICreateMovieDTO {
    title: string;
    description: string;
    uri: string; 
}
export interface ICreateUserDTO {
    username: string,
    password: string
}
export interface ICreateUserRequest {
    username: string,
    password: string
}