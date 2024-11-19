<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <!-- Favicon -->
    <link rel="icon" href="" type="image/png">
    <title>Aurum | Novo Cliente - Pessoa Fisíca</title>

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
    <link rel="stylesheet" href="../../../assets/css/pdv-style-color-bg-form-new-cliente-aurum.css">
</head>

<body>
    <!-- Container Principal -->
    <div class="container">
        <!-- Título Principal -->
        <h2>AURUM</h2>
        <h6>SISTEMA DE VENDAS <i class="fa fa-child"></i></h6>

        <!-- Seção do Formulário -->
        <div class="row">
            <div class="col">
                <form>
                    <!-- Título da Seção do Formulário -->
                    <h3><i class="fa fa-user"></i> Cliente - Pessoa Fisíca</h3>
                    
                    <!-- Campo: Código Interno -->
                    <div>
                        <label for="codigo">Código</label>
                        <input type="text" id="codigo" name="codigo" placeholder="Código interno" autocomplete="off" required/>
                    </div>

                    <!-- Campo: CPF -->
                    <div>
                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" placeholder="CPF" autocomplete="off" required />
                    </div>

                    <!-- Campo Nome Completo -->
                    <div>
                        <label for="nome completo">Nome Completo </label>
                        <input type="text" id="nomecompleto" name="nomecompleto" placeholder="Nome Completo" autocomplete="off"/>
                    </div>

                    <!-- Campo: Estado -->
                    <div>
                        <label for="estado">Estado</label>
                        <input type="text" id="estado" name="estado" placeholder="Estado" autocomplete="off"/>
                    </div>

                    <!-- Campo: Cidade -->
                    <div>
                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade" name="cidade" placeholder="Cidade" autocomplete="off"/>
                    </div>

                    <!-- Campo: Bairro -->
                    <div>
                        <label for="bairro">Bairro</label>
                        <input type="text" id="bairro" name="bairro" placeholder="Bairro" autocomplete="off"/>
                    </div>

                    <!-- Campo: Endereço -->
                    <div>
                        <label for="endereço">Endereço</label>
                        <input type="text" id="endereço" name="endereco" placeholder="Endereço" autocomplete="off"/>
                    </div>

                    <!-- Campo: Telefone 1 -->
                    <div>
                        <label for="telefone">Contato 1</label>
                        <input type="text" id="telefone" name="telefone" placeholder="Contato 1" autocomplete="off"/>
                    </div>

                    <!-- Campo: Telefone 2 -->
                    <div>
                        <label for="telefone2">Contato 2</label>
                        <input type="text" id="telefone2" name="telefone2" placeholder="Contato 2" autocomplete="off"/>
                    </div>

                    <!-- Campo: E-mail -->
                    <div>
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="E-mail" autocomplete="off"/>
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
    <!-- jQuery, Popper.js e Bootstrap -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>

</html>
