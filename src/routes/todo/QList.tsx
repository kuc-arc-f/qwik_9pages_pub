/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
let items = [];

//
function List(props: any) {
//console.log(props.items);
    items = JSON.parse(props.items);
console.log(items);
    return (
      <div>
        {/* Hello from React */}
        {items.map((item: any ,index: number) => {
          return (
            <div key={index}>
                <h3>{item.title}</h3>
                <span>ID: {item.id}, {item.createdAt}</span>
                <hr />
            </div>
          )
        })}

      </div>
    );
}
//
export const QList = qwikify$(List);
