import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div>
      <div className="text-center flex flex-col justify-center min-h-60 space-y-5">
        <h1 className="text-5xl font-bold">Get in Touch</h1>
        <p className="text-muted-foreground">
          Have questions? We&apos;d love to hear from you. Send us a message and
          we&apos;ll <br /> respond as soon as possible.
        </p>
      </div>

      <div className="container mx-auto p-5 md:p-0">
        <h1 className="text-4xl font-bold">Contact Information</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <div className="flex gap-5 bg-muted shadow-md px-3 py-10 rounded-xl">
            <div className="h-10 w-10 bg-pink-200 rounded-lg flex justify-center items-center">
              <Mail className="text-[#DC143C]" />
            </div>
            <div>
              <h1 className="font-bold">Email</h1>
              <p>support@eventpulse.com</p>
              <p className="text-sm text-muted-foreground">
                For general inquiries
              </p>
            </div>
          </div>
          <div className="flex gap-5 bg-muted shadow-md px-3 py-10 rounded-xl">
            <div className="h-10 w-10 bg-pink-200 rounded-lg flex justify-center items-center">
              <Phone className="text-[#DC143C]" />
            </div>
            <div>
              <h1 className="font-bold">Phone</h1>
              <p>+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">
                Mon-Fri from 9am to 6pm
              </p>
            </div>
          </div>
          <div className="flex gap-5 bg-muted shadow-md px-3 py-10 rounded-xl">
            <div className="h-10 w-10 bg-pink-200 rounded-lg flex justify-center items-center">
              <MapPin className="text-[#DC143C]" />
            </div>
            <div>
              <h1 className="font-bold">Location</h1>
              <p>123 Event Street, Suite 100 San Francisco, CA 94103</p>
            </div>
          </div>
          <div className="flex gap-5 bg-muted shadow-md px-3 py-10 rounded-xl">
            <div className="h-10 w-10 bg-pink-200 rounded-lg flex justify-center items-center">
              <Clock className="text-[#DC143C]" />
            </div>
            <div>
              <h1 className="font-bold">Support Hours</h1>
              <p>Monday - Friday</p>
              <p className="text-sm text-muted-foreground">
               9:00 AM - 6:00 PM PST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
