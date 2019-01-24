# Docker

## Docker CE

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -u -cs) stable"
sudo apt update
sudo apt install docker-ce
```

Na [documentação original](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1) para Ubuntu está $(lsb_release -cs) , mas, no Elementary, deve se usar $(lsb_release -u -cs)

Para verificar a instalação use:

```
sudo docker run hello-world
```

Esse comando faz o download de uma imagem de teste e a executa em um contêiner. Quando o contêiner é executado, ele imprime uma mensagem informativa e sai.

## Docker Compose

https://docs.docker.com/compose/install/

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Para verificar use:

```
docker-compose --version
```
