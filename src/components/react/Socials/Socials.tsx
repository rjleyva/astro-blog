interface SocialProps {
  id: string
  label: string
  url: string
  ariaLabel: string
  target: string
  rel: string
}

const Social: SocialProps[] = [
  {
    id: 'GitHub Link',
    label: 'Github',
    url: 'https://github.com/rjleyva/',
    ariaLabel: 'GitHub Icon',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    id: 'LinkedIn Link',
    label: 'Linkedin',
    url: 'https://linkedin.com/rjleyva/',
    ariaLabel: 'LinkedIn Icon',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    id: 'Instagram Link',
    label: 'Instagram',
    url: 'https://instagram.com/slammedwigo/',
    ariaLabel: 'Instagram Icon',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
]

const Socials = () => {
  return (
    <section>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '0.5rem'
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '0.7rem',
            listStyle: 'none',
            marginBlock: '1rem'
          }}
        >
          {Social.map(({ id, url, ariaLabel, target, rel, label }) => (
            <li key={id}>
              <a href={url} aria-label={ariaLabel} target={target} rel={rel}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Socials
