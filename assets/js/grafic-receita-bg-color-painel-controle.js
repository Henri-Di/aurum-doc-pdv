// Seleciona o contexto do canvas onde o gráfico será desenhado
// Este canvas é onde o gráfico de receitas será renderizado
const ctxReceitas = document.getElementById('salesChartReceitas').getContext('2d');

// Dados fictícios de receitas mensais
const dataReceitas = {
    labels: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'],
    datasets: [{
        label: 'RECEITAS',  // Nome da linha no gráfico
        data: [9000, 6000, 8000, 6000, 9000, 12000, 8000, 5000, 7500, 4000, 12000, 19000], // Dados de receitas
        backgroundColor: 'rgba(0, 204, 0, 0.2)', // Cor de preenchimento da linha (verde semi-transparente)
        borderColor: 'rgb(0, 204, 0)', // Cor da linha do gráfico (verde sólido)
        borderWidth: 3, // Espessura da linha
        tension: 0.4, // Suavização da linha
        pointBackgroundColor: '#ffffff', // Cor de fundo dos pontos no gráfico
        pointBorderColor: '#000000', // Cor da borda dos pontos
        pointBorderWidth: 2, // Espessura da borda dos pontos
        pointRadius: 4, // Tamanho dos pontos
        pointHoverBackgroundColor: '#ffcc00', // Cor dos pontos ao passar o mouse (amarelo)
        pointHoverBorderColor: '#000000', // Cor da borda dos pontos ao passar o mouse (preto)
        pointHoverRadius: 6, // Tamanho dos pontos ao passar o mouse
    }],
};

// Configuração do gráfico
const configReceitas = {
    type: 'line', // Define que o gráfico será de linha
    data: dataReceitas, // Dados a serem exibidos no gráfico
    options: {
        responsive: true, // Faz o gráfico se ajustar automaticamente ao tamanho da tela
        maintainAspectRatio: false, // Permite que o gráfico ajuste sua proporção
        plugins: {
            legend: {
                display: true, // Exibe a legenda do gráfico
                position: 'top', // Posiciona a legenda no topo
                labels: {
                    color: '#00cc00', // Cor do texto da legenda (verde)
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte com base na largura da tela
                        family: 'Barlow Condensed, sans-serif', // Fonte da legenda
                    }),
                },
            },
        },
        scales: {
            // Configuração do eixo Y (vertical)
            y: {
                beginAtZero: true, // Garante que o eixo Y comece do zero
                title: {
                    display: true, // Exibe o título do eixo Y
                    text: 'ANO 2024', // Texto do título
                    color: '#00cc00', // Cor do título (verde)
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 12 : 16, // Ajusta o tamanho da fonte do título Y
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Fonte do título
                    }),
                },
                ticks: {
                    color: '#000000', // Cor dos ticks (marcas no eixo)
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 9 : 11, // Ajusta o tamanho dos ticks no eixo Y
                        weight: '500', // Peso da fonte dos ticks
                        family: 'Barlow Condensed, sans-serif', // Fonte dos ticks
                    }),
                },
            },
            // Configuração do eixo X (horizontal)
            x: {
                title: {
                    display: true, // Exibe o título do eixo X
                    text: 'MESES', // Texto do título
                    color: '#ffffff', // Cor do título (branco)
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte do título X
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Fonte do título
                    }),
                },
                ticks: {
                    color: '#000000', // Cor dos ticks (marcas no eixo)
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 9 : 11, // Ajusta o tamanho dos ticks no eixo X
                        weight: '500', // Peso da fonte dos ticks
                        family: 'Barlow Condensed, sans-serif', // Fonte dos ticks
                    }),
                },
            },
        },
    },
};

// Renderiza o gráfico utilizando os dados e configurações definidas acima
new Chart(ctxReceitas, configReceitas);
