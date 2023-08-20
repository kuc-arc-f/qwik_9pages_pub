
/*
配列を返す
*/
import { component$, useSignal } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import {QList} from './QList';
const items: any[] = [];
//
const fetchItems = async function (): Promise<any[]>
{
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });  
  const json: any = await response.json();
//console.log(json);
  items.push(json);
  return items;
}
//server
const serverGreeter = server$(async () => {
  return await fetchItems();
});
//Loader
export const useFirstJoke = routeLoader$(async () => {
  return await fetchItems();
});

//component
export default component$(() => {
  const arrSignal = useSignal(JSON.stringify([]));
  const firstSignal = useFirstJoke();
  arrSignal.value = JSON.stringify(firstSignal.value);

//console.log(firstSignal);
  return (
    <section>
      <h3>Sever2</h3>
      <hr />
      <button
        onClick$={async () => {
          const greeting = await serverGreeter();
          console.log(greeting);
          arrSignal.value = JSON.stringify(greeting);
//          alert(greeting);
        }}
      >
        greet
      </button>
      <hr />
      <QList items={arrSignal.value} />
    </section>
  );
});
