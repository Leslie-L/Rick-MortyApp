const NotFound = ()=>{
    const res = `
        <div class="notFound">
             <h1>404 Not Found</h1>
            <div class="notFound-container">
                <section class="notFound-image">
                    <img src="../images/404.png" />
                </section>
                <section class="notFound-info">
                    <p>
                    Looks like you've stumbled into an interdimensional void, Morty. This page doesn't exist in any conceivable reality! We've gotta get outta here before the Error-Beasts show up, Morty!
                    </p>
                </section>
            </div>
        </div>
        `;
    return res
}
export default NotFound;