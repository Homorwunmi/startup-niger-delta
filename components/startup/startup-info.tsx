import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function StartupInfo() {
  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 p-8">
        <div className="relative w-full">
          <Label
            htmlFor="company-email"
            className="text-[#184341] text-base bg-white absolute -top-1 left-6">
            Company Email
          </Label>
          <Input
            type="text"
            id="company-email"
            name="compnayName"
            placeholder="username@domain.com"
            className="w-[300px] mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="website"
            className="text-[#184341] text-base bg-white absolute -top-1 left-6">
            Company Website
          </Label>
          <Input
            type="date"
            id="website"
            placeholder="www.businessdomain.com"
            className="w-[300px] mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="company-address"
            className="text-[#184341] text-base bg-white absolute -top-1 left-6">
            Company Address
          </Label>
          <Input
            type="text"
            id="company-address"
            placeholder="Address information"
            className="w-[300px] mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="industry"
            className="text-[#184341] text-base bg-white absolute -top-1 left-6">
            Company Phone
          </Label>
          <Input
            type="tel"
            id="industry"
            placeholder="+234"
            className="w-[300px] mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
      </div>

      <div className="col-span-2 flex items-end justify-between w-full mt-auto p-8">
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
    </form>
  );
}
