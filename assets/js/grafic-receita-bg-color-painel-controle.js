const ctxReceitas = document.getElementById('salesChartReceitas').getContext('2d');

// Dados fictícios de vendas
const dataReceitas = {
    labels: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'],
    datasets: [
        {
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
        },
    ],
};

// Configuração do gráfico
const configReceitas = {
    type: 'line', // ou 'bar' para gráfico de barras
    data: dataReceitas, // Aqui corrigimos para usar o objeto de dados correto
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#00cc00', // Cor da legenda
                    font: {
                        size: 14, // Tamanho da fonte
                        family: 'Barlow Condensed, sans-serif' // Fonte da legenda
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'ANO 2024',
                    color: '#00cc00', // Cor do título do eixo Y
                    font: {
                        size: 16, // Tamanho da fonte
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif' // Fonte da legenda
                    },
                },
                ticks: {
                    color: '#000000', // Cor dos valores do eixo Y
                    font: {
                        size: 11, // Tamanho da fonte
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif' // Fonte da legenda
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'MESES',
                    color: '#ffffff', // Cor do título do eixo X
                    font: {
                        size: 14, // Tamanho da fonte
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif' // Fonte da legenda
                    },
                },
                ticks: {
                    color: '#000000', // Cor dos valores do eixo X
                    font: {
                        size: 11, // Tamanho da fonte
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif' // Fonte da legenda
                    },
                },
            },
        },
    },
};

// Renderizar o gráfico
new Chart(ctxReceitas, configReceitas);
