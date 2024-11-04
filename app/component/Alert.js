import { RocketIcon } from '@radix-ui/react-icons';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AlertDemo({ data }) {
  return (
    <Alert>
      <AlertTitle className="text-base font-semibold">oops..!!</AlertTitle>
      <AlertDescription className="flex justify-between items-baseline text-base font-semibold">
        {data}

        <div className="h-full w-1/3 flex items-center justify-end">
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </div>
      </AlertDescription>
    </Alert>
  );
}
