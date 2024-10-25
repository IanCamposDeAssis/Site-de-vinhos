<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="playfair.css">
    <link rel="stylesheet" href="style/styles.css">
    <link rel="stylesheet" href="style/avatar.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" type="text/css" href="suspenso.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap"
        rel="stylesheet">
    <title>Vinhos.net</title>
</head>

<body>
    <header class="menu" id="inicio">
        <!-- menu de navegação -->
        <nav>
            <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        <!-- menu do usuário -->
        <div class="user-area">
            <!-- foto de usuário -->
            <div class="user-photo">
                <img src="assets/users/unknownuser.png" alt="Foto de usuário" id="user">
            </div>
            <!-- opções do usuário -->
            <div class="user-options">
               
                <ul class="menuX">
                    <li><a href="#">Mais opções</a>
                    
                    <ul>
                        <li><a href="#">Logar / Minha conta</a></li>
                        <li><a href="#">Sair</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    </header>
    <main class="conteudo" id="sobre">
        <div class="fundo">
            <section class="destaque" id="destaque">
                <div class="cards" id="cards">
                    <div class="item ">
                        <div class="imagem-card">
                            <img src="assets/01.png" alt="rose">
                        </div>
                        <div class="descricao-card">
                            <h2>Preto</h2>
                        </div>
                    </div>
                    <div class="item">
                        <div class="imagem-card">
                            <img src="assets/01.png" alt="tinto">
                        </div>
                        <div class="descricao-card">
                            <h2>Vermelho</h2>
                        </div>
                    </div>
                    <div class="item">
                        <div class="imagem-card">
                            <img src="assets/01.png" alt="branco">
                        </div>
                        <div class="descricao-card">
                            <h2>Azul</h2>
                        </div>
                    </div>
                </div>
        </div>
        </section>

        <section class="produtos-gerais">
    <h2>Nossos Produtos</h2>
    <div class="produtos-lista">
        <div class="produto-item">
            <img src="assets/produto1.png" alt="Produto 1">
            <h3>Vinho Branco</h3>
            <p>Vinho branco refrescante, ideal para dias quentes.</p>
            <button>Comprar Agora</button>
        </div>
        <div class="produto-item">
            <img src="assets/produto2.png" alt="Produto 2">
            <h3>Vinho Tinto</h3>
            <p>Vinho tinto encorpado, perfeito para harmonizar com carnes.</p>
            <button>Comprar Agora</button>
        </div>
        <div class="produto-item">
            <img src="assets/produto3.png" alt="Produto 3">
            <h3>Vinho Rosé</h3>
            <p>Vinho rosé suave, ótimo para qualquer ocasião.</p>
            <button>Comprar Agora</button>
        </div>
    </div>
</section>
    </main>
    <footer class="rodape" id="contato">
    <h2>Entre em Contato</h2>
    <div class="contato-info">
        <p>Email: contato@vinhos.net</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Endereço: Rua dos Vinhos, 123, São Paulo, SP</p>
    </div>
</footer>

</body>

</html>
