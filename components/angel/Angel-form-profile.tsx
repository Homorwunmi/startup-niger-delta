import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
export default function AngelForm() {
  return (
    <form action="w-full">
      <div className="flex flex-wrap gap-6 justify-between py-8">
        <div className="">
          <label
            htmlFor="companyName"
            className="text-[#184341] font-semibold text-base"
          >
            Company / Individual Name
          </label>
          <Input
            type="text"
            id="companyName"
            placeholder="Registered name"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 rounded-md outline-none"
          />
        </div>
        <div className="">
          <label
            htmlFor="Industry"
            className="text-[#184341] font-semibold text-base"
          >
            Industry
          </label>
          <Input
            type="text"
            id="Industry"
            placeholder="Select Your Industry"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 rounded-md h-10"
          />
        </div>
        <div className="">
          <label
            htmlFor="BusinessDescription"
            className="text-[#184341] font-semibold text-base"
          >
            Business Description
          </label>
          <Textarea
            id="BusinessDescription"
            placeholder="Your solution in one sentence"
            className="w-[300px] h-[120px] mt-2 p-2 border-[#0D726F] border-2 rounded-md"
          />
        </div>
        <div className="">
          <label
            htmlFor="fundingInterest"
            className="text-[#184341] font-semibold text-base"
          >
            Funding Interest
          </label>
          <Input
            type="text"
            id="fundingInterest"
            placeholder="Investment Interest"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 rounded-md h-10"
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
