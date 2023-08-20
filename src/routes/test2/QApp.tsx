// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import QJoke from './QJoke';

// An existing React component
function Greetings() {
    return (
    <div>
        Hello from React [QGreetings]
        <hr />
        <QJoke />
    </div>
    );
}

const QApp = qwikify$(Greetings);
export default QApp;