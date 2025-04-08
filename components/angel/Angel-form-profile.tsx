import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function AngelForm() {
  return (
    <form action="w-full">
      <div className="grid grid-cols-2 gap-6 justify-between py-8">
        <div className="relative">
          <Label
            htmlFor="companyName"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Company / Individual Name
          </Label>
          <Input
            type="text"
            id="companyName"
            name="compnayName"
            placeholder="Registered name"
            className="w-[300px] mt-2 py-5 px-4 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="Industry"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Industry
          </Label>
          <Input
            type="text"
            id="Industry"
            placeholder="Select Your Industry"
            className="w-[300px] mt-2 py-5 px-4 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="BusinessDescription"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Business Description
          </Label>
          <Textarea
            id="BusinessDescription"
            placeholder="Your solution in one sentence"
            className="w-full h-[200px] mt-2 py-5 px-4 border-custom-green-2 border-2 rounded-md resize-none focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="fundingInterest"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Funding Interest
          </Label>
          <Input
            type="text"
            id="fundingInterest"
            placeholder="Investment Interest"
            className="w-[300px] mt-2 py-5 px-4 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2"
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
