import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: '𝗟𝗘𝗞𝗦.𝗚𝗚',
    description: 'Leks might have a thought about that.',
    image: 'https://i.imgur.com/09QxkZF.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
