import JobsList from '@/components/JobsList';
import SearchForm from '@/components/SearchForm';
import { getAllJobsAction } from '@/utils/actions';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function JopsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['jobs', '', 'all', 1],
    queryFn: () => getAllJobsAction({}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <JobsList />
    </HydrationBoundary>
  );
}
