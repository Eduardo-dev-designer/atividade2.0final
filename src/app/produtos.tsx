import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { produtos } from '../data/produtos';
import ProdutoCard from '../components/ProdutoCard';

export default function ProdutosScreen() {
  return (
    <SafeAreaView style={styles.tela}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProdutoCard produto={item} />}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.cabecalho}>
            <Text style={styles.etiqueta}>NOSSA SELEÇÃO</Text>
            <Text style={styles.titulo}>Produtos fresquinhos</Text>
            <Text style={styles.subtitulo}>Confira os itens e seus preços.</Text>
            <View style={styles.contador}><Text style={styles.contadorTexto}>{produtos.length} produtos disponíveis</Text></View>
          </View>
        }
        ListFooterComponent={<Text style={styles.rodape}>Preços ilustrativos para fins acadêmicos.</Text>}
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
  contador: { alignSelf: 'flex-start', backgroundColor: '#E2F0E5', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 7, marginTop: 13 },
  contadorTexto: { color: '#176B45', fontSize: 11, fontWeight: '800' },
  rodape: { color: '#8A978E', textAlign: 'center', fontSize: 11, marginTop: 8, marginBottom: 10 }
});
