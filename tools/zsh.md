# Zsh

```bash
# Install ZSH
sudo apt install zsh -y

# Install Oh My ZSH
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Configurar plugins no arquivo ~/.zshrc

```
plugins=(
  encode64
  git
  git-flow
  httpie
  npm
  urltools
  web-search
  yarn
  dotenv
)
```

Terminal implementa notificações de conclusão do processo. Eles estão habilitados para BASH e FISH autapt-get install httpieomaticamente. Para habilitá-los para o ZSH, adicione a seguinte linha ao .zshrc:

```bash
builtin . /usr/share/io.elementary.terminal/enable-zsh-completion-notifications || builtin true
```
