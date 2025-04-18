import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PageSection from "@/components/ui/page-section";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  // const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  
const handleSubmit =(values : any)=>{
  console.log(values)
}
  return (
    <PageSection id="contact" bgColor="secondary">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold heading-font mb-6">Contact Us</h2>
          <p className="mb-8 opacity-90">We'd love to hear from you. For reservations, special events, or any inquiries, please reach out using the information below.</p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 text-xl text-[#F2CC8F]">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="opacity-90">Cenikuthi<br/>Guwahati, Assam 781001</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-xl text-[#F2CC8F]">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="opacity-90">+91 9864000000</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-xl text-[#F2CC8F]">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="opacity-90">reservations@rounddclock.com</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="fab fa-yelp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 section-fade">
          <div className="bg-white text-[#2A2A2A] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold heading-font text-[#3D405B] mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject of your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-[#E07A5F] text-white hover:bg-[#E07A5F]/90 px-8 py-6 rounded-full"
                  // disabled={mutation.isPending}
                >
                  {/* {mutation.isPending ? "Sending..." : "Send Message"} */}
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default ContactSection;
