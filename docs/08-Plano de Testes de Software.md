# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|        Caso de Teste        |                    CT-01 – Cadastro de Usuário                     |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-001 A aplicação deve permitir que o usuário se cadastre, faça login, edite seu e-mail, senha e foto, apague sua conta e recupere sua senha. |
|     Pré-requisitos          | - O aplicativo deve estar instalado e funcionando corretamente. |
|     Objetivo do Teste       | Verificar se o sistema permite o cadastro do usuário. |
|             Passos          | 1. Iniciar o aplicativo <br> 2. Acessar a tela de cadastro <br> 3. Preencher os campos de cadastro 'Nome', 'E-mail', 'Senha' e 'Confirmar sua senha' <br> 4. Clico em 'Criar Conta' |
|       Critérios de Êxito    | - O sistema exibe tela de cadastro. <br> - Os usuários podem inserir suas informações e fazer cadastro com sucesso. |

|        Caso de Teste        |                    CT-02 – Login de Usuário                     |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-001 A aplicação deve permitir que o usuário se cadastre, faça login, edite seu e-mail, senha e foto, apague sua conta e recupere sua senha. |
|     Pré-requisitos          | - O usuário deve estar cadastrado no sistema. |
|     Objetivo do Teste       | Verificar se o sistema permite o login do usuário. |
|             Passos          | 1. Iniciar o aplicativo <br> 2. Acessar a tela de login <br> 3. Preencher os campos de login 'E-mail' e 'Senha' <br> 4. Clico em 'Fazer login' |
|       Critérios de Êxito    | - O sistema exibe tela de login. <br> - Os usuários podem inserir suas credenciais e fazer login com sucesso. |

|        Caso de Teste        |                    CT-03 – Adição de Plantas                   |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-002 A aplicação deve permitir que o usuário adicione plantas de forma personalizada ou utilizando uma planta pré-cadastrada pelo sistema. RF-005 A aplicação deve exibir todas as plantas adicionadas pelo usuário.|
|     Pré-requisitos          | - O usuário deve estar logado no sistema. <br> - O usuário deve estar na tela inicial. |
|     Objetivo do Teste       | Verificar funcionalidades de adição de plantas. |
|             Passos          | 1. Clicar em 'Minhas Plantas' na tela inicial <br> 2. Clicar em 'Adicionar Planta' <br> 3. Selecionar uma planta pré-cadastrada ou personalizar uma planta <br> 4. Visualizar os detalhes da planta selecionada <br> 5. Clicar em 'Cadastrar' <br> 6. Preencher o nome da planta <br> 7. Clicar em 'Próximo' <br> 8. Preencher 'Definir uma boa descrição para a planta' <br> 9. Clicar em 'Próximo' <br> 10. Selecionar a frequência das tarefas de rega, adubo e vaso em dias para a planta <br> 11. Clicar em 'Próximo' <br> 12. Visualizar o modal de sucesso no cadastro da planta
|       Critérios de Êxito    | - Os usuários devem visualizar a planta cadastrada em 'Minhas Plantas'. |

|        Caso de Teste        |                    CT-04 – Exibição de Artigos                   |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-007 A aplicação deve disponibilizar artigos variados sobre plantas. |
|     Pré-requisitos          | - O usuário deve estar logado no sistema. <br> - O usuário deve estar na tela inicial. |
|     Objetivo do Teste       | Verificar a funcionalidade de exibição de artigos. |
|             Passos          | 1. Clicar em 'Guia Verde' na tela inicial <br> 2. Visualizar os artigos em destaque relacionados a plantas |
|       Critérios de Êxito    | - Os artigos em destaque relacionados a plantas devem ser exibidos corretamente. |


|        Caso de Teste        |                    CT-05 – Edição de Plantas                   |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-002 A aplicação deve permitir que o usuário adicione plantas de forma personalizada ou utilizando uma planta pré-cadastrada pelo sistema. RF-005 A aplicação deve exibir todas as plantas adicionadas pelo usuário. RF-003 A aplicação deve exibir informações gerais sobre as plantas pré-cadastradas no sistema, incluindo: nome, descrição, foto, frequência ideal de rega, fertilização e troca de vaso. |
|     Pré-requisitos          | - O usuário deve estar logado no sistema. <br> - Deve haver pelo menos uma planta cadastrada. |
|     Objetivo do Teste       | Verificar funcionalidades de edição de plantas. |
|             Passos          | 1. Acessar 'Minhas Plantas' no aplicativo <br> 2. Selecionar a planta pré-cadastrada <br> 3. Clicar no ícone de edição <br> 4. Preencher o nome da planta <br> 5. Clicar em 'Próximo' <br> 6. Preencher 'Definir uma boa descrição para a planta' <br> 7. Clicar em 'Próximo' <br> 8. Selecionar a frequência das tarefas de rega, adubo e vaso em dias para a planta <br> 9. Clicar em 'Próximo' <br> 10. Visualizar o modal com mensagem de sucesso na edição da planta |
|       Critérios de Êxito    | - As alterações feitas na planta devem ser refletidas em 'Minhas Plantas'. |

|        Caso de Teste        |                    CT-06 – Validação de Futuras Tarefas                   |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-006 A aplicação deve exibir todas as futuras tarefas de cada planta adicionada pelo usuário. |
|     Pré-requisitos          | - O usuário deve estar logado no sistema. <br> - Deve haver pelo menos uma planta cadastrada. <br> - O usuário deve estar na tela inicial. |
|     Objetivo do Teste       | Verificar a funcionalidade de visualização de futuras tarefas. |
|             Passos          | 1. Clicar em 'Futuras Tarefas' na tela inicial <br> 2. Verificar se as próximas tarefas das plantas pré-cadastradas aparecem, ordenadas da mais próxima <br> 3. Verificar se a tarefa referente à planta cadastrada aparece na seção por planta e por período |
|       Critérios de Êxito    | - As tarefas futuras referentes à planta cadastrada devem aparecer na seção correspondente. |

|        Caso de Teste        |                    CT-07 – Conclusão de Tarefa                   |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-006 A aplicação deve exibir todas as futuras tarefas de cada planta adicionada pelo usuário. |
|     Pré-requisitos          | - O usuário deve estar logado no sistema. <br> - Deve haver pelo menos uma planta cadastrada com uma tarefa futura. <br> - O usuário deve estar na tela de 'Futuras Tarefas'. |
|     Objetivo do Teste       | Verificar a funcionalidade de conclusão de tarefa. |
|             Passos          | 1. Clicar na planta na tela de 'Futuras Tarefas' <br> 2. Visualizar as próximas tarefas da planta <br> 3. Marcar uma tarefa como concluída usando o switch <br> 4. Confirmar a conclusão da tarefa no modal 'Deseja mesmo concluir (NomeDaTarefa)?' clicando em 'Confirmar' |
|       Critérios de Êxito    | - A tarefa concluída não deve mais aparecer em 'Futuras Tarefas'. |

|        Caso de Teste        |                    CT-08 – Edição de Senha                   |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-001 A aplicação deve permitir que o usuário se cadastre, faça login, edite seu e-mail, senha e foto, apague sua conta e recupere sua senha. |
|     Pré-requisitos          | - O usuário deve estar logado no sistema. <br> - O usuário deve estar na tela inicial. |
|     Objetivo do Teste       | Verificar a funcionalidade de edição de senha. |
|             Passos          | 1. Clicar em 'Configurações' na tela inicial <br> 2. Clicar em 'Editar Senha' <br> 3. Preencher os campos 'Senha Atual', 'Nova Senha' e 'Confirme Nova Senha' <br> 4. Clicar em 'Atualizar' |
|       Critérios de Êxito    | - A senha do usuário deve ser atualizada com sucesso. |

|        Caso de Teste        |                    CT-09 – Edição de Perfil                   |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-001 A aplicação deve permitir que o usuário se cadastre, faça login, edite seu e-mail, senha e foto, apague sua conta e recupere sua senha. |
|     Pré-requisitos          | - O usuário deve estar logado no sistema. <br> - O usuário deve estar na tela inicial. |
|     Objetivo do Teste       | Verificar a funcionalidade de edição de perfil. |
|             Passos          | 1. Clicar em 'Configurações' na tela inicial <br> 2. Clicar em 'Editar Perfil' <br> 3. Alterar a foto, se desejado <br> 4. Preencher os campos 'Nome' e 'E-mail' <br> 5. Clicar em 'Atualizar' |
|       Critérios de Êxito    | - As alterações feitas no perfil do usuário devem ser refletidas em 'Configurações'. |

|        Caso de Teste        |                    CT-10 – Configuração de Lembretes                   |
|-----------------------------|-----------------------------------------------------------------|
|   Requisito Associado       | RF-004 A aplicação deve disponibilizar para o usuário a opção de ativar ou desativar o recebimento de notificações de rega, fertilização e troca de vaso em um horário definido por ele. |
|     Pré-requisitos          | - O usuário deve estar logado no sistema. <br> - O usuário deve estar na tela inicial. |
|     Objetivo do Teste       | Verificar a funcionalidade de configuração de lembretes. |
|             Passos          | 1. Clicar em 'Configurações' na tela inicial <br> 2. Clicar em 'Lembretes' <br> 3. Ativar os lembretes usando o switch 'Ative ou desative os lembretes' <br> 4. Selecionar um horário para ser lembrado das tarefas nos campos de seleção de tempo hora e minuto <br> 5. Clicar em 'Atualizar' |
|       Critérios de Êxito    | - As configurações de lembretes devem ser atualizadas com sucesso. |




