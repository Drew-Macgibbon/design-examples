// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  unlighthouse: {
    scanner: {
      // simulate a desktop device
      device: 'desktop'
    }
  },
  security: {
    corsHandler: false,
    headers: false
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      // link: [
      //   { rel: 'stylesheet', href: '' }
      // ],
      script: [
        // Insert your Google Tag Manager Script here
        {
          src: 'https://js.stripe.com/v3/',
          async: true,
          type: 'text/partytown'
        },
        {
          src: 'https://connect.facebook.net/en_US/sdk.js',
          async: true,
          type: 'text/partytown'
        }
      ]
    }
  },
  css: ['/assets/css/tailwind.css'],
  imports: {
    dirs: ['stores']
  },
  typescript: {
    shim: false,
    tsConfig: {
      exclude: ['node_modules', 'dist'],
      compilerOptions: {
        strict: true
      }
    }
  },
  nitro: {
    preset: 'render-com'
  },
  modules: [
    '@nuxthq/ui',
    '@nuxt/content',
    '@nuxtjs/partytown',
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@unlighthouse/nuxt',
    'nuxt-security',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ],
  partytown: {
    // For google analytics
    forward: ['dataLayer.push']
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY
    },
    // The private keys which are only available within server-side
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY
  },
  build: {
    transpile: ['']
  },
  ssr: true,
  content: {
    // Nuxt content options
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: 'github-dark',
        // Theme used if `html.dark`
        dark: 'github-light',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  }
})
