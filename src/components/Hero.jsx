import propTypes from 'prop-types';
Hero.propTypes = {
  children:propTypes.object,
  hero:propTypes.string
}

export default function Hero({children, hero}) {
  return (
    <div>
      <header className={hero || `defaultHero`}>
        {children}
      </header>
    </div>
  )
}
