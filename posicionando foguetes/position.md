# Posicionamento

`- Name: position`
`-Value: static | relative | absolute | fixed`

- propriedades desbloqueadas
- top, left, right, bottom, z-index

## static
- o valor padrão dos elementos

## relative
-liberdade de posicionamento respeitando o layout já existente


## absolute
- torna disponível o fluxo de camada
- o elemento se encontra em uma camada sobre a página
- é absoluto á página
- para ser absoluto ao seu pai, o pai deve ter `position: relative`

## fixed
- elemento fica fixo na página

## element stacking
- empilhamento de elementos
- controlado pelo z-index

## flexbox
`display: flex` 
`flex-direction: row` // padrão o display flex em linha
`flex-direction: column` // padrão do html em coluna
*justify-content: alinhamento horizontal, em linha
*align-items: alinhamento vertical, em coluna

## grid
