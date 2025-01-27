import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        display:"flex",
        alignItems:"center",
        flex: 1,
        backgroundColor: COLORS.dark,

        paddingTop: 50
    },
    logo:{
        width: 140,
        height: 200,
      },
      texto:{
        color: COLORS.white,
        fontSize: FONT_SIZE[20]
        
      },
      textoBtn:{
        color: COLORS.dark,
        fontSize: FONT_SIZE[20],
        backgroundColor: COLORS.orange,
        display:"flex",
        textAlign:"center",
        padding: 20,
        borderRadius:10
        
      },
      input: {
        width: "100%", 
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
    },
    textoInput:{
        width:'80%',
        marginTop:50,
        gap: 35
    },
    textoFooter:{
        position:"absolute",
        bottom: 0,
        marginBottom:30
    }
  });

  export default styles;