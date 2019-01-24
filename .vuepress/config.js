module.exports = {
	title: 'Elementary OS Setup Guide',
  description: 'Step by step to config elementary Os by Diego Leme',
  base: '/elementary-setup/',
	themeConfig: {
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