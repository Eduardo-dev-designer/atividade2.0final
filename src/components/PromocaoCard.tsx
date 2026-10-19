import { Image, StyleSheet, Text, View } from 'react-native';
import { Promocao } from '../data/promocoes';

const dinheiro = (valor: number) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function PromocaoCard({ promocao }: { promocao: Promocao }) {
  return (
    <View style={styles.card}>
      <View style={styles.imagemContainer}>
        <Image source={{ uri: promocao.foto }} style={styles.foto} />
        <View style={styles.selo}><Text style={styles.seloTexto}>{promocao.destaque}</Text></View>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.nome}>{promocao.produto}</Text>
        <Text style={styles.tipo}>{promocao.tipo}</Text>
        <Text style={styles.detalhe}>{promocao.detalhe}</Text>
        <Text style={styles.preco}>{dinheiro(promocao.precoPromocional)}</Text>
        <Text style={styles.legenda}>PREÇO PROMOCIONAL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, marginBottom: 16, overflow: 'hidden', elevation: 3, shadowColor: '#173D2C', shadowOpacity: 0.09, shadowRadius: 9 },
  imagemContainer: { position: 'relative' },
  foto: { width: '100%', height: 165, backgroundColor: '#E8F0E8' },
  selo: { position: 'absolute', top: 12, left: 12, backgroundColor: '#F6C453', borderRadius: 9, paddingHorizontal: 12, paddingVertical: 7 },
  seloTexto: { color: '#49370A', fontSize: 12, fontWeight: '900' },
  conteudo: { padding: 15 },
  nome: { color: '#183D2B', fontSize: 18, fontWeight: '900' },
  tipo: { color: '#176B45', fontSize: 14, fontWeight: '800', marginTop: 5 },
  detalhe: { color: '#6C7C72', fontSize: 12, lineHeight: 18, marginTop: 5 },
  preco: { color: '#176B45', fontSize: 25, fontWeight: '900', marginTop: 10 },
  legenda: { color: '#7A8A80', fontSize: 9, fontWeight: '800', letterSpacing: 1, marginTop: 2 }
});
