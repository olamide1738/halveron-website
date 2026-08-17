import { LegalLayout, Clause, ClauseList } from "../../components/LegalLayout";
import { site, legal } from "../../lib/site";

export const metadata = {
  title: "Privacy policy",
  description:
    "How Halveron collects, uses, and protects personal data submitted through this website.",
};

// NOTE: This is a solid, honest starting point written to match how the site
// actually behaves — but it is not legal advice. Have a qualified lawyer review
// it before launch, and update it whenever you add a tool that touches
// visitor data.
export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy policy"
      intro="What we collect, why we collect it, and what you can ask us to do about it. In plain language, because a policy nobody can read protects nobody."
    >
      <Clause title="Who we are">
        <p>
          {legal.entityName} ({legal.registrationNumber}) is the data controller
          for information collected through {site.url}. Our registered address
          is {legal.registeredAddress}.
        </p>
        <p>
          Questions about this policy or your data go to{" "}
          <a href={`mailto:${legal.privacyContact}`} className="text-cobalt hover:underline">
            {legal.privacyContact}
          </a>
          .
        </p>
      </Clause>

      <Clause title="What we collect">
        <p>We collect only what you actively give us, plus minimal technical data:</p>
        <ClauseList
          items={[
            "Information you submit through the contact form — your name, email address, company, budget and timeline selections, and the project brief you write.",
            "Your email address, if you sign up for our newsletter.",
            "Standard server logs, including IP address, which we use for security and rate limiting on our contact form.",
            "Aggregate, non-identifying analytics about page visits — only if analytics is enabled on this site.",
          ]}
        />
        <p>
          We do not collect special-category data, we do not buy data about you
          from third parties, and we do not run advertising trackers.
        </p>
      </Clause>

      <Clause title="Why we use it, and our legal basis">
        <ClauseList
          items={[
            "To reply to your enquiry and scope potential work — our legitimate interest in responding to someone who contacted us, and steps taken at your request before entering a contract.",
            "To send newsletters you asked for — your consent, withdrawable at any time.",
            "To keep the site secure and prevent spam submissions — our legitimate interest in protecting our systems.",
          ]}
        />
      </Clause>

      <Clause title="Who we share it with">
        <p>
          We do not sell your data. We share it only with the service providers
          that make this site function:
        </p>
        <ClauseList
          items={[
            "Resend — delivers contact-form submissions to our inbox.",
            "Our hosting provider — serves this website and retains standard access logs.", // TODO: name your host (e.g. Vercel, Netlify) once deployed
            "Our analytics provider, if enabled — receives aggregate page-view data only.",
          ]}
        />
        <p>
          We may also disclose information where we are legally required to do
          so.
        </p>
      </Clause>

      <Clause title="How long we keep it">
        <p>
          Enquiries are retained for as long as there is an active or reasonably
          foreseeable business relationship, and then archived or deleted.
          Newsletter subscriptions are kept until you unsubscribe. Server logs
          are kept for a short operational period and then rotated out.
        </p>
      </Clause>

      <Clause title="International transfers">
        <p>
          We operate from {legal.jurisdiction} and work with clients worldwide.
          Some of our service providers process data outside your country. Where
          that happens, we rely on the safeguards those providers have in place,
          including standard contractual clauses where applicable.
        </p>
      </Clause>

      <Clause title="Your rights">
        <p>
          Depending on where you live — including under the Nigeria Data
          Protection Act and, for visitors in Europe, the GDPR — you may have
          the right to:
        </p>
        <ClauseList
          items={[
            "Ask what personal data we hold about you, and get a copy.",
            "Have inaccurate data corrected.",
            "Have your data deleted where we have no overriding reason to keep it.",
            "Object to, or ask us to restrict, how we use it.",
            "Withdraw consent for marketing at any time.",
            "Complain to your local data protection authority.",
          ]}
        />
        <p>
          Email{" "}
          <a href={`mailto:${legal.privacyContact}`} className="text-cobalt hover:underline">
            {legal.privacyContact}
          </a>{" "}
          and we will respond within one month.
        </p>
      </Clause>

      <Clause title="Cookies">
        <p>
          This site sets no advertising or cross-site tracking cookies. If
          analytics is enabled, we use a privacy-focused, aggregate-only
          provider, and we tell you so with an on-page notice. We store a single
          local preference in your browser to remember that you dismissed that
          notice.
        </p>
      </Clause>

      <Clause title="Changes to this policy">
        <p>
          If we change how we handle data, we will update this page and move the
          &ldquo;last updated&rdquo; date at the top. Material changes will be
          made prominent rather than slipped in quietly.
        </p>
      </Clause>
    </LegalLayout>
  );
}
