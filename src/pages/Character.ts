const Character = ()=>{
    const view=`
        <div class="characters">
            <article class="characters-img">
                <img src="image" alt="name">
            </article>

            <article class="character-card">
                <h2>Name</h2>
                <div class="character-card__info">
                    <h3>Status:</h3>
                    <h3>Species:</h3>
                    <h3>Gender:</h3>
                    <h3>Origin:</h3>
                    <h3>Last Location:</h3>
                </div>

            </article>
        </div>
    `;
    return view;
} 
export default Character;