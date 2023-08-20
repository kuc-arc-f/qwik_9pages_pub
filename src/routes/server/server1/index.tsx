import { component$, useSignal } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';


// By wrapping a function with `server$()` we mark it to always
// execute on the server. This is a form of RPC mechanism.
const serverGreeter = server$((firstName: string, lastName: string) => {
//  const greeting = `Hello ${firstName} ${lastName}`;
  const greeting = `Hello:firstName=${firstName}, Last=${lastName}`;
  console.log('Prints in the server:', greeting);
  return greeting;
});
 
export default component$(() => {
  const firstName = useSignal('');
  const lastName = useSignal('');
  const arrSignal = useSignal([]);

console.log(arrSignal);
  return (
    <section>
      <label>First name: <input bind:value={firstName} /></label>
      <label>Last name: <input bind:value={lastName} /></label>
      <hr />
      <button
        onClick$={async () => {
          const greeting = await serverGreeter(firstName.value, lastName.value);
          console.log(greeting);
          
          alert(greeting);
        }}
      >
        greet
      </button>
    </section>
  );
});
