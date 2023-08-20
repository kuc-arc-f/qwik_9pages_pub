
/*
todo-list
*/
import { component$, useSignal } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";
import {QList} from './QList';
import HttpCommon from '../lib/HttpCommon';
let items: any[] = [];
//
const fetchItems = async function (): Promise<any[]>
{
  const postItem = {
    userId: import.meta.env.PUBLIC_USER_ID
  }
  console.log(postItem); 
  const json = await HttpCommon.post(postItem, "/todos/get_list");
//console.log(json)
  items = json.data;
  return items;
}
//server
const serverGreeter = server$(async (title: string, content: string) => {
  const postItem = {
    userId: import.meta.env.PUBLIC_USER_ID,
    title: title,
    content: content,
    completed: 0,
  }
console.log(postItem);
  const json = await HttpCommon.post(postItem, "/todos/create");
console.log(json)
  return await fetchItems();
});
//Loader
export const useFirstJoke = routeLoader$(async () => {
  return await fetchItems();
});

//component
export default component$(() => {
  const titleSignal = useSignal('');  
  const contentSignal = useSignal('');
  const arrSignal = useSignal(JSON.stringify([]));
  const firstSignal = useFirstJoke();
  arrSignal.value = JSON.stringify(firstSignal.value);
//console.log(arrSignal.value);
  return (
    <div class="container">
      <h3>Todos</h3>
      <hr class="my-1" />
      <label>Title: <input bind:value={titleSignal} /></label>
      <label class="ms-2">Content: <input bind:value={contentSignal} /></label>      
      <button
        onClick$={async () => {
          const greeting = await serverGreeter(titleSignal.value, contentSignal.value);
          console.log(greeting);
          arrSignal.value = JSON.stringify(greeting);
          alert("OK");
          location.reload();
        }}
      class="btn btn-primary ms-2">Create
      </button>
      <hr class="my-1" />
      <QList client:only items={arrSignal.value} />
    </div>
  );
});
//
export const head: DocumentHead = {
  title: "Welcome to Todo",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};