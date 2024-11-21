// Seleciona o contexto do canvas onde o gráfico de vendas será desenhado
const ctxVendas = document.getElementById('salesChartVendas').getContext('2d');

// Dados fictícios representando as vendas mensais ao longo do ano
const dataVendas = {
    labels: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'], // Meses do ano
    datasets: [
        {
            label: 'VENDAS ANUAL', // Nome do conjunto de dados (o título que aparece na legenda)
            data: [5000, 7000, 3000, 9000, 13000, 6000, 9000, 13000, 7000, 25000, 35000], // Valores das vendas para cada mês
            backgroundColor: 'rgb(153, 0, 204, 0.5)', // Cor de preenchimento da área abaixo da linha (cor suave e semi-transparente)
            borderColor: 'rgb(153, 0, 204)', // Cor da linha que conecta os pontos (linha roxa sólida)
            borderWidth: 3, // Espessura da linha do gráfico
            tension: 0.4, // Suaviza a linha, criando uma curva mais suave entre os pontos
            pointBackgroundColor: '#ffffff', // Cor de fundo dos pontos no gráfico (branco)
            pointBorderColor: '#000000', // Cor da borda dos pontos (preto)
            pointBorderWidth: 2, // Espessura da borda dos pontos
            pointRadius: 4, // Tamanho dos pontos no gráfico
            pointHoverBackgroundColor: '#ffcc00', // Cor dos pontos quando o mouse passa sobre eles (verde claro)
            pointHoverBorderColor: '#000000', // Cor da borda dos pontos ao passar o mouse (preto)
            pointHoverRadius: 6, // Tamanho dos pontos ao passar o mouse
        },
    ],
};

// Configuração geral do gráfico (como o tipo e as opções visuais)
const configVendas = {
    type: 'bar', // Define o tipo do gráfico como linha (pode mudar para 'bar' para barras, por exemplo)
    data: dataVendas, // Dados a serem exibidos no gráfico
    options: {
        responsive: true, // Permite que o gráfico se ajuste automaticamente ao tamanho da tela
        maintainAspectRatio: false, // Permite que o gráfico ajuste sua proporção ao redimensionar
        plugins: {
            legend: {
                display: true, // Exibe a legenda no gráfico
                position: 'top', // A legenda fica no topo do gráfico
                labels: {
                    color: '#2f4f4f', // Cor do texto na legenda
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte da legenda dependendo da largura da tela
                        family: 'Barlow Condensed, sans-serif', // Define a fonte da legenda
                    }),
                },
            },
        },
        scales: {
            // Configuração do eixo Y
            y: {
                beginAtZero: true, // O eixo Y começa em 0 para representar corretamente as vendas mensais
                title: {
                    display: true,
                    text: 'ANO 2024', // Título do eixo Y
                    color: '#9900ff', // Cor do título do eixo Y
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 12 : 16, // Ajusta o tamanho da fonte dependendo do tamanho da tela
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Define a fonte do título
                    }),
                },
                ticks: {
                    color: '#000000', // Cor dos números do eixo Y (os ticks)
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 11, // Ajusta o tamanho da fonte dos ticks dependendo do tamanho da tela
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Define a fonte dos ticks
                    }),
                },
            },
            // Configuração do eixo X
            x: {
                title: {
                    display: true,
                    text: '', // Título do eixo X (não será exibido nesse caso)
                    color: '#0066ff', // Cor do título do eixo X
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte dependendo do tamanho da tela
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Define a fonte do título
                    }),
                },
                ticks: {
                    color: '#000000', // Cor dos rótulos dos meses (ticks no eixo X)
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 11, // Ajusta o tamanho da fonte dependendo do tamanho da tela
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Define a fonte dos ticks
                    }),
                },
            },
        },
    },
};

// Cria e renderiza o gráfico no contexto especificado
new Chart(ctxVendas, configVendas);
