function Upload(){

    const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch('http://127.0.0.1:8000/upload/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();

    alert(result.message);
    e.target.reset();

    };



     
    return(
        <div>

            <h1>Upload your products</h1>

            <form action="" onSubmit={handleSubmit}> 

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text" name="name" className="form-control"  id="name" placeholder="eg.Soap" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label"> Product Quantity</label>
                    <input type="number" name="quantity"  className="form-control" id="quantity" placeholder="5" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" name="price" className="form-control" id="price" placeholder="Ksh 1500" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea name="description" id="description" className="form-control"></textarea>
                </div>

                <button type="submit" className=" btn btn-primary">Upload</button>
                


            </form>
        </div>

    );
}

export default Upload;