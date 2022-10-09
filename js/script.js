window.onload = function(){

    let searchPokemon = 1;

    const fetchPokemon = async (pokemon)=>{
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        console.log(APIResponse)

        if (APIResponse.status === 200) {
            const data = await APIResponse.json();
            return data;
          }
    }

}