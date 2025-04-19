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
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYelp } from "react-icons/fa";

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
    <PageSection id="contact" bgColor="dark">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold heading-font text-[#F4E5AC] mb-6">Contact Us</h2>
          <p className="text-gray-300 mb-8">We'd love to hear from you. For reservations, special events, or any inquiries, please reach out using the information below.</p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 text-xl text-[#D32B2B]">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-[#F4E5AC]">Address</h3>
                <p className="text-gray-300">Cenikuthi<br/>Guwahati, Assam 781001</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-xl text-[#D32B2B]">
                <FaPhone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-[#F4E5AC]">Phone</h3>
                <p className="text-gray-300">+91 9864000000</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-xl text-[#D32B2B]">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-[#F4E5AC]">Email</h3>
                <p className="text-gray-300">reservations@rounddclock.com</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3 text-[#F4E5AC]">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#D32B2B] transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#D32B2B] transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#D32B2B] transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#D32B2B] transition-colors">
                  <FaYelp size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 section-fade">
          <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold heading-font text-[#1A1A1A] mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1A1A1A]">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            className="bg-white border-gray-300 text-[#1A1A1A] focus:border-[#D32B2B] focus:ring-[#D32B2B]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[#D32B2B]" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1A1A1A]">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            className="bg-white border-gray-300 text-[#1A1A1A] focus:border-[#D32B2B] focus:ring-[#D32B2B]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[#D32B2B]" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1A1A1A]">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Subject of your message" 
                          className="bg-white border-gray-300 text-[#1A1A1A] focus:border-[#D32B2B] focus:ring-[#D32B2B]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-[#D32B2B]" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1A1A1A]">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message"
                          className="min-h-[120px] bg-white border-gray-300 text-[#1A1A1A] focus:border-[#D32B2B] focus:ring-[#D32B2B]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-[#D32B2B]" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#D32B2B] text-[#F4E5AC] hover:bg-[#D32B2B]/90 px-8 py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
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
