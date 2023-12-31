import { component$ } from "@builder.io/qwik";
//import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export default component$(() => {

  return (
    <div class="px-2 py-2">
      <span><a href="/">[ home ]</a></span>
      <span><a href="/test">[ test ]</a></span>
      <span><a href="/test2">[ test2 ]</a></span>
      <br />
      <span><a href="/server/server1/">[ server1 ]</a></span>
      <span><a href="/server/server2/">[ server2 ]</a></span>
      <span><a href="/routing/route1/11">[ route1 ]</a></span>
      <br />
      <span><a href="/todo/">[ todo]</a></span>
      <span><a href="/todo3/">[ todo3]</a></span>
      <hr class="my-1" />
    </div>
  );
});
