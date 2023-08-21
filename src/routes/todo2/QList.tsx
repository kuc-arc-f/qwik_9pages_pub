/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import HttpCommon from '../lib/HttpCommon';

let items = [];

//
function List(props: any) {
//console.log(props.items);
    items = JSON.parse(props.items);
console.log(items);
    /**
     *
     * @param
     *
     * @return
     */    
    const todoDelete = async function (id: number) {
        try{
            const postItem = {
                id: id,
            }
            const json = await HttpCommon.send_post(postItem, "/todos/delete");
console.log(json);
            alert("OK, Delete");
            window.location.reload();
        } catch (e) {
            console.error(e);
        }      
    }
    return (
      <div>
        {/* Test */}
        <div className="text-end">
        </div>
        <hr />
        {/* Hello from React */}
        {items.map((item: any ,index: number) => {
        return (
        <div key={index}>
            <h3>{item.title}</h3>
            <span>ID: {item.id}, {item.createdAt}</span>
            <a href={`/todo2/${item.id}`} className="btn btn-sm btn-outline-primary ms-2">Show</a>
            <a href={`/todo2/edit/${item.id}`} className="btn btn-sm btn-outline-primary ms-2">Edit</a>
            <button onClick={()=>todoDelete(item.id)} className="btn btn-sm btn-outline-danger ms-2" 
            >Delete</button>
            <hr />
        </div>
        )
        })}

      </div>
    );
}
//
export const QList = qwikify$(List);
