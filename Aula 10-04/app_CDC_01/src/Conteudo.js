import React from 'react';
import { ScrollView } from 'react-native';
import estilos from './stylesheet/estilos';
import Item from './Item';

export default function Conteudo() {

  const paises = [
    { 
      n: 'Brasil', 
      f: 'yellow', 
      t: 'green',
      bandeira: require('../img/brasil.png'),
      hab: '214M',
      pib: '$2.1T'
    },
    { 
      n: 'Inglaterra', 
      f: 'white', 
      t: 'blue',
      bandeira: require('../img/inglaterra.png'),
      hab: '67M',
      pib: '$3.1T'
    },
    { 
      n: 'Portugal', 
      f: 'red', 
      t: 'white',
      bandeira: require('../img/portugal.png'),
      hab: '10M',
      pib: '$250B'
    },
    { 
      n: 'Itália', 
      f: 'blue', 
      t: 'white',
      bandeira: require('../img/italia.png'),
      hab: '59M',
      pib: '$2.0T'
    },
    { 
      n: 'Alemanha', 
      f: 'black', 
      t: 'white',
      bandeira: require('../img/alemanha.png'),
      hab: '83M',
      pib: '$4.5T'
    },
    { 
      n: 'Holanda', 
      f: 'darkorange', 
      t: 'black',
      bandeira: require('../img/holanda.png'),
      hab: '17M',
      pib: '$1.0T'
    },
    { 
      n: 'Síria', 
      f: 'black', 
      t: 'red',
      bandeira: require('../img/siria.png'),
      hab: '22M',
      pib: '$60B'
    }
  ];

  return (
    <ScrollView style={estilos.areaRolagem}>
      {paises.map((item, index) => (
        <Item
          key={index}
          nome={item.n}
          corFundo={item.f}
          corTexto={item.t}
          bandeira={item.bandeira}
          habitantes={item.hab}
          pib={item.pib}
        />
      ))}
    </ScrollView>
  );
}
