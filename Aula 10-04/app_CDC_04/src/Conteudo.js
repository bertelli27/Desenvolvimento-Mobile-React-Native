import React from 'react';
import { ScrollView, Text } from 'react-native';
import estilos from './stylesheet/estilos';
import ItemNoticia from './ItemNoticia';

export default function Conteudo() {

  const noticias = [
    {
      titulo: 'TECNOLOGIA',
      manchete: 'IA cresce e impacta empregos em 2026',
      data: '22/04/2026',
      img: { uri: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200' }
    },
    {
      titulo: 'ECONOMIA',
      manchete: 'Brasil cresce acima do esperado',
      data: '20/04/2026',
      img: { uri: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200' }
    },
    {
      titulo: 'ESPORTES',
      manchete: 'Seleção anuncia novos convocados',
      data: '18/04/2026',
      img: { uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=200' }
    },
    {
      titulo: 'MUNDO',
      manchete: 'Acordos climáticos avançam',
      data: '17/04/2026',
      img: { uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200' }
    },
    {
      titulo: 'ENTRETENIMENTO',
      manchete: 'Série bate recorde de audiência',
      data: '15/04/2026',
      img: { uri: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=200' }
    }
  ];

  return (
    <ScrollView style={estilos.conteudo}>

      <Text style={estilos.leiaMais}>LEIA MAIS</Text>

      {noticias.map((item, index) => (
        <ItemNoticia
          key={index}
          titulo={item.titulo}
          manchete={item.manchete}
          data={item.data}
          imagem={item.img}
        />
      ))}

    </ScrollView>
  );
}
