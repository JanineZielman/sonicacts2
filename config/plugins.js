module.exports = {
  'preview-button': {
    enabled: true,
    config: {
      contentTypes: [
				{
          uid: 'api::page.page',
          targetField: 'slug',
        },
				{
          uid: 'api::about.about',
          targetField: 'slug',
        },
				{
          uid: 'api::agenda-overview.agenda-overview',
          targetField: 'slug',
        },
				{
          uid: 'api::community.community',
          targetField: 'slug',
        },
				{
          uid: 'api::discover-overview.discover-overview',
          targetField: 'slug',
        },
				{
          uid: 'api::homepage.homepage',
          targetField: 'slug',
        },
				{
          uid: 'api::news-index.news-index',
          targetField: 'slug',
        },
				{
          uid: 'api::agenda-item.agenda-item',
          targetField: 'slug',
          draft: {
            query: {
              type: 'agenda-item',
            },
          },
          published: {
            basePath: 'agenda',
          },
        },
				{
          uid: 'api::community-item.community-item',
          targetField: 'slug',
          draft: {
            query: {
              type: 'community-item',
            },
          },
          published: {
            basePath: 'community',
          },
        },
				{
          uid: 'api::discover-item.discover-item',
          targetField: 'slug',
          draft: {
            query: {
              type: 'discover-item',
            },
          },
          published: {
            basePath: 'discover',
          },
        },
				{
          uid: 'api::news-item.news-item',
          targetField: 'slug',
          draft: {
            query: {
              type: 'news-item',
            },
          },
          published: {
            basePath: 'news',
          },
        },
      ],
    },
  },
};
