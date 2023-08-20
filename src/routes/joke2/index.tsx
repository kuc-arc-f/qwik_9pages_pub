/* 2 Loading data */

import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
 
export const useDadJoke = routeLoader$(async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  return (await response.json()) as {
    id: string;
    status: number;
    joke: string;
  };
});
 
export default component$(() => {
  // Calling our `useDadJoke` hook, will return a reactive signal to the loaded data.
  const dadJokeSignal = useDadJoke();
console.log(dadJokeSignal);
  return (
    <section class="section bright">
      <h3>2 Loading data</h3>
      <hr />
      <h3>Joke2: start</h3>
      <hr />
      <p>{dadJokeSignal.value.joke}</p>
      <hr />
      <p>{JSON.stringify(dadJokeSignal)}</p>
    </section>
  );
});