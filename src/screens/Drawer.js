import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Login from "./Login";
import CustomDrawer from "../components/CustomDrawer"

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerTitle: '', headerTintColor: '#FFFFFF', headerStyle: { backgroundColor: '#2B1D62'}}}>
            <DrawerNavigator.Screen name='Pesquisas' component={Home} />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer