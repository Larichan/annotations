import gql from 'graphql-tag';
import React, { Component, useState } from 'react'
import { useQuery, useMutation } from 'react-apollo'
//import * as uuid from 'uuid'

export const GET_CATEGORYS = gql`
      query{
        category
        {
          id
          name
        }
      }
`

const ADD_ANNOTATIONS = gql`
    mutation ($title: String!, $content: String!, $category_id: uuid! ){
      insert_annotation(objects: {
        title: $title
        content: $content
        category_id: $category_id
      })
      {
        affected_rows
      }
    }
`

/*mutation postMutation($title: String!, $content: String!, $category_id: uuid!){
  insert_annotation(objects: {
    title: $title
    content: $content
    category_id: $category_id
  })
  {
    affected_rows
  }
}*/

interface CategoryAtr {
  id: string
  name: String
}

interface CategoryData {
  category: CategoryAtr[]
}

const AddAnnotations: React.FC = () => {

   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')
   const [category, setCategory] = useState('')

   const [addAnnotation] = useMutation(ADD_ANNOTATIONS)
   const {loading, error, data} = useQuery<CategoryData>(GET_CATEGORYS)

   if (loading) return <p>'Fetching data from graphql'</p>
   if (error) return <p>'Failed to connect to graphql'</p>

   return(
     <div>
       <form onSubmit={e => {
         e.preventDefault()
         addAnnotation({variables: {title: title, content: content, category_id: category}})
       }}>
         <p>Escreva o título da anotação</p>
         <input className="Entrada"
         value={title}
         onChange={e => setTitle(e.target.value)}
         ></input>

        <p>Escreva o conteúdo da sua anotação</p>
         <textarea
         className="contentEntrada"
         rows={10}
         cols={40}
         value={content}
         onChange={e => setContent(e.target.value)}
         >
         </textarea>

         <select value={category} onChange={e => setCategory(e.target.value)}>
           <option value="" selected disabled hidden>Categoria</option>
           {data && data.category.map(i =>(
          <option value={i.id}>{i.name}</option>
           ))}
         </select>
            <button type="submit">Click me</button>
       </form>
     </div>
   )


}


export default AddAnnotations
