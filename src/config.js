module.exports.config = {
  port: 3000,
  express: {
    port: 3002
  },
  listenOnStartup: false,
  defaultLanguage: {
    locale: 'en-US',
    language: 'English'
  },
  languages: [
    {
      locale: 'en-US',
      language: 'English'
    },
    {
      locale: 'es-US',
      language: 'Spanish'
    },
    {
      locale: 'ja-JP',
      language: 'Japanese'
    },
    {
      locale: 'zh-CN',
      language: 'Mandarin'
    }
  ],
  robotjs: {
    // optional command to cleanup after paste
    // shift + alt + f = auto-formatting in VS Code on Windows
    // cleanup: {
    //   first: 'f',
    //   second: ['shift', 'alt']
    // }
  }
}
