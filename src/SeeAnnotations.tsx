import gql from 'graphql-tag';
//import {useQuery} from '@apollo/react-hooks';
import React from 'react'
import { useQuery } from 'react-apollo'
import {Delete, DeleteTwoTone} from '@material-ui/icons'

const GET_ANNOTATIONS = gql`
query{
    annotation
    {
      content
      title
      category {
        name
      }
    }
  }
`
interface CategoryAtr {
  name: String
}

interface AnnotationAtr {
  content: String
  title: String
  category: CategoryAtr
}

interface AnnotationData {
  annotation: AnnotationAtr[]
}


const SeeAnnotations = () => {

    const { loading, error, data } = useQuery<AnnotationData>(GET_ANNOTATIONS)

    if (loading) return <div>Fetching</div>
    if (error) return <div>Error</div>
  

    return (
      <>
        {
          data && data.annotation.map(i => (
  
              <div>
                  <h1>{i.title}</h1>
                  <p>{i.content}</p>
                  <p>{i.category.name}</p>
                  <DeleteTwoTone></DeleteTwoTone>
              </div>
  
          ))

        }
      </>

    )
}

export default SeeAnnotations