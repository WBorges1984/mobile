import { View, Text, Image, TextInput, Button, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import styles from "./login.style.js";
import logo from "../../assets/Images/logo2.png";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.textoInput}>
          <View>
            <Text style={styles.texto}>Email</Text>
            <TextInput style={styles.input}/>
          </View>
          <View>
            <Text style={styles.texto}>Senha</Text>
            <TextInput style={styles.input}/>
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Dashboard")}>
              <Text style={styles.textoBtn}>Acessar</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.textoFooter}>
        <TouchableOpacity onPress={()=>navigation.navigate("Cadastro")}>
          <Text style={styles.texto}>Não tenho uma conta. Crie agora!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
