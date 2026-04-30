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
  */


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

  /*
  Márcia Aparecida dos Santos
  usuário: 02832251900
  senha: 06031977
  */


{
  user: '02832251900',
  senha: '06031977',
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
Rodolfo 
Teste
*/

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