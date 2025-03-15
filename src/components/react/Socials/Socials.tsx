import type { JSX } from 'astro/jsx-runtime'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import InstagramIcon from '../icons/InstagramIcon'

interface SocialProps {
  id: string
  url: string
  ariaLabel: string
  target: string
  rel: string
  icon: JSX.Element
}

const Social: SocialProps[] = [
  {
    id: 'GitHub Link',
    url: 'https://github.com/rjleyva/',
    ariaLabel: 'GitHub Icon',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <GithubIcon
        width={24}
        height={24}
        color="currentColor"
        ariaLabel="GitHub Icon"
        role="img"
        title="Connect with RJ Leyva on GitHub"
      />
    )
  },
  {
    id: 'LinkedIn Link',
    url: 'https://linkedin.com/rjleyva/',
    ariaLabel: 'LinkedIn Icon',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <LinkedinIcon
        width={24}
        height={24}
        color="currentColor"
        ariaLabel="GitHub Icon"
        role="img"
        title="Connect with RJ Leyva on GitHub"
      />
    )
  },
  {
    id: 'Instagram Link',
    url: 'https://instagram.com/slammedwigo/',
    ariaLabel: 'Instagram Icon',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <InstagramIcon
        width={24}
        height={24}
        color="currentColor"
        ariaLabel="GitHub Icon"
        role="img"
        title="Connect with RJ Leyva on GitHub"
      />
    )
  }
]

interface SocialsProps {
  cta: string
}

const Socials = ({ cta }: SocialsProps) => {
  return (
    <section>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '0.5rem'
        }}
      >
        <p>{cta}</p>
        <ul
          style={{
            display: 'flex',
            gap: '0.2rem',
            listStyle: 'none',
            marginBlock: '1rem'
          }}
        >
          {Social.map(({ id, url, ariaLabel, target, rel, icon }) => (
            <li key={id}>
              <a href={url} aria-label={ariaLabel} target={target} rel={rel}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Socials
