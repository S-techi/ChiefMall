function About(){

    // internal css

    const  headingStyles = {
        color : "red",
        fontSize: "35px",
        fontWeight: "bold"
    }

    const imageStyles = {
        width: "450px",
        height: "450px"

    }
    return(
        <div>

            <h1 style={headingStyles}>About ChiefMall</h1>

            <img src="images/car3.png" alt=""  style={imageStyles}/>


            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis animi sit dignissimos! Molestias recusandae non, iusto deleniti ut esse unde vitae labore officiis distinctio corporis consequuntur qui, autem natus. Neque!</p>

        </div>
    );
}

export default About;