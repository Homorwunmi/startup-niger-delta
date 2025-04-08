import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function AngelFormInvestment() {
  return (
    <form action="w-full">
      <div className="flex flex-wrap gap-6 justify-between py-8">
        <div className="">
          <label
            htmlFor="angel"
            className="text-[#184341] font-semibold text-base"
          >
            Angel
          </label>
          <Input
            type="text"
            id="angel"
            placeholder="Full Name"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 outline-none"
          />
        </div>
        <div className="">
          <label
            htmlFor="investmentExperience"
            className="text-[#184341] font-semibold text-base"
          >
            Investment Experience
          </label>
          <Input
            type="text"
            id="companyExperience"
            placeholder="Choose investment experience"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 h-10"
          />
        </div>
        <div className="">
          <label
            htmlFor="investmentProof"
            className="text-[#184341] font-semibold text-base"
          >
            Investment Proof
          </label>
          <Input
            type="text"
            id="investmentProof"
            placeholder="E.g https://docs.googl.../1aByz123"
            className="w-[300px] h-10 mt-2 p-2 border-[#0D726F] border-2"
          />
        </div>
        <div className="">
          <label
            htmlFor="investmentSize"
            className="text-[#184341] font-semibold text-base"
          >
            Investment Size
          </label>
          <Input
            type="text"
            id="investmentSize"
            placeholder="Choose investment size"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 h-10"
          />
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
