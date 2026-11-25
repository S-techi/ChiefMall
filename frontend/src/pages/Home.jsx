import '../css/Home.css'

function Home(){

    return (
        <div>
            <h1 style={{ color: "red", fontSize: "40px" }}> Welcome to my page</h1> 

            <img src="images/car1.png" alt="" style={{ width: "200px", height: "200px", marginRight: "10px" }} />
            <img src="images/car2.png" alt=""  style={{ width: "200px", height: "200px", marginRight: "10px" }}/>
            <img src="images/car3.png" alt="" style={{ width: "200px", height: "200px", marginRight: "10px" }}/>


            <p style={{ fontWeight: "bold" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure assumenda, quis nulla similique quos totam facere dolor tenetur at quidem blanditiis magni, ea molestias minus. Veniam, aperiam. Culpa, placeat.
            Suscipit, incidunt consectetur. Quasi soluta dolores eius odit molestias ex! Optio sit consectetur cumque illo reprehenderit sint numquam ipsum vero perferendis dolores. Nobis sed optio fugit, laboriosam voluptates dolorem fugiat.</p>

            <button>Shop Now</button>
        </div>

    );
}

export default Home;
