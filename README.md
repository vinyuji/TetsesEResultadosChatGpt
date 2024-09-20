# TetsesEResultadosChatGpt
Estes teste servirao como base para uma analise quantitativa e qualitativa dos codigos gerados pelo ChatGpt, conforme a eficiencia de cada codigo gerado.

# Dificuldades
    Nivel facil: simples, com botoes interativos ou com hiperlinks, input, formlario e animacoes. (15 testes).
    Nivel medio: adicionando logica a contrucao, contas, botoes interativos, fomrulario, listagem do formulario, paginacao, Api, modals. (15 Testes), organizar por arquivos, html e css.
    Nivel dificil: Tentativa de banco de dados, contrucao de rotas, paginacao, crud completo, api . ( 15 testes).

    classificacao: 
        satisfeito: passou nos teste com 80% a 100% do codigo funcionando , caso apresente problemas, se os problemas nao prejudicou no objetivo final.

        nem satisfeito nem insasitfeito: passou nos teste com resultados de 40% a 79%, os problemas resultantes, nao foram o suficiente de quebrar o codigo, simplesmente deixou de executalos.

        insatisfeito: codigo nao rodou, apresentou muitas falhas ao rodar no servidor local, ou entao apresnetou resultados menor que 40% funcionando.



    
    teste_1L resultado satisfatorio, conforme o pedido, nenhum erro.
    
    teste_2: resultado satifatorio, conforme o pedido, nenhum erro.
    
    teste_3: resultado satisfatrio, conforme o pedido, nenhum erro.
    
    teste_4: resultado satisfatorio, conforme o pedido, nenhum erro.
    
    teste_5: resultado satisfatorio, conforme o pedido, nenhum erro.
    
    teste_6: resultado satisfatorio, conforme o pedido, nenhum erro.

    teste_7: resultado satisfatorio, conforme o pedido, nenhum erro

    teste_8: resultado nem satisfatorio nem insatisfatorio, apresentou resultado, nao quebrou o codigo, no entanto nao apareceu o formulario de cadastro nem de login, mas apos informar o chat que nao apareceu o login nem o cadastro, o elemento script.js foi alterado, o que foi corrigido e arrumado.

    pergunta para qual deu o primeiro  nao satisfatorio: 

        chat, cria para mim um site, em js,  onde faz um requisicao de uma api publica, onde tem cadastro, login, e uma pagina inical, o cadastro e login e uma paginacao. me faca perguntas do que pode ajudar a melhorar a qualidade do site

    reposta do chat: 
        Claro! Vou criar um esboço do site, com páginas para cadastro, login e uma página inicial que faz requisições a uma API pública. Vou precisar de algumas informações adicionais para entender como você deseja personalizar o site e quais funcionalidades você gostaria de incluir.

        Aqui estão algumas perguntas para ajudar a refinar o projeto:

        Cadastro e Login:

        Quais campos você deseja no formulário de cadastro? (Por exemplo: nome, e-mail, senha, etc.)
        Há alguma validação específica que deseja implementar nos formulários (como verificação de formato de e-mail ou senha)?
        Gostaria de armazenar os dados do usuário em algum local, ou apenas simular o login e cadastro?
        API Pública:

        Tem alguma API pública específica que você gostaria de usar? (Por exemplo: uma API de clima, filmes, ou alguma outra área de interesse?)
        Como você deseja exibir os dados da API? (Por exemplo: em cards, lista, tabela?)
        Quer que a requisição à API ocorra automaticamente ao carregar a página inicial ou ao clicar em um botão?
        Paginação:

        Como você imagina a paginação? Você quer que ela navegue entre as diferentes páginas do site (cadastro, login, inicial) ou entre os resultados da API na página inicial?
        Quantos itens por página deseja exibir, caso queira a paginação dos resultados da API?
        Aparência:

        Alguma preferência de tema (escuro, claro, ou customizado)?
        Quais tipos de animações você gostaria (por exemplo: ao passar o mouse em um botão ou ao carregar conteúdo)?
        Responsividade:

        Deseja que o site seja responsivo, ou seja, que se ajuste automaticamente a diferentes tamanhos de tela (celulares, tablets, desktops)?
        Funcionalidades Extras:

        Alguma funcionalidade adicional, como recuperação de senha no login ou confirmação por e-mail no cadastro?
        Responda essas perguntas para que eu possa ajustar o projeto de acordo com suas necessidades e entregar algo mais específico para você!

    minha resposta ao chat: 

        1: login -> e-mail, senha
        cadastro -> e-mail, senha, confirmar senha, github
        preciso de validacao apra email
        eu gostaria de salvar os dados em um vetor de 10 posicoes, ou seja, cabera 10 cadastros somente.
        2: Api -> requisicao ao github, mostrando os repositorio, nome, foto e email
        3: cadastro e login seja duas paginas onde ficara no superior os botoes que levam a elas, e quando finalizar cadastro, volte para o login, e quando efetuar o login va para o inicio, onde aparece as informacoes feita pela requisicao
        4: tema clean, com botao onde altera para dark
        5: sim, seja reposivo
        6: as adicionais, pode ser olocadas, mas nao precisa executar nada ainda

    resposta 2 do chat: 
        	
            Aqui está o plano para o site com base nas suas respostas. Abaixo, vou desenvolver as perguntas em relação ao site que você solicitou, com detalhes específicos:

            Estrutura do site:
            Login:

            Campos: e-mail, senha
            Validações: e-mail válido (com "@" e domínio), senha não vazia
            Vetor: ao fazer login, o sistema vai verificar se o usuário existe no vetor de cadastros.
            Cadastro:

            Campos: e-mail, senha, confirmar senha, GitHub
            Validações: e-mail válido, senhas iguais
            Vetor: o sistema vai armazenar até 10 cadastros (e-mail, senha, GitHub) em um vetor.
            Página inicial:

            Após o login bem-sucedido, você será redirecionado para a página inicial, que faz uma requisição à API do GitHub, exibindo:
            Nome do repositório
            Foto do usuário
            Nome do usuário
            E-mail (se disponível)
            Paginação:

            O sistema terá botões no topo da página para navegar entre as páginas de login e cadastro.
            Após cadastro bem-sucedido, o usuário será redirecionado para a página de login.
            Após o login, o usuário será redirecionado para a página inicial.
            Tema:

            Um tema clean com a opção de alternar para o tema dark.
            Responsividade:

            O site será responsivo, ajustando-se a diferentes tamanhos de tela.
            Perguntas para aprimorar o projeto:
            Paginação dos repositórios:

            Gostaria de exibir os repositórios do GitHub em uma página paginada? Se sim, quantos repositórios deseja exibir por página?
            Botão de alternância de tema:

            O botão de alternância de tema deve ser visível em todas as páginas (login, cadastro e página inicial)?
            Feedback visual:

            Gostaria de ter mensagens de erro ou feedback visual para o usuário durante as validações (como erros de e-mail, senhas diferentes)?
            Limite de cadastros:

            Se o vetor de 10 posições estiver cheio, gostaria de exibir uma mensagem de erro informando que não é possível realizar mais cadastros?
            Comportamento da API:

            Se a API do GitHub não retornar algum dado (como e-mail), gostaria que o campo aparecesse vazio ou uma mensagem como "Não disponível"?
            Com base nessas informações, posso começar a implementar o site!

    apos apresentar o primeiro codigo: envie outra mensagem:

            nao apresentou o login nem o cadastro

    agora ele arrumou e deixou 100% funcionando


    teste_9: resultado nem satisfeito nem insastifeito, o codigo gerado cadastrou, fez o login, no entanto ao criar as mesas nao era listado para fazer as reversas, o codigo apresentou cerca de 75% de funcionamento.

    teste_10: resultado insastisfeito, nao consguiu criar o servidor que guardara as informacoes do banco de dados, o chat nao tem capacidade de fazer esse trabalho. acredito funcionaria com algunas ajustes.

    teste_12: resultado insatisfeito, nao conseguiu criar o servidor que guardara as informacoes no banco de dados, ele criava o banco de dados e tudo mais, mas quando dava inicio ao servidor, algumas coisas que foi usada no codigo nao foram pedidas, bcrypt foi usado mas nao foi avisado para ser beixado

    teste_13: resultado satisfatorio, funcionou certa de 85%, OBS: apesar de ter funcionado, as reservas nao estava funcionando 100%, elas reservavam, no entantom podia ser reservado a mesma mesa para duas pessoas ou para a mesma, tirando isso, tudo ok.



