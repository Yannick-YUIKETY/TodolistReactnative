import { StyleSheet } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default StyleSheet.create({

    container:{
        flex:1,

    },

    image:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    },

    titleContainer:{
        marginTop:200,
        height:200,
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"column"
    },

    title:{
        marginTop:50,
        fontWeight:"800",
        fontSize:30,
        color:"#fff",
    },

    subtitleContainer:{
        height:150,
        justifyContent:"flex-end",
        alignItems:"center",
        flexDirection:"column"
    },

    subtitle:{
        marginBottom:50,
        fontWeight:"500",
        fontSize:20,
        color:"gray",
        opacity:.9,
    },

    button:{
        backgroundColor: '#e4ed6c',
        width:200,
        marginBottom:20,
        borderRadius:10,
    },

    


})