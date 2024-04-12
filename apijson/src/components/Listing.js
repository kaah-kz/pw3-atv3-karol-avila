function Listing() {


    function listing(event) {
        event.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));


    }

    return(
    
        <form onSubmit={listing} className="form">
            <button type="submit">LISTING</button>
        </form>

    );
}

export default Listing;