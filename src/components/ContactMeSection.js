import {
    Button,
    Fieldset,
    createListCollection,
    Input,
    Textarea,
    Stack,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
  } from "@chakra-ui/react";
  import FullScreenSection from "./FullScreenSection";
  
  const ContactMeSection = () => {
    return (
      <FullScreenSection
        id="contact"
        isDarkBackground
        backgroundColor="#512DA8"
        py={16}
        spacing={12}
        width="84%"
      >
        <Fieldset.Root maxW="lg">
          <Stack size="2xl">
            <Fieldset.Legend fontSize="2xl">Contact Me</Fieldset.Legend>
          </Stack>
          <Fieldset.Content>
            Name
            <Input name="name" placeholder="Name" />
            Email Address
            <Input name="email" type="email" placeholder="Email"/>
            
            <SelectRoot collection={enquiries} size="sm" width="100%">
              <SelectLabel>Type of enquiry</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder="Select enquiry" />
              </SelectTrigger>
              <SelectContent>
                {enquiries.items.map((enquiry) => (
                  <SelectItem item={enquiry} key={enquiry.value}>
                    {enquiry.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
            
            Your message
            <Textarea name="notes" placeholder="Message" />
          </Fieldset.Content>
  
          <Button type="submit" alignSelf="flex-start" width="100%">
            Submit
          </Button>
        </Fieldset.Root>
      </FullScreenSection>
    );
  };
  
  const enquiries = createListCollection({
    items: [
      { label: "Project collaboration", value: "Project collaboration" },
      { label: "Freelance work", value: "Freelance work" },
      { label: "Job opportunities", value: "Job opportunities" },
      { label: "Technical consultation", value: "Technical consultation" },
      { label: "UI/UX improvements", value: "UI/UX improvements" },
      { label: "Code reviews", value: "Code reviews" },
      { label: "Bug fixing", value: "Bug fixing" },
      { label: "Performance optimization", value: "Performance optimization" },
    ],
  });
  
  export default ContactMeSection;
  