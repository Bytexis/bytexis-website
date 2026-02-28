import { useState } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}

export function useCreateContact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const mutateAsync = async (data: ContactFormData) => {
    setIsPending(true);
    const subject = encodeURIComponent(`Project Inquiry: ${data.projectType} from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Company: ${data.company || "N/A"}\n` +
      `Project Type: ${data.projectType}\n` +
      `Budget Range: ${data.budget || "Not Specified"}\n\n` +
      `Project Details:\n${data.message}`
    );
    window.location.href = `mailto:hello@bytexis.in?subject=${subject}&body=${body}`;
    setIsPending(false);
    setIsSuccess(true);
  };

  const reset = () => {
    setIsSuccess(false);
    setIsPending(false);
  };

  return { mutateAsync, isSuccess, isPending, reset };
}
