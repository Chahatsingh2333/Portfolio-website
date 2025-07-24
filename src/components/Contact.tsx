import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's collaborate and bring your ideas to life. 
            I'm always excited to work on new challenges and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary border-0 text-primary-foreground font-semibold py-3 glow-effect hover:animate-glow-pulse"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">chahat.singh@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm p-6">
              <h4 className="font-semibold mb-3">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to emails within 24 hours. For urgent projects, 
                feel free to call or message me directly.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;