import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection: "row",
        flexWrap:"wrap",
        padding: 10,
        justifyContent:"space-evenly",
        gap:25

    },
    itensServico:{
        width: "40%",
        height: 139,
        backgroundColor: COLORS.darkMedium,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:10,
        borderRadius:10,
        
    },
    img:{
        width: 88,
        height: 88,
    },
    textoServico:{
        color: COLORS.white,
        fontSize:FONT_SIZE[20]
    }
});

export default styles;