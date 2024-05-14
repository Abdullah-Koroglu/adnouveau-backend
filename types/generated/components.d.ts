import type { Schema, Attribute } from '@strapi/strapi';

export interface WorkSectionsSection extends Schema.Component {
  collectionName: 'components_work_sections_sections';
  info: {
    displayName: 'Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    type: Attribute.Enumeration<
      ['text-altta', 'text-sagda', 'text-solda', 'text-sadece', 'image-sadece']
    >;
    image: Attribute.Media;
    video: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'work-sections.section': WorkSectionsSection;
    }
  }
}
