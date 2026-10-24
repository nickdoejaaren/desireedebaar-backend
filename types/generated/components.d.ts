import type { Schema, Struct } from '@strapi/strapi';

export interface AboutOtherLink extends Struct.ComponentSchema {
  collectionName: 'components_about_other_links';
  info: {
    displayName: 'Other Link';
    icon: 'link';
  };
  attributes: {
    Title: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface AboutPublication extends Struct.ComponentSchema {
  collectionName: 'components_about_publications';
  info: {
    displayName: 'Publication';
    icon: 'book';
  };
  attributes: {
    File: Schema.Attribute.Media<'files'>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_about_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    Title: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface ThemeColorTheme extends Struct.ComponentSchema {
  collectionName: 'components_theme_color_themes';
  info: {
    description: '';
    displayName: 'Color theme';
    icon: 'brush';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    foreground: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.other-link': AboutOtherLink;
      'about.publication': AboutPublication;
      'about.social-link': AboutSocialLink;
      'theme.color-theme': ThemeColorTheme;
    }
  }
}
