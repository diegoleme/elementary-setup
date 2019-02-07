# Bibliotecas básicas

```bash
sudo apt install adb \
                 apt-transport-https \ 
                 build-essential \
                 curl \
                 libasound2 \
                 libnss3 \
                 libgconf-2-4 \
                 libgtk2.0-0 \
                 libnotify-dev \
                 libxml2-dev \
                 libxss1 \
                 software-properties-common \
                 wget \
                 xvfb \
                 zlib1g-dev \
                 -y
```

https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```