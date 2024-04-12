function Creating() {

    function creating(event) {
        event.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return(
    
        <form onSubmit={creating} className="form">
            <button type="submit">CREATING</button>
        </form>

    );
}

export default Creating;