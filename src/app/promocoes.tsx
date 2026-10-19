import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { promocoes } from '../data/promocoes';
import PromocaoCard from '../components/PromocaoCard';

export default function PromocoesScreen() {
  return (
    <SafeAreaView style={styles.tela}>
      <FlatList
        data={promocoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PromocaoCard promocao={item} />}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.cabecalho}>
            <Text style={styles.etiqueta}>ECONOMIZE MAIS</Text>
            <Text style={styles.titulo}>Ofertas da semana</Text>
            <Text style={styles.subtitulo}>Aproveite nossas condições especiais.</Text>
            <View style={styles.contador}><Text style={styles.contadorTexto}>{promocoes.length} ofertas para aproveitar</Text></View>
          </View>
        }
        ListFooterComponent={<Text style={styles.rodape}>Promoções e preços fictícios para fins acadêmicos.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#F4F8F4' },
  lista: { padding: 16, paddingBottom: 28 },
  cabecalho: { paddingTop: 8, paddingBottom: 19 },
  etiqueta: { color: '#568267', fontSize: 10, fontWeight: '900', letterSpacing: 2 },
  titulo: { color: '#183D2B', fontSize: 27, fontWeight: '900', marginTop: 7 },
  subtitulo: { color: '#728077', fontSize: 13, marginTop: 6 },
  contador: { alignSelf: 'flex-start', backgroundColor: '#FFF0C8', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 7, marginTop: 13 },
  contadorTexto: { color: '#855A08', fontSize: 11, fontWeight: '800' },
  rodape: { color: '#8A978E', textAlign: 'center', fontSize: 11, marginTop: 8, marginBottom: 10 }
});
