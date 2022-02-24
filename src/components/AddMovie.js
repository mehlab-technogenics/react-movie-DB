import { useState } from 'react'

const AddMovie = ({ onAddM }) => {
  const [title, setTitle] = useState('')
  const [released, setReleased] = useState('')
  const [tagline, setTagline] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please add a Movie')
      return
    }

    onAddM({ title, released ,tagline})

    setTitle('')
    setReleased('')
    setTagline('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Movie</label>
        <input
          type='text'
          placeholder='Name of Movie'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Tagline</label>
        <input
          type='text'
          placeholder='Tagline of Movie'
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        </div>
      <div className='form-control'>
        <label>Released</label>
        <input
          type='number'
          placeholder='Year of Movie'
          value={released}
          onChange={(e) => setReleased(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Movie' className='btn btn-block' />
    </form>
  )
}


export default AddMovie;
