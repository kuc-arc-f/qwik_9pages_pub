import { component$, useSignal } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { server$ } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";
import HttpCommon from '../../../lib/HttpCommon';

export const useFirstJoke = routeLoader$(async (requestEvent) => {
    const postItem: any = {
        "id": Number(requestEvent.params.id)
    };    
console.log(postItem);
    const json = await HttpCommon.post(postItem, "/todos/get");
//console.log(json.data)
    return json.data;
});
//server
const serverGreeter = server$(async (title: string, content: string, id: string) => {
    const postItem = {
        id: Number(id),
        title: title,
        content: content,
        completed: 0,
    }
console.log(postItem);
    const json = await HttpCommon.post(postItem, '/todos/update');
console.log(json.data)
    return {};
});
//
export default component$(() => {
    const loc = useLocation();
console.log("id=", loc.params.id);
    const firstSignal = useFirstJoke();
//console.log(firstSignal.value);
    const titleSignal = useSignal(firstSignal.value.title);  
    const contentSignal = useSignal(firstSignal.value.content);
    return (
    <div class="container">
        <a class="btn btn-outline-primary" href={`/todo2`}>Back</a>
        <hr />
        <h1>Edit</h1>
        <p>Id:{firstSignal.value.id}, <span>{firstSignal.value.createdAt}</span>
        </p>
        <hr class="my-1" />
        <label>Title: <input class="form-control" bind:value={titleSignal} /></label>
        <label class="ms-2">Content: 
        <textarea id="content" name="content"  class="form-control" rows={3}  bind:value={contentSignal}
        placeholder=""></textarea>
        </label>
        <hr />
        <button class="btn btn-primary"
        onClick$={async () => {
          const greeting = await serverGreeter(titleSignal.value, contentSignal.value, loc.params.id);
          console.log(greeting);
          alert("OK, Update");
          location.href= "/todo2";
        }}
      >Save
      </button>
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