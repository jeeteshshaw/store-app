import { StyleSheet } from "react-native";
import { normalizeSize } from "../utility";


const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"#fff",

    },
    row:{
        flexDirection:"row",
        alignItems:"center"
    },
    row_Between:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    
    

    titleText:{
        fontSize:normalizeSize(16),
        fontWeight:"700",
        
    },
    normalText:{
        fontSize:normalizeSize(14),
        fontWeight:"400",
    },
    icon:{
        height:20, width:20, resizeMode:"contain"
    }
    
});



export default styles