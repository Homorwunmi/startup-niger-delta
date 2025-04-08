import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function AngelFormInfo() {
  return (
    <form action="w-full">
      <div className="flex flex-wrap gap-6 justify-between py-8">
        <div className="">
          <label
            htmlFor="companyEmail"
            className="text-[#184341] font-semibold text-base"
          >
            Company Email
          </label>
          <Input
            type="text"
            id="companyEmail"
            placeholder="Registered Email"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 outline-none"
          />
        </div>
        <div className="">
          <label
            htmlFor="companyPhone"
            className="text-[#184341] font-semibold text-base"
          >
            Company Phone Number
          </label>
          <Input
            type="number"
            id="companyPhone"
            placeholder="+234"
            className="w-[300px] mt-2 p-2 border-[#0D726F] border-2 h-10"
          />
        </div>
        <div className="">
          <label
            htmlFor="BusinessDescription"
            className="text-[#184341] font-semibold text-base"
          >
            Company Address
          </label>
          <Textarea
            id="companyAddress"
            placeholder="Your company address"
            className="w-[300px] h-[120px] mt-2 p-2 border-[#0D726F] border-2"
          />
        </div>
        <div className="">
          <label
            htmlFor="companyWebsite"
            className="text-[#184341] font-semibold text-base"
          >
            Company Website
          </label>
          <Input
            type="text"
            id="companyWebsite"
            placeholder="www.yourcompany.com"
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
