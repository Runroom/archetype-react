import React, { useState, useEffect } from 'react';
import { JSONSchema7Array } from 'json-schema';
import urljoin from 'url-join';

import {
  siteTitle,
  siteTitleAlt,
  siteUrl,
  siteTitleShort,
  siteLogo,
  siteDescription
} from '../../config/site.json';

interface IProps {
  title?: string;
  description?: string;
  image?: string;
  schemaOrgJSONLD?: JSONSchema7Array;
}

const SEO = ({
  title = siteTitle,
  description = siteDescription,
  image = siteLogo,
  schemaOrgJSONLD = []
}: IProps) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const imageUrl = urljoin(siteUrl, image);

  schemaOrgJSONLD.push({
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    alternateName: siteTitleAlt,
    name: siteTitle,
    url: siteUrl
  });

  return (
    <>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='application-name' content={siteTitleShort} />
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={currentUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:site_name' content={siteTitleShort} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />
      <meta name='twitter:url' content={currentUrl} />
      <meta name='twitter:site' content={siteTitleShort} />

      <script type='application/ld+json'>
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </>
  );
};

export default SEO;
