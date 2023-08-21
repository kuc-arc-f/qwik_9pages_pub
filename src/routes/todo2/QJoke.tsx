// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
 
/*
export type TJoke = {
    text: string
}
*/
  
// An existing React component
function Joke(props: any) {
console.log(props.text);
    return <div>Hello from React [QJoke], text={props.text}</div>;
}
 
// Qwik component wrapping the React component
export const QJoke = qwikify$(Joke);
