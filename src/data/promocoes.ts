export type Promocao = {
  id: string;
  produto: string;
  tipo: string;
  precoPromocional: number;
  detalhe: string;
  foto: string;
  destaque: string;
};

export const promocoes: Promocao[] = [
  { id: '1', produto: 'Leite Integral', tipo: 'Leve 3, pague 2', precoPromocional: 10.98, detalhe: 'Na compra de 3 unidades, pague apenas 2.', foto: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800', destaque: '3 por 2' },
  { id: '2', produto: 'Iogurte de Morango', tipo: 'Leve 4, pague 3', precoPromocional: 11.97, detalhe: 'Escolha seus sabores favoritos.', foto: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=800', destaque: '4 por 3' },
  { id: '3', produto: 'Queijo Mussarela', tipo: 'Acima de R$ 30,00', precoPromocional: 10.90, detalhe: 'Preço especial por pacote para compras acima de R$ 30,00 em laticínios.', foto: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800', destaque: 'Oferta' },
  { id: '4', produto: 'Manteiga com Sal', tipo: 'Cartão Bom Leite', precoPromocional: 7.99, detalhe: 'Valor exclusivo para pagamento com o cartão da loja.', foto: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800', destaque: 'Só no cartão' },
  { id: '5', produto: 'Requeijão Cremoso', tipo: 'Leve 2, pague R$ 12,00', precoPromocional: 12.00, detalhe: 'Leve dois potes por um preço especial.', foto: 'https://images.unsplash.com/photo-1634487359989-3e90c9432133?w=800', destaque: '2 por R$ 12' },
  { id: '6', produto: 'Leite Desnatado', tipo: 'Cartão Bom Leite', precoPromocional: 4.49, detalhe: 'Desconto exclusivo para clientes com cartão da loja.', foto: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800', destaque: 'Preço especial' }
];
