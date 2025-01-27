import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./profissional.style";

const Profissional = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.CardProfissional} onPress={() => navigation.navigate("Agenda", { profissional: "Wagner" })}>
        <Text style={styles.nomeProfissional}>Wagner o Justo</Text>
        <Text style={styles.valor}>R$ 35,00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.CardProfissional} onPress={() => navigation.navigate("Agenda", { profissional: "Wagner" })}>
        <Text style={styles.nomeProfissional}>Thamara a mãe</Text>
        <Text style={styles.valor}>R$ 35,00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.CardProfissional} onPress={() => navigation.navigate("Agenda", { profissional: "Wagner" })}>
        <Text style={styles.nomeProfissional}>Willian Borges</Text>
        <Text style={styles.valor}>R$ 35,00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.CardProfissional} onPress={() => navigation.navigate("Agenda", { profissional: "Wagner" })}>
        <Text style={styles.nomeProfissional}>Danilo Willian</Text>
        <Text style={styles.valor}>R$ 35,00</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profissional;
