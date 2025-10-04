import { View, Text} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {

    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>usuario@dominio.com</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem labelStyle={{ color: 'white '}} label="Sair" onPress={() => { props.navigation.popToTop() }} />

        </DrawerContentScrollView>
    )
}

export default CustomDrawer;

