import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login"
import Drawer from "./src/screens/Drawer"
import Cadastro from "./src/screens/Cadastro"
import Recuperacao from "./src/screens/Recuperacao"
import NovaPesquisa from "./src/screens/NovaPesquisa"
import ModificarPesquisa from "./src/screens/ModificarPesquisa"
import AcaoPesquisa from "./src/screens/AcaoPesquisa"
import Coleta from "./src/screens/Coleta"
import Relatorio from "./src/screens/Relatorio"
import Agradecimento from "./src/screens/Agradecimento";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: '#573FBA', headerStyle: { backgroundColor: '#2B1D62' }, headerTitleStyle: { fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}}>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Drawer" component={Drawer} options={{headerShown: false}}/>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerTitle: 'Nova Conta'}} />
                <Stack.Screen name="Recuperacao" component={Recuperacao} options={{ headerTitle: 'Recuperação de senha'}} />
                <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{ headerTitle: 'Nova pesquisa'}} />
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{ headerTitle: 'Modificar Pesquisa'}} />
                <Stack.Screen name="Coleta" component={Coleta} options={{ headerTitle: 'Coleta de dados'}} />
                <Stack.Screen name="Relatorio" component={Relatorio} options={{ headerTitle: 'Relatório'}} />
                <Stack.Screen name="AcaoPesquisa" component={AcaoPesquisa} options={{ headerTitle: 'Nome da Pesquisa' }} />
                <Stack.Screen name="Agradecimento" component={Agradecimento} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App