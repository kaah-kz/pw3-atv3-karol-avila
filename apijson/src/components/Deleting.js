function Deleting() {

    function deleting(event) {
        event.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
            }) 
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return(
    
        <form onSubmit={deleting} className="form">
            <button type="submit">DELETING</button>
        </form>

    );
}

export default Deleting;