import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { server$ } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";
//let id:string = "";
import HttpCommon from '../../lib/HttpCommon';

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
const serverGreeter = server$(async (id: string) => {
    const postItem = {
        id: Number(id)
    }
console.log(postItem);
    const json = await HttpCommon.post(postItem, "/todos/delete");
console.log(json.data)
    return {};
});
//
export default component$(() => {
    const loc = useLocation();
console.log("id=", loc.params.id);
    const firstSignal = useFirstJoke();
console.log(firstSignal.value);
    return (
    <div class="container">
        <a class="btn btn-outline-primary" href={`/todo`}>Back</a>
        <hr />
        <h1>{firstSignal.value.title}</h1>
        <p>Id:{firstSignal.value.id}, <span>{firstSignal.value.createdAt}</span>
        </p>
        <hr />
        <pre>{firstSignal.value.content}</pre>
        <hr />
        <button class="btn btn-outline-danger"
        onClick$={async () => {
          const greeting = await serverGreeter(loc.params.id);
          console.log(greeting);
          alert("OK, Delete");
          location.href= "/todo";
        }}
      >Delete
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