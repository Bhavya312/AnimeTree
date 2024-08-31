import propTypes from 'prop-types';

Title.propTypes = {
  title:propTypes.string
}

export default function Title({title}) {
  return (
    <div className='section-title'>
      <h4>{title}</h4>
      <div />
    </div>
  )
}
