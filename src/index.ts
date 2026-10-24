import type { Core } from '@strapi/strapi';

// The themes that were hardcoded in the frontend, used to pre-fill Theme settings once
const DEFAULT_THEMES = [
  { name: 'Light', background: '#D5D3D3', foreground: '#242222' },
  { name: 'Dark', background: '#242222', foreground: '#D5D3D3' },
  { name: 'Pink', background: '#FCE1E1', foreground: '#242222' },
  { name: 'Sand', background: '#DBD4BF', foreground: '#6C1900' },
];

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const themeSettings = strapi.documents('api::theme-setting.theme-setting');

    // Only seeds an empty Theme settings, never overwrites the client's edits
    if (!(await themeSettings.findFirst())) {
      await themeSettings.create({
        data: { themes: DEFAULT_THEMES },
        status: 'published',
      });
      strapi.log.info('Theme settings pre-filled with the default themes');
    }
  },
};
