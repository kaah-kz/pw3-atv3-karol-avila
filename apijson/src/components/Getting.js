function Getting() {

    function getting(event) {
        event.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json));

    }

    return(
    
        <form onSubmit={getting} className="form">
            <button type="submit">GETTING</button>
        </form>

    );
}

export default Getting;