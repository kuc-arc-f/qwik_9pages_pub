// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
 
// An existing React component
function Greetings() {
    return <div>Hello from React [QGreetings]</div>;
}
 
// Qwik component wrapping the React component
export const QGreetings = qwikify$(Greetings);
