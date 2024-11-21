<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <!-- Favicon -->
    <link rel="icon" href="" type="image/png">
    <title>Aurum | Novo Produto</title>

    <!-- Meta Tags: Informações básicas da página -->
    <meta charset="UTF-8"> <!-- Conjunto de caracteres -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Compatibilidade com IE -->
    <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Responsividade -->

    <!-- Bibliotecas de Estilo e Fontes Externas -->
    <!-- Font Awesome: Ícones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap: Framework CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <!-- Google Fonts: Fontes Personalizadas -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100..900&family=Baumans&family=Roboto+Condensed:wght@100..900&display=swap" rel="stylesheet">
    
    <!-- Estilos Personalizados -->
    <link rel="stylesheet" href="../../../assets/css/pdv-style-color-bg-form-new-produto-aurum.css">

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

    <!-- Container Principal -->
    <div class="container">
        <!-- Título Principal -->
        <h2 onclick="window.location.href='../painel-controle/view-painel-controle-aurum-doc-pdv.php';">AURUM</h2>
        <h6 onclick="window.location.href='../painel-controle/view-painel-controle-aurum-doc-pdv.php';">SISTEMA DE VENDAS <i class="fa fa-child"></i></h6>

        <!-- Seção do Formulário -->
        <div class="row">
            <div class="col">
                <form>
                    <!-- Título da Seção do Formulário -->
                    <h3><i class="fa fa-cube"></i> Produto</h3>
                    
                    <!-- Campo: Código Interno -->
                    <div>
                        <label for="codigo">Código interno</label>
                        <input type="text" id="codigo" name="codigo" placeholder="Código interno" autocomplete="off" required/>
                    </div>

                    <!-- Campo: Descrição -->
                    <div>
                        <label for="descricao">Descrição</label>
                        <input type="text" id="descricao" name="descricao" placeholder="Descrição" autocomplete="off" required />
                    </div>

                    <!-- Campo: Código EAN -->
                    <div>
                        <label for="codigoean">Código EAN</label>
                        <input type="text" id="codigoean" name="codigoean" placeholder="Código EAN" autocomplete="off"/>
                    </div>

                    <!-- Campo: Marca -->
                    <div>
                        <label for="marca">Marca</label>
                        <select name="marca" id="marca">
                            <option>Escolha a marca</option>
                        </select>
                    </div>

                    <!-- Campo: Modelo -->
                    <div>
                        <label for="modelo">Modelo</label>
                        <select name="modelo" id="modelo">
                            <option>Escolha o modelo</option>
                        </select>
                    </div>

                    <!-- Campo: Grupo -->
                    <div>
                        <label for="grupo">Grupo</label>
                        <select name="grupo" id="grupo">
                            <option>Escolha o grupo</option>
                        </select>
                    </div>

                    <!-- Campo: Fornecedor -->
                    <div>
                        <label for="fornecedor">Fornecedor</label>
                        <select name="fornecedor" id="fornecedor">
                            <option>Escolha o fornecedor</option>
                        </select>
                    </div>

                    
                    <!-- Campo: Unidade de medida -->
                    <div>
                        <label for="medida">Unidade de medida</label>
                        <select name="unidademedida" id="medida">
                            <option>Escolha a medida</option>
                        </select>
                    </div>

                    
                    <!-- Campo: Tipo de venda -->
                    <div>
                        <label for="tipo de venda">Tipo de venda</label>
                        <select name="tipovenda" id="tipovenda">
                            <option>Escolha a venda</option>
                            <option value="Atacado">Atacado</option>
                            <option value="Varejo">Varejo</option>
                        </select>
                    </div>

                    
                    <!-- Campo: Preço atacado -->
                    <div>
                        <label for="precoatacado">Preço atacado</label>
                        <input type="text" id="" name="preco1" placeholder="Preço atacado" autocomplete="off" required />
                        </select>
                    </div>

                    
                    <!-- Campo: Preço varejo -->
                    <div>
                        <label for="precovarejo">Preço varejo</label>
                        <input type="text" id="" name="preco2" placeholder="Preço varejo" autocomplete="off" required />
                    </div>

                    <!-- Campo: Peso -->
                    <div>
                        <label for="peso">Peso</label>
                        <input type="text" id="" name="peso" placeholder="Peso" autocomplete="off" required />
                    </div>

                    <!-- Campo: Volume -->
                    <div>
                        <label for="volume">Volume</label>
                        <input type="text" id="" name="volume" placeholder="Volume" autocomplete="off" required />
                    </div>

                    <!-- Campo: Estoque atual-->
                    <div>
                        <label for="estoqueatual">Estoque Atual</label>
                        <input type="text" id="" name="estoqueatual" placeholder="Estoque Atual" autocomplete="off" required />
                    </div>

                    <!-- Campo: Estoque minimo -->
                    <div>
                        <label for="estoqueminimo">Estoque Minimo</label>
                        <input type="text" id="" name="estoqueminimo" placeholder="Estoque Minimo" autocomplete="off" required />
                    </div>

                    <!-- Campo: Estoque máximo -->
                    <div>
                        <label for="estoquemaximo">Estoque Máximo</label>
                        <input type="text" id="" name="estoquemaximo" placeholder="Estoque Máximo" autocomplete="off" required />
                    </div>

                    <!-- Campo: Data fabricação -->
                    <div>
                        <label for="datafabricação">Data Fabricação</label>
                        <input type="date" id="" name="datafabricacao" placeholder="Data Fabricação" autocomplete="off" required />
                    </div>

                    <!-- Campo: Data validade -->
                    <div>
                        <label for="datavalidade">Data Validade</label>
                        <input type="date" id="" name="datavalidade" placeholder="Data Validade" autocomplete="off" required />
                    </div>

                    <!-- Campo: Data validade -->
                    <div>
                        <label for="status">Status</label>
                        <select name="status" id="status">
                            <option>Escolha o status</option>
                            <option value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                        </select>
                    </div>

                    <div class="button-container">
                        <button id="btn-bg-form-aurum-page" type="submit">Salvar</button>
                        <button id="btn-bg-form-aurum-page" type="reset">Cancelar</button>
                    </div>
                </form>
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
                }, 1000); 
            }
        });
    </script>
    <!-- jQuery, Popper.js e Bootstrap -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>

</html>
