// Seleciona o contexto do canvas onde o gráfico será desenhado
// Seleciona o contexto do canvas onde o gráfico de contas a pagar será desenhado
const ctxContasPagar = document.getElementById('salesChartContasPagar').getContext('2d');

// Dados fictícios para o gráfico de contas a pagar (representação dos gastos mensais)
const dataContasPagar = {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'], // Rótulos para os meses
    datasets: [
        {
            label: 'DESPESAS', // Nome do conjunto de dados (o que será exibido na legenda)
            data: [13832, 9042, 16289, 4562, 13049, 12680, 15842, 10154, 7354, 17813, 4201, 17788], // Valores mensais para as contas a pagar
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Cor do preenchimento da área (vermelho claro e semi-transparente)
            borderColor: 'rgb(255, 0, 0)', // Cor da linha (vermelho sólido)
            borderWidth: 3, // Espessura da linha do gráfico
            tension: 0.4, // Suavização das curvas da linha (0.4 cria uma curva suave)
            pointBackgroundColor: '#ffffff', // Cor de fundo dos pontos (branco)
            pointBorderColor: '#000000', // Cor da borda dos pontos (preto)
            pointBorderWidth: 2, // Espessura da borda dos pontos
            pointRadius: 4, // Tamanho dos pontos no gráfico
            pointHoverBackgroundColor: '#ffcc00', // Cor dos pontos quando o mouse passa sobre eles
            pointHoverBorderColor: '#000000', // Cor da borda dos pontos ao passar o mouse
            pointHoverRadius: 6, // Tamanho dos pontos ao passar o mouse
        },
    ],
};

// Configuração geral do gráfico
const configContasPagar = {
    type: 'line', // Define o tipo de gráfico 
    data: dataContasPagar, // Dados do gráfico, como os valores e os rótulos
    options: {
        responsive: true, // Faz com que o gráfico seja responsivo ao redimensionar a tela
        maintainAspectRatio: false, // Permite que o gráfico altere a proporção quando redimensionado
        plugins: {
            legend: {
                display: true, // Exibe a legenda no gráfico
                position: 'top', // Posição da legenda (no topo)
                labels: {
                    color: '#ff3366', // Cor do texto da legenda
                    font: {
                        size: window.innerWidth < 480 ? 12 : 14, // Ajusta o tamanho da fonte para telas pequenas
                        family: 'Barlow Condensed, sans-serif', // Define a fonte da legenda
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true, // Inicia o eixo Y a partir do zero
                title: {
                    display: true, // Exibe o título do eixo Y
                    text: 'ANO 2024', // Texto do título do eixo Y
                    color: '#ff3366', // Cor do título do eixo Y
                    font: {
                        size: window.innerWidth < 480 ? 12 : 16, // Ajusta o tamanho da fonte do título para telas menores
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Define a fonte do título do eixo Y
                    },
                },
                ticks: {
                    color: '#000000', // Cor dos números no eixo Y
                    font: {
                        size: window.innerWidth < 480 ? 10 : 11, // Ajusta o tamanho da fonte para telas pequenas
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Define a fonte para os números do eixo Y
                    },
                },
            },
            x: {
                title: {
                    display: true, // Exibe o título do eixo X
                    text: '', // Não há texto no título do eixo X (deixado vazio)
                    color: '#ff3366', // Cor do título do eixo X
                    font: {
                        size: window.innerWidth < 480 ? 12 : 14, // Ajusta o tamanho da fonte para telas pequenas
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Define a fonte do título do eixo X
                    },
                },
                ticks: {
                    color: '#000000', // Cor dos números no eixo X
                    font: {
                        size: window.innerWidth < 480 ? 10 : 11, // Ajusta o tamanho da fonte para telas menores
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Define a fonte para os números do eixo X
                    },
                },
            },
        },
    },
};

// Renderiza o gráfico na tela com a configuração fornecida
new Chart(ctxContasPagar, configContasPagar);
