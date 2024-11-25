// Função para mostrar detalhes do imóvel
function verDetalhes(id) {
    let imoveis = {
        1: {
            nome: "Apartamento no Centro",
            descricao: "Apartamento de 3 quartos, 2 banheiros, sala ampla e cozinha equipada. Localização central, próximo a comércios e transporte público.",
            preco: "R$ 500.000,00",
            imagem: "https://via.placeholder.com/500x300"
        },
        2: {
            nome: "Casa em Condomínio",
            descricao: "Casa em condomínio fechado com segurança 24h, piscina, churrasqueira e 4 quartos. Ideal para famílias.",
            preco: "R$ 800.000,00",
            imagem: "https://via.placeholder.com/500x300"
        },
        3: {
            nome: "Chácara com Piscina",
            descricao: "Chácara com 5.000m² de área, piscina, pomar e casa de 3 quartos. Ideal para quem busca tranquilidade no campo.",
            preco: "R$ 1.200.000,00",
            imagem: "https://via.placeholder.com/500x300"
        }
    };

    let imovel = imoveis[id];

    // Exibe um alerta com as informações do imóvel
    alert(`Detalhes do Imóvel: \nNome: ${imovel.nome}\nDescrição: ${imovel.descricao}\nPreço: ${imovel.preco}`);
}
