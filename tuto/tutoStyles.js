import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"black",
        justifyContent:'center',
        flexDirection:"row",
    },

    boxContainer1:{
        width:300,
        height:400,
        backgroundColor:'pink',
        flexDirection:'row' ,
        alignItems:"flex-end",
        justifyContent:"space-between",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        

    },

    boxContainer2:{
        width:300,
        height:50,
        flexDirection:'row' ,
        alignItems:"center",
        justifyContent:"center",
    },

    box1:{
        height:50,
        width:50,
        backgroundColor:"skyblue",
        flex:1,
    },
    box2:{
        height:50,
        width:50,
        backgroundColor:"orange",
        margin:10,
        justifyContent:"center",
        alignItems:"center",

    },
    box3:{
        height:50,
        width:50,
        backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",
    },


})