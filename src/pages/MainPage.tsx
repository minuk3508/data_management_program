import { Template } from 'Template/Template';
import useFetch from 'hooks/useFetch';

import Loader from 'components/Loader';
import ReactTable from 'components/ReactTable';

export function MainPage() {
  const { results, loading } = useFetch();

  return (
    <Template>
      {loading && results.length === 0 ? (
        <Loader />
      ) : (
        <ReactTable results={results} />
      )}
    </Template>
  );
}
