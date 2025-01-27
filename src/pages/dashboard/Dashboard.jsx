import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Menu from "../../assets/Images/menu.png";
import BarberPro from "../../assets/Images/barberpro.png";
import styles from "./dashboard.style";
import Servicos from "../../components/servicos/Servicos";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image source={Menu} style={styles.menu} />
        <View>
          <Image source={BarberPro} style={styles.logo} />
        </View>
      </View>
      <View style={styles.viewTextoTitulo}>
        <Text style={styles.textoTitulo}>Serviços</Text>
      </View>
      <View style={styles.containerServico}>
        <Servicos navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
