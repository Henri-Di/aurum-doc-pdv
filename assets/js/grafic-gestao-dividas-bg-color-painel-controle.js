// Seleciona o contexto do canvas onde o gráfico de gestão de dívidas por hora será desenhado
const ctxGestaoDividas = document.getElementById('salesChartGestaoDividas').getContext('2d');

// Dados fictícios representando a gestão de dívidas por hora ao longo do dia
const dataGestaoDividas = {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'], // Rótulos para os meses
    datasets: [
        {
            label: 'DIVIDAS', // Nome do conjunto de dados
            data: [5000, 7000, 3000, 9000, 13000, 6000, 9000, 13000, 7000, 25000, 35000, 15000], // Valores fictícios de dívidas
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
const configGestaoDividas = {
    type: 'line', // Define o tipo do gráfico
    data: dataGestaoDividas, // Dados
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
                    text: 'ANO 2024', // Título do eixo Y
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
new Chart(ctxGestaoDividas, configGestaoDividas);
