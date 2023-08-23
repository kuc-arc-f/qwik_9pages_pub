import HttpCommon from '../lib/HttpCommon';
import LibConfig from '../lib/LibConfig';
import Crud from './Crud';
//
const CrudIndex = {
    /**
     *
     * @param
     *
     * @return
     */   
    fetchItems: async function (): Promise<any[]>
    {   
        try{
            let items: any[] = [];
            const postItem = {
                userId: import.meta.env.PUBLIC_USER_ID
                }
            console.log(postItem); 
            const json = await HttpCommon.send_post(postItem, "/todos/get_list");
//console.log(json)
            items = json.data;
            return items;
        } catch (e) {
          console.error(e);
          throw new Error('Error , delete_movie');
        }
    },
    /**
     *
     * @param
     *
     * @return
     */   
    addItem : async function() : Promise<any>
    {
      try{
        let ret = false;
        const values = Crud.getInputValues();
        values.userId = import.meta.env.PUBLIC_USER_ID;
//console.log(values);
        const json = await HttpCommon.send_post(values, '/todos/create');
  console.log(json);
        if (json.ret ===  LibConfig.OK_CODE) {
          ret = true;
        } 
        return ret;
      } catch (e) {
        console.error("Error, addItem");
        console.error(e);
        throw new Error('Error , addItem');
      }
    },      
}
export default CrudIndex;
