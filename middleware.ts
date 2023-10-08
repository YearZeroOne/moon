import { useSearchParams } from 'next/navigation';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import PocketBase from "pocketbase";

export function middleware(request: NextRequest) {
    // const search_params = useSearchParams().get("next");
    // const request_cookie = request.cookies.get("pocketbase_auth")

    // const pb = new PocketBase("http://127.0.0.1:8090");
    // if(request.nextUrl.pathname.startsWith('/orders')){
    //     console.log("hello")
    // if(pb.authStore.isValid){
    //     return NextResponse.rewrite(new URL('/auth/login', request.url))

    // }else{

    //     return NextResponse.rewrite(new URL('/', request.url))

    // }

    if (request.nextUrl.pathname.startsWith('/orders')) {
        return NextResponse.redirect(new URL('/auth/login', request.url))

      }
     
    // || request.nextUrl.pathname.startsWith('/') || request.nextUrl.pathname.startsWith('/orders') || request.nextUrl.pathname.startsWith('/products')


// }

//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }
}
