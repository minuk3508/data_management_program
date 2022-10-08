import { Template } from 'Template/Template';
import useFetch from 'hooks/useFetch';

import Loader from 'components/Loader';
import Table from 'components/Table';

export function MainPage() {
  const { results, loading } = useFetch();

  return (
    <Template>
      {loading && results.length === 0 ? (
        <Loader />
      ) : (
        <Table results={results} />
      )}
    </Template>
  );
}
