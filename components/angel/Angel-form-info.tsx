import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '../ui/label';

export default function AngelFormInfo() {
  return (
    <form action="w-full">
      <div className="flex flex-wrap gap-6 justify-between py-8">
        <div className="relative">
          <Label
            htmlFor="companyEmail"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Company Email
          </Label>
          <Input
            type="text"
            id="companyEmail"
            placeholder="Registered Email"
            className="w-[300px] mt-2 py-5 px-4 border-[#0D726F] border-2 outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 resize-none"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="companyPhone"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Company Phone Number
          </Label>
          <Input
            id="companyPhone"
            placeholder="+234"
            className="w-[300px] mt-2 py-5 px-4 border-[#0D726F] border-2 h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 resize-none"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="BusinessDescription"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Company Address
          </Label>
          <Textarea
            id="companyAddress"
            placeholder="Your company address"
            className="w-[300px] h-[120px] mt-2 py-5 px-4 border-[#0D726F] border-2 focus-visible:ring-0 focus-visible:border-custom-green-2 resize-none"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="companyWebsite"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Company Website
          </Label>
          <Input
            type="text"
            id="companyWebsite"
            placeholder="www.yourcompany.com"
            className="w-[300px] mt-2 py-5 px-4 border-[#0D726F] border-2 h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 resize-none"
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
