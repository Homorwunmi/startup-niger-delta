import Ad from "../news/ad";


export default function Details() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-[92%] md:w-[87%] mx-auto">
            
           <div className="md:col-span-2">
            working on this page
           </div>
           {/*  */}
           <div className="md:col-span-1">
            <Ad />
            </div>
        </div>
    )
}