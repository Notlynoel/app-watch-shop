export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  quantidadeEstoque: number;
  imagem: string;
}

// Uma interface que vai ser usada no serviço carrinho.service.ts
export interface IProdutoCarrinho extends IProduto {
  quantidade: number;
}

export const produtos: IProduto[] = [
  { id: 1, descricao: "Diesel Mega Chief", preco: 439.00, descricaoPreco: "À vista no PIX", quantidadeEstoque: 16, imagem: "./assets/Diesel-Mega-Chief-Chronograph-Two-Tone-Stainless-Steel-Watch.jpg" },
  { id: 2, descricao: "Diesel Men's Mr Daddy", preco: 1200.50, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Diesel-Men's-Mr-Daddy-2.0-Two-Hand-Black-Leather-Watch.jpg" },
  { id: 3, descricao: "Garmin Venu2+ Cinza", preco: 749.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/garmin-venu-2-plus-cinza.jpg" },
  { id: 4, descricao: "Garmin Venu2+ Preto", preco: 599.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/garmin-venu-2-plus-preto.jpg" },
  { id: 5, descricao: "Invicta Bolt Men's", preco: 299.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Invicta-Bolt-Men's-Watch-52mm-Black.jpg" },
  { id: 6, descricao: "Invicta Pro Automatic", preco: 399.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Invicta-Pro-Diver-Automatic-Glow-In-The-Dark-Men's-Watch-47mm-Black.jpg" },
  { id: 7, descricao: "Invicta Pro Gold", preco: 499.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/InvictaPro-Diver-Men-Watch-48.5mm-Gold.jpg" },
  { id: 8, descricao: "Invicta Pro Gold Steel", preco: 18449.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Invicta-Pro-Diver-SCUBA-Men's-Watch-48mm-Gold-Steel.jpg" },
  { id: 9, descricao: "Invicta Pro Swiss", preco: 1000, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Invicta-Pro-Diver-Swiss-Made-Men's-Watch-44mm-Steel.jpg" },
  { id: 10, descricao: "Invicta Pro Swiss Gold", preco: 2500, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Invicta-Pro-Diver-Swiss-Made-Men-Watch-44mm-Gold.jpg" },
  { id: 11, descricao: "invicta stainless steel", preco: 4500, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/invicta-pro-driver-mens-stainless-steel.jpg" },
  { id: 12, descricao: "Invicta Specialty", preco: 50, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/invicta-Specialty-Men's-Watch-43mm-Steel.jpg" },
  { id: 13, descricao: "Invicta Star Wars", preco: 20, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Invicta-Star-Wars-Darth-Vader-Men's-Watch-53mm-Steel.jpg" },
  { id: 14, descricao: "Invicta Star Wars X", preco: 200, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Invicta-Star-Wars-X-Wing-Men's-Watch-46mm-Steel.jpg" },
  { id: 15, descricao: "Hilfiger Feminino", preco: 159.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Relogio-Tommy-Hilfiger-Feminino-Borracha-Azul-e-Vermelho.jpg" },
  { id: 16, descricao: "Hilfiger Men's Quartz", preco: 3500.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/Tommy-Hilfiger-Men's-Quartz-Stainless-Steel-and-Leather-Strap-Watch-Color-Navy.jpg" },
  { id: 17, descricao: "BULOVA Chronograph", preco: 3500.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 9, imagem: "./assets/BULOVA-Marine-Star-Chronograph-Blue-Dial-Men'sWatch.jpg" },
  { id: 18, descricao: "Fossil Men's Nate", preco: 3500.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 9, imagem: "./assets/Fossil-Men's-Nate-Stainless-Steel-Quartz-Chronograph-Watch.jpg" },
  { id: 19, descricao: "Seiko kinetic Blue", preco: 3500.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 9, imagem: "./assets/seiko-kinetic-blue-dial-stainless-steel-men_s-watch-ska.jpg" },
  { id: 20, descricao: "Seiko Recraft Automat", preco: 3500.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 9, imagem: "./assets/seiko-recraft-automatic-green-dial-stainless-steel-men_s-watch-snkm.jpg" },
]



