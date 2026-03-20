import { View, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import { Formulario } from "../components/Formulario";
import { Item } from "../components/Item";

export default function App() {
    const [lista, setLista] = useState([
        {
            nome: "Carlos",
            email: "ceduardo190706@gmail.com",
            telefone: "(92) 98492-9821"
        },
        {
            nome: "Marcos",
            email: "marcos97@gmail.com",
            telefone: "(92) 97268-7232"
        },
        {
            nome: "Pedro",
            email: "pedro329@gmail.com",
            telefone: "(92) 98691--9431"
        },
    ])

    return (
       <View style={style.container}>
           <Formulario lista={lista} setLista={setLista} />
           <FlatList
              data={lista}
              keyExtractor={(item, index) => index + item.nome}
              renderItem={({item, index}) => (
                <Item 
                   key={index + item.nome}
                   nome={item.nome} 
                   email={item.email} 
                   telefone={item.telefone}
                />
              )}
              horizontal={true}
            />
      </View> 
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
})