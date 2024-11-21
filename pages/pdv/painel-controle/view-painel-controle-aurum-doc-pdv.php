<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="icon" href="" type="image/png">
    <title>Aurum | Painel de Controle</title>
    
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bibliotecas de Estilo -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Bebas+Neue&family=Kanit:wght@100;400;700&display=swap" rel="stylesheet">
    
    <!-- Estilos Personalizados -->
    <link rel="stylesheet" href="../../../assets/css/pdv-style-color-bg-painel-controle-aurum.css">

            <!-- Estilo do Loader (CSS) -->
            <style>
        /* Loader CSS */
        #loader {
            position: fixed; /* Fixa o loader no centro da tela */
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 9999; /* Coloca o loader à frente de todos os outros elementos */
            background: #fff; /* Fundo branco */
            display: flex; /* Usa Flexbox para centralizar o conteúdo */
            align-items: center; /* Centraliza verticalmente */
            justify-content: center; /* Centraliza horizontalmente */
        }
        .loader-spinner {
            border: 16px solid #f3f3f3; /* Borda cinza para dar contraste */
            border-top: 12px solid; /* Cor personalizada para a borda superior */
            border-radius: 50%; /* Faz o elemento ser circular */
            width: 80px; /* Largura do loader */
            height: 80px; /* Altura do loader */
            animation: spin 2s linear infinite, rainbow 4s linear infinite; /* Animações para o movimento e a cor */
        }

        /* Animação de rotação */
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Animação de arco-íris (mudança de cor) */
        @keyframes rainbow {
            0% { border-top-color: #ffd700; }   /* Dourado */
            16% { border-top-color: #b8b8b8; }  /* Cinza claro */
            33% { border-top-color: #808080; }  /* Cinza médio */
            50% { border-top-color: #696969; }  /* Cinza escuro */
            66% { border-top-color: #000000; }  /* Preto */
            83% { border-top-color: #a5a5a5; }  /* Cinza claro */
            100% { border-top-color: #ffd700; } /* Retorna ao dourado */
}

    </style>
</head>

<body>
    <!-- Loader: Elemento de carregamento exibido até que a página seja totalmente carregada -->
    <div id="loader">
        <div class="loader-spinner"></div>
    </div>

    <div class="container">
        <h2 onclick="window.location.href='../painel-controle/view-painel-controle-aurum-doc-pdv.php';">AURUM</h2>
        <h6 onclick="window.location.href='../painel-controle/view-painel-controle-aurum-doc-pdv.php';">SISTEMA DE VENDAS <i class="fa fa-child" aria-hidden="true"></i></h6>

        <div class="row">
            <div class="col col-narrow">
                <h5><i class="fa fa-pie-chart"></i> FINANCEIRO</h5>
                <div class="button-container">
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-pie-chart" aria-hidden="true"></i> RECEITAS</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-pie-chart" aria-hidden="true"></i> DESPESAS</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-pie-chart" aria-hidden="true"></i> DEPARTAMENTOS</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-pie-chart" aria-hidden="true"></i> CATEGORIAS</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-pie-chart" aria-hidden="true"></i> PLANEJAMENTO</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-pie-chart" aria-hidden="true"></i> RELATÓRIOS</button>
                </div>

                <h5><i class="fa fa-cube"></i> ESTOQUE</h5>
                <div class="button-container">
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='../estoque/view-new-produto-aurum-doc-pdv.php';"><i class="fa fa-cube" aria-hidden="true"></i> NOVO PRODUTO</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-cube" aria-hidden="true"></i> GRUPO</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-cube" aria-hidden="true"></i> MARCA</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-cube" aria-hidden="true"></i> MODELO</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-cube" aria-hidden="true"></i> PREÇO</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-cube" aria-hidden="true"></i> EAN</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-cube" aria-hidden="true"></i> INVENTÁRIO</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-cube" aria-hidden="true"></i> RELATÓRIOS</button>
                </div>

                <h5><i class="fa fa-shopping-cart"></i> VENDAS</h5>
                <div class="button-container">
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ABRIR CAIXA</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='../vendas/view-new-venda-aurum-doc-pdv.php';"><i class="fa fa-shopping-cart" aria-hidden="true"></i> NOVA VENDA</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-shopping-cart" aria-hidden="true"></i> NOVA TROCA</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='../clientes/view-new-cliente-aurum-doc-pdv.php';"><i class="fa fa-shopping-cart" aria-hidden="true"></i> NOVO CLIENTE</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-shopping-cart" aria-hidden="true"></i> NOVO VENDEDOR</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-shopping-cart" aria-hidden="true"></i> PAGAMENTOS</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ORÇAMENTO</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-shopping-cart" aria-hidden="true"></i> RELATÓRIOS</button>
                </div>

                <h5><i class="fa fa-truck"></i> FORNECEDOR</h5>
                <div class="button-container">
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='../fornecedores/view-new-fornecedor-aurum-doc-pdv.php';"><i class="fa fa-truck" aria-hidden="true"></i> NOVO FORNECEDOR</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-truck" aria-hidden="true"></i> COMPRA</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-truck" aria-hidden="true"></i> ENTRADA</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-truck" aria-hidden="true"></i> DEVOLUÇÃO</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-truck" aria-hidden="true"></i> FRETE</button>
                    <button id="btn-bg-vender-new-venda-page-search" onclick="window.location.href='';"><i class="fa fa-truck" aria-hidden="true"></i> RELATÓRIOS</button>
                </div>
            </div>

            <div class="col col-wide">
            <h5><i class="fa fa-pie-chart" aria-hidden="true"></i> PAINEL FINANCEIRO</h5>
                <div class="container" id="receitas">
                    <h1><i class="fa fa-pie-chart" aria-hidden="true"></i> RELATÓRIO RECEITAS</h1>
                    <canvas id="salesChartReceitas"></canvas>
                </div>

                <div class="container" id="despesas">
                    <h1><i class="fa fa-pie-chart" aria-hidden="true"></i> RELATÓRIO DESPESAS</h1>
                    <canvas id="salesChartDespesas"></canvas>
                </div>

                <div class="container" id="departamentos">
                    <h1><i class="fa fa-pie-chart" aria-hidden="true"></i> RELATÓRIO DEPARTAMENTOS</h1>
                    <canvas id="salesChartDepartamentos"></canvas>
                </div>
    
                <br>

                <h5><i class="fa fa-shopping-cart" aria-hidden="true"></i> PAINEL VENDAS</h5>
                
                <div class="container" id="vendas">
                    <h1><i class="fa fa-shopping-cart" aria-hidden="true"></i> RELATÓRIO VENDAS ANUAL</h1>
                    <canvas id="salesChartVendas"></canvas>
                </div>

                <div class="container" id="vendashora">
                    <h1><i class="fa fa-shopping-cart" aria-hidden="true"></i> RELATÓRIO VENDAS HORA</h1>
                    <canvas id="salesChartVendasHora"></canvas>
                </div>
            </div>
        </div>
    </div>

<!-- Scripts JavaScript -->
<!-- JavaScript para gerenciar o loader -->
<script>
    // Executa quando o DOM estiver carregado
    document.addEventListener("DOMContentLoaded", function() {
        // Após todos os elementos da página estarem carregados
        window.onload = function() {
            // Definir um tempo para o loader desaparecer, mesmo que a página esteja carregada
            setTimeout(function() {
                var loader = document.getElementById("loader");
                loader.style.display = "none"; // Esconde o loader
            }, 2000); 
        }
    });
</script>

<!-- Biblioteca Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Dependências do jQuery e Bootstrap -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<!-- Scripts personalizados -->
<script src="../../../assets/js/grafic-receita-bg-color-painel-controle.js"></script>
<script src="../../../assets/js/grafic-despesa-bg-color-painel-controle.js"></script>
<script src="../../../assets/js/grafic-departamento-bg-color-painel-controle.js"></script>
<script src="../../../assets/js/grafic-vendas-anual-bg-color-painel-controle.js"></script>
<script src="../../../assets/js/grafic-vendas-hora-bg-color-paine-controle.js"></script>


</html>
