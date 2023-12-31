const Crud = {
    /**
     * 
     * @param key: any
     *
     * @return
     */
    getInputValues: function() : any
    {
        try{
            const data: any = {};
        
            // inputタグから値を取得し、オブジェクトにセットする
            const title = (<HTMLInputElement>document.querySelector("#title")).value;
            data.title = title;
            
            const content = (<HTMLInputElement>document.querySelector("#content")).value;
            data.content = content;
        
            return data;
        } catch (e) {
        console.error(e);
        throw new Error('Error , getInputValues');
        }
    },  
}

export default Crud;
