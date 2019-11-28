import { useTranslation } from '../../i18n';
import Anchor from '../../ui/Anchor';

const PythonLinks = ({
  data: {
    relayLinks: { edges }
  }
}) => {
  const { t } = useTranslation();

  return edges ? (
    <ol data-testid="postListList">
      {edges.map(({ node }) => (
        <li key={node.id} data-testid="nodesListItem">
          <p>{node.description}</p>
          <Anchor href={node.url} target="_blank" rel="noreferrer noopener">
            {node.url}
          </Anchor>
        </li>
      ))}
    </ol>
  ) : (
    <div>No data loaded</div>
  );
};

export default PythonLinks;
