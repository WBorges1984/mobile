import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import styles from "./servicos.style"
import barba from "../../assets/Images/barba.png"
import secador from "../../assets/Images/secador.png"
import tesoura from "../../assets/Images/tesoura.png"
import pele from "../../assets/Images/pele.png"
import sobrancelha from "../../assets/Images/sobrancelha.png"
import tintura from "../../assets/Images/tintura.png"

const Servicos = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.itensServico} 
            onPress={()=>navigation.navigate("Reserva", { servico: "Barba"})}>
            <Image source={barba} style={styles.img} />
            <Text style={styles.textoServico}>Barba</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itensServico}
            onPress={()=>navigation.navigate("Reserva", { servico: "Secador"})}>
            <Image source={secador} style={styles.img} />
            <Text style={styles.textoServico}>Secador</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itensServico} 
            onPress={()=>navigation.navigate("Reserva", { servico: "Tesoura"})}>
            <Image source={tesoura} style={styles.img} />
            <Text style={styles.textoServico}>Tesoura</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itensServico}
            onPress={()=>navigation.navigate("Reserva", { servico: "Pele"})}>
            <Image source={pele} style={styles.img} />
            <Text style={styles.textoServico}>Limpeza Pele</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itensServico}
            onPress={()=>navigation.navigate("Reserva", { servico: "Sobrancelha"})}>
            <Image source={sobrancelha} style={styles.img} />
            <Text style={styles.textoServico}>Sobrancelha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itensServico}
            onPress={()=>navigation.navigate("Reserva", { servico: "Tintura"})}>
            <Image source={tintura} style={styles.img} />
            <Text style={styles.textoServico}>Tintura</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Servicos