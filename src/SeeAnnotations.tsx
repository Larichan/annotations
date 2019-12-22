import gql from 'graphql-tag';
import React from 'react'
import { useQuery } from 'react-apollo'
import { Delete, DeleteTwoTone } from '@material-ui/icons'
import { Typography, Paper, Chip } from '@material-ui/core/'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    },
    categoryBox: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
);

const SeeAnnotations = () => {

  const classes = useStyles();
  const { loading, error, data } = useQuery<AnnotationData>(GET_ANNOTATIONS)

  if (loading) return <div>Fetching</div>
  if (error) return <div>Error</div>


  return (
    <>
      {
        data && data.annotation.map(i => (
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              {i.title}

            </Typography>
            <Typography component="p">
              {i.content}

            </Typography>
            <div className={classes.categoryBox}>
              <Chip label={i.category.name} />
            </div>

            <DeleteTwoTone></DeleteTwoTone>
          </Paper>


        ))

      }
    </>

  )
}

export default SeeAnnotations
