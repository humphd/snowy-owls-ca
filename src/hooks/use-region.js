import { useRouter } from 'next/router';
import { lookup } from '../shared/region';

export default function useRegion() {
  const router = useRouter();
  const { region } = router.query;
  return lookup(region) || lookup('ca');
}
