import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/login/Login";
import Dashboard from "./src/pages/dashboard/Dashboard";
import Cadastro from "./src/pages/cadastro/Cadastro";
import Reserva from "./src/pages/reserva/Reserva";


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Dashboard" component={Dashboard}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Reserva" component={Reserva}
          options={{
            headerShown: false,
          }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;