import { useQuery } from '@apollo/react-hooks';

import useTranslation from '../../lib/hooks/useTranslation';
import { GET_POSTS } from '../../lib/gql/posts';
import Button from '../../ui/Button';
import PostUpvoter from '../PostUpvoter';

const POSTS_PER_PAGE = 10;

const loadMorePosts = (data, fetchMore) =>
  fetchMore({
    variables: {
      skip: data.allPosts.length
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult;
      }
      return Object.assign({}, previousResult, {
        // Append the new posts results to the old one
        allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
      });
    }
  });

const PostList = () => {
  const { t } = useTranslation();
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { skip: 0, first: POSTS_PER_PAGE },
    notifyOnNetworkStatusChange: true
  });
  const areMorePosts =
    data && data.allPosts && data.allPosts.length < data._allPostsMeta.count;

  return areMorePosts ? (
    <>
      <ol data-testid='postListList'>
        {data.allPosts.map(post => (
          <li key={post.id} data-testid='postListListItem'>
            <a href={post.url} target='_blank' rel='noreferrer noopener'>
              {post.title}
            </a>
            <PostUpvoter id={post.id} votes={post.votes} />
          </li>
        ))}
      </ol>
      {areMorePosts ? (
        <Button onClick={() => loadMorePosts(data, fetchMore)}>
          {loading ? t('loading') : t('showMore')}
        </Button>
      ) : (
        ''
      )}
    </>
  ) : (
    <div>{t('loading')}</div>
  );
};

export default PostList;
