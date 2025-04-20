import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export default function StartupProfile() {
  return (
    <form action="w-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 justify-between py-6 px-4">
        <div className="relative w-full">
          <Label
            htmlFor="companyName"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Name
          </Label>
          <Input
            type="text"
            id="companyName"
            name="compnayName"
            placeholder="Registered name"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="Industry"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Year of Incorporation
          </Label>
          <Input
            type="date"
            id="Industry"
            placeholder="Select Your Industry"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="BusinessDescription"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            RC Number
          </Label>
          <Input
            type="text"
            id="BusinessDescription"
            placeholder="Your solution in one sentence"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="industry"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Industry
          </Label>
          <Input
            type="text"
            id="industry"
            placeholder="Select your Industry"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="startup-description"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Startup Description
          </Label>
          <Textarea
            id="startup-description"
            placeholder="Solution"
            className="w-full h-40 mt-2 py-3 px-6 border-custom-green-2 border-2 rounded-md resize-none focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="fundingInterest"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Funding Interest
          </Label>
          <Input
            type="text"
            id="fundingInterest"
            placeholder="Investment Interest"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>

        <div className="col-span-2 flex items-end justify-between w-full mt-4">
          <p className="text-custom-orange">
            *You must fill in all field to be able to continue
          </p>
          <div className="flex gap-3">
            <Button type="submit" className="px-10 bg-gray-200">
              Back
            </Button>
            <Button type="submit" className="px-10 bg-custom-orange">
              Next
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
