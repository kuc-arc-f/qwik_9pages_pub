import LibConfig from './LibConfig';
//
const HttpCommon = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  post: async function(item: any, path: string): Promise<any>
  {
    try {
      let url = import.meta.env.PUBLIC_API_URL;
      url = url + path;
      const apiKey = import.meta.env.PUBLIC_API_KEY;
//console.log("#getList.apiKey=" + apiKey);
console.log("url=" + url);
      item.api_key = apiKey;
//console.log(item);
      const body: any = JSON.stringify(item);		
      const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
//console.log("status=", res.status);   
      if (res.status !== 200) {
        console.error("error, status <> 200");
        throw new Error(await res.text());
      }
      const json = await res.json()
      if (json.ret !==  LibConfig.OK_CODE) {
        console.error("Error, json.ret <> OK");
        return {};
      } 
      return json;
    } catch (e) {
      console.error(e);
//      throw new Error('Error , post');
    }
  }, 
  /**
  * 
  * @param
  *
  * @return
  */ 
  send_post: async function(item: any, path: string): Promise<any>
  {
    try {
      const apiKey = import.meta.env.PUBLIC_API_KEY;
//console.log("#getList.apiKey=" + apiKey);
console.log("path=" + path);
      item.api_key = apiKey;
      item.path = path;
//console.log(item);
      const body: any = JSON.stringify(item);		
      const res = await fetch("/api/send_post", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
//console.log("status=", res.status);   
      if (res.status !== 200) {
        console.error("error, status <> 200");
        throw new Error(await res.text());
      }
      const json = await res.json()
      if (json.ret !==  LibConfig.OK_CODE) {
        console.error("Error, json.ret <> OK");
        return {};
      } 
      return json;
    } catch (e) {
      console.error(e);
      throw new Error('Error , send_post');
    }
  },
}
export default HttpCommon;
