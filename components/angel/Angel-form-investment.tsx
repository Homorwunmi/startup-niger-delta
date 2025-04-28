import { Input } from '@/components/ui/input';
// import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { Label } from '../ui/label';

export default function AngelFormInvestment() {
  return (
    <form action="w-full">
      <div className="flex flex-wrap gap-6 justify-between py-8">
        <div className="relative">
          <Label
            htmlFor="angel"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Angel
          </Label>
          <Input
            type="text"
            id="angel"
            placeholder="Full Name"
            className="w-[300px] mt-2 py-5 px-4 border-[#0D726F] border-2 outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 resize-none"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="investmentExperience"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Investment Experience
          </Label>
          <Input
            type="text"
            id="companyExperience"
            placeholder="Choose investment experience"
            className="w-[300px] mt-2 py-5 px-4 border-[#0D726F] border-2 h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 resize-none"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="investmentProof"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Investment Proof
          </Label>
          <Input
            type="text"
            id="investmentProof"
            placeholder="E.g https://docs.googl.../1aByz123"
            className="w-[300px] h-10 mt-2 py-5 px-4 border-[#0D726F] border-2 focus-visible:ring-0 focus-visible:border-custom-green-2 resize-none"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="investmentSize"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Investment Size
          </Label>
          <Input
            type="text"
            id="investmentSize"
            placeholder="Choose investment size"
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
