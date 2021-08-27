# COMANDOS

## mostra diretório atual
`pwd`

## vai pra pasta do usuário
`cd ~`

## mudar de diretório
`cd nomeDir`
`cd "diretorio de nome composto"` 
`cd diretorio\ de\ nome\ composto` 

## voltar um diretório
`cd ../`

## voltar para o diretório em que estava
`cd -`

## listar arquivos e pastas
`ls`
### argumentos
`-l` // mais informações
`-a` // mostrar tudo, inclusive arquivos ocultos
`-h` // mostra o tamanho dos arquivos de maneira mais clara
`-R` // mostra a árvore dos diretórios
`-S` // ordena arquivos pelo tamanho

## obter informações sobre os arquivos
`file artigo.jpg` // mostra o tipo do arquivo e informações sobre
`stat artigo.jpg` // mostra informações mais administrativas(dono, tamanho, modificações)

## criando diretórios
`mkdir site1`
`mkdir site2 site3 site4` 
`mkdir -p site5/frontend site5/backend` 
### argumentos
`-p` // parent, para criar diretórios filhos com os pais 

## criando arquivos
`touch arquivo.txt`
`touch arquivo1.txt arquivo2.md arquivo3` // "arquivo3" é um arquivo sem extensão

## alterar registro de data e hora de arquivos ou pastas
`mkdir frontend`
`touch frontend`
`mkdir style.css`
`touch style.css`

## copiando arquivos e pastas
`cp arquivo1.txt arquivo2.txt` // copiou o conteúdo de arquivo1.txt para arquivo2.txt
`cp arquivo1.txt arquivo2.txt arquivo3.txt`
// copiou o conteúdo de arquivo1.txt e arquivo2.txt para arquivo3.txt
// o último arquivo é sempre o destino para onde se irá copiar
`cp -r dir1 dir`
### argumentos
`-r` para copiar diretórios

## mover e renomear arquivos ou pastas
`mv arquivo.txt pasta1` // movendo
`mv pasta1 pasta2 pasta3 pasta` // movendo

`mv arquivo.txt file.txt` // renomeando

## remover pastas e arquivos
`rm file.txt`
`rm file1.txt file2.txt`
`rm -r site`
`rm -rf sites`
### argumentos
`-r` // recursive, para remover diretórios
`-f` // force, remover a força

## wildcards(curingas)
`mv sites/si* sites2` // mover tudo o que começa com "si" para dentro de sites2
`mv sites2/site? sites` 
// mover tudo o que começa com "site" e termina com qualquer caractere (1 caractere apenas)

## encontrar arquivos ou diretórios
`find . type f -name "*.mp4"` // buscar todos os arquivos ".mp4" no diretório atual
`find . type f -name "*d*"` // buscar todos os arquivos que tem "d" no nome, no diretório atual
`find . type d -name "*d*"` // buscar todos os diretórios que tem "d" no nome, no diretório atual

## ver conteúdo de arquivos
`less arquivo.txt` // mostrar conteúdo // apertar q para sair
`cat arquivo.txt` // apenas printar o conteúdo

## editar arquivos
`nano arquivo.txt`
`vim arquivo.txt`



