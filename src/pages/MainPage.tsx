import { Template } from 'Template/Template';
import useFetch from 'hooks/useFetch';

import Table from 'api/components/Table';
import Loader from 'api/components/Loader';

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
