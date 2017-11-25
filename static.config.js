import nodeExternals from 'webpack-node-externals'

export default {
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/about',
      component: 'src/containers/About',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  webpack: (config, { stage, defaultLoaders }) => {
    config.externals = []
  },
}
