import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:"#1f1e25",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:10
    },
    name:{
        color:'#fff',
        fontSize:16,
        marginLeft:16

    },

    buttonText:{
        color:"#fff",
        fontsize:24
    },
    button:{
        backgroundColor:"#e23c44",
        width:50,
        height:50,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
})