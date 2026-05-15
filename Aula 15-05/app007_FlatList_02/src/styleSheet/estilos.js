import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28,
  },
  conteudo: {
    flex: 1,
    width: '94%',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 10,
  },
  cabecalhoImagem: {
    width: '100%',
    height: 140,
    borderRadius: 16,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DC143C',
  },
  lista: {
    width: '100%',
    marginTop: 6,
    flex: 1,
  },
  listaConteudo: {
    paddingBottom: 20,
  },
  listaCabecalhoContainer: {
    backgroundColor: '#FFE4E4',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  listaCabecalhoTexto: {
    textAlign: 'center',
    color: '#8B0000',
    fontWeight: '600',
    fontSize: 16,
  },
  listaItem: {
    backgroundColor: '#FFF0F0',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  itemPais: {
    fontSize: 18,
    fontWeight: '700',
    color: '#8B0000',
  },
  itemCapital: {
    marginTop: 4,
    fontSize: 14,
    color: '#5C0000',
  },
  separador: {
    height: 10,
  },
  rodapeLista: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  rodapeListaTexto: {
    color: '#DC143C',
    fontSize: 15,
    fontWeight: '600',
  },
  rodape: {
    marginTop: 14,
    backgroundColor: '#DC143C',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rodapeImagem: {
    width: 70,
    height: 40,
    borderRadius: 10,
  },
  rodapeTextoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  rodapeTexto: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  listaVaziaContainer: {
    padding: 24,
    alignItems: 'center',
  },
  listaVaziaTexto: {
    color: '#DC143C',
    fontSize: 16,
  },
});
