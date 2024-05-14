import type { Schema, Attribute } from '@strapi/strapi';

export interface ContributorContributor extends Schema.Component {
  collectionName: 'components_contributor_contributors';
  info: {
    displayName: 'contributor';
    icon: 'emotionUnhappy';
    description: '';
  };
  attributes: {
    person: Attribute.Component<'contributor.person', true>;
  };
}

export interface ContributorPerson extends Schema.Component {
  collectionName: 'components_contributor_people';
  info: {
    displayName: 'person';
    icon: 'emotionUnhappy';
    description: '';
  };
  attributes: {
    position: Attribute.String;
    name: Attribute.String;
  };
}

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
      'contributor.contributor': ContributorContributor;
      'contributor.person': ContributorPerson;
      'work-sections.section': WorkSectionsSection;
    }
  }
}
