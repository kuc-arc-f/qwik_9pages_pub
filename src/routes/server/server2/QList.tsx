/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
let items = [];

//
function List(props: any) {
console.log(props.items);
    items = JSON.parse(props.items);
console.log(items);
    return (
      <div>Hello from React
        <hr />
        {items.map((item: any ,index: number) => {
          return (
            <div key={index}>
                <span>ID: {item.id}, </span>
                <span>Joke: {item.joke}</span>
            </div>
          )
        })}

      </div>
    );
}
//
export const QList = qwikify$(List);
