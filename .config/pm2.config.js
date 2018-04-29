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
      exec_mode: 'fork_mode',
      watch: false
    },

    {
      name: 'client',
      script: 'client.sh',
      cwd: '/usr/src/app/client',
      exec_mode: 'fork_mode',
      watch: false
    },

    {
      name: 'server',
      script: 'server.sh',
      exec_mode: 'fork_mode',
      watch: false
    }

  ]
}
