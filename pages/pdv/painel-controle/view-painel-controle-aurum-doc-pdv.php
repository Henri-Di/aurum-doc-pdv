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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Bebas+Neue&family=Kanit:wght@100;400;700&display=swap" rel="stylesheet">
    
    <!-- Estilos Personalizados -->
    <link rel="stylesheet" href="../../../assets/css/pdv-style-color-bg-painel-controle-aurum.css">
</head>

<body>
    <div class="container">
        <h2>AURUM</h2>
        <h6>SISTEMA DE VENDAS <i class="fa fa-child" aria-hidden="true"></i></h6>

        <div class="row">
            <div class="col col-narrow">
                <h5><i class="fa fa-pie-chart"></i> FINANCEIRO</h5>
                <div class="button-container">
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> RECEITAS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> DESPESAS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> DEPARTAMENTOS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> CATEGORIAS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> PLANEJAMENTO</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> RELATÓRIOS</button>
                </div>

                <h5><i class="fa fa-pie-chart"></i> FINANCEIRO</h5>
                <div class="button-container">
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> RECEITAS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> DESPESAS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> DEPARTAMENTOS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> CATEGORIAS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> PLANEJAMENTO</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> RELATÓRIOS</button>
                </div>

                <h5><i class="fa fa-pie-chart"></i> FINANCEIRO</h5>
                <div class="button-container">
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> RECEITAS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> DESPESAS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> DEPARTAMENTOS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> CATEGORIAS</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> PLANEJAMENTO</button>
                    <button id="btn-bg-vender-new-venda-page-search"><i class="fa fa-pie-chart" aria-hidden="true"></i> RELATÓRIOS</button>
                </div>
            </div>

            <div class="col col-wide">
            <h5><i class="fa fa-pie-chart"></i> PAINEL FINANCEIRO</h5>
                <div class="container" id="receitas">
                    <h1>RELATÓRIO RECEITAS</h1>
                    <canvas id="salesChartReceitas"></canvas>
                </div>

                <div class="container" id="despesas">
                    <h1>RELATÓRIO DESPESAS</h1>
                    <canvas id="salesChartDespesas"></canvas>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="../../../assets/js/grafic-receita-bg-color-painel-controle.js"></script>
    <script src="../../../assets/js/grafic-despesa-bg-color-painel-controle.js"></script>

</html>
