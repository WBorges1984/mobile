import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        display:"flex",
        alignItems:"flex-start",
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
    menu:{
        width:40,
        height: 40,
        marginLeft: 10
    },
    viewTextoTitulo:{
        display:"flex",
        flexDirection:"row",
        width:'100%',     
    },
    textoTitulo:{
        color: COLORS.white,
        fontSize: FONT_SIZE[24],
        marginTop:20,
        paddingLeft: 10
    },
  });

  export default styles;