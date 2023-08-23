
/*
todo-list
*/
import { component$} from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import {QList} from './QList';

export default component$(() => {
  //
  return (
    <div class="container"><QList client:only />
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