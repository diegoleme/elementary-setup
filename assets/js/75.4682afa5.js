(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{307:function(e,a,s){"use strict";s.r(a);var t=s(42),r=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),s("h2",{attrs:{id:"docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-ce","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker CE")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo apt-key fingerprint 0EBFCD88\nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -u -cs) stable"\nsudo apt update\nsudo apt install docker-ce\n')])])]),s("p",[e._v("Na "),s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentação original"),s("OutboundLink")],1),e._v(" para Ubuntu está $(lsb_release -cs) , mas, no Elementary, deve se usar $(lsb_release -u -cs)")]),e._v(" "),s("p",[e._v("Para verificar a instalação use:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo docker run hello-world\n")])])]),s("p",[e._v("Esse comando faz o download de uma imagem de teste e a executa em um contêiner. Quando o contêiner é executado, ele imprime uma mensagem informativa e sai.")]),e._v(" "),s("h2",{attrs:{id:"docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Compose")]),e._v(" "),s("p",[e._v("https://docs.docker.com/compose/install/")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\n')])])]),s("p",[e._v("Para verificar use:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker-compose --version\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);