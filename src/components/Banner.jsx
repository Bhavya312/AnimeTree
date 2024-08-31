import propTypes from 'prop-types';

Banner.propTypes = {
  children:propTypes.object,
  title:propTypes.string,
  subtitle:propTypes.string
}

export default function Banner({children, title, subtitle}) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}
