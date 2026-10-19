export type Produto = {
  id: string;
  nome: string;
  preco: number;
  unidade: string;
  foto: string;
  categoria: string;
};

export const produtos: Produto[] = [
  { id: '1', nome: 'Leite Integral', preco: 5.49, unidade: '1 litro', categoria: 'Leites', foto: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800' },
  { id: '2', nome: 'Leite Desnatado', preco: 5.29, unidade: '1 litro', categoria: 'Leites', foto: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800' },
  { id: '3', nome: 'Queijo Mussarela', preco: 12.90, unidade: '300 g', categoria: 'Queijos', foto: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800' },
  { id: '4', nome: 'Queijo Minas', preco: 16.50, unidade: '400 g', categoria: 'Queijos', foto: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800' },
  { id: '5', nome: 'Iogurte Natural', preco: 4.79, unidade: '170 g', categoria: 'Iogurtes', foto: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800' },
  { id: '6', nome: 'Iogurte de Morango', preco: 3.99, unidade: '160 g', categoria: 'Iogurtes', foto: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=800' },
  { id: '7', nome: 'Manteiga com Sal', preco: 9.90, unidade: '200 g', categoria: 'Frios', foto: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800' },
  { id: '8', nome: 'Requeijão Cremoso', preco: 7.49, unidade: '200 g', categoria: 'Frios', foto: 'https://images.unsplash.com/photo-1634487359989-3e90c9432133?w=800' },
  { id: '9', nome: 'Creme de Leite', preco: 3.69, unidade: '200 g', categoria: 'Ingredientes', foto: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800' },
  { id: '10', nome: 'Leite Condensado', preco: 6.99, unidade: '395 g', categoria: 'Ingredientes', foto: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800' }
];
