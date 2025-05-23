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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import "@/styles/form.css";

const reservationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  guests: z.string().min(1, { message: "Please select number of guests" }),
  occasion: z.string().optional(),
  specialRequests: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export function ReservationSection() {
  // const { toast } = useToast();
  
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      specialRequests: "",
    },
  });

  const handleSubmit = (values: ReservationFormValues) => {
    console.log(values);
  };

  return (
    <PageSection id="reserve" className="bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold heading-font text-foreground mb-6">Reserve Your Table</h2>
            <p className="text-muted-foreground mb-8">
              Make a reservation and experience our exceptional cuisine and atmosphere. 
              For special events or large parties, please contact us directly.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} className="form-input" />
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
                          <Input placeholder="Your email address" {...field} className="form-input" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="form-input" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="select-trigger">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="select-content">
                            <SelectItem value="17:00" className="select-item">5:00 PM</SelectItem>
                            <SelectItem value="17:30" className="select-item">5:30 PM</SelectItem>
                            <SelectItem value="18:00" className="select-item">6:00 PM</SelectItem>
                            <SelectItem value="18:30" className="select-item">6:30 PM</SelectItem>
                            <SelectItem value="19:00" className="select-item">7:00 PM</SelectItem>
                            <SelectItem value="19:30" className="select-item">7:30 PM</SelectItem>
                            <SelectItem value="20:00" className="select-item">8:00 PM</SelectItem>
                            <SelectItem value="20:30" className="select-item">8:30 PM</SelectItem>
                            <SelectItem value="21:00" className="select-item">9:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="select-trigger">
                              <SelectValue placeholder="Select number of guests" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="select-content">
                            <SelectItem value="1" className="select-item">1 Person</SelectItem>
                            <SelectItem value="2" className="select-item">2 People</SelectItem>
                            <SelectItem value="3" className="select-item">3 People</SelectItem>
                            <SelectItem value="4" className="select-item">4 People</SelectItem>
                            <SelectItem value="5" className="select-item">5 People</SelectItem>
                            <SelectItem value="6" className="select-item">6 People</SelectItem>
                            <SelectItem value="7-10" className="select-item">7-10 People</SelectItem>
                            <SelectItem value="10+" className="select-item">More than 10 People</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="occasion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Occasion</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="select-trigger">
                              <SelectValue placeholder="Select occasion (optional)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="select-content">
                            <SelectItem value="birthday" className="select-item">Birthday</SelectItem>
                            <SelectItem value="anniversary" className="select-item">Anniversary</SelectItem>
                            <SelectItem value="business" className="select-item">Business Dinner</SelectItem>
                            <SelectItem value="date" className="select-item">Date Night</SelectItem>
                            <SelectItem value="other" className="select-item">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requests</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any special requests or dietary requirements?"
                          className="resize-none textarea"
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
                >
                  Confirm Reservation
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl section-fade">
            <img 
              src="https://images.unsplash.com/photo-1504718855392-c0f33b372e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Elegant restaurant interior" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold heading-font mb-4">Dining Hours</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">Monday - Thursday</p>
                  <p>5:00 PM - 10:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Friday - Saturday</p>
                  <p>5:00 PM - 11:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Sunday</p>
                  <p>5:00 PM - 9:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Brunch</p>
                  <p>Sat & Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default ReservationSection;
