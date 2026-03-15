import { useRouter } from 'next/router';
import useSWR from 'swr';

// Add ?region=.. if present
const prepareUrl = (region) => (region ? `/recent?region=${region}` : '/recent');
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useRecent() {
  const router = useRouter();
  const { region } = router.query;
  const url = prepareUrl(region);
  const { data, error, isLoading } = useSWR(url, fetcher);

  const { regionName, bounds, observations } = data || {};
  return {
    regionName,
    observations,
    bounds,
    error,
    isLoading,
  };
}
