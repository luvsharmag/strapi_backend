import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageAbout extends Struct.ComponentSchema {
  collectionName: 'components_homepage_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageBlog extends Struct.ComponentSchema {
  collectionName: 'components_homepage_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface HomepageContact extends Struct.ComponentSchema {
  collectionName: 'components_homepage_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Email: Schema.Attribute.Email;
    nothing: Schema.Attribute.String;
    Number: Schema.Attribute.String;
    SocialMediaLinks: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface HomepageFooter extends Struct.ComponentSchema {
  collectionName: 'components_homepage_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Links: Schema.Attribute.JSON;
    Text: Schema.Attribute.String;
  };
}

export interface HomepageNavLink extends Struct.ComponentSchema {
  collectionName: 'components_homepage_nav_links';
  info: {
    description: '';
    displayName: 'NavLink';
  };
  attributes: {
    Link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface HomepagePrivacy extends Struct.ComponentSchema {
  collectionName: 'components_homepage_privacies';
  info: {
    displayName: 'privacy';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
  };
}

export interface HomepageTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Role: Schema.Attribute.String;
    Testimonial: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.about': HomepageAbout;
      'homepage.blog': HomepageBlog;
      'homepage.contact': HomepageContact;
      'homepage.footer': HomepageFooter;
      'homepage.nav-link': HomepageNavLink;
      'homepage.privacy': HomepagePrivacy;
      'homepage.testimonial': HomepageTestimonial;
    }
  }
}
