import gql from 'graphql-tag';
import React, { useState } from 'react'
import { useQuery, useMutation } from 'react-apollo'
import {GET_CATEGORYS} from './AddAnnotations'

const ADD_CATEGORYS = gql`
mutation ($name: String!){
    insert_category(objects: {
      name: $name
    })
    {
      affected_rows
    }
  }
`

const AddCategory = () => {

  const [name, setName] = useState('')
  const [addCategory] = useMutation(ADD_CATEGORYS)
  return <div>
    <form onSubmit={e => {
      e.preventDefault()
      addCategory({ variables: { name: name }, refetchQueries:['category'] })
    }}>
      <p>Escreva o nome da categoria</p>
         <input className="Entrada"
         value={name}
         onChange={e => setName(e.target.value)}
         ></input>
         <button type="submit">Enviar</button>
    </form>
  </div>
}


export default AddCategory
