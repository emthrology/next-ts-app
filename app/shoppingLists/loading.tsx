import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function loading() {
  return (
    <Skeleton
      circle
      width={48}
      height={48}
      baseColor="#ffcccb"
      highlightColor="#add8e6"
      duration={2}
    />
  );
}
