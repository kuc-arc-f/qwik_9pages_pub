/* 
 ・React コンポーネントに、値を渡す
 ・React コンポーネントから、React コンポーネントを読み込む
 */
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import QApp from './QApp';
//
export default component$(() => {
  return (
    <>
      <h1>test2</h1>
      <hr />
      <QApp />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik: test2",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
