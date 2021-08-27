# comandos

## criar repositório
`git init`

## fazer commit
`git add .` // preparar arquivos da pasta para o commit
`git commit -m "initial commit"` // fazer o commit com o nome que eu escolher

## acessar linha do tempo
`git log` // mensagem completa
`git log --oneline` // mensagem curta
`git log -n 5` // últimos 5 commits
`git log --since=2020-10-01` // commits desde essa data
`git log --until=2020-10-01` // commits antes dessa data
`git log --author="Santiago"` // commits por autor
`git log --grep="init"` // pesquisar pelo nome do commit

## informações sobre o repositório
`git status`

*Working Directory* **-add->** *Stage Area* **-commit->** *Local Repository*

## remover arquivo do stage-area
`git rm --cached file2.txt`
`git restore --staged README.md`

## informações sobre alterações entre o *Working Directory* e o *Local Repository*
`git diff`
`git diff --color-words`

## informações sobre alterações entre o *Stage Area* e o *Local Repository*
`git diff --staged`

## remover arquivos
`git rm file1.txt`

## renomear arquivos
`git mv file2.txt arquivo2.txt`

## mover arquivos
`git mv README.md sub/README.md`

## restaurar mudanças no *Working Directory*
`git restore arquivo.txt`

## corrigir commit
// corrigir msg
`git commit --amend -m "new message"`

## voltar no tempo
`git checkout 123abc(início do hash do commit) -- nome_do_arquivo.txt`

## remover arquivos untracked
`git clean -n` // mostrar o que o comando irá fazer
`git clean -f` // remover de fato

## revertendo um commit
`git revert HEAD~5`
`git revert 123abc(início da hash do commit)`
// vai restaurar os arquivos do commit

## controlar somente as modificações
// PS. todos os arquivos já estão no repositório local
`git commit -am "modify index"`

## ver commits
`git show 123abc(hash)`
`git show 123abc(hash) --color-words` // modificações das palavras
`git show 123abc(hash) -- path/*` // modificações de arquivos em um determinado caminho

## limpar o cash
`git rm -r --cached .` --> `git add .`
