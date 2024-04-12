function Updating() {

    function updating(event) {
        event.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
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
    
        <form onSubmit={updating} className="form">
            <button type="submit">UPDATING</button>
        </form>

    );
}

export default Updating;