const continents = ['Asia', 'Africa', 'America', 'Australia', 'Europe'];
const helloContinents = Array.from(continents, c => `Hello, ${c}!`);
const message = helloContinents.join(' ');

const element = (
    <div title='Outer div' className='banner'>
        <h1>{message}</h1>
    </div>
);
ReactDOM.render(element, document.getElementById('content'));
