const ctxDespesas = document.getElementById('salesChartDespesas').getContext('2d');

// Dados fictícios de despesas
const dataDespesas = {
    labels: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'],
    datasets: [
        {
            label: 'DESPESAS',
            data: [10000, 7000, 5000, 2000, 4000, 8000, 12000, 7000, 3000, 1000, 5000, 7000],
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Cor do preenchimento (vermelho semi-transparente)
            borderColor: 'rgb(255, 99, 132)', // Cor da linha (vermelho sólido)
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
const configDespesas = {
    type: 'line', // ou 'bar' para gráfico de barras
    data: dataDespesas, // Aqui corrigimos para usar o objeto de dados correto
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#ff3366', // Cor da legenda
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
                    color: '#ff3366', // Cor do título do eixo Y
                    font: {
                        size: 16, // Tamanho da fonte
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif' // Fonte do título do eixo Y
                    },
                },
                ticks: {
                    color: '#000000', // Cor dos valores do eixo Y
                    font: {
                        size: 11, // Tamanho da fonte
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif' // Fonte dos valores do eixo Y
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'MESES',
                    color: '#ff3366', // Cor do título do eixo X
                    font: {
                        size: 14, // Tamanho da fonte
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif' // Fonte do título do eixo X
                    },
                },
                ticks: {
                    color: '#000000', // Cor dos valores do eixo X
                    font: {
                        size: 11, // Tamanho da fonte
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif' // Fonte dos valores do eixo X
                    },
                },
            },
        },
    },
};

// Renderizar o gráfico
new Chart(ctxDespesas, configDespesas);
