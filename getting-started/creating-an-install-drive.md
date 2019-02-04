# Criando um drive de instalação

> Baseado na [documentação oficial do elementary OS](https://elementary.io/docs/installation)

## Baixar elementary OS

Se você ainda não o fez, precisará [baixar o elementary OS](https://nyc3.dl.elementary.io/download/MTU0OTA0NTExOA==/elementaryos-5.0-stable.20181016.iso). 

Você precisará copiar o arquivo ISO baixado para uma unidade flash USB com pelo menos 2 GB de espaço livre. De acordo com seu sistema operacional atual, siga as instruções abaixo:

## Windows

### Verificando a imagem e montando o drive com o Rufus

Você precisará de um programa chamado Rufus. [Baixar o Rufus](https://rufus.akeo.ie/).

1. Abra o Rufus;
2. Insira o seu drive USB e selecione-o na lista `Device`;
3. Selecione `Disk or ISO image` na lista `Boot selection`;
4. Clique em `SELECT` para escolher o arquivo ISO que você baixou anteriormente.
5. Nós geramos uma soma de verificação (ou soma de hash) para imagens do elementary OS para que possamos verificar o arquivo baixado. Isso garante que você tenha recebido o download completo e que sua imagem de instalação não esteja corrompida. Clique no ícone da setinha de verificação ao lado de `SELECT` e verifique se o texto ao lado de `SHA256` corresponde ao seguinte hash:

```
a8c7b8c54aeb0889bb3245356ffcd95b77e9835ffb5ac56376a3b627c3e1950f
```

6. Se os hashes coincidirem, clique em "START" e espere o processo terminar.

## MacOs

### Verifique seu download

Verificar seu download é uma etapa importante, mas opcional. 

Nós geramos uma soma de verificação (ou soma de hash) para imagens do elementary OS para que possamos verificar o arquivo baixado. Isso garante que você tenha recebido o download completo e que sua imagem de instalação não esteja corrompida.

Executando o seguinte comando no seu Terminal:

```bash
# Esse comando supõe que o arquivo .iso esteja na pasta Downloads. 
# Caso você tenha feito o download em outro lugar, 
# especifique o caminho correto para o arquivo.
shasum -a 256 ~/Downloads/elementaryos-5.0-stable.20181016.iso
```

Deve produzir a saída:

```
a8c7b8c54aeb0889bb3245356ffcd95b77e9835ffb5ac56376a3b627c3e1950f
```

Se os hashes coincidirem, o arquivo não está corrompido.

### Montando o drive com o Etcher

Você precisará de um programa chamado Etcher. [Baixar o Etcher](https://www.etcher.io/).

1. Insira o seu drive USB
2. Abra o Etcher
3. Selecioneo arquivo ISO que você baixou anteriormente usando o botão `Select image`.
3. Etcher deve detectar automaticamente o seu drive USB, mas verifique se ele selecionou corretamente.
4. Comece o processo clicando no botão `Flash!` e espere o processo terminar.


## Ubuntu