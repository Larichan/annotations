import gql from 'graphql-tag';
import React, { useState } from 'react'
import { useQuery, useMutation } from 'react-apollo'

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
    return <div>oi</div>
}


export default AddCategory