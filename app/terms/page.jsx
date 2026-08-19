import { LegalLayout, Clause, ClauseList } from "../../components/LegalLayout";
import { site, legal } from "../../lib/site";

export const metadata = {
  title: "Terms of service",
  description:
    "The terms governing use of the Halveron website and the basis on which we engage with clients.",
};

// NOTE: These terms cover website use and set out how engagements generally
// work. They are NOT a substitute for a signed master services agreement, and
// they are not legal advice. Have a lawyer review before launch.
export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of service"
      intro="The terms for using this website, and a plain summary of how our client engagements work. Project specifics always live in a signed agreement."
    >
      <Clause title="These terms">
        <p>
          By using {site.url} you agree to these terms. They are between you and{" "}
          {legal.entityName} ({legal.registrationNumber}), registered at{" "}
          {legal.registeredAddress}.
        </p>
      </Clause>

      <Clause title="This website is not an offer">
        <p>
          Service descriptions, timelines, and the indicative prices shown on
          this site are for information. They are not a binding quote. Any
          engagement begins only when both parties sign a written proposal or
          statement of work.
        </p>
      </Clause>

      <Clause title="Engagements and payment">
        <p>
          Each project is governed by its own signed agreement, which takes
          precedence over anything on this page. As a general rule:
        </p>
        <ClauseList
          items={[
            "Discovery sprints are fixed-price and paid upfront.",
            "Fixed-scope projects are billed against agreed milestones.",
            "Retainers are billed monthly in advance.",
            "Invoices are payable within the period stated on the invoice. Late payment may pause active work.",
            "Work beyond the agreed scope is quoted and approved in writing before it starts.",
          ]}
        />
      </Clause>

      <Clause title="Intellectual property">
        <p>
          On full payment, ownership of the custom deliverables we produce for
          you transfers to you. Every Halveron employee and contractor signs an
          IP assignment, so that chain of ownership is unbroken.
        </p>
        <p>
          Two exceptions, both normal: we retain ownership of our pre-existing
          tools, internal libraries, and general know-how (you get a perpetual
          licence to use them as part of your deliverable) and third-party
          open-source components stay under their own licences.
        </p>
        <p>
          The content, design, and code of this website itself remain ours.
        </p>
      </Clause>

      <Clause title="Confidentiality">
        <p>
          We treat what you tell us about your business as confidential, whether
          or not an NDA is in place, and we will sign yours if you have one. We
          will not name you publicly or publish a case study about your project
          without your written permission.
        </p>
      </Clause>

      <Clause title="Your responsibilities">
        <ClauseList
          items={[
            "Give us timely access to the people, content, and systems a project needs.",
            "Provide feedback and approvals within the windows agreed in the schedule.",
            "Make sure you have the rights to any material you give us to use.",
          ]}
        />
        <p>
          Projects slip most often on access and approvals, not engineering,
          so we plan these explicitly.
        </p>
      </Clause>

      <Clause title="Warranties and liability">
        <p>
          We provide our services with reasonable skill and care. Beyond that,
          this website is provided &ldquo;as is&rdquo; without further
          warranties.
        </p>
        <p>
          Nothing in these terms limits liability for death or personal injury
          caused by negligence, for fraud, or for anything else that cannot
          lawfully be limited. Subject to that, our total liability arising from
          an engagement is capped at the fees you paid us for it, and we are not
          liable for indirect or consequential loss, including lost profits or
          lost data.
        </p>
      </Clause>

      <Clause title="Termination">
        <p>
          Either party may end an engagement with the notice period set out in
          the signed agreement. On termination you pay for work completed and
          approved expenses committed up to that date, and we hand over
          everything you have paid for.
        </p>
      </Clause>

      <Clause title="Governing law">
        <p>
          These terms are governed by the laws of {legal.jurisdiction}, and its
          courts have exclusive jurisdiction over any dispute, unless a signed
          project agreement specifies otherwise.
        </p>
      </Clause>

      <Clause title="Contact">
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${site.email}`} className="text-cobalt hover:underline">
            {site.email}
          </a>
          .
        </p>
      </Clause>
    </LegalLayout>
  );
}
