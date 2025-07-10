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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.other-link': AboutOtherLink;
      'about.publication': AboutPublication;
      'about.social-link': AboutSocialLink;
    }
  }
}
