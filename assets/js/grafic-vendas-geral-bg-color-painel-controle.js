// Seleciona o contexto do canvas onde o gráfico será desenhado
const ctxVendas = document.getElementById('salesChartVendas').getContext('2d');

// Dados fictícios representando as vendas mensais
const dataVendas = {
    labels: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'],
    datasets: [
        {
            label: 'VENDAS', // Nome do conjunto de dados
            data: [5000, 7000, 3000, 9000, 13000, 6000, 9000, 13000, 7000, 25000, 35000], // Valores mensais
            backgroundColor: 'rgb(153, 0, 204, 0.2)', // Cor de preenchimento da área (azul claro e semi-transparente)
            borderColor: 'rgb(153, 0, 204)', // Cor da linha (azul sólido)
            borderWidth: 3, // Espessura da linha do gráfico
            tension: 0.4, // Suavização para as curvas das linhas
            pointBackgroundColor: '#ffffff', // Cor de fundo dos pontos
            pointBorderColor: '#000000', // Cor da borda dos pontos
            pointBorderWidth: 2, // Espessura da borda dos pontos
            pointRadius: 4, // Tamanho dos pontos no gráfico
            pointHoverBackgroundColor: '#00ff00', // Cor dos pontos ao passar o mouse
            pointHoverBorderColor: '#000000', // Cor da borda dos pontos ao passar o mouse
            pointHoverRadius: 6, // Tamanho dos pontos ao passar o mouse
        },
    ],
};

// Configuração geral do gráfico
const configVendas = {
    type: 'line', // Define o tipo do gráfico como linha; mude para 'bar' se quiser colunas
    data: dataVendas,
    options: {
        responsive: true, // Torna o gráfico adaptável ao tamanho da tela
        maintainAspectRatio: false, // Permite ajustar a proporção ao redimensionar a tela
        plugins: {
            legend:{
                display: true, // Mostra a legenda no topo
                position: 'top', // Posição da legenda
                labels:{
                    color: '#2f4f4f', // Cor do texto da legenda
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte para telas menores
                        family: 'Barlow Condensed, sans-serif',
                    }),
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true, // Inicia o eixo Y a partir do zero
                title: {
                    display: true,
                    text: 'ANO 2024', // Texto para o título do eixo Y
                    color: '#9900ff',
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 12 : 16, // Ajusta o tamanho da fonte para telas menores
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif',
                    }),
                },
                ticks: {
                    color: '#000000',
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 11, // Ajusta o tamanho da fonte para telas menores
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif',
                    }),
                },
            },
            x: {
                title: {
                    display: true,
                    text: '', // Adiciona um título ao eixo X
                    color: '#0066ff',
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte para telas menores
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif',
                    }),
                },
                ticks: {
                    color: '#000000', // Cor dos rótulos dos meses
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 11, // Ajusta o tamanho da fonte para telas menores
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif',
                    }),
                },
            },
        },
    },
};

// Renderiza o gráfico na tela
new Chart(ctxVendas, configVendas);
