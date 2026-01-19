import { z } from "zod";

// in here we use Select from ant design , Ant Design <Select /> is sending undefined when no option is picked, but Zod’s z.string() doesn’t allow undefined by default.
// thats why it dont show the customized error rather show that "Invalid input: expected string, received undefined" 
// but We have to make it another system that "Invalid input: expected string, received undefined (chatgpt)"
// that means when zod will undefined to empty , it peak up it as empty string and show the customized error
export const academicSemesterSchema = z.object({
  name: z.preprocess(
    (val) => (val === undefined ? "" : val), // turn undefined → ""
    z.string().nonempty("Please select a Name")
  ),
  year: z.preprocess(
    (val) => (val === undefined ? "" : val),
    z.string().nonempty("Please select a Year")
  ),
  startMonth: z.preprocess(
    (val) => (val === undefined ? "" : val),
    z.string().nonempty("Please select a Start month")
  ),
  endMonth: z.preprocess(
    (val) => (val === undefined ? "" : val),
    z.string().nonempty("Please select an End month")
  ),
});
