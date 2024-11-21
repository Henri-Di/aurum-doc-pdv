// Seleciona o contexto do canvas onde o gráfico de vendas por hora será desenhado
const ctxVendasHora = document.getElementById('salesChartVendasHora').getContext('2d');

// Dados fictícios representando as vendas por hora ao longo do dia
const dataVendasHora = {
    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'], // Horários do dia
    datasets: [
        {
            label: 'VENDAS POR HORA', // Nome do conjunto de dados
            data: [5000, 7000, 3000, 9000, 13000, 6000, 9000, 13000, 7000, 25000, 35000], // Valores
            backgroundColor: 'rgba(255, 102, 0, 0.5)', // Cor de preenchimento
            borderColor: 'rgb(255, 102, 0)', // Cor da linha
            borderWidth: 3, // Espessura da linha
            tension: 0.4, // Suaviza a linha
            pointBackgroundColor: '#ffffff', // Cor de fundo dos pontos
            pointBorderColor: '#000000', // Cor da borda dos pontos
            pointBorderWidth: 2, // Espessura da borda dos pontos
            pointRadius: 4, // Tamanho dos pontos
            pointHoverBackgroundColor: '#ffcc00', // Cor ao passar o mouse
            pointHoverBorderColor: '#000000', // Cor da borda ao passar o mouse
            pointHoverRadius: 6, // Tamanho ao passar o mouse
        },
    ],
};

// Configuração geral do gráfico (como o tipo e as opções visuais)
const configVendasHora = {
    type: 'bar', // Define o tipo do gráfico
    data: dataVendasHora, // Dados
    options: {
        responsive: true, // Ajusta automaticamente
        maintainAspectRatio: false, // Ajusta proporção ao redimensionar
        plugins: {
            legend: {
                display: true, // Exibe a legenda
                position: 'top', // Posição da legenda
                labels: {
                    color: '#2f4f4f', // Cor do texto
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Tamanho dinâmico da fonte
                        family: 'Barlow Condensed, sans-serif', // Fonte
                    }),
                },
            },
        },
        scales: {
            // Configuração do eixo Y
            y: {
                beginAtZero: true, // Começa em 0
                title: {
                    display: true,
                    text: '20 NOVEMBRO 2024', // Título do eixo Y
                    color: '#ff6600', // Cor do título
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 12 : 16, // Tamanho dinâmico da fonte
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Fonte
                    }),
                },
                ticks: {
                    color: '#000000', // Cor dos números
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 12, // Tamanho dinâmico
                        family: 'Barlow Condensed, sans-serif', // Fonte
                    }),
                },
            },
            // Configuração do eixo X
            x: {
                title: {
                    display: true,
                    text: '', // Título do eixo X
                    color: '#ff6600', // Cor do título
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Tamanho dinâmico
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Fonte
                    }),
                },
                ticks: {
                    color: '#000000', // Cor dos rótulos
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 12, // Tamanho dinâmico
                        family: 'Barlow Condensed, sans-serif', // Fonte
                    }),
                },
            },
        },
    },
};

// Cria e renderiza o gráfico no contexto especificado
new Chart(ctxVendasHora, configVendasHora);
