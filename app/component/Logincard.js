import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckboxDemo } from './Checkbox';

export function LoginCard() {
  return (
    <Card className="w-[400px] h-[400px]">
      <CardHeader>
        <CardTitle className="flex justify-center text-2xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username/Email</Label>
              <Input id="username" placeholder="Name of your username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Name of your password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className=" flex flex-col gap-2">
        <Button className="w-full">Sign In</Button>

        <Button variant="outline" className="w-full">
          Countine As Guest
        </Button>
        <div className="flex justify-between  w-full">
          <CheckboxDemo type="Remember Me" />
          <h6 className="hover:text-blue-500 hover:cursor-pointer">
            Forgot Password
          </h6>
        </div>
      </CardFooter>
    </Card>
  );
}
