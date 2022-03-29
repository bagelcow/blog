const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Leks' Thoughts
      <a href="/feed.xml">RSS</a>
      <a href="mailto:hello@leks.gg">Contact me</a><span class="1"> | </span>
      <style jsx>{`
        a {
          float: right;
        }
        1 {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
