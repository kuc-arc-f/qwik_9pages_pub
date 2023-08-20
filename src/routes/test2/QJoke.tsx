// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
function QJoke() {
//console.log(props.text);
    return <div>Hello from React [QJoke]</div>;
}
 
// Qwik component wrapping the React component
//export const QJoke = qwikify$(Joke);
export default QJoke;

