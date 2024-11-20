const ctxReceitas = document.getElementById('salesChartReceitas').getContext('2d');

// Dados fictícios de vendas
const dataReceitas = {
    labels: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'],
    datasets: [{
        label: 'RECEITAS',
        data: [9000, 6000, 8000, 6000, 9000, 12000, 8000, 5000, 7500, 4000, 12000, 19000],
        backgroundColor: 'rgba(0, 204, 0, 0.2)', // Cor do preenchimento (semi-transparente)
        borderColor: 'rgb(0, 204, 0)', // Cor da linha
        borderWidth: 3, // Espessura da linha
        tension: 0.4, // Suavização da linha
        pointBackgroundColor: '#ffffff', // Cor dos pontos no gráfico
        pointBorderColor: '#000000', // Cor da borda dos pontos
        pointBorderWidth: 2, // Espessura da borda dos pontos
        pointRadius: 4, // Tamanho dos pontos
        pointHoverBackgroundColor: '#ffcc00', // Cor dos pontos ao passar o mouse
        pointHoverBorderColor: '#000000', // Cor da borda dos pontos ao passar o mouse
        pointHoverRadius: 6, // Tamanho dos pontos ao passar o mouse
    }],
};

// Configuração do gráfico
const configReceitas = {
    type: 'line',
    data: dataReceitas,
    options: {
        responsive: true,
        maintainAspectRatio: false, // Permite que o gráfico ajuste a proporção
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#00cc00',
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte com base na largura
                        family: 'Barlow Condensed, sans-serif', // Fonte da legenda
                    }),
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'ANO 2024',
                    color: '#00cc00',
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 12 : 16, // Ajusta o tamanho da fonte do título Y
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif',
                    }),
                },
                ticks: {
                    color: '#000000',
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 9 : 11, // Ajusta o tamanho dos ticks no eixo Y
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif',
                    }),
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'MESES',
                    color: '#ffffff',
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte do título X
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif',
                    }),
                },
                ticks: {
                    color: '#000000',
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 9 : 11, // Ajusta o tamanho dos ticks no eixo X
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif',
                    }),
                },
            },
        },
    },
};

// Renderizar o gráfico
new Chart(ctxReceitas, configReceitas);
