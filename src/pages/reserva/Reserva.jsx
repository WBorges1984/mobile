import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from "./reserva.style";
import { useRoute } from "@react-navigation/native";
import back from "../../assets/Images/back.png";
import Profissional from "../../components/profissional/Profissional";

const Reserva = ({ navigation }) => {
  const route = useRoute();
  const { servico } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={back} style={styles.menu}/>
        </TouchableOpacity>
        <View>
          <Text style={styles.textoTitulo}>Reserva</Text>
        </View>
      </View>
      <View style={styles.ViewTextoServico}>
        <Text style={styles.textoServico}>{servico}</Text>
      </View>
      <View style={styles.ViewTextoEscolha}>
        <Text style={styles.textoEscolha}>Escolha um profissional</Text>
      </View>
      <View style={styles.containerProfissional}>
        <Profissional navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

export default Reserva;
