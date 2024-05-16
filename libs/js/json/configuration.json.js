Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Atualização de Valores de Imóveis V1-0","publishDate":"16/05/2024 16:50:12","pages":[{"id":"75a1b931-09bc-49a2-a87b-aaee9cac8247","name":"Atualização de Valores no SPIUNET","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:9pt;font-weight:normal;font-style:normal;\">Atualiza&ccedil;&atilde;o de valores/dados de im&oacute;veis da Uni&atilde;o</span></p>","mainProcessId":"eb98cd66-2a07-4ba9-aa3f-fe56d35fc794","version":"1.0","author":"CEPRO/CGGES/DEGOV/SPU/MGI","image":"files\\diagrams\\Atualizacao de Valores no SPIUNET.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"197d81ea-af21-4a4a-9aab-1976532c0dde","name":"Atualização de Valores/Dados de Imóveis da União","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":210.0}],"radius":0.0,"height":804.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"a67d5de1-a25e-48a2-9c89-b658022f82cc","name":"Acessar o sistema SPIUnet","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.1. Acessar o site do SPIUnet: http://spiunet.spu.planejamento.gov.br/Default.asp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":472.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"f745d696-8319-4dab-bfae-f69c239893d6","name":"Inserir login e senha","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.2. Realizar login com CPF e senha;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":602.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"56172116-695a-4409-918a-25d4164f5062","name":"Acessar opção: Cadastramento » Imóvel","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.3. Seguir o caminho seguinte na tela inicial do SPIUnet: Cadastramento &rarr; Im&oacute;vel;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":732.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"5447d084-7e70-4271-ae58-78e5a7be8183","name":"Inserir RIP do Imóvel","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.4. Inserir o RIP do im&oacute;vel desejado;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":862.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"e65d9dcd-6358-4140-a50b-a5375b4ac9db","name":"Apagar campo <Valor m2 (R$)>","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.5. Apagar o campo &ldquo;Valor m&sup2; (R$)&ldquo; (deixar em branco);</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":992.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"d37dd751-a24a-4778-961d-641b84c31c4e","name":"Preencher campo <Valor do Terreno (R$)>","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.6. Preencher o campo &ldquo;Valor do Terreno (R$)&rdquo; de acordo com o valor fornecido pela avalia&ccedil;&atilde;o do im&oacute;vel;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1122.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"326ebb51-9976-4fd3-841e-4fa2a16549a0","name":"Preencher campo <Data Avaliação>","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.7. Em seguida, preencher o campo &ldquo;Data Avalia&ccedil;&atilde;o&rdquo; com a data de elabora&ccedil;&atilde;o do laudo de avalia&ccedil;&atilde;o atual;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1252.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"fc3d8405-ef98-42d6-ae5e-8231d4161a3e","name":"Nível de Rigor: Rigorosa","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.8. Caso a atualiza&ccedil;&atilde;o decorra de um laudo de avalia&ccedil;&atilde;o, o campo &ldquo;N&iacute;vel de Rigor&rdquo; deve ser alterado para &ldquo;Rigorosa (6 meses)&rdquo;, caso contr&aacute;rio, dever&aacute; constar nesse campo op&ccedil;&atilde;o &ldquo;Estimativa de Valor (24 meses)&rdquo;.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1482.0,"y":272.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"f3cd4caa-8742-46b7-89bb-88bf5bcfae94","name":"Nível de Rigor: Estimativa de valor","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.8. Caso a atualiza&ccedil;&atilde;o decorra de um laudo de avalia&ccedil;&atilde;o, o campo &ldquo;N&iacute;vel de Rigor&rdquo; deve ser alterado para &ldquo;Rigorosa (6 meses)&rdquo;, caso contr&aacute;rio, dever&aacute; constar nesse campo a op&ccedil;&atilde;o &ldquo;Estimativa de Valor (24 meses)&rdquo;.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1482.0,"y":482.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"fad32e26-3885-4369-982c-b4d0997f8b0d","name":"Preencher campo <Observação>","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.9. No campo &ldquo;Observa&ccedil;&atilde;o&rdquo;, o servidor deve indicar qual o tipo de laudo elaborado, o motivo deste trabalho, o n&uacute;mero do documento SEI referente &agrave; avalia&ccedil;&atilde;o e seu respectivo n&uacute;mero de processo SEI, ou seja, devem ser informadas as principais informa&ccedil;&otilde;es acerca dessa avalia&ccedil;&atilde;o.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1692.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"9cac6c09-2187-43d9-b3d8-130ee665b6bf","name":"Finalizar, clicando no botão \"Avançar\"","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.10. Para finalizar, deve-se clicar no bot&atilde;o &ldquo;Avan&ccedil;ar&rdquo;.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1822.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"42f11567-8b6c-4165-b630-17ce78cb1c5e","name":"Gravar, clicando no botão \"Gravar\"","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.11. Em seguida, clicar no bot&atilde;o &ldquo;Gravar&rdquo;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1952.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"4d344156-7ffd-4722-bce3-dfc214d89f97","name":"Encerrar 1ª etapa, clicando no botão \"Menu\"\u000b","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">1.12. Por fim, clicar no bot&atilde;o &ldquo;Menu&rdquo; que se encontra no canto superior direito da tela.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2084.0,"y":372.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"36a5983a-cad7-4a83-9791-96064661a952","name":"Acessar opção: Cadastramento » Utilização","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.1. Seguir o caminho seguinte: Cadastramento &rarr; Utiliza&ccedil;&atilde;o;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":472.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"0abb7ee9-6b63-40d3-86ba-78ff90d1c022","name":"Inserir RIP Utilização","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.2. Inserir o RIP de utiliza&ccedil;&atilde;o desejado;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":612.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"da99ddbd-57e8-4e4f-9e5d-a3e25178fcd7","name":"Apagar o campo <CUB>","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.3. Caso o im&oacute;vel contenha benfeitoria, apagar o campo &ldquo;CUB&rdquo; (deixar em branco).</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":752.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"a4e40f21-a8eb-47fd-ad2d-3a6967367285","name":"Preencher campo <Data Avaliação>","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.4. Preencher o campo &ldquo;Data Avalia&ccedil;&atilde;o&rdquo; com a data de elabora&ccedil;&atilde;o do laudo de avalia&ccedil;&atilde;o (a mesma que foi inserida na atualiza&ccedil;&atilde;o do RIP Im&oacute;vel);</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":892.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"8a724104-4740-4177-82c8-9c01d9c8e6f6","name":"Preencher Nível de Rigor","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.5. Preencher o campo &ldquo;N&iacute;vel de Rigor&rdquo; com a mesma op&ccedil;&atilde;o selecionada na atualiza&ccedil;&atilde;o do RIP Im&oacute;vel;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1032.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"f3c23b16-e9aa-474b-904e-923e3867acb6","name":"Preencher campo <Observação>","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.6. No campo &ldquo;Observa&ccedil;&atilde;o&rdquo;, o servidor deve indicar qual o tipo de laudo elaborado, o motivo deste trabalho, o n&uacute;mero do documento SEI referente &agrave; avalia&ccedil;&atilde;o e seu respectivo n&uacute;mero de processo SEI, ou seja, devem ser informadas as principais informa&ccedil;&otilde;es acerca dessa avalia&ccedil;&atilde;o;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1172.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"b0a56c55-9e19-4fe9-bb83-3861fcadc775","name":"Clicar no botão \"Avançar\"","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.7. Para finalizar, deve-se clicar no bot&atilde;o &ldquo;Avan&ccedil;ar&rdquo;.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1312.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"fbc10ce1-d37d-49c3-b396-1c014d20c3ea","name":"Novamente, clicar no botão \"Avançar\"","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.8. Novamente, clicar no bot&atilde;o &ldquo;Avan&ccedil;ar&rdquo;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1452.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"c337bf6c-e691-4171-b8c3-3f334beb5e84","name":"Clicar no botão \"Gravar\"","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.9. Em seguida, clicar no bot&atilde;o &ldquo;Gravar&rdquo;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1592.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"3f24cdf9-81fb-4b11-bbc3-2f616f87a878","name":"Encerrar 2ª etapa, clicando no botão \"Menu\"","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">2.10. Por fim, clicar no bot&atilde;o &ldquo;Menu&rdquo; que se encontra no canto superior direito da tela.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1732.0,"y":772.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]}]}],"subPages":[]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Responsável","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"Ir para Matriz","calledBy":"Chamada por","attachmentsTooltip":"Exibir anexos","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Mostrar tudo","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Início","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","viewDetails":"Ver detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"A página não pode ser exibida","resourceNotFound":"O recurso solicitado não foi encontrado:","applyTheme":"Aplicando novo tema","showMore":"Mostrar mais","showLess":"Mostrar menos","hideDescription":"Ocultar descrição","showDescription":"Mostrar descrição","presentationActionLink":"Exibir ações de apresentação","goToLinkThrow":"Ir para o evento de destino","goToLinkCatch":"Ir para o evento de origem","goToSubProcess":"Ir para o subprocesso","viewByList":"Lista de processos","viewByTree":"Hierarquia de processos","diagramList":"Lista de processos","folderTree":"Hierarquia de processos"},"searchMap":[{"containerId":"75a1b931-09bc-49a2-a87b-aaee9cac8247","containerName":"Atualização de Valores no SPIUNET","isSubprocess":false,"elements":[{"id":"0547f9f6-6a27-4ef9-bf1c-78c8b5f1e910"},{"id":"cfa06752-9db2-4166-ab84-355a06405a15"},{"id":"662782f4-6fa3-4aa9-b9cf-34f743c69e1e"},{"id":"197d81ea-af21-4a4a-9aab-1976532c0dde","value":"Atualização de Valores/Dados de Imóveis da União"},{"id":"a1ad80b6-1c1b-4cf2-a536-20d65ec4a233","value":"Servidor Avaliador"},{"id":"a67d5de1-a25e-48a2-9c89-b658022f82cc","value":"Acessar o sistema SPIUnet"},{"id":"f745d696-8319-4dab-bfae-f69c239893d6","value":"Inserir login e senha"},{"id":"56172116-695a-4409-918a-25d4164f5062","value":"Acessar opção: Cadastramento » Imóvel"},{"id":"5447d084-7e70-4271-ae58-78e5a7be8183","value":"Inserir RIP do Imóvel"},{"id":"e65d9dcd-6358-4140-a50b-a5375b4ac9db","value":"Apagar campo <Valor m2 (R$)>"},{"id":"d37dd751-a24a-4778-961d-641b84c31c4e","value":"Preencher campo <Valor do Terreno (R$)>"},{"id":"326ebb51-9976-4fd3-841e-4fa2a16549a0","value":"Preencher campo <Data Avaliação>"},{"id":"aefc9440-0f06-4236-8468-9fdf41e26f62","value":"Laudo de Avaliação?"},{"id":"fc3d8405-ef98-42d6-ae5e-8231d4161a3e","value":"Nível de Rigor: Rigorosa"},{"id":"fad32e26-3885-4369-982c-b4d0997f8b0d","value":"Preencher campo <Observação>"},{"id":"f3cd4caa-8742-46b7-89bb-88bf5bcfae94","value":"Nível de Rigor: Estimativa de valor"},{"id":"9cac6c09-2187-43d9-b3d8-130ee665b6bf","value":"Finalizar, clicando no botão \"Avançar\""},{"id":"42f11567-8b6c-4165-b630-17ce78cb1c5e","value":"Gravar, clicando no botão \"Gravar\""},{"id":"36a5983a-cad7-4a83-9791-96064661a952","value":"Acessar opção: Cadastramento » Utilização"},{"id":"0abb7ee9-6b63-40d3-86ba-78ff90d1c022","value":"Inserir RIP Utilização"},{"id":"da99ddbd-57e8-4e4f-9e5d-a3e25178fcd7","value":"Apagar o campo <CUB>"},{"id":"a4e40f21-a8eb-47fd-ad2d-3a6967367285","value":"Preencher campo <Data Avaliação>"},{"id":"39c4a55c-6f99-4fd3-8c62-54e28ad20d77","value":"Necessidade de atualização de Valores/Dados"},{"id":"f3c23b16-e9aa-474b-904e-923e3867acb6","value":"Preencher campo <Observação>"},{"id":"8a724104-4740-4177-82c8-9c01d9c8e6f6","value":"Preencher Nível de Rigor"},{"id":"b0a56c55-9e19-4fe9-bb83-3861fcadc775","value":"Clicar no botão \"Avançar\""},{"id":"c337bf6c-e691-4171-b8c3-3f334beb5e84","value":"Clicar no botão \"Gravar\""},{"id":"3f24cdf9-81fb-4b11-bbc3-2f616f87a878","value":"Encerrar 2ª etapa, clicando no botão \"Menu\""},{"id":"9073c405-3d1a-4bbc-83f5-2b63acfbb9a3","value":"Atualização RIP utilização realizada"},{"id":"4d344156-7ffd-4722-bce3-dfc214d89f97","value":"Encerrar 1ª etapa, clicando no botão \"Menu\"\n"},{"id":"fbc10ce1-d37d-49c3-b396-1c014d20c3ea","value":"Novamente, clicar no botão \"Avançar\""},{"id":"ca9a5260-ae4f-4365-b425-0a6d6c9048f2","value":"Atualização RIP imóvel realizada"},{"id":"b42711df-a97f-4e73-b7c3-f6312f3f3efd","value":""},{"id":"1a3e62e4-4d92-4e48-bda3-e69249e3b878","value":"Tem mais utilizações?"},{"id":"a8e84723-2f8a-4733-834f-3bac08bd2380","value":""},{"id":"94a1f9d4-f941-4ad0-92d2-93b60c1be2c7"},{"id":"7ad7e08d-8ab4-405a-8aa6-41dbc4017b8b"},{"id":"357aff4e-0ec2-4cc5-9e93-30007fbd7b71"},{"id":"d3517cc5-c5f7-4741-b299-45ba78b9da14"},{"id":"866c6962-bf65-4da9-8b76-a85898009926"},{"id":"885cc757-a25f-4ca2-ad57-113bbd0f0ce7"},{"id":"2f791b9e-7db2-4fea-bbe8-4eb74ac6debf"},{"id":"0b7379b5-36e8-4bdc-8d27-03f84abf61c3"},{"id":"f5a078e4-5bca-4b18-8446-48f21cc42ead"},{"id":"a2da8e21-e021-45c7-8a1e-d74a490a1047"},{"id":"c09f9eeb-0738-4ec7-8bad-98f0615de13d"},{"id":"22c0d7bf-4874-44f0-a4f9-75ec7f43ba00"},{"id":"cce4289a-3ed3-46b0-99b7-553d09eafcf7"},{"id":"628b1533-8f1d-4367-9141-a0f9ca7dd746"},{"id":"4dd1adba-f614-4d73-b0a5-9c01feb0b481"},{"id":"62eb8316-c9b7-4822-bb26-76950408729c"},{"id":"e25ae4db-0844-4c36-a34c-269ca28d058b"},{"id":"a5664451-50f5-4c61-926e-aecafcb7ef19"},{"id":"05c72e53-2783-4b0c-a694-55f372a0c725"},{"id":"f8e543e3-7b37-4699-ace4-42949186b36c"},{"id":"ac13d68b-2e56-4098-b566-e2d0634e0b73"},{"id":"dff50a83-83ab-4c19-b019-028ab8d1f841"},{"id":"907af331-efc9-4754-8c1d-227bf761ac1d"},{"id":"bc538241-5148-40bb-acdc-b7d6dd680f8a"},{"id":"57da48de-8ded-4cf0-9b4d-4dd1db3f6602"}]}]}