# App Stores

- [AppCenter](https://appcenter.elementary.io/)
- [Snap Store](https://snapcraft.io/store)
- [Flathub](https://flathub.org/)
- [AppImageHub](https://appimage.github.io/)


## AppCenter

Já vem instalado como a loja default do elementary Os.

## Snap Store

```bash
sudo apt update
sudo apt install snapd
```

## Flathub

Origin: [Flatpak Docs](https://flatpak.org/setup/elementary%20OS/)

### Install Flatpak

```bash
sudo apt install software-properties-common --no-install-recommends
sudo add-apt-repository ppa:alexlarsson/flatpak
sudo apt update
sudo apt install flatpak
```

### Add the Flathub repository
Flathub is the best place to get Flatpak apps. To enable it, run:

```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

### Restart

To complete setup, restart your system. Now all you have to do is [install some apps](https://flathub.org/)!

Note: graphical installation of Flatpak apps may not be possible with elementary OS.


## AppImageHub

### Baixe o arquivo AppImage


### Torne-o executavel

```bash
chmod a+x *.appimage
```

### Execute

```bash
./krita.appimage
```