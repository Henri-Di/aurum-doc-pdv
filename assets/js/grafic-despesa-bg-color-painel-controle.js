const ctxDespesas = document.getElementById('salesChartDespesas').getContext('2d');

// Dados fictícios de despesas
const dataDespesas = {
    labels: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'],
    datasets: [
        {
            label: 'DESPESAS',
            data: [2000, 7500, 4500, 8500, 11250, 9500, 3500, 7500, 4500, 2000, 1500, 3500],
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Cor do preenchimento (vermelho semi-transparente)
            borderColor: 'rgb(255, 0, 0)', // Cor da linha (vermelho sólido)
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
    data: dataDespesas,
    options: {
        responsive: true, // O gráfico será responsivo
        maintainAspectRatio: false, // Permite a alteração do aspecto do gráfico quando a tela for redimensionada
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#ff3366',
                    font: {
                        size: window.innerWidth < 480 ? 12 : 14, // Reduz tamanho da fonte em telas menores
                        family: 'Barlow Condensed, sans-serif'
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
                    color: '#ff3366',
                    font: {
                        size: window.innerWidth < 480 ? 12 : 16, // Reduz tamanho da fonte em telas menores
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif'
                    },
                },
                ticks: {
                    color: '#000000',
                    font: {
                        size: window.innerWidth < 480 ? 10 : 11, // Reduz tamanho da fonte em telas menores
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif'
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: '',
                    color: '#ff3366',
                    font: {
                        size: window.innerWidth < 480 ? 12 : 14, // Reduz tamanho da fonte em telas menores
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif'
                    },
                },
                ticks: {
                    color: '#000000',
                    font: {
                        size: window.innerWidth < 480 ? 10 : 11, // Reduz tamanho da fonte em telas menores
                        weight: '500',
                        family: 'Barlow Condensed, sans-serif'
                    },
                },
            },
        },
    },
};

// Renderizar o gráfico
new Chart(ctxDespesas, configDespesas);
