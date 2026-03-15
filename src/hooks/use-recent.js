import { useRouter } from 'next/router';
import useSWR from 'swr';

const apiBase = process.env.NEXT_PUBLIC_API_BASE || '';
// Add ?region=.. if present
const prepareUrl = (region) =>
  region ? `${apiBase}/recent?region=${region}` : `${apiBase}/recent`;
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
