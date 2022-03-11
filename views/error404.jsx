import React from "react";
const Default = require('./layouts/Default')

 let error404 = () => {
    return (
        <Default>
        <main>
            <h1>404 : Page does not exist </h1>
            <p>Sorry no content found</p>
        </main>
    </Default>
    )

}

module.exports = error404