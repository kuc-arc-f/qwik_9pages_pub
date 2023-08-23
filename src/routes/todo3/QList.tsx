/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import HttpCommon from '../lib/HttpCommon';
import {useState, useEffect}  from 'react';
import CrudIndex from './CrudIndex';

//
function List() {
    const [todoItems, setTodoItems] = useState<any[]>([]);
    useEffect(() => {
        (async () => {
            const d = await CrudIndex.fetchItems()
            setTodoItems(d);
        })()

    }, []);
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
            window.location.reload();
        } catch (e) {
            console.error(e);
        }      
    }
    /**
     *
     * @param
     *
     * @return
     */    
    const addTodo = async function () {
        try{
            const result = await CrudIndex.addItem();
            if(result) {
                window.location.reload();
            }
        } catch (e) {
            console.error(e);
        }      
    }
    //
    return (
    <div>
        <h3>Todos</h3>
        <hr />
        {/* Test */}
        <div className="text-center">
            <label>Title: <input id="title" className="form-control" /></label>
            <label className="ms-2">Content: 
                <textarea id="content" name="content"  className="form-control" rows={3}
                placeholder="" ></textarea>
            </label>
            <button className="btn btn-primary ms-2" onClick={()=>addTodo()}>Create
            </button>                        
        </div>
        <hr />
        {/* Hello from React */}
        {todoItems.map((item: any ,index: number) => {
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
