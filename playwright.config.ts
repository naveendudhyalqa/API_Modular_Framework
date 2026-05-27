import { defineConfig } from '@playwright/test';
import './src/config/env';

export default defineConfig({

  testDir: './src/tests',

  fullyParallel: false,

  reporter: [

    ['html', {
      outputFolder: 'src/reports/html-report',
      open: 'never'
    }],

    ['list']

  ],

  use: {
    baseURL: process.env.BASE_URL
  }

});