let dictionary = {
  'pt-BR': {
    'introduction': 'Introdução',
    'getting-started': 'Começando',
    'languages': 'Linguagens',
    'tools': 'Ferramentas',
    'applications': 'Aplicativos'
  },
  'en-US': {
    'introduction': 'Introduction',
    'getting-started': 'Getting Started',
    'languages': 'Languages',
    'tools': 'Tools',
    'applications': 'Applications'
  }
}


let sidebar = function (lang = 'pt-BR') {
  let dl = dictionary[lang]

  return [
    ['/', dl['introduction']],
    {
      title: dl['getting-started'],
      collapsable: true,
      children: [
        '/getting-started/creating-an-install-drive',
        '/getting-started/installation',
        '/getting-started/learning-the-basics',
        '/getting-started/updating',
        '/getting-started/system-preferences',
        '/getting-started/base-libs'
      ]
    },
    {
      title: dl['languages'],
      collapsable: true,
      children: [
        '/languages/node',
        '/languages/ruby',
        '/languages/java'
      ]
    },
    {
      title: dl['tools'],
      collapsable: true,
      children: [
        '/tools/git',
        '/tools/zsh',
        '/tools/docker',
        '/tools/aws-cli',
        '/tools/http-server',
        '/tools/httpie',
        '/tools/image-optim',
        '/tools/tree'
      ]
    },
    {
      title: dl['applications'],
      collapsable: true,
      children: [
        '/applications/remove-apps',
        '/applications/app-stores',
        '/applications/eddy',
        '/applications/browsers',
        '/applications/formatter',
        '/applications/gimp',
        '/applications/google-docs',
        '/applications/gravit-designer',
        '/applications/inkscape',
        '/applications/krita',
        '/applications/peek',
        '/applications/postman',
        '/applications/simplenote',
        '/applications/slack',
        '/applications/spotify',
        '/applications/steam',
        '/applications/virtualbox',
        '/applications/vscode'
      ]
    }
  ]
}

module.exports = {
  base: '/elementary-setup/',
  locales: {
    '/': {
      lang: 'pt-BR', // this will be set as the lang attribute on <html>
      title: 'Guia de configuração do elementary OS',
      description: 'Passo a passo para configuração do elementary OS',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Elementary OS Setup Guide',
      description: 'Step by Step for elementary OS Configuration',
    }
  },
	themeConfig: {
    locales: {
      '/': {
        selectText: 'Idiomas',
        label: 'Português',
        editLinkText: 'Edite essa página no GitHub',
        serviceWorker: {
          updatePopup: {
            message: "Novo conteudo está disponivel.",
            buttonText: "Atualizar"
          }
        },
        sidebar: sidebar()
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: sidebar('en-US')
      }
    }
  }
}