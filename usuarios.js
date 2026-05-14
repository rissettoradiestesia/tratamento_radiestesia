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

  /*
  Daniela Oliveira Lucena Rodrigues
  */
  {
    user: 'danioliverluc@gmail.com',
    senha: '01011981',
    atendente: 'Daniela Oliveira Lucena Rodrigues',
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

  

  /*
  Adrielen Barbosa Terra
  user: 38215415806
  senha: 
  */


  {
    user: '38215415806',
    senha: '09051991',
    atendente: 'Adrielen Barbosa Terra',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    },
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

  /*
  Márcia Aparecida dos Santos
  usuário: 02832251900
  senha: 06031977
  */


{
  user: '02832251900',
  senha: '06031977',
  atendente: 'Márcia Aparecida dos Santos',
  tipo: 'fluxo',
  tituloFluxo: 'Acompanhamento dos Tratamentos',
  descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
  contato: contatoPadrao,
  tratamentos: [
    {
      nome: 'Tratamento 01 - Reprogramação Vibracional',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/anamnese/laudo_terapia_energetica_anamnese_M%C3%A1rcia_Aparecida_dos_Santos.pdf',
      inicio: '25/04/2026',
      fim: '22/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_20',
          data: '26/04/2026',
          observacao: 'Cromoterapia Azul',
          status: 'Em Andamento'
        },{
          item: 'item_21',
          data: '27/04/2026',
          observacao: 'Cromoterapia Azul',
          status: 'Em Andamento'
        },{
          item: 'item_22',
          data: '28/04/2026',
          observacao: 'Cromoterapia Azul',
          status: 'Em Andamento'
        },
        {
          item: 'item_01',
          data: '29/04/2026',
          observacao: 'Anamnese',
          status: 'Em Andamento'
        },
        {
          item: 'item_02',
          data: 'Término: 14/05/2026',
          observacao: 'Gráfico: Flor da Vida',
          status: 'Em Andamento'
        },
        {
          item: 'item_03',
          data: 'Término: 06/05/2026',
          observacao: 'Gráfico: Limpeza e Recarga',
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: 'Término: 06/05/2026',
          observacao: 'Gráfico: Regeneração da Aura',
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '03/05/2026',
          observacao: 'Gráfico: Transformação do Próprio Estado Energético',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento 02 - Harmonização e recuperação pós cirurgia',
      Relatório: '',
      inicio: '07/05/2026',
      fim: '18/05/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 11/05/2026',
          observacao: 'Gráfico: Programador Físico',
          status: 'Pendente'
        },
        {
          item: 'item_02',
          data: 'Término: 18/05/2026',
          observacao: 'Gráfico: Yoshua',
          status: 'Pendente'
        },
        {
          item: 'item_03',
          data: 'Término: 15/05/2026',
          observacao: 'Gráfico: Ativação de Força Feminina',
          status: 'Pendente'
        }
      ]
    },
    {
      nome: 'Tratamento 03 - Reprogramação de proteção e ambiente profissional',
      Relatório: '',
      inicio: '18/05/2026',
      fim: '22/05/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 22/05/2026',
          observacao: 'Gráfico: 36 Forças',
          status: 'Pendente'
        }]
    }
  ]
},



  /*
  Dejamy Jorge Teixeira
  usuário: 97720054334
  senha: 23101984
  */


{
  user: '97720054334',
  senha: '23101984',
  atendente: 'Dejamy Jorge Teixeira',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},



  /*
  Solange Aparecida Vieira
  usuário: 04941809866
  senha: 12051961
  */


{
  user: '04941809866',
  senha: '12051961',
  atendente: 'Solange Aparecida Vieira',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},



  /*
  Antonia Paula Cruz da Silva
  usuário: 03804344402
  senha: 04031982
  */


{
  user: '03804344402',
  senha: '04031982',
  atendente: 'Antonia Paula Cruz da Silva',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},



  /*
  Jade Gomes Monteiro Granado Lopes
  usuário: 41308099894
  senha: 09101992
  */


{
  user: '41308099894',
  senha: '09101992',
  atendente: 'Jade Gomes Monteiro Granado Lopes',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},



  /*
  Bruna Rayana Pereira Nascimento 
  usuário: 12996926641
  senha: 02101995
  */


{
  user: '12996926641',
  senha: '02101995',
  atendente: 'Bruna Rayana Pereira Nascimento',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},



  /*
  Dora Maluly Meieler
  usuário: 34656795801
  senha: 12051985
  */


{
  user: '34656795801',
  senha: '12051985',
  atendente: 'Dora Maluly Meieler',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},



  /*
  Vitória Barbosa de Lima
  usuário: 38215417841
  senha: 11052000
  */


{
  user: '38215417841',
  senha: '11052000',
  atendente: 'Vitória Barbosa de Lima',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},



  /*
  Gilda do Nascimento de Jesus Pereira
  usuário: 22463119349
  senha: 25121961
  */


{
  user: '22463119349',
  senha: '25121961',
  atendente: 'Gilda do Nascimento de Jesus Pereira',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},
  /*
   Maria Augusta Bodick 
  usuário: 24653763810 
  senha: 30081972
  */


{
  user: '24653763810',
  senha: '30081972',
  atendente: 'Maria Augusta Bodick',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},
  /*
  Márcia Aparecida Candido
  usuário: 30268065870 
  senha: 30091977
  */


{
  user: '30268065870',
  senha: '30091977',
  atendente: 'Márcia Aparecida Candido',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},
  /*
  Juliana Boaventura Fernandes
  usuário:  29774735803 
  senha: 11021982
  */


{
  user: '29774735803',
  senha: '11021982',
  atendente: 'Juliana Boaventura Fernandes',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
    {
      nome: 'Preparatório para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Preparat%C3%B3rio%20para%20o%20Tratamento%20Coletivo%20de%20Prosperidade.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Acesse o pdf',
      inicio: '10/05/2026',
      fim: '13/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '12/05/2026',
          observacao: 'Todo o acompanhamento e as informações relacionadas ao tratamento poderam ser acompanhados por esse portal ou diretamente pelo WhatsApp 😊.',
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Aquecimento para o Tratamento coletivo de Prosperidade',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Reprograma%C3%A7%C3%A3o%20Vibracional.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Reprogramação Vibracional',
      inicio: '13/05/2026',
      fim: '20/05/2026',
      status: 'Em Andamento',
      itens: [
        {
          item: 'item_01',
          data: '13/05/2026',
          observacao: 'Anamnese individual e coletiva e montagem do tratamento de aquecimento',
          status: 'Em Andamento'
        },{
          item: 'item_02',
          data: '14/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },{
          item: 'item_03',
          data: '15/05/2026',
      Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/ebooks/Cora%C3%A7%C3%A3o%20Desperto.pdf',
      texto_titulo: 'Acesso ao material de apoio:',
      texto_linkado: 'Coração Desperto Vibracional',
          observacao: `
          Reprogramação Vibracional

          - Limpeza
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_04',
          data: '16/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_05',
          data: '17/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Transmutação
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_06',
          data: '18/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_07',
          data: '19/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Selamento
          `,
          status: 'Em Andamento'
        },
        {
          item: 'item_08',
          data: '20/05/2026',
          observacao: `
          Reprogramação Vibracional

          - Harmonização para o tratamento de prosperidade
          `,
          status: 'Em Andamento'
        }
      ]
    },
    {
      nome: 'Tratamento Coletivo - Prosperidade e Finanças',
      Relatório: '',
      inicio: '21/05/2026',
      fim: '04/06/2026',
      status: 'Pendente',
      itens: [
        {
          item: 'item_01',
          data: 'Término: 04/06/2026',
          observacao: 'Em breve teremos mais informações referente ao Protocolo de Prósperidade, pois irá ser condizido de acordo com o grupo.',
          status: 'Pendente'
        },
      ]
    }
  ]
},





/*
Rodolfo 
Teste
*/

  {
    user: 'rodolfo',
    senha: 'terra2',
  atendente: 'Rodolfo Rissetto Terra',
    tipo: 'fluxo',
    tituloFluxo: 'Acompanhamento dos Tratamentos',
    descricaoFluxo: 'Visualize abaixo os tratamentos cadastrados e expanda cada um para acompanhar os itens de evolução.',
    contato: contatoPadrao,
    tratamentos: [
      {
        nome: 'Tratamento 01 - Radiestesia Completa',
        Relatório: 'https://github.com/rissettoradiestesia/tratamento_radiestesia/blob/main/anamnese/laudo_terapia_energetica_anamnese_Adirlaine_Alc%C3%A2ntara_Carola.pdf',
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