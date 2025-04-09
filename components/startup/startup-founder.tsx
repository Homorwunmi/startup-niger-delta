import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function StartupFounder() {
  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 py-6 px-4">
        <div className="relative w-full">
          <Label
            htmlFor="founder-name"
            className="text-[#184341] text-base bg-white absolute -top-1 left-6">
            Founder&apos;s name
          </Label>
          <Input
            type="text"
            id="founder-name"
            name="compnayName"
            placeholder="Full name"
            className="w-[300px] mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="founder-email"
            className="text-[#184341] text-base bg-white absolute -top-1 left-6">
            Founder&apos;s Email
          </Label>
          <Input
            type="date"
            id="founder-email"
            placeholder="username@domain.com"
            className="w-[300px] mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="founder-address"
            className="text-[#184341] text-base bg-white absolute -top-1 left-6">
            Founder&apos;s Address
          </Label>
          <Input
            type="text"
            id="founder-address"
            placeholder="Address information"
            className="w-[300px] mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="founder-phone"
            className="text-[#184341] text-base bg-white absolute -top-1 left-6">
            Founder&apos;s Phone
          </Label>
          <Input
            type="tel"
            id="founder-phone"
            placeholder="+234"
            className="w-[300px] mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="founder-phone"
            className="text-[#184341] text-base bg-white absolute -top-1 left-6">
            No of Founder
          </Label>
          <Input
            type="text"
            id="founder-phone"
            placeholder="Choose number of founder"
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
