import type { RequestHandler } from '@builder.io/qwik-city';
 
export const onPost: RequestHandler = async ({request, json }) => {
    try{
        const body = await request.json();
        const sendBody: any = JSON.stringify(body);
        //console.log(request.body);
        console.log(body);
        console.log("path=", body.path);
        const url = import.meta.env.PUBLIC_API_URL;
        const res = await fetch(url +  body.path, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},      
            body: sendBody
        });
        const resJson = await res.json();
        json(200, resJson);
    } catch (e) {
        console.error(e);
        json(500, {message: 'error, HTTP 500'});
    }    
};