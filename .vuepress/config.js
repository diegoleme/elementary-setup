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
        }
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
        }
      }
    },
    sidebar: [
      ['/', 'Introduction'],
      {
        title: 'Getting Started',
        collapsable: true,
        children: [
          '/getting-started/installation',
          '/getting-started/learning-the-basics',
          '/getting-started/updating',
          '/getting-started/system-preferences',
          '/getting-started/base-libs'
        ]
      },
      {
        title: 'Languages',
        collapsable: true,
        children: [
          '/languages/node',
          '/languages/ruby',
          '/languages/java'
        ]
      },
      {
        title: 'Tools',
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
        title: 'Applications',
        collapsable: true,
        children: [
          '/applications/remove-apps',
          '/applications/app-stores',
          '/applications/eddy',
          '/applications/browsers',
          '/applications/clipped',
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
          '/applications/vscode',
        ]
      }
    ]
  }
}