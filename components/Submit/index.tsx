import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import useTranslation from '../../lib/hooks/useTranslation';
import { CREATE_POST, GET_POSTS } from '../../lib/gql/posts';

const Submit = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const { t } = useTranslation();

  const [createPost, { error, data }] = useMutation(CREATE_POST, {
    variables: { title, url },
    update: (proxy, mutationResult) => {
      const { allPosts } = proxy.readQuery({
        query: GET_POSTS,
        variables: { first: 10, skip: 0 }
      });
      const newPost = mutationResult.data.createPost;
      proxy.writeQuery({
        query: GET_POSTS,
        variables: { first: 10, skip: 0 },
        data: {
          allPosts: [newPost, ...allPosts]
        }
      });
    }
  });

  const handleSubmit = event => {
    event.preventDefault();
    if (title === '' || url === '') {
      window.alert(t('postvote.requiredFields'));
      return false;
    }

    createPost();
    event.target.elements.title.value = '';
    event.target.elements.url.value = '';
  };

  // prepend http if missing from url
  const pattern = /^((http|https):\/\/)/;

  return (
    <form onSubmit={handleSubmit}>
      <h1>{t('postvote.title')}</h1>
      <input
        placeholder={t('postvote.formTitle')}
        name='title'
        onChange={e => setTitle(e.target.value)}
      />
      <input
        placeholder={t('postvote.formUrl')}
        name='url'
        onChange={e =>
          setUrl(
            !pattern.test(e.target.value)
              ? `https://${e.target.value}`
              : e.target.value
          )
        }
      />
      <button type='submit'>{t('postvote.button')}</button>
    </form>
  );
};

export default Submit;
