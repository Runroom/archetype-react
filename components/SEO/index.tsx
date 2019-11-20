import React, { useState, useEffect } from 'react';
import { JSONSchema7Array } from 'json-schema';
import urljoin from 'url-join';

import {
  SITE_TITLE,
  SITE_TITLE_ALT,
  SITE_URL,
  SITE_TITLE_SHORT,
  SITE_LOGO,
  SITE_DESCRIPTION
} from '../../config/site';

interface IProps {
  title?: string;
  description?: string;
  image?: string;
  schemaOrgJSONLD?: JSONSchema7Array;
}

const SEO = ({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  image = SITE_LOGO,
  schemaOrgJSONLD = []
}: IProps) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const imageUrl = urljoin(SITE_URL, image);

  schemaOrgJSONLD.push({
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    alternateName: SITE_TITLE_ALT,
    name: SITE_TITLE,
    url: SITE_URL
  });

  return (
    <>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='application-name' content={SITE_TITLE_SHORT} />
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={currentUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:site_name' content={SITE_TITLE_SHORT} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />
      <meta name='twitter:url' content={currentUrl} />
      <meta name='twitter:site' content={SITE_TITLE_SHORT} />

      <script type='application/ld+json'>
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </>
  );
};

export default SEO;
