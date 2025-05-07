import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ContactSection() {
  const faqs = [
    {
      question: "How can I search for land ownership details?",
      answer:
        'Navigate to the "Search Property Details" section from the homepage or dashboard. Enter the required credentials like owner name, property number, or district to retrieve records.',
    },
    {
      question: "What is the process for applying for a title change?",
      answer:
        'Click on "Apply for Title Change" and fill out the mutation form. Submit all required documents digitally for verification. Once verified, the title change will be processed.',
    },
    {
      question: "Is there a helpline for assistance?",
      answer:
        "Yes, our support team is available from Sunday to Thursday, 9 AM to 5 PM. You can call us at 01-9876543 or email helpdesk@property.gov.np.",
    },
    {
      question: "Are my property records secure on this portal?",
      answer:
        "Absolutely. All data is encrypted and stored using government-authorized digital security protocols to ensure the highest level of protection.",
    },
    {
      question: "How long does the mutation process take?",
      answer:
        "The standard processing time is 15-30 days, depending on verification requirements and document completeness. You can track your application status in real-time through your dashboard.",
    },
  ]

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <MaxWidthWrapper className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium">Support</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-600">Find answers to common questions about our property management system.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:text-emerald-600 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our support team is ready to assist you with any inquiries.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+9779876543"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-emerald-700 font-medium border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              Call Support: 01-9876543
            </a>
            <a
              href="mailto:helpdesk@property.gov.np"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
