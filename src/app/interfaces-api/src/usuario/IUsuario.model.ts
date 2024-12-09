export interface ICadastroUsuarioRequest {
    nome: string;
    email: string;
    senha: string;
}


export interface ICadastroUsuarioResponse {
    id: number;
    nome: string;
    email: string;
}


export interface ILoginUsuarioRequest {
    email: string;
    senha: string;
}


export interface ILoginUsuarioResponse {
    usuario: ICadastroUsuarioResponse;
    token: string;
}