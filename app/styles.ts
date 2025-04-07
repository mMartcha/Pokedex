import { Dimensions, StyleSheet } from "react-native";
import { useFonts, OpenSans_500Medium } from '@expo-google-fonts/open-sans';

export const styles= (cor?: string) =>StyleSheet.create({
    pagina:{
        backgroundColor:"#ffffff",
        flex:1
    },
    
    backG:{
        backgroundColor:cor,
        position:"absolute",
        height:Dimensions.get("window").width * 1.25,
        width:Dimensions.get("window").width * 1.25,
        borderRadius: (Dimensions.get("window").width * 1.25) / 2,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        top:-200
       
   },
    
    
    iconesHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:20,
        position:"relative",
        bottom:10

    },
    imageContainer:{
        height:280,
        alignItems:'center'
    },
    PokeSpecsMaster:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        bottom:80,
        position:"relative",
    },
    pokeSpecs:{
        
    },
    pokeName:{
        top:10,
        fontSize:36,
        // fontWeight:"500",
        fontFamily:'Sans'
    },
    pokeNumber:{
        fontSize:18,
        top:10,
        fontWeight:"500",
        color:'#575353'

    },
    pokeSpecs2:{
        flexDirection:'row',
        alignItems:'baseline'
    },
    pokeLevel:{
        fontSize:20,
        top:10,
    },
    pokeLevelNumber:{
        fontSize:32,
        top:10,

    },

    pokeTypeContainer:{
        marginVertical:16,
        marginHorizontal:20,
        flexDirection:'row',
        gap:12,
        bottom:65,
    },
    text:{
        fontSize:16,
        fontWeight:"500",
        color:'grey',
        
    },
    textView:{
        alignItems:'center',
        justifyContent:'center',
        bottom:60,
        marginHorizontal:12
    },
    embaixo:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom:55
    },
   
    divisao:{
        backgroundColor:'#eeeeef',
        height:1,
        marginLeft:10,
        marginRight:10,
        margin:8,
        marginVertical:16,
        bottom:18, 
    },
    pokeCharContainer:{
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-between',
        bottom:20
    },
    pokePhoto:{
        top:-25,
        height:300,
        width:300,
        alignItems:'center',
    },
    backButton:{
        backgroundColor:'white',
        height:50,
        width: 50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        elevation:3

    },
    nextButton:{
        backgroundColor:'white',
        height:50,
        width: 50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        elevation:3


    },
    backButtonIcon:{

    },
    nextButtonIcon:{

    },
    

    arrows:{
        flexDirection:'row',
        marginHorizontal:12,
        justifyContent:"space-between",
        position:"relative",
        bottom: 140,
       
    },
    view1:{
        
    },
    view2:{
        
    },
    view3:{
        
    },
    input:{

    },
    inputFato:{
        
    }
})