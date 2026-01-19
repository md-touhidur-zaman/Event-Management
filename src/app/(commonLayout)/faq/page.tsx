import FaqAccordion from "@/components/modules/Faq/FaqAccordion";

export default function FaqPage() {
  return (
    <div className="">
        <div className="text-center flex flex-col justify-center min-h-60 space-y-5">
            <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Everything you need to know about EventPulse. Can&apos;t find the answer you&apos;re looking for? <br /> Please chat to our friendly team.</p>
        </div>

        <div className="flex justify-center p-5 md:p-0">
            <FaqAccordion/>
        </div>
      
    </div>
  )
}
