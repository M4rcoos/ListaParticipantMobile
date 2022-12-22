import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
        color:'#fdfcfe',
        fontSize:24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate:{
        color: '#6b6b6b',
        fontSize:16,
    },
    textInput:{
        flex:1,
        padding: 14,
        backgroundColor: '#1c1c1c',
        borderRadius:8,
        color:'#fff',
        fontSize:18,
        marginRight:12
    },
    buttonText:{
        color:"#fff",
        fontsize:24
    },
    button:{
        backgroundColor:"#31CF67",
        width:50,
        height:50,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    form:{
        width:'100%',
        flexDirection: "row",
        marginTop:36,
        marginBottom:42,

    
    },
    listEmptyText:{
        color:'#fff',
        fontSize:16,
        textAlign:"center"
    }

})