module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    {
      name: 'storybook',
      script: 'storybook.sh',
      cwd: '/usr/src/app/client',
      watch: false
    },

    {
      name: 'client',
      script: 'client.sh',
      cwd: '/usr/src/app/client',
      watch: false
    },

    {
      name: 'server',
      script: 'server/index.js',
      exec_interpreter: './node_modules/.bin/babel-watch',
      exec_mode: 'fork',
      watch: false
    }

  ]
}
