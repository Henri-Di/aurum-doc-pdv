<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="icon" href="" type="image/png">
    <title>Aurum | PDV</title>
    <!-- Meta Tags: Informações básicas da página -->
    <!-- Define o conjunto de caracteres da página -->
    <meta charset="UTF-8">
    <!-- Define a compatibilidade para o Internet Explorer -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Define o viewport para garantir a responsividade -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bibliotecas de Estilo e Fontes Externas -->
    <!-- Font Awesome: Ícones para embelezar a interface -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap: Framework CSS para design responsivo e componentes -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <!-- Google Fonts: Importação de fontes personalizadas para estilização dos textos -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Bebas+Neue&family=Genos:ital,wght@0,100..900;1,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playwrite+IS:wght@100..400&family=Playwrite+NO:wght@100..400&family=Reddit+Sans+Condensed:wght@200..900&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>    
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Baumans&family=Bebas+Neue&family=Genos:ital,wght@0,100..900;1,100..900&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playwrite+IS:wght@100..400&family=Playwrite+NO:wght@100..400&family=Reddit+Sans+Condensed:wght@200..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
    
    <!-- Estilos Personalizados -->
    <!-- Incluindo folha de estilos personalizada da página -->
    <link rel="stylesheet" href="./assets/css/pdv-style-color-bg-index.css">

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
        <h2>AURUM</h2>
        <h6>SISTEMA DE VENDAS <i class="fa fa-child"></i></h6>

        <button id="btn-acessar-aurum-bg">Acessar</button>
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
    <!-- Bibliotecas Externas (jQuery, Bootstrap e Popper) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>
</html>