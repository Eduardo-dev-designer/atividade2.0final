import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MenuScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />
      <View style={styles.hero}>
        <View style={styles.logo}>
          <MaterialCommunityIcons name="cow" size={43} color="#176B45" />
        </View>
        <Text style={styles.eyebrow}>FRESQUINHO PARA VOCÊ</Text>
        <Text style={styles.titulo}>Laticínios{'\n'}Bom Leite</Text>
        <Text style={styles.subtitulo}>Qualidade e sabor que chegam à sua mesa.</Text>
        <View style={styles.decoracao}><MaterialCommunityIcons name="leaf" size={84} color="#FFFFFF" /></View>
      </View>

      <View style={styles.intro}>
        <Text style={styles.introTitulo}>Olá! O que você procura?</Text>
        <Text style={styles.introTexto}>Confira nossos produtos e aproveite as ofertas da semana.</Text>
      </View>

      <TouchableOpacity style={styles.botaoPrincipal} activeOpacity={0.85} onPress={() => router.push('/produtos')}>
        <View style={styles.iconeBotao}><MaterialCommunityIcons name="basket-outline" size={27} color="#176B45" /></View>
        <View style={styles.textosBotao}>
          <Text style={styles.tituloBotao}>Ver produtos</Text>
          <Text style={styles.descricaoBotao}>Explore nossa linha de laticínios</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={27} color="#176B45" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoPrincipal} activeOpacity={0.85} onPress={() => router.push('/promocoes')}>
        <View style={[styles.iconeBotao, { backgroundColor: '#FFF2CE' }]}><MaterialCommunityIcons name="tag-heart-outline" size={27} color="#A36A00" /></View>
        <View style={styles.textosBotao}>
          <Text style={styles.tituloBotao}>Ver promoções</Text>
          <Text style={styles.descricaoBotao}>Ofertas especiais para economizar</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={27} color="#176B45" />
      </TouchableOpacity>

      <View style={styles.faixa}>
        <MaterialCommunityIcons name="heart-outline" size={24} color="#176B45" />
        <View style={{ flex: 1 }}>
          <Text style={styles.faixaTitulo}>Feito com carinho</Text>
          <Text style={styles.faixaTexto}>Mais sabor e qualidade para sua família.</Text>
        </View>
      </View>
      <Text style={styles.rodape}>LATICÍNIOS BOM LEITE • QUALIDADE TODO DIA</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, paddingBottom: 26, backgroundColor: '#F4F8F4' },
  hero: { backgroundColor: '#176B45', paddingHorizontal: 25, paddingTop: 42, paddingBottom: 34, borderBottomLeftRadius: 32, borderBottomRightRadius: 32, overflow: 'hidden' },
  logo: { width: 70, height: 70, borderRadius: 23, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', marginBottom: 22 },
  eyebrow: { color: '#CDE9D5', fontSize: 10, letterSpacing: 2, fontWeight: '900' },
  titulo: { color: '#FFFFFF', fontSize: 37, lineHeight: 42, fontWeight: '900', marginTop: 8 },
  subtitulo: { color: '#E1F1E5', fontSize: 14, lineHeight: 21, marginTop: 12, maxWidth: 250 },
  decoracao: { position: 'absolute', right: -9, bottom: 17, opacity: 0.13, transform: [{ rotate: '-18deg' }] },
  intro: { paddingHorizontal: 22, paddingTop: 27, paddingBottom: 14 },
  introTitulo: { color: '#183D2B', fontSize: 21, fontWeight: '900' },
  introTexto: { color: '#728077', fontSize: 13, lineHeight: 19, marginTop: 6 },
  botaoPrincipal: { backgroundColor: '#FFFFFF', borderRadius: 18, marginHorizontal: 20, marginTop: 10, padding: 15, flexDirection: 'row', alignItems: 'center', elevation: 2, shadowColor: '#173D2C', shadowOpacity: 0.06, shadowRadius: 7 },
  iconeBotao: { width: 54, height: 54, borderRadius: 16, backgroundColor: '#E5F3E8', alignItems: 'center', justifyContent: 'center' },
  textosBotao: { flex: 1, marginLeft: 13 },
  tituloBotao: { color: '#183D2B', fontSize: 16, fontWeight: '900' },
  descricaoBotao: { color: '#7B887F', fontSize: 11, marginTop: 4 },
  faixa: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#E7F2E9', borderRadius: 16, padding: 16, marginHorizontal: 20, marginTop: 25 },
  faixaTitulo: { color: '#176B45', fontSize: 13, fontWeight: '900' },
  faixaTexto: { color: '#60786A', fontSize: 11, marginTop: 3 },
  rodape: { color: '#9AA79D', textAlign: 'center', fontSize: 9, fontWeight: '800', letterSpacing: 1, marginTop: 25 }
});
