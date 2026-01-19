import {

  CalendarDays,
  CircleDollarSign,
  PlusIcon,
  Tag,
  Ticket,
  TicketX,
  UserPlus,
} from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    content:
      "Creating an account is simple! Click the 'Sign In' button in the top right corner and select 'Create Account'. You can sign up using your email address or connect with your Google or Facebook account.",
    icon: UserPlus,
    id: "1",
    sub: "How do I create an account?",
    title: "Getting Started",
  },
  {
    content:
      "Yes, browsing and joining free events is completely free. If you're an organizer hosting paid events, we charge a small service fee on ticket sales. Free events are always free to host.",
    icon: Tag,
    id: "2",
    sub: "Is Event Management free to us?",
    title: "Getting Started",
  },
  {
    content:
      "After registering for an event, your tickets will be emailed to you immediately. You can also access them anytime in the 'My Tickets' section of your profile or through our mobile app.",
    icon: Ticket,
    id: "3",
    sub: "How do I get my tickets?",
    title: "For Attendees",
  },
  {
    content:
      "Refund policies are set by the event organizer. You can check the specific refund policy on the event page. If you're eligible, you can request a refund through your 'My Tickets' page.",
    icon: TicketX,
    id: "4",
    sub: "Can I get a refund?",
    title: "For Attendees",
  },
  {
    content:
      "We support direct bank deposits. Payouts are processed 3-5 business days after your event concludes. You can set up your payout details in the 'Organizer Dashboard'.",
    icon: CircleDollarSign,
    id: "5",
    sub: "How do I get paid for my events?",
    title: "For Hosts",
  },
  {
    content:
      "Absolutely! You can add custom banner images, detailed descriptions, speaker bios, and even embed videos. We provide a rich text editor to help your event stand out.",
    icon: CalendarDays,
    id: "6",
    sub: "Can I customize my event page?",
    title: "For Hosts",
  },
  {
    content:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay for ticket purchases.",
    icon: CircleDollarSign,
    id: "7",
    sub: "What payment methods do you accept?",
    title: "Billing",
  },
];

export default function FaqAccordion() {
  return (
    <div className="space-y-4 my-10">
      
      <Accordion className="max-w-150" collapsible defaultValue="1" type="single">
        {items.map((item) => (
          <AccordionItem className="py-2" key={item.id} value={item.id}>
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2 text-left font-semibold text-[15px] leading-6 outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border"
                  >
                    <item.icon className="opacity-60" size={16} />
                  </span>
                  <span className="flex flex-col space-y-1">
                    <span className="text-[#DC143C]">{item.title}</span>
                    {item.sub && (
                      <span className="font-bold text-lg ">{item.sub}</span>
                    )}
                  </span>
                </span>
                <PlusIcon
                  aria-hidden="true"
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  size={16}
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="ms-3 ps-10 pb-2 text-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
