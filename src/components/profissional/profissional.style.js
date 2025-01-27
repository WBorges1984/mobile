import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
    container:{
        display:"flex",
        width: "100%",
        height: "auto",
        alignContent:"center",
        justifyContent:"center"
    },
    CardProfissional:{
        height: 75,
        backgroundColor: COLORS.darkMedium,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        gap:10,
        borderRadius:10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        
    },
    nomeProfissional:{
        color:COLORS.white,
        fontSize: FONT_SIZE[20]
    },
    valor:{
        color: COLORS.orange,
        fontSize: FONT_SIZE[20]
    }
});

export default styles;