
import { NextResponse } from 'next/server';

// tem que ser uma funcao que seja executada muito rapido, senao impacta no sistema
// deve monitorar as paginas que devem ser protegidas

//matcher = só roda o porteiro nas rotas específicas

// estrutura basica do middleware:
/*
export function middleware(request){
    console.log("a pagina acessada foi ", request.url);
    return NextResponse.next();

}
*/

// captura onde o usuario quer ir
// verufuca se ele tem token falso de login
// a logica do porteiro 
export function middleware(request){

    console.log("rota vigiada", request.nextUrl.pathname);

    const estaNoCaminho = request.nextUrl.pathname.startsWith('/admin');
    const existeToken = request.cookies.get('meu_blog_token');

    const estaNoCaminhoArtigos = request.nextUrl.pathname.startsWith('/artigos');

    if(estaNoCaminho && !existeToken){
        //redireciona para a pag inicial
        console.log("nao esta logado");
        return NextResponse.redirect(new URL("/", request.url));
    }

    if(estaNoCaminhoArtigos){
        console.log("nao tem arquivos");
        return NextResponse.redirect(new URL("/posts", request.url));
    }

    return NextResponse.next();
}

export const config = { 
    'matcher' : ['/admin/:path*','/artigos/:path*'] //qlqr coisa/rota q parta de admin || se for /editores/:path* verifica a rota de editores
}
