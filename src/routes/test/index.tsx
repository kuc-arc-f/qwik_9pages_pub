/* 
 ・React コンポーネントに、値を渡す
 */
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {QGreetings} from './QGreetings ';
import {QJoke} from './QJoke';
//
export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!<br />
        Happy coding.
      </p>
      <hr />
      <QGreetings />
      <hr />
      <QJoke client:only text="test_1234" />
      <hr />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
