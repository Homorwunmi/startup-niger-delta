import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '../ui/textarea';

export default function AngelFormIdentify() {
  return (
    <form action="w-full">
      <div className="grid grid-cols-2 gap-6 justify-between py-8">
        <div className="relative">
          <Label
            htmlFor="meansofIdentification"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Means of Identification
          </Label>
          <Input
            type="text"
            id="meansofIdentification"
            placeholder="Choose verification method"
            className="w-[300px] mt-2 py-5 px-4 border-[#0D726F] border-2 outline-none focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="Nationality"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Nationality
          </Label>
          <Input
            type="text"
            id="Nationality"
            placeholder="Country"
            className="w-[300px] mt-2 py-5 px-4 border-[#0D726F] border-2 h-10 focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="investmentProof"
            className="text-[#184341] text-base bg-white absolute -top-1 left-4"
          >
            Investment Proof
          </Label>
          <Textarea
            id="investmentProof"
            placeholder="Body"
            className="w-[300px] h-[120px] mt-2 py-5 px-4 border-[#0D726F] border-2 focus-visible:ring-0 focus-visible:border-custom-green-2 resize-none"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="w-5/6 text-sm mb-3">
            By submitting this application, you agree to abide by the terms and
            conditions of the program, including attendance, code of conduct,
            and other program-specific requirements.
          </p>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="option-one" />
              <Label htmlFor="option-one">Yes, I agree</Label>
            </div>
          </RadioGroup>
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
