import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window") ;

export default StyleSheet.create({

    container:{
        flex:1 ,

    },

    cardContainer:{
        //backgroundColor:"yellow",
        padding:10,
    },

    cardImage:{
        width: width - 20 ,
        height:((width-20) / 3) * 1.5 ,
        //backgroundColor:'#ccc',
        borderRadius:20,
        alignItems:"flex-end",
    },

    favIcon:{
        width:40,
        height:40,
        backgroundColor:'rgba(250 , 250 , 250 ,0.5)',
        margin:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },

    containerTitlePrice:{
        flexDirection:"row",
        height:30 ,
        width: width - 20,
        //backgroundColor:'#ccc',
        marginTop:10,
        justifyContent:'space-between',
        paddingHorizontal: 20,
        alignItems:'center' ,
    },

    title:{
        fontSize:18,
        fontWeight:"700",
    },

    price:{
        fontSize:18,
        fontWeight:"700",
        color:"orange",
    },

    containerBrand:{
        flexDirection:"row",
        height:50 ,
        width: width - 20,
        //backgroundColor:'#ccc',
        marginTop:10,
        paddingHorizontal: 20,
        alignItems:'center' ,
    },
    brand:{
        color:"orange" , 
        fontWeight:"600",
        backgroundColor:"#fbeee9",
        padding:5,
        margin:5,
        borderRadius:5,
    },

})