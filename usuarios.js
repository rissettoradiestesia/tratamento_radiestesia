const contatoPadrao = {
  whatsappNumero: '5515988237737',
  whatsappTexto: 'Olá, gostaria de saber mais sobre o tratamento de radiestesia.',
  whatsappExibicao: '+55 (15) 9 8823-7737',
  instagramUrl: 'https://www.instagram.com/rissettoradiestesia/',
  instagramExibicao: '@rissettoradiestesia'
};

const usuarios = [
  {
    user: 'adm',
    senha: 'adm',
    tipo: 'admin'
  },
  {
    user: 'danioliverluc@gmail.com',
    senha: '01011981',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
      {
        nome: 'Terapia Junguiana - Análise clínica',
        inicio: '03/04/2026',
        fim: '09/04/2026',
        status: 'Em Andamento',
        itens: [
          {
            item: 'item_01',
            data: '14/03/2026',
            Horário: '13h00 - 13h30',
            observacao: 'Radiestesia e apresentação do tratamento e Radiômica',
            status: 'concluida'
          },
          {
            item: 'item_02',
            data: '19/03/2026',
            Horário: '20h30 - 21h00',
            observacao: 'Radiestesia e apresentação do tratamento e Radiômica',
            status: 'concluida'
          },
          {
            item: 'item_03',
            data: '26/03/2026',
            Horário: '11h30 - 12h00',
            observacao: 'Radiestesia e sessão de acompanhando da chegada ao Brasil e adaptação ao novo ambiente',
            status: 'concluida'
          },
          {
            item: 'item_04',
            data: '02/04/2026',
            Horário: '11h30 - 12h00',
            observacao: 'Sessão Terapeuta: Contação de sua história',
            status: 'concluida'
          },
          {
            item: 'item_05',
            data: '13/04/2026',
            Horário: '17h00 - 18h00',
            observacao: 'Sessão Terapeuta: Repetição de padrões e construção de objetivos',
            status: 'concluida'
          },
          {
            item: 'item_06',
            data: '20/04/2026',
            Horário: '16h30 - 17h20',
            meet: 'meet.google.com/ozq-gmpw-sab',
            observacao: 'Sessão Terapeuta',
            status: 'concluida'
          },
          {
            item: 'item_07',
            data: '27/04/2026',
            Horário: '16h30 - 17h20',
            meet: 'meet.google.com/xsg-tvok-ypx',
            observacao: 'Sessão Terapeuta',
            status: 'Pendente'
          },
          {
            item: 'item_08',
            data: '04/05/2026',
            Horário: '16h30 - 17h20',
            meet: 'meet.google.com/kny-hfhp-vyk',
            observacao: 'Sessão Terapeuta',
            status: 'Pendente'
          }
        ]
      },
      {
        nome: 'Tratamento Coletivo - Páscoa',
        inicio: '03/04/2026',
        fim: '09/04/2026',
        status: 'Finalizado',
        itens: [
          {
            item: 'item_01',
            data: '04/04/2026',
            observacao: 'Anamnese individual e coletiva e montagem do tratamento coletivo',
            status: 'concluida'
          },
          {
            item: 'item_02',
            data: '05/04/2026',
            observacao: 'Tratamento montado com gráficos radiônicos e cromoterapia da chama violeta',
            status: 'concluida'
          },
          {
            item: 'item_03',
            data: '06/04/2026',
            observacao: 'Tratamento dos 02 chakras: Básico e Sacro',
            status: 'concluida'
          },
          {
            item: 'item_04',
            data: '07/04/2026',
            observacao: 'Tratamento dos 02 chakras: Plexo solar e Cardíaco',
            status: 'concluida'
          },
          {
            item: 'item_05',
            data: '08/04/2026',
            observacao: 'Tratamento dos 02 chakras: Laríngeo e Frontal',
            status: 'concluida'
          },
          {
            item: 'item_06',
            data: '09/04/2026',
            observacao: 'Prorrogando o laudo por mais um dia. Tratamento do chakra: Coronário',
            status: 'concluida'
          },
          {
            item: 'item_07',
            data: '10/04/2026',
            observacao: 'Selamento com manto azul de proteção, anamnese de fechamento e término do tratamento',
            status: 'concluida'
          }
        ]
      },
      {
        nome: 'Tratamento Radionico',
        inicio: '14/03/2026',
        fim: '30/03/2026',
        status: 'Finalizado',
        itens: [
          {
            item: 'item_01',
            data: 'Término: 14/03/2026',
            observacao: 'Gráfico Baguá',
            Horário: '1 hora',
            status: 'concluida'
          },
          {
            item: 'item_02',
            data: 'Término: 24/03/2026',
            observacao: 'Gráfico Alta Vitalidade',
            Horário: '10 dias',
            status: 'concluida'
          },
          {
            item: 'item_03',
            data: 'Término: 26/03/2026',
            observacao: 'Gráfico Yoshua',
            Horário: '12 dias',
            status: 'concluida'
          },
          {
            item: 'item_04',
            data: 'Término: 30/03/2026',
            observacao: 'Gráfico Harmonia',
            Horário: '16 dias',
            status: 'concluida'
          },
          {
            item: 'item_05',
            data: 'Término: 05/04/2026',
            observacao: 'Gráfico Programador Físico',
            Horário: '20 dias',
            status: 'concluida'
          },
          {
            item: 'item_06',
            data: 'Término: 18/03/2026',
            observacao: 'Gráfico Scap',
            Horário: '05 dias',
            status: 'concluida'
          },
          {
            item: 'item_07',
            data: 'Início: 21/03/2026 | Término: 23/03/2026',
            observacao: 'Gráfico Nove Círculo',
            Horário: '02 dias',
            status: 'concluida'
          }
        ]
      }
    ]
  },
  {
    user: 'Adrielen_terra',
    senha: '38215415806',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
      {
        nome: 'Tratamento 03 - Limpeza de Útero',
        inicio: '04/05/2026',
        fim: '09/05/2026',
        status: 'pendente',
        itens: []
      },
      {
        nome: 'Tratamento 02 - Limpeza de Útero',
        inicio: '30/03/2026',
        fim: '07/04/2026',
        status: 'finalizado',
        itens: [
          {
            item: 'item_01',
            data: '30/03/2026',
            observacao: 'Anamnese e início do tratamento coletivo',
            status: 'concluida'
          },
          {
            item: 'item_02',
            data: '01/04/2026',
            observacao: 'Tratamento montado',
            status: 'concluida'
          },
          {
            item: 'item_03',
            data: '05/04/2026',
            observacao: 'Tratamento montado e prolongado por mais dois dias',
            status: 'concluida'
          },
          {
            item: 'item_04',
            data: '06/04/2026',
            observacao: 'Tratamento mantido',
            status: 'concluida'
          },
          {
            item: 'item_05',
            data: '07/04/2026',
            observacao: 'Tratamento finalizado',
            status: 'concluida'
          }
        ]
      },
      {
        nome: 'Tratamento 01 - Coletivo',
        inicio: '03/04/2026',
        fim: '09/04/2026',
        status: 'finalizado',
        itens: [
          {
            item: 'item_01',
            data: '01/04/2026',
            observacao: 'Início do tratamento coletivo',
            status: 'concluida'
          },
          {
            item: 'item_02',
            data: '05/04/2026',
            observacao: 'Finalização do tratamento coletivo',
            status: 'concluida'
          }
        ]
      }
    ]
  },
  {
    user: 'rodolfo',
    senha: 'terra2',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
      {
        nome: 'Tratamento 01 - Radiestesia Completa',
        inicio: '09/04/2026',
        fim: '15/04/2026',
        status: 'Em Andamento',
        itens: [
          {
            item: 'item_01',
            data: '09/04/2026',
            observacao: 'Início do projeto',
            status: 'concluida'
          },
          {
            item: 'item_02',
            data: '10/04/2026',
            observacao: 'Análise da anamnese concluído',
            status: 'concluida'
          },
          {
            item: 'item_03',
            data: '11/04/2026',
            observacao: 'Início do tratamento',
            status: 'Em Andamento'
          },
          {
            item: 'item_04',
            data: '12/04/2026',
            observacao: 'Tratamento montado',
            status: 'pendente'
          },
          {
            item: 'item_05',
            data: '13/04/2026',
            observacao: 'Aguardando avanço da próxima etapa',
            status: 'pendente'
          },
          {
            item: 'item_06',
            data: '15/04/2026',
            observacao: 'Previsão de finalização do tratamento',
            status: 'pendente'
          }
        ]
      },
      {
        nome: 'Tratamento 02 - Limpeza de Ambiente',
        inicio: '',
        fim: '',
        status: 'nao_iniciado',
        itens: []
      },
      {
        nome: 'Tratamento 03 - Coletivo',
        inicio: '01/04/2026',
        fim: '05/04/2026',
        status: 'finalizado',
        itens: [
          {
            item: 'item_01',
            data: '01/04/2026',
            observacao: 'Início do tratamento coletivo',
            status: 'concluida'
          },
          {
            item: 'item_02',
            data: '05/04/2026',
            observacao: 'Finalização do tratamento coletivo',
            status: 'concluida'
          }
        ]
      }
    ]
  }
];