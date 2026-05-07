// ============================================================
//  CATÁLOGO PESO CERTO — ARQUIVO DE DADOS
//  Organizado por fornecedor.
//  Para adicionar produtos: copie um bloco de exemplo e edite.
//  Fotos: use links públicos do Google Drive (ver instruções no README)
// ============================================================

const CONFIG = {
  PIN: "1234",         // ← Altere o PIN de acesso aqui
  empresa: "Peso Certo Equipamentos Comerciais",
  versao: "1.0"
};

const FORNECEDORES = [

  // ============================================================
  //  EXEMPLO — FORNECEDOR 1
  //  Substitua pelo nome real do fornecedor
  // ============================================================
  {
    id: "fornecedor-1",
    nome: "Frilux",
    logo: "",  // URL do logo (opcional)
    cor: "#003087", // cor do cabeçalho do fornecedor
    produtos: [

      {
        id: "frilux-001",
        nome: "Câmara Fria Modular 6m²",
        descricao: "Câmara fria modular com painel de poliuretano de 100mm, porta com borracha magnética, piso emborrachado antiderrapante e sistema de refrigeração integrado. Ideal para açougues, restaurantes e mercados. Temperatura de operação: -2°C a +8°C (conservação) ou -18°C a -25°C (congelamento).",
        destaque: "Plug & Play — não exige obra",
        medidas: {
          "Área interna": "6 m²",
          "Largura ext.": "2.500 mm",
          "Profundidade ext.": "2.600 mm",
          "Altura ext.": "2.200 mm",
          "Espessura do painel": "100 mm",
          "Tensão": "220V / monofásico",
          "Potência": "1,5 CV"
        },
        fotos: [
          // Cole aqui os links diretos das fotos do Google Drive
          // Formato: https://drive.google.com/uc?export=view&id=ID_DO_ARQUIVO
          ""
        ],
        videos: [
          // Cole aqui links de vídeos do YouTube ou outro serviço
          // ""
        ]
      },

      {
        id: "frilux-002",
        nome: "Balcão Refrigerado Expositor 1,50m",
        descricao: "Balcão refrigerado para exposição de frios, laticínios e carnes. Iluminação interna em LED, vidro frontal curvo com antiembaçante, grade em aço inox, pés reguláveis. Temperatura de operação: 0°C a +8°C.",
        destaque: "LED de baixo consumo incluso",
        medidas: {
          "Comprimento": "1.500 mm",
          "Profundidade": "700 mm",
          "Altura": "1.200 mm",
          "Tensão": "220V / monofásico",
          "Capacidade": "300L"
        },
        fotos: [""],
        videos: []
      }

    ]
  },

  // ============================================================
  //  EXEMPLO — FORNECEDOR 2
  // ============================================================
  {
    id: "fornecedor-2",
    nome: "Perfecta",
    logo: "",
    cor: "#b22222",
    produtos: [

      {
        id: "perfecta-001",
        nome: "Forno Combinado 10 GNs",
        descricao: "Forno combinado vapor/seco com capacidade para 10 gastronorms GN 1/1. Painel digital com 99 programas memorizáveis, sistema de limpeza automática, sonda de temperatura para monitoramento do produto. Construção em aço inox 304 interno e externo.",
        destaque: "99 programas memorizáveis",
        medidas: {
          "Capacidade": "10x GN 1/1",
          "Largura": "870 mm",
          "Profundidade": "745 mm",
          "Altura": "1.020 mm",
          "Tensão": "380V / trifásico",
          "Potência": "15 kW",
          "Peso líquido": "165 kg"
        },
        fotos: [""],
        videos: [""]
      }

    ]
  },

  // ============================================================
  //  COPIE ESTE BLOCO PARA ADICIONAR NOVO FORNECEDOR
  // ============================================================
  /*
  {
    id: "fornecedor-N",
    nome: "Nome do Fornecedor",
    logo: "",
    cor: "#333333",
    produtos: [
      {
        id: "fornecedor-N-001",
        nome: "Nome do Produto",
        descricao: "Descrição completa do produto.",
        destaque: "Ponto forte resumido em uma linha",
        medidas: {
          "Largura": "000 mm",
          "Profundidade": "000 mm",
          "Altura": "000 mm",
          "Tensão": "000V",
          "Peso": "00 kg"
        },
        fotos: [""],
        videos: [""]
      }
    ]
  },
  */

];
