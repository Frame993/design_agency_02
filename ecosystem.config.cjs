module.exports = {
  apps: [
    {
      name: 'brilo-api',
      script: './apps/api/dist/index.mjs',
      cwd: '/var/www/design_agency_02/apps/api',
      env: { NODE_ENV: 'production' },
      restart_delay: 3000,
      max_restarts: 10,
    },
  ],
}
