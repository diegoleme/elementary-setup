# Base libs

```bash
sudo apt install apt-transport-https \
                 ca-certificates \
                 curl \
                 wget \
                 software-properties-common \
                 build-essential \
                 gcc \
                 g++ \
                 make \
                 libxml2-dev \
                 zlib1g-dev \
                 xvfb \
                 libgtk2.0-0 \
                 libnotify-dev \
                 libgconf-2-4 \
                 libnss3 \
                 libxss1 \
                 libasound2 \
                 -y
```

https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```