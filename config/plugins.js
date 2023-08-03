module.exports = {
  'preview-button': {
    enabled: true,
    config: {
      contentTypes: [
				{
          uid: 'api::page.page',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'page',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/{slug}',
          },
        },
				{
          uid: 'api::about.about',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'about',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/{slug}',
          },
        },
				{
          uid: 'api::agenda-overview.agenda-overview',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'agenda',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/{slug}',
          },
        },
				{
          uid: 'api::community.community',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'community',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/{slug}',
          },
        },
				{
          uid: 'api::discover-overview.discover-overview',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'discover-overview',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/{slug}',
          },
        },
				{
          uid: 'api::homepage.homepage',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'homepage',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/',
          },
        },
				{
          uid: 'api::news-index.news-index',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'news-index',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/{slug}',
          },
        },
				{
          uid: 'api::agenda-item.agenda-item',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'agenda-item',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/agenda/{slug}',
          },
        },
				{
          uid: 'api::community-item.community-item',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'community-item',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/community/{slug}',
          },
        },
				{
          uid: 'api::discover-item.discover-item',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'discover-item',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/archive/{slug}',
          },
        },
				{
          uid: 'api::news-item.news-item',
          targetField: 'slug',
          draft: {
            url: 'https://sonicacts.com/api/preview',
            query: {
              type: 'news-item',
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://sonicacts.com/news/{slug}',
          },
        },
      ],
    },
  },
};
