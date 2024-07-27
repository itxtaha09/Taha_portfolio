"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { FaWhatsappSquare, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaWhatsappSquare />,
    title: "Phone",
    description: "(+92) 304 273 9194",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "itxtaha09@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Arifwala, Punjab, Pakistan",
  },
];

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // function to handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // function to handle select field changes
  const handleSelectChange = (value) => {
    setContactForm((prevState) => ({
      ...prevState,
      service: value,
    }));
  };

  // function to handle contact form submission
  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", contactForm);

    try {
      const contactResponse = await axios.post(
        `http://localhost:6000/add-contact`,
        contactForm
      );
      if (contactResponse.data.success) {
        alert(`Successfully added contact`);
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none" onSubmit={handleContactFormSubmit}>
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Interested in hiring my services? Let&apos;s discuss your project needs! Reach out via the form below or email me directly. I&apos;m eager to collaborate with you!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  onChange={handleInputChange}
                  value={contactForm.firstname}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  onChange={handleInputChange}
                  value={contactForm.lastname}
                />
                <Input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  onChange={handleInputChange}
                  value={contactForm.email}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  onChange={handleInputChange}
                  value={contactForm.phone}
                />
              </div>
              {/* select */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="full stack">Full Stack Development</SelectItem>
                    <SelectItem value="frontend">Frontend Development</SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                type="text"
                className="h-[200px]"
                placeholder="Type your message here."
                onChange={handleInputChange}
                value={contactForm.message}
              />
              {/* btn */}
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
