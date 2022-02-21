import PropTypes from 'prop-types';
import Button from './Button'





const Header = (props) => {
  const onClick = () => {
    console.log('Add')
    console.log('Click')
  }
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button color='green' text='Add'  />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header