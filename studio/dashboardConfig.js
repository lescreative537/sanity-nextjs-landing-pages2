export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6361b45dd516480c48ece314',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-uqqnaf6n',
                  apiId: 'bec37e5e-aa3e-439e-936e-049fa3c21d3a'
                },
                {
                  buildHookId: '6361b45d2be28710bd8ac367',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-ggm2ntk1',
                  apiId: '1b8102b9-f1a0-41f0-abc3-6d8c20137224'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lescreative537/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-ggm2ntk1.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
