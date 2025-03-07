import { Button, Fieldset, Field, NativeSelectField, NativeSelectRoot, Input, Textarea, Stack } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection";
 //import { Field } from "@/components/ui/field"
//  import {
//   NativeSelectField,
//   NativeSelectRoot,
// } from "@/components/ui/native-select"

const ContactMeSection = () => {
  return (
    <FullScreenSection
    id="contact"
    isDarkBackground
    backgroundColor="#512DA8"
    py={16}
    spacing={8}
  >
        <Fieldset.Root maxW="lg">
            <Stack>
                <Fieldset.Legend>Contact Me</Fieldset.Legend>
            </Stack>
            <Fieldset.Content>
                Name
                <Input name="name"/>
                Email Address
                <Input name="email" type="email"/>
                Type of enquiry
                <NativeSelectRoot>
                    <NativeSelectField
                        items={[
                            "United Kingdom (UK)",
                            "Canada (CA)",
                            "United States (US)",
                        ]}
                    />
                </NativeSelectRoot>
                Your message
                <Textarea name="notes"/>
            </Fieldset.Content>  

            <Button type="submit" alignSelf="flex-start">
                Submit
            </Button>  
        </Fieldset.Root>
    </FullScreenSection>
  )
}


export default ContactMeSection