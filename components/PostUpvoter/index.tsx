import { useMutation } from '@apollo/react-hooks';

import { UPDATE_POST } from '../../lib/gql/posts';
import Button from '../../ui/Button';

const PostUpvoter = ({ id, votes }) => {
  const [updatePost, { error, data }] = useMutation(UPDATE_POST, {
    variables: { id, votes: votes + 1 },
    optimisticResponse: {
      __typename: 'Mutation',
      updatePost: {
        __typename: 'Post',
        id,
        votes: votes + 1
      }
    }
  });
  return <Button onClick={() => updatePost()}>{votes}</Button>;
};

export default PostUpvoter;
