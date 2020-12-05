import { useRouter } from 'next/router';
import useSWR from 'swr';

// Add ?region=.. if present
const prepareUrl = (region) => (region ? `/recent?region=${region}` : '/recent');

export default function useRecent() {
  const router = useRouter();
  const { region } = router.query;
  const url = prepareUrl(region);
  const { data, error, isLoading } = useSWR(url);

  const { regionName, bounds, observations } = data || {};
  return {
    regionName,
    observations,
    bounds,
    isError: error,
    isLoading,
  };
}
