import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Client';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';
import Title from '../../components/Title';

const lista = [
    {
        id: 1,
        label: "Boleto conta Luz",
        value: '100,55',
        date: '17/09/2022',
        type: 0 //despesas

    },
    {
        id: 2,
        label: "Pix Cliente X",
        value: '2.500,00',
        date: '08/10/2022',
        type: 1 //receita / entrada

    },
    {
        id: 3,
        label: "Salario",
        value: '1265,55',
        date: '01/7/2022',
        type: 1 //despesas


    }
]




export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header name='André Nogueira' />
            <Balance saldo={5462.01} gastos={569.52} />
            <Actions />
            <Title title='Dados do Cliente'/>


            {/*       <FlatList
        style={styles.list}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <Moviments data={item}/>}
      /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,


    },
    list: {
        marginStart: 14,
        marginEnd: 14
    },
    contentTitle:{
        alignItems: 'center',
    }
});
