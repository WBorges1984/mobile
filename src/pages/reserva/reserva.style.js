import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
    container:{
        display:"flex",
        alignItems:"flex-start",
        width:"100%",
        flex: 1,
        backgroundColor: COLORS.dark,
        paddingTop: 35
    },
    top:{
        display:"flex",
        flexDirection:"row",
        width:'100%',
        alignItems:"center",
        justifyContent:"flex-start",
        gap: 80
    },
    textoTitulo:{
        color:COLORS.white,
        fontSize: FONT_SIZE[32]
    },
    ViewTextoServico:{
        width: "100%",
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center"
    },
    textoServico:{
        color: COLORS.orange,
        fontSize: FONT_SIZE[24],
        marginTop: 25,
    },
    ViewTextoEscolha:{
        width: "100%",
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"flex-start",
        paddingLeft: 10
    },
    textoEscolha:{
        color: COLORS.white,
        fontSize: FONT_SIZE[32],
        marginTop: 25,
    },
    containerProfissional:{
        width:"100%"
    }
});

export default  styles;