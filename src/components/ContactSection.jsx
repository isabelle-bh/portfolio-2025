import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const sanitizeInput = (value) => { 
  return value.replace(/[<>]/g, '');
}

const initialState = {
  from_name: '',
  from_email: '',
  message: '',
};

export const ContactSection = () => {
    const { toast } = useToast();
    const [{ from_name, from_email, message }, setState] = useState(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        const sanitizedValue = sanitizeInput(value);

        setState((prevState) => ({ ...prevState, [name]: sanitizedValue }));
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email regex validation
    }

    const clearState = () => setState({ ...initialState });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(from_email)) { 
            alert('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        emailjs
        .sendForm(
            'service_turt31a', 
            'template_phu79ol', 
            e.target, 
            'n9LRYNOKWwcBkr_u8'
        )
        .then(
            (result) => {
            console.log(result.text);
            clearState();
            },
            (error) => {
            console.log(error.text);
            }
        );
        
        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon!"
            });
            setIsSubmitting(false);
        }, 1500);
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Feel free to reach out, I am always open to discussing opportunities!                    
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:bellebeaudry@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        bellebeaudry@gmail.com
                                    </a>
                                </div>
                            </div>
                            {/* <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:" className="text-muted-foreground hover:text-primary transition-colors">
                                    </a>
                                </div>
                            </div> */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Ontario, Canada
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/isabelle-beaudry/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/isabelle-bh" target="_blank">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Isabelle Beaudry..."
                                    onChange={handleChange}
                                    value={from_name}
                                >
                                </input>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="from_email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="bellebeaudry@gmail.com..."
                                    onChange={handleChange}
                                    value={from_email}
                                >
                                </input>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                    onChange={handleChange}
                                    value={message}
                                >
                                </textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2",
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}