import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustomDrawer = (props) => {

    const botaoPesquisas = () => {
        props.navigation.navigate('Drawer')
        props.navigation.closeDrawer();
    }

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={estilos.container}>
            <View style={estilos.header}>
                <Text style={estilos.email}>usuario@dominio.com</Text>
            </View>
            <View style={estilos.menu}>
                <DrawerItem labelStyle={estilos.label} label="Pesquisas"  icon={() => (
                        <Icon name="assignment" size={22} color='#FFFFFF' />
                    )} onPress={botaoPesquisas} />
                <DrawerItem labelStyle={estilos.label} label="Sair" icon={() => (
                        <Icon name="logout" size={22} color='#FFFFFF' />
                    )} onPress={() => { props.navigation.popToTop() }} />
            </View>

        </DrawerContentScrollView>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B1D62',
        padding: 10
    },
    header: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        paddingVertical: 15,
        marginBottom: 20
    },
    email: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'AveriaLibre-Regular'
    },
    menu: {
        justifyContent: 'space-between',
        flex: 1
    },
    label: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 18,
        marginLeft: -10
    }
})

export default CustomDrawer;

