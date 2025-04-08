import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
export default function AngelFormIdentify() {
  return (
    <form action="w-full">
      <div className="flex flex-wrap gap-6 justify-between py-8">
        <div className="">
          <Label
            htmlFor="meansofIdentification"
            className="text-[#184341] font-semibold text-base"
          >
            Means of Identification
          </Label>
          <Input
            type="text"
            id="meansofIdentification"
            placeholder="Choose verification method"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 outline-none"
          />
        </div>
        <div className="">
          <Label
            htmlFor="Nationality"
            className="text-[#184341] font-semibold text-base"
          >
            Nationality
          </Label>
          <Input
            type="text"
            id="Nationality"
            placeholder="Country"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 h-10"
          />
        </div>
        <div className="">
          <Label
            htmlFor="investmentProof"
            className="text-[#184341] font-semibold text-base"
          >
            Investment Proof
          </Label>
          <Textarea
            id="investmentProof"
            placeholder="Body"
            className="w-[300px] h-[120px] mt-2 p-2 border-[#0D726F] border-2"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="w-[297px] text-xs">
            By submitting this application, you agree to abide by the terms and
            conditions of the program, including attendance, code of conduct,
            and other program-specific requirements.
          </p>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex justify-between w-full mt-28">
          <p>*You must fill in all field to be able to continue</p>
          <div className="flex gap-3">
            <Button type="submit">Back</Button>
            <Button type="submit">Next</Button>
          </div>
        </div>
      </div>
    </form>
  );
}
