import { FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import PokeType from "@/components/PokeType";
import PokeChar from "@/components/PokeChar";
import PokeCharLower from "@/components/PokeCharLower";
import axios from "axios";
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {useFonts} from 'expo-font'
import BigIcon from "@/components/BigIcon";

type PokemonTypes = {
    [key: string]: string;
}

    export default function App(){

        useEffect(() => {
            getPokesFromApi()
        
    }, [])


        const [fontsLoaded] = useFonts({
            Sans: require("@/assets/fonts/OpenSans-SemiBold.ttf")
        })
        if(!fontsLoaded){
        }

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState(0)
    const [tipo, setTipo ] = useState<string[]>([])
    const [peso, setPeso ] = useState(0)
    const [altura, setAltura] = useState(0)
    const [habilidade, setHabilidade] = useState([])
    const [count, setCount] = useState(6)   

    function numeroFormat(id:any) {
        return `#${String(id).padStart(3, '0')}`;
      }
    const numeroFormatado = numeroFormat(id)
    

    const getPokesFromApi = async (pokeSearch?: number) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeSearch ? pokeSearch : count}`)
        const data = response.data

         
        let pokeNome = data.name
        const pokeId = data.id
        const pokeImage = data.sprites.front_default
        let pokePeso = data.weight
        let pokeAltura = data.height
        let pokeHabilidade = data.abilities                
        let pokeTipo = data.types
        pokeNome = pokeNome.charAt(0).toUpperCase() + pokeNome.slice(1) 

        pokePeso = pokePeso/10
        pokeAltura = pokeAltura/10

        setName(pokeNome)
        setId(pokeId)
        setImage(pokeImage)
        setPeso(pokePeso)
        setAltura(pokeAltura)
        setHabilidade(pokeHabilidade.map((item: any) => item.ability.name))
        setTipo(pokeTipo.map((item:any) => item.type.name))

    }        

    type operadorType = "+" | "-"

    const nextPoke = async (operador : operadorType) =>{
        let newCount

        if(operador === "+"){
            newCount = count + 1
            setCount(newCount)
        }
        else if(operador === "-"){
            newCount = count - 1
            setCount(newCount)
        }
        console.log(JSON.stringify(newCount, null, 2))

        await getPokesFromApi(newCount)
    }


    const types: PokemonTypes = {
        fire: 'fire-circle',
        grass: 'grass',
        water: 'water-circle',
        flying: 'bird',
        poison: 'emoticon-dead-outline',
        bug: 'bug',
        dark: 'moon-full',
        dragon: 'dragon',
        electric: 'lightning-bolt-circle',
        fairy: 'butterfly-outline',
        fighting: 'boxing-glove',
        ghost: 'ghost',
        ground: 'earth',
        ice: 'ice-cream',
        normal: 'account-cowboy-hat',
        psychic: 'eye-circle',
        rock: 'hill-rockslide',
        steel: 'pickaxe'
      }
      
      const tipoQueVeioDaAPI = tipo[0]
      const tipoQueVeioDaAPI2 = tipo[1]
      
      const icone = types[tipoQueVeioDaAPI]
      const icone2 = types[tipoQueVeioDaAPI2]

    const typeColors: PokemonTypes = {
        fire: '#ffa561',
        grass: '#4eb14e',
        water: '#6262ff',
        flying: '#386262',
        poison: '#9a009a',
        bug: 'green',
        dark: 'black',
        dragon: '#3e8ce5',
        electric: '#f6f61d',
        fairy: '#fb91a4',
        fighting: 'orange',
        ghost: '#472168',
        ground: 'brown',
        ice: '#77c3eb',
        normal: '#6a401e',
        psychic: '#ff2b50',
        rock: 'brown',
        steel: '#6bd7db'
    }
    
    const corSetadaTipo1 = tipo[0]
    const corSetadaTipo2 = tipo[1]
    
    const cor = typeColors[corSetadaTipo1]
    const cor2 = typeColors[corSetadaTipo2]

    const typeColorsBackground: PokemonTypes = {
        fire: '#ffbc88',
        grass: '#addbad',
        water: '#b0b0ff',
        flying: '#587575',
        poison: '#ce00ce',
        bug: '#a7d76f',
        dark: '#2c1130',
        dragon: '#72a2da',
        electric: '#c9c94a',
        fairy: '#ffc8d2',
        fighting: '#dd9f6c',
        ghost: '#764f99',
        ground: '#c58549',
        ice: '#90bad0',
        normal: '#815939',
        psychic: '#ffb4c1',
        rock: '#bf6545',
        steel: '#94d9db'
    }
   
    

    const corBackground = tipo[0]
    
    const corBack = typeColorsBackground[corBackground]

    const insets = useSafeAreaInsets();


    return(

        <SafeAreaProvider>
            <View style={{ flex: 1, paddingTop: insets.top }}>
                <View style={styles().pagina}>
                    <View style={styles(cor).backG}>
                        <BigIcon typeName={icone} typeSize={200} typeColor={corBack}  />
                    </View> 
                

                        <View style={styles().iconesHeader}>
                            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                            <MaterialCommunityIcons name="pokeball" size={32} color="white" />
                        </View>
                            
                        <View style={styles().imageContainer}>
                            <Image style={styles().pokePhoto}
                            src={image}
                            />
                        </View>
                        <View style={styles().arrows}>
                            <Pressable style={styles().backButton} onPress={() => nextPoke("-")}>
                                <MaterialIcons name="arrow-back-ios" size={18} color="black" style={styles().backButtonIcon} />
                            </Pressable>
                            <Pressable style={styles().nextButton}onPress={() => nextPoke("+")}>
                                <MaterialIcons name="arrow-forward-ios" size={18} color="black" style={styles().nextButtonIcon} />
                            </Pressable>
                        </View>
                
                <View style={styles().PokeSpecsMaster}>  
                    <View style={styles().pokeSpecs}>
                        <Text style={styles().pokeName}>{name}</Text>
                        <Text style={styles().pokeNumber}>{numeroFormatado}</Text>
                    </View>
                    <View style={styles().pokeSpecs2}>
                        <Text style={styles().pokeLevel}>nvl.</Text>
                        <Text style={styles().pokeLevelNumber}>36</Text>
                    </View>
                </View>

                    { tipo.length > 0 ? (
                        <>
                        
                        <View style={styles().pokeTypeContainer}>
                        { tipo.length === 2 ? (
                                <>
                            <PokeType pokeTypeText={tipo[0].charAt(0).toUpperCase() + tipo[0].slice(1)} typeName={icone} typeSize={28} typeColor={cor}                            /> 
                            <PokeType pokeTypeText={tipo[1].charAt(0).toUpperCase() + tipo[1].slice(1)} typeName={icone2} typeSize={28} typeColor={cor2}                            /> 
                        </>) : (
                            <PokeType pokeTypeText={tipo[0].charAt(0).toUpperCase() + tipo[0].slice(1)} typeName={icone} typeSize={28} typeColor={cor}                            /> 
                            ) } 
                    </View>

                    <View style={styles().textView}>
                        <Text style={styles().text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor, diam ac dapibus tincidunt, velit dolor vestibulum mi, eu rutrum enim quam non ante. 
                        </Text>
                    </View>

                <View style={styles().embaixo}>

                    <View style={styles().divisao}></View>

                    <View style={styles().pokeCharContainer}>
                        <View style={styles().view1}>
                            <PokeChar charText={"PESO"} icone={"weight"} size={20}/>
                            <PokeCharLower pokeStats={peso.toFixed(1)} pokeStats2={"kg"}/>
                        </View>

                        <View style={styles().view2}>
                            <PokeChar charText={"ALTURA"} icone={"human-male-height-variant"} size={20}/>
                            <PokeCharLower pokeStats={altura.toFixed(1)} pokeStats2={"m"}/>
                        </View>

                        <View style={styles().view3}>
                            <PokeChar charText={"HABILIDADE"} icone={"pokeball"} size={20} />
                            <PokeCharLower pokeStats={''} pokeStats2={tipo[0].charAt(0).toUpperCase() + tipo[0].slice(1)}/>
                        </View>
                        
                    </View>
                    <View style={styles().divisao}></View>
                </View>
                        
                        </>
                    ) : null }

                            
                </View>
            </View>
        </SafeAreaProvider>
    )
}







                    // <View style={styles().pokeTypeContainer}>
                    //         { tipo.length === 2 ? (
                    //             <>
                    //         <PokeType pokeTypeText={tipo[0].charAt(0).toUpperCase() + tipo[0].slice(1)} typeName={icone} typeSize={28} typeColor={cor}                            /> 
                    //         <PokeType pokeTypeText={tipo[1].charAt(0).toUpperCase() + tipo[1].slice(1)} typeName={icone2} typeSize={28} typeColor={cor2}                            /> 
                    //     </>) : (
                    //         <PokeType pokeTypeText={tipo[0].charAt(0).toUpperCase() + tipo[0].slice(1)} typeName={icone} typeSize={28} typeColor={cor}                            /> 
                    //         ) } 
                    // </View>












// const getPokesFromApi = async () => {
    //     const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5')
    //     const data = response.data.results
    //     let arr: PokemonArrayProps[] = []

    //     const teste = data.map(async(pokemon: PokemonArrayProps) => {
    //         return axios.get(pokemon.url).then(res => {
    //             const o:PokemonArrayProps = {
    //                 name: res.data.name,
    //                 url: res.data.sprites.front_default
    //             }
                
    //         })
    //     })

        // const imageUrl = data
        // setImage(imageUrl)

        // console.log(JSON.stringify(data, null, 2))
    

    // const getPokesFromApi = async () => {
    //     const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1/')
    //     const data = response.data.sprites.front_default
    //     const imageUrl = data
    //     setImage(imageUrl)

    //     console.log(JSON.stringify(data, null, 2))
    