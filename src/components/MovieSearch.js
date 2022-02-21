import { useState } from 'react'
import { useQuery, gql } from "@apollo/client";
import { client } from "../ApolloClient/client";

const MovieSearch = ({ title }) => {
    const EXCHANGE_RATES = gql`query{findPerson(id:text){id,name,born}}`;
  const [text, setText] = useState('')
  const {data} = useQuery(`
  gqlquery{findPerson(id:${data}){id,name,born}}
  `)
  

  const OnSubmit = (e) => {
    e.preventDefault()
   // const EXCHANGE_RATES = gql`query{findPerson(id:text){id,name,born}}`;
   // const { data, loading, error } = useQuery(EXCHANGE_RATES);
   // console.log(data, loading, error)
    if (!text) {
      alert('Please enter title of Movie')
      return
    }

   // title({ text })
 //console.log(text)
 title+='"'
 title+=text
 title+='"'

 let str="Jim"
 const string4 = new String("Jim");
 client
  .query({
    query: gql`query{findMovie(id:"${text}"){id,title,released}}`
  })
  .then(result =>console.log(result.data.findMovie));
  title=''
    setText('')
  }

  return (
    <form className='add-form' onSubmit={OnSubmit}>
      <div className='form-control'>
        <label>Movie Search</label>
        <input
          type='text'
          placeholder='Movie title'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      

      <input type='submit' value='Search Movie' className='btn btn-block' />
    </form>
  )
}

export default MovieSearch