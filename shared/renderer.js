// import createEmotionServer from '@emotion/server/create-instance'
// import createCache from '@emotion/cache'

// const key = 'custom'
// const cache = createCache({ key })

// export const renderStatic = async (html) => {
//   if (html === undefined) {
//     throw new Error('did you forget to return html from renderToString?')
//   }
//   const { extractCritical } = createEmotionServer(cache)
//   const { ids, css } = extractCritical(html)

//   return { html, ids, css }
// }