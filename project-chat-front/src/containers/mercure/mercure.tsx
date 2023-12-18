export default function Mercure(): JSX.Element {

    window.onload = () => {
        const url = new URL('http://localhost:1234/.well-known/mercure');

        url.searchParams.append('topic', 'https://example.com/my-private-topic');

        const eventSource = new EventSource(url.toString());

        eventSource.onmessage = (event) => {
            console.log(JSON.parse(event.data));
        };
    }


    return (
        <div>
            <h1>Mercure</h1>
        </div>
    )
}