import React from "react";

function Footer(){
    const currentDate = new Date();
    var year = currentDate.getFullYear();

    return(
        <footer>
            <p>Copyright {year}</p>
        </footer>
    )
}

export default Footer;