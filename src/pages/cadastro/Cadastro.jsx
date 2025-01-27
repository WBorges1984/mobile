import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import logo from "../../assets/Images/logo2.png";
import styles from './cadastro.style';

const Cadastro = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.textoInput}>
          <View>
            <Text style={styles.texto}>Nome</Text>
            <TextInput style={styles.input}/>
          </View>
          <View>
            <Text style={styles.texto}>Email</Text>
            <TextInput style={styles.input}/>
          </View>
          <View>
            <Text style={styles.texto}>Senha</Text>
            <TextInput style={styles.input}/>
          </View>
          <View>
            <Text style={styles.texto}>Confirma Senha</Text>
            <TextInput style={styles.input}/>
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
              <Text style={styles.textoBtn}>Criar conta</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.textoFooter}>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.texto}>Já tenho uma conta. Toque para fazer login.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Cadastro