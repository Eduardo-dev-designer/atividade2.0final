import { Image, StyleSheet, Text, View } from 'react-native';
import { Produto } from '../data/produtos';

const dinheiro = (valor: number) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: produto.foto }} style={styles.foto} />
      <View style={styles.conteudo}>
        <Text style={styles.categoria}>{produto.categoria.toUpperCase()}</Text>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.unidade}>Unidade: {produto.unidade}</Text>
        <Text style={styles.preco}>{dinheiro(produto.preco)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 18, marginBottom: 13, overflow: 'hidden', elevation: 2, shadowColor: '#173D2C', shadowOpacity: 0.08, shadowRadius: 8 },
  foto: { width: 118, height: 125, backgroundColor: '#E8F0E8' },
  conteudo: { flex: 1, padding: 13, justifyContent: 'center' },
  categoria: { color: '#568267', fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  nome: { color: '#183D2B', fontSize: 16, fontWeight: '800', marginTop: 5 },
  unidade: { color: '#6C7C72', fontSize: 12, marginTop: 5 },
  preco: { color: '#176B45', fontSize: 19, fontWeight: '900', marginTop: 7 }
});
