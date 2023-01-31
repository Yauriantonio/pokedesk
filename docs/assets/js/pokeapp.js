// const cancion = new Audio('assets\\sound\\poke.mp3');
// cancion.play();
 function playAudio(){
    document.getElementById("musica").play();
 }
 
 const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/img/homero.png")
        }
        else {
            return res.json();
        }
    })
     if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;
        let pokeTypes = data.types;
        let namePokes = data.forms;
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        pokeType(pokeTypes);
        pokePoke(namePokes);
        console.log(pokeImg);
    }
 }

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeData = ( abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map((item) => item.ability.name);
    pokeAbilities.innerHTML = abilitiesName;
    // pokeAbilities.innerHTML = "<p>" + abilitiesName[0] + "</p>";
    // console.log("abilities full", abilities);
    // console.log("abilities Names", abilitiesName);
// }
}

const pokeType = (types) => {
    const pokeTipo = document.getElementById("types");
    const typePoke = types.map((item) => item.type.name);
    pokeTipo.innerHTML = typePoke;
    // console.log("Types", types);
    // console.log("Tipo", typePoke);
}

const pokePoke = (forms) => {
    const pokePokes = document.getElementById("species");
    const namePoke = forms.map((item) => item.name);
    pokePokes.innerHTML = namePoke;

    // console.log("nombre full", forms);
    // console.log("Name", namePoke);
}

