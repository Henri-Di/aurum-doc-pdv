// Seleciona o contexto do canvas onde o gráfico será desenhado
// Este canvas é onde o gráfico de departamentos será renderizado
const ctxDepartamentos = document.getElementById('salesChartDepartamentos').getContext('2d');

// Dados fictícios representando as vendas mensais de diferentes departamentos
const dataDepartamentos = {
    // Rótulos dos meses do ano para o eixo X
    labels: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'],
    datasets: [
        {
            // Nome do conjunto de dados que será exibido no gráfico (neste caso, "DEPARTAMENTOS")
            label: 'DEPARTAMENTOS', 
            
            // Dados mensais representando a quantidade de vendas ou atividades por departamento
            data: [5000, 7000, 3000, 9000, 13000, 6000, 4000, 8000, 15000, 20000, 22000],
            
            // Cor de preenchimento da área do gráfico (azul claro e semi-transparente)
            backgroundColor: 'rgba(0, 102, 255, 0.2)', 
            
            // Cor da linha que conecta os pontos (azul sólido)
            borderColor: 'rgb(0, 102, 255)', 
            
            // Espessura da linha do gráfico
            borderWidth: 3,
            
            // Tensão para suavizar as curvas da linha (valores entre 0 e 1)
            tension: 0.4,
            
            // Configurações para os pontos no gráfico
            pointBackgroundColor: '#ffffff', // Cor de fundo dos pontos (branco)
            pointBorderColor: '#000000', // Cor da borda dos pontos (preto)
            pointBorderWidth: 2, // Espessura da borda dos pontos
            pointRadius: 4, // Tamanho dos pontos no gráfico
            pointHoverBackgroundColor: '#00ff00', // Cor dos pontos ao passar o mouse (verde)
            pointHoverBorderColor: '#000000', // Cor da borda dos pontos ao passar o mouse (preto)
            pointHoverRadius: 6, // Tamanho dos pontos ao passar o mouse
        },
    ],
};

// Configuração geral do gráfico
const configDepartamentos = {
    // Tipo de gráfico: 'line' (gráfico de linha)
    type: 'line', 
    // Dados a serem exibidos no gráfico
    data: dataDepartamentos,
    options: {
        // Responsividade: o gráfico se adapta ao tamanho da tela
        responsive: true, 
        // Permite que o gráfico altere sua proporção conforme o tamanho da tela
        maintainAspectRatio: false,
        
        // Plugins que modificam o comportamento do gráfico (ex.: legenda)
        plugins: {
            legend: {
                display: true, // Exibe a legenda
                position: 'top', // Posição da legenda (no topo)
                labels: {
                    // Estilos da legenda
                    color: '#2f4f4f', // Cor do texto da legenda
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte dependendo da largura da tela
                        family: 'Barlow Condensed, sans-serif', // Fonte da legenda
                    }),
                },
            },
        },
        
        // Definições dos eixos X e Y
        scales: {
            // Eixo Y (vertical)
            y: {
                // Inicia o eixo Y a partir de zero
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'ANO 2024', // Título do eixo Y
                    color: '#0066ff', // Cor do título
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 12 : 16, // Ajusta o tamanho da fonte dependendo da largura da tela
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Fonte
                    }),
                },
                ticks: {
                    color: '#000000', // Cor dos rótulos dos valores no eixo Y
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 11, // Ajusta o tamanho da fonte dependendo da largura da tela
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Fonte
                    }),
                },
            },
            // Eixo X (horizontal)
            x: {
                title: {
                    display: true,
                    text: '', // Título vazio para o eixo X (você pode adicionar algo aqui)
                    color: '#0066ff',
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 14, // Ajusta o tamanho da fonte dependendo da largura da tela
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Fonte
                    }),
                },
                ticks: {
                    color: '#000000', // Cor dos rótulos dos meses no eixo X
                    font: (ctx) => ({
                        size: ctx.chart.width < 480 ? 10 : 11, // Ajusta o tamanho da fonte dependendo da largura da tela
                        weight: '500', // Peso da fonte
                        family: 'Barlow Condensed, sans-serif', // Fonte
                    }),
                },
            },
        },
    },
};

// Renderiza o gráfico na tela utilizando o contexto selecionado
new Chart(ctxDepartamentos, configDepartamentos);
