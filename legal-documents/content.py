# -*- coding: utf-8 -*-
"""
Source of truth for the Talent Onboarding & Representation Agreement.
Both the editable Markdown export and the designed PDF are generated from
this single structured content definition, so the two never drift apart.

Edit this file to change the agreement's wording. Then run:
    python generate.py
to regenerate both the .md source and the .pdf.
"""

DOC_TITLE = "Talent Onboarding & Representation Agreement"
DOC_SHORT_TITLE = "Talent Onboarding & Representation Agreement"

MANAGER = {
    "name": "Manasvi Pathak",
    "role_line": "Co-Founder, Talent Manager & Brand Representative, Calibre Associates",
    "identity_line": "Actor | Model | Content Creator | UGC Creator",
    "personal_email": "manasvipathak002@gmail.com",
    "work_email": "manasvi@calibreassociates.com",
    "portfolio": "manasvipathak.netlify.app",
    "website": "www.calibreassociates.com",
    "linkedin": "https://www.linkedin.com/in/manasvipathakofficial/",
}

COMPANY = {
    "name": "Calibre Associates",
    "gst": "09CHZPJ0595F1ZP",
    "address": "Lucknow, Uttar Pradesh, India",
    "website": "www.calibreassociates.com",
}

JURISDICTION_CITY = "Lucknow, Uttar Pradesh"
NON_CIRCUMVENTION_MONTHS = "12 (twelve)"
NOTICE_PERIOD_DAYS = "15 (fifteen)"

# ---------------------------------------------------------------------------
# Section content. Each section is a dict:
#   id: section number (string, e.g. "1")
#   eyebrow: small label shown above the title
#   title: section heading
#   blocks: list of content blocks, each a tuple/dict describing how to render
#
# Block kinds:
#   ("p", text)                    - a body paragraph
#   ("clauses", [text, text, ...]) - auto-numbered clauses "N.1", "N.2", ...
#   ("ul", [text, text, ...])      - bullet list
#   ("h3", text)                   - sub-heading within the section
#   ("note", text)                 - highlighted callout / placeholder notice
#   ("table", [[c1, c2], ...])     - simple two-column table
# ---------------------------------------------------------------------------

SECTIONS = [
    {
        "id": "1",
        "eyebrow": "SECTION 01",
        "title": "Introduction & Purpose",
        "blocks": [
            ("p",
             "This Talent Onboarding & Representation Agreement (“Agreement”) is entered into between "
             "Manasvi Pathak, acting in her professional capacity as Talent Manager and Brand Representative "
             "(“Talent Manager,” “Manager,” or “I/me”), and the individual named on the cover page "
             "of this Agreement (“Talent,” “you,” or “Creator”)."),
            ("p",
             f"The Talent Manager operates professionally within and alongside {COMPANY['name']} "
             f"({COMPANY['website']}), which appears in this Agreement for branding, association, and "
             f"administrative identity purposes. {COMPANY['name']} is not a party to this Agreement in the "
             "capacity of an employer, and this Agreement does not create an employment, agency-of-the-company, "
             "partnership, or joint venture relationship between the Talent and " + COMPANY['name'] + "."),
            ("p",
             "This Agreement onboards you into the Talent Manager's professional talent network. Its purpose "
             "is to allow the Talent Manager to:"),
            ("ul", [
                "Understand your professional profile, skills, and experience",
                "Maintain your talent information and portfolio on file",
                "Showcase suitable work to prospective brands, agencies, and campaign partners",
                "Present you for relevant opportunities as they arise",
                "Coordinate communication when opportunities arise",
                "Facilitate introductions between you and prospective brands or agencies",
                "Coordinate campaign discussions on your behalf where you choose to participate",
                "Manage your involvement during opportunities you agree to participate in",
            ]),
            ("note",
             "Being onboarded into the talent network does not guarantee employment, bookings, campaigns, "
             "income, brand collaborations, or any minimum number of opportunities. This Agreement establishes "
             "a representation relationship, not a job offer, retainer, or income guarantee."),
            ("p",
             "This Agreement governs the onboarding and representation relationship only. It does not set the "
             "terms of any specific paid campaign, commercial engagement, or brand collaboration. Every such "
             "engagement is governed by a separate, campaign-specific written agreement, work order, or "
             "contract, as described in Section 11."),
        ],
    },
    {
        "id": "2",
        "eyebrow": "SECTION 02",
        "title": "Definitions & Nature of Relationship",
        "blocks": [
            ("h3", "Key Terms"),
            ("table", [
                ["“Agreement”", "This Talent Onboarding & Representation Agreement, including its "
                 "cover page and all sections."],
                ["“Talent Manager”", "Manasvi Pathak, acting in her individual professional capacity "
                 "as talent manager and brand representative."],
                ["“Talent” / “Creator”", "The individual identified on the cover page who is "
                 "being onboarded into the talent network."],
                [f"“{COMPANY['name']}”", "The trade name under which the Talent Manager operates for "
                 "branding, association, and administrative purposes, appearing in this Agreement for identity "
                 "purposes only."],
                ["“Campaign Agreement”", "A separate, campaign-specific written agreement, work order, "
                 "or contract that governs a particular paid engagement, its deliverables, compensation, and "
                 "other commercial terms."],
                ["“Portfolio Materials”", "The photographs, videos, UGC samples, acting or modelling "
                 "samples, and other professional work you submit for representation purposes under this "
                 "Agreement."],
                ["“Opportunity”", "Any potential brand, agency, or campaign engagement identified, "
                 "sourced, introduced, negotiated, or materially facilitated by the Talent Manager."],
            ]),
            ("h3", "Nature of the Relationship"),
            ("clauses", [
                "This Agreement establishes an independent professional representation relationship between "
                "the Talent and the Talent Manager. Nothing in this Agreement shall be construed to create an "
                f"employer-employee relationship between the Talent and the Talent Manager or {COMPANY['name']}.",
                f"The Talent is not an employee, agent, or representative of {COMPANY['name']}, and nothing in "
                "this Agreement authorizes the Talent to act, contract, or make representations on behalf of "
                f"{COMPANY['name']} or the Talent Manager.",
                f"{COMPANY['name']} appears in this Agreement for branding, association, and administrative "
                "identity purposes because the Talent Manager operates professionally within and alongside "
                f"{COMPANY['name']}. This does not make {COMPANY['name']} the Talent's employer, principal, "
                "or contracting counterparty for campaign purposes.",
                "This Agreement is non-exclusive unless a separate written exclusivity arrangement is agreed "
                "and signed by both parties. Exclusivity, where applicable to a specific brand or category, "
                "will ordinarily be addressed in the relevant Campaign Agreement, not in this Agreement.",
            ]),
        ],
    },
    {
        "id": "3",
        "eyebrow": "SECTION 03",
        "title": "Talent Information & Data Collection",
        "blocks": [
            ("p",
             "To be represented effectively, you may provide the Talent Manager with information including, "
             "as relevant to your professional category:"),
            ("ul", [
                "Full legal name and professional/stage name",
                "Email address and phone number",
                "Location / city of residence",
                "Age or date of birth, where legitimately required to confirm eligibility",
                "Professional categories, skills, and languages spoken",
                "Measurements, where relevant to modelling work",
                "Social media profiles and follower/audience information you choose to share",
                "Portfolio links, previous work, and relevant professional experience",
                "General availability",
                "Professional photographs, videos, UGC examples, acting samples, modelling samples, and other "
                "professional material",
            ]),
            ("note",
             "The Talent Manager will not request sensitive personal information beyond what is reasonably "
             "necessary for talent management, opportunity matching, and campaign coordination. You are not "
             "required to provide information you consider unnecessary for these purposes, though this may "
             "limit the opportunities you can be considered for."),
            ("p",
             "The information you provide will be used for talent management, opportunity matching, campaign "
             "coordination, and related professional purposes described in this Agreement. Section 15 sets out "
             "how your personal data is handled in more detail."),
        ],
    },
    {
        "id": "4",
        "eyebrow": "SECTION 04",
        "title": "Talent's Responsibilities",
        "blocks": [
            ("p", "As Talent onboarded into the network, you agree to:"),
            ("clauses", [
                "Provide truthful, accurate, and current information about yourself, your experience, and "
                "your availability.",
                "Provide authentic Portfolio Materials that genuinely represent your own work and are not "
                "fraudulent, plagiarized, or misrepresented.",
                "Keep your contact information updated so the Talent Manager can reach you regarding "
                "opportunities.",
                "Communicate professionally with the Talent Manager, brands, and agencies introduced through "
                "this relationship.",
                "Respond to legitimate opportunities shared with you within a reasonable period.",
                "Disclose your availability accurately, including any known conflicts or constraints.",
                "Inform the Talent Manager promptly of any conflicts of interest, including existing "
                "relationships described in Section 10.",
                "Attend confirmed commitments and meet agreed deadlines once you have accepted a specific "
                "Campaign Agreement.",
                "Follow the specific requirements of any Campaign Agreement you accept.",
                "Maintain professional conduct in all dealings connected to this representation relationship.",
                "Not misrepresent your experience, credentials, reach, or past work to the Talent Manager or "
                "to any brand or agency.",
                "Inform the Talent Manager of any material change in circumstances that affects your ability "
                "to perform an engagement you have already accepted.",
            ]),
        ],
    },
    {
        "id": "5",
        "eyebrow": "SECTION 05",
        "title": "Portfolio & Content Permission",
        "blocks": [
            ("p",
             "As part of onboarding, you may provide the Talent Manager with a curated selection of your best "
             "professional work, typically approximately two to five (2–5) videos or portfolio samples, "
             "together with relevant photographs and other professional material (collectively, the "
             "“Submitted Materials”), to be considered for representation and opportunity matching."),
            ("h3", "License Granted"),
            ("p",
             "You retain full ownership of the Submitted Materials. You grant the Talent Manager a limited, "
             "non-exclusive, revocable license to:"),
            ("ul", [
                "Store and organize the Submitted Materials for talent management purposes",
                "Display selected Submitted Materials in a private talent portfolio maintained by the "
                "Talent Manager",
                "Present selected Submitted Materials to prospective brands, agencies, and campaign partners "
                "for the purpose of talent pitching and opportunity matching",
                "Share relevant Submitted Materials with a prospective client when reasonably necessary to "
                "evaluate you for a specific opportunity",
            ]),
            ("h3", "Scope and Limits of the License"),
            ("table", [
                ["Purpose", "Talent representation, pitching, and portfolio presentation only. Not for "
                 "independent commercial exploitation, resale, or use unconnected to presenting you for "
                 "opportunities."],
                ["Duration", "For as long as you remain onboarded in the talent network, and for a reasonable "
                 "wind-down period after termination as described in Section 18, solely to complete "
                 "opportunities already in progress."],
                ["Territory", "Worldwide, to the extent necessary to present you to brands, agencies, or "
                 "campaign partners located anywhere, since opportunities may originate from any location."],
                ["Channels", "Private portfolio presentations, direct pitches to prospective brands/agencies, "
                 "and comparable non-public talent-representation channels. This license does not cover public "
                 "posting, paid advertising, or broadcast use — see Section 16."],
                ["Revocation", "You may withdraw specific Submitted Materials from active use at any time by "
                 "written notice to the Talent Manager. Withdrawal does not affect materials already shared "
                 "with a specific brand or agency as part of an opportunity already in progress at the time of "
                 "withdrawal."],
            ]),
            ("note",
             "This is a license to display and present your work for representation purposes, not a "
             "copyright assignment. The Talent Manager does not acquire ownership of your Submitted Materials "
             "or any broader rights beyond what is described in this Section. Any use of your materials in "
             "paid advertising, endorsements, or commercial campaigns requires separate consent under the "
             "relevant Campaign Agreement, as described in Section 16."),
        ],
    },
    {
        "id": "6",
        "eyebrow": "SECTION 06",
        "title": "Portfolio Confidentiality",
        "blocks": [
            ("clauses", [
                "Where Submitted Materials include unreleased, private, or otherwise non-public work, you may "
                "identify such material as confidential when you submit it.",
                "The Talent Manager will handle all Submitted Materials professionally and will only share "
                "them for the legitimate talent-representation purposes described in Section 5.",
                "Material you have specifically identified as confidential or unreleased will not be publicly "
                "published, posted, or distributed without your express additional permission.",
                "This Section does not restrict sharing Submitted Materials with a prospective brand or agency "
                "for the purpose of evaluating you for a specific opportunity, which remains permitted under "
                "Section 5.",
            ]),
        ],
    },
    {
        "id": "7",
        "eyebrow": "SECTION 07",
        "title": "Talent Representation",
        "blocks": [
            ("p", "As Talent Manager, my role in this relationship may include:"),
            ("ul", [
                "Talent sourcing and onboarding",
                "Talent profile development and portfolio management",
                "Talent presentation and pitching to brands and agencies",
                "Opportunity matching based on your profile, niche, and availability",
                "Campaign coordination and communication between you and brands/agencies",
                "Negotiation support for opportunities you choose to pursue",
                "Scheduling coordination",
                "Deliverable coordination and follow-up during an accepted campaign",
                "General talent relationship management",
            ]),
            ("note",
             "The Talent Manager does not guarantee that any brand, agency, or client will select you for a "
             "given opportunity. Talent selection remains entirely at the discretion of the brand, agency, or "
             "client involved. Section 12 addresses this in more detail."),
        ],
    },
    {
        "id": "8",
        "eyebrow": "SECTION 08",
        "title": "Brand Opportunities & Campaign Process",
        "blocks": [
            ("p",
             "To help you understand how opportunities move through the representation relationship, the "
             "typical process is as follows:"),
            ("clauses", [
                "You are onboarded into the talent network under this Agreement.",
                "Your talent profile is maintained and kept current.",
                "A relevant opportunity is identified that may suit your profile.",
                "You are presented to the relevant brand, agency, or campaign partner.",
                "The brand or agency evaluates your suitability for the opportunity.",
                "If shortlisted, campaign details are shared with you through the Talent Manager.",
                "You confirm your availability and interest in the specific opportunity.",
                "Commercial terms for that opportunity are negotiated.",
                "A Campaign Agreement specific to that opportunity is executed by the relevant parties.",
                "The campaign is delivered according to the Campaign Agreement.",
                "Payment is processed according to the terms of that Campaign Agreement.",
            ]),
            ("h3", "No Guarantee of Work"),
            ("p", "Onboarding into the talent network does not guarantee:"),
            ("ul", [
                "A minimum number of campaigns or opportunities",
                "Any minimum income",
                "Brand collaborations of any kind",
                "Acting, modelling, or UGC opportunities",
                "Monthly or recurring bookings",
                "Any particular level of exposure or visibility",
            ]),
            ("p",
             "Opportunities depend on market demand, client requirements, your suitability for a given brief, "
             "your availability, and other commercial factors outside the Talent Manager's control."),
        ],
    },
    {
        "id": "9",
        "eyebrow": "SECTION 09",
        "title": "Non-Circumvention & Direct Dealing",
        "blocks": [
            ("note",
             "This clause is scoped to protect the Talent Manager's role in opportunities she introduces or "
             "materially facilitates. It is not intended to, and shall not be interpreted to, restrain you "
             "from independently exercising your profession, trade, or working relationships that did not "
             "arise through this representation relationship."),
            ("h3", "The Principle"),
            ("p",
             "If the Talent Manager introduces you to a brand, agency, or client for a specific opportunity, "
             "or otherwise sources, negotiates, or materially facilitates that opportunity on your behalf, you "
             "agree not to bypass the Talent Manager and independently accept, negotiate, or continue that "
             "specific opportunity, or a materially similar repeat opportunity with the same brand, agency, or "
             "client, without informing the Talent Manager and routing it through the agreed representation "
             "process."),
            ("p",
             "For example: if the Talent Manager pitches you to Brand X for a campaign, and Brand X then "
             "contacts you directly, you may not simply accept and deliver that campaign privately while "
             "excluding the Talent Manager from the engagement. You must inform the Talent Manager and "
             "continue the engagement through the agreed process."),
            ("h3", "Situations Covered"),
            ("p", "This obligation applies where, in connection with an opportunity introduced or materially "
             "facilitated by the Talent Manager:"),
            ("ul", [
                "A brand or agency contacts you directly after an introduction made through the Talent Manager",
                "You receive a repeat or follow-on opportunity from a brand or agency originally introduced "
                "through the Talent Manager",
                "A brand or agency attempts to move the engagement outside the representation relationship",
                "You intentionally withhold communication about such contact from the Talent Manager",
                "You provide your private contact information to a brand or agency specifically to bypass "
                "representation for an opportunity the Talent Manager introduced",
                "You negotiate or accept a campaign privately with a brand or agency after being introduced "
                "to them through the Talent Manager, without involving the Talent Manager",
            ]),
            ("h3", "Survival Period"),
            ("p",
             f"This obligation applies for as long as you remain onboarded in the talent network, and "
             f"continues for {NON_CIRCUMVENTION_MONTHS} months after the introduction of the relevant "
             "opportunity, or after termination of this Agreement (whichever is later), with respect to "
             "opportunities, brands, agencies, or clients actually introduced or materially facilitated by "
             "the Talent Manager during the term of this Agreement."),
            ("h3", "Limits of This Clause"),
            ("p",
             "This clause does not restrain you from working in your profession generally, from pursuing "
             "opportunities that did not arise through this representation relationship, or from continuing "
             "genuine pre-existing relationships disclosed under Section 10. It is intended to protect the "
             "Talent Manager's role and compensation in respect of opportunities she has actually introduced "
             "or materially facilitated, not to restrict your ability to earn a living."),
            ("note",
             "Legal note for review: Section 27 of the Indian Contract Act, 1872 renders agreements in "
             "restraint of a lawful profession, trade, or business void, subject to narrow statutory "
             "exceptions. Indian courts have generally been reluctant to enforce broad restraints, particularly "
             "post-termination ones. This clause has been deliberately scoped to an introduction-protection / "
             "circumvention-prevention mechanism tied to specific opportunities, rather than a blanket "
             "restriction on the Talent's ability to work, in an effort to remain defensible. This remains an "
             "area that should be reviewed by a qualified lawyer before this Agreement is used, since "
             "enforceability of any restraint-adjacent clause is fact-specific under Indian law."),
        ],
    },
    {
        "id": "10",
        "eyebrow": "SECTION 10",
        "title": "Existing Relationships",
        "blocks": [
            ("clauses", [
                "If you have a genuine, pre-existing professional relationship with a brand, agency, or "
                "client independent of the Talent Manager, you should disclose that relationship to the "
                "Talent Manager where relevant, particularly before the Talent Manager attempts to introduce "
                "you to the same brand, agency, or client.",
                "Genuine pre-existing relationships that you disclose and that did not arise through, and are "
                "not materially facilitated by, the Talent Manager are not subject to the non-circumvention "
                "obligations in Section 9.",
                "Where it is unclear whether a relationship is pre-existing or arose through the Talent "
                "Manager's introduction, the parties agree to discuss the matter in good faith to avoid "
                "disputes.",
            ]),
        ],
    },
    {
        "id": "11",
        "eyebrow": "SECTION 11",
        "title": "Campaign-Specific Agreements",
        "blocks": [
            ("note",
             "This Agreement does not establish the financial or commercial terms of any individual campaign. "
             "You are only obligated to perform a specific campaign after you have accepted the terms of the "
             "relevant Campaign Agreement for that opportunity."),
            ("p", "Each campaign you accept may have its own separate written Campaign Agreement addressing, "
             "as relevant:"),
            ("ul", [
                "The brand or client", "The campaign and its objectives", "Deliverables",
                "Number of posts, videos, or assets", "Shoot or production dates", "Usage rights",
                "Platforms", "Exclusivity", "Territory", "Duration", "Compensation",
                "Payment schedule", "Taxes", "Revisions", "Cancellation terms", "Travel and expenses",
                "Licensing terms", "Approval requirements", "Other campaign-specific conditions",
            ]),
        ],
    },
    {
        "id": "12",
        "eyebrow": "SECTION 12",
        "title": "Payment & Compensation",
        "blocks": [
            ("note",
             "There is no guaranteed compensation, salary, stipend, or fee solely by signing this onboarding "
             "Agreement. Signing this Agreement onboards you into the talent network; it does not create a "
             "payment obligation on either party."),
            ("clauses", [
                "Compensation for any specific campaign will be agreed separately, in writing, as part of the "
                "Campaign Agreement for that opportunity.",
                "Payment terms may vary from campaign to campaign depending on factors including the brand, "
                "agency, campaign scope, deliverables, usage rights, duration, territory, your talent "
                "category, and the specific commercial terms negotiated for that opportunity.",
                "No campaign carries the same payment schedule or structure by default. The applicable "
                "Campaign Agreement governs payment for that campaign, including timing, method, and any "
                "applicable taxes or deductions.",
            ]),
        ],
    },
    {
        "id": "13",
        "eyebrow": "SECTION 13",
        "title": "Management Fee / Commission",
        "blocks": [
            ("note",
             "Management Fee / Commission: As specified in the applicable Campaign Agreement or other written "
             "commercial terms agreed between the parties for that opportunity. No fixed percentage or "
             "amount is set by this onboarding Agreement."),
            ("p",
             "Where a management fee or commission applies to a specific opportunity, it will be disclosed to "
             "you in writing, as part of or alongside the relevant Campaign Agreement, before you are required "
             "to accept that opportunity."),
        ],
    },
    {
        "id": "14",
        "eyebrow": "SECTION 14",
        "title": "Confidentiality",
        "blocks": [
            ("p",
             "In the course of this relationship, either party may share confidential information with the "
             "other, including brand briefs, campaign proposals, pricing discussions, negotiations, client "
             "information, other talent's information, private campaign information, unreleased creative "
             "work, and other non-public business information (“Confidential Information”)."),
            ("clauses", [
                "Each party agrees to keep the other's Confidential Information confidential and to use it "
                "only for purposes connected to this Agreement or an applicable Campaign Agreement.",
                "This obligation does not apply to information that is or becomes publicly available through "
                "no fault of the receiving party, was already known to the receiving party without an "
                "obligation of confidence, or is required to be disclosed by law or a competent court or "
                "authority.",
                "This confidentiality obligation survives the termination of this Agreement.",
            ]),
        ],
    },
    {
        "id": "15",
        "eyebrow": "SECTION 15",
        "title": "Personal Data & Privacy",
        "blocks": [
            ("p",
             "This Section describes, at a practical level, how your personal data is handled. It is not a "
             "substitute for a full privacy policy, and is intended to be read together with any privacy "
             "policy published on the Talent Manager's or " + COMPANY['name'] + "'s official channels."),
            ("table", [
                ["What is collected", "The information described in Section 3, together with any additional "
                 "information you choose to provide in connection with a specific opportunity."],
                ["Why it is collected", "To manage your onboarding, match you with suitable opportunities, "
                 "coordinate campaigns you accept, and communicate with you about your representation."],
                ["How it may be used", "For talent management, opportunity matching, campaign coordination, "
                 "and presenting you to prospective brands and agencies as described in Sections 5 and 7."],
                ["Who it may be shared with", "Prospective brands, agencies, and campaign partners considering "
                 "you for a specific opportunity, and, where necessary, professionals assisting the Talent "
                 "Manager with talent management (for example, coordination support)."],
                ["Retention", "For as long as you remain onboarded in the talent network, and for a reasonable "
                 "period afterward to resolve any outstanding matters, unless you request earlier deletion in "
                 "accordance with applicable law."],
                ["Your rights", "You may request access to, correction of, or deletion of your personal data, "
                 "and may withdraw consent for future processing, by written request to the Talent Manager, "
                 "subject to any legitimate need to retain records connected to an active or recently "
                 "completed Campaign Agreement."],
                ["After termination", "Your personal data will be handled in accordance with this Section and "
                 "applicable law even after this Agreement ends, until deleted or anonymized in the ordinary "
                 "course."],
            ]),
            ("note",
             "This Section is drafted with reference to the Digital Personal Data Protection Act, 2023 "
             "(India), which requires a lawful basis and notice for processing personal data, purpose "
             "limitation, reasonable security safeguards, and recognizes data principal rights including "
             "access, correction, and erasure. As the rules operationalizing this Act continue to be notified "
             "and refined, this Section should be reviewed periodically and updated as needed, and reviewed "
             "by a qualified lawyer before this Agreement is used at scale."),
        ],
    },
    {
        "id": "16",
        "eyebrow": "SECTION 16",
        "title": "Intellectual Property, Image & Likeness",
        "blocks": [
            ("h3", "Content Ownership"),
            ("table", [
                ["Your existing work", "You retain ownership of your pre-existing content, portfolio work, "
                 "and intellectual property, unless separately and expressly agreed otherwise in writing."],
                ["Submitted portfolio materials", "The Talent Manager receives only the limited license "
                 "described in Section 5 to display and present selected work for talent representation and "
                 "pitching purposes. This is a license, not an ownership transfer."],
                ["Campaign-created work", "Ownership and usage rights for content created as part of a "
                 "specific campaign will be defined in that campaign's Campaign Agreement."],
            ]),
            ("h3", "Image, Likeness & Publicity"),
            ("p",
             "The license in Section 5 permits reasonable use of your Portfolio Materials for talent pitching "
             "and private portfolio presentation. It does not extend to:"),
            ("ul", [
                "Paid advertising", "Commercial campaign usage", "Endorsements",
                "Paid media placements", "Product advertising", "Brand website usage",
                "Broadcast use", "Out-of-home (OOH) advertising", "Long-term commercial licensing",
            ]),
            ("p",
             "Any of the above uses must be separately agreed in the relevant Campaign Agreement. This "
             "Agreement does not grant blanket commercial rights to your image, likeness, or work."),
            ("h3", "AI & Synthetic Content"),
            ("note",
             "Where a brand or client requests an AI avatar, AI voice, digital likeness, synthetic "
             "representation, AI-generated image or video, digital clone, voice clone, or other face/voice "
             "likeness usage, such rights are NOT granted through this onboarding Agreement under any "
             "circumstance. Any such use requires your explicit, informed, campaign-specific consent and "
             "separate written terms addressing scope, duration, and compensation."),
        ],
    },
    {
        "id": "17",
        "eyebrow": "SECTION 17",
        "title": "Professional Conduct",
        "blocks": [
            ("p", "Both parties agree to:"),
            ("ul", [
                "Communicate professionally and respectfully",
                "Act reliably with respect to agreed commitments",
                "Respond to legitimate communications within a reasonable time",
                "Comply with the obligations of any Campaign Agreement they have accepted",
                "Avoid fraudulent representations to each other or to brands/agencies",
                "Avoid intentional conduct that damages the other party's professional relationships or "
                "reputation",
            ]),
        ],
    },
    {
        "id": "18",
        "eyebrow": "SECTION 18",
        "title": "Term, Termination & Breach",
        "blocks": [
            ("h3", "Term"),
            ("p",
             "This Agreement begins on the Agreement Date stated on the cover page and continues until "
             "terminated by either party in accordance with this Section."),
            ("h3", "Termination"),
            ("clauses", [
                f"Either party may terminate this Agreement for any reason by providing {NOTICE_PERIOD_DAYS} "
                "days' written notice to the other party.",
                "Termination of this Agreement does not cancel or affect any Campaign Agreement already "
                "signed and in effect at the time of termination, unless that Campaign Agreement expressly "
                "says otherwise. Obligations under an active Campaign Agreement continue according to its own "
                "terms.",
                "Upon termination, any outstanding obligations connected to an active Campaign Agreement "
                "(including delivery and payment) must still be settled according to that Campaign Agreement.",
                "Confidentiality obligations (Section 14), data handling obligations (Section 15), and "
                "non-circumvention obligations (Section 9, for their stated survival period) survive "
                "termination of this Agreement.",
                "Upon termination, the license granted under Section 5 ends for future use, except that "
                "materials already shared with a specific brand or agency as part of an opportunity in "
                "progress at the time of termination may continue to be used solely to complete that specific "
                "opportunity.",
            ]),
            ("h3", "Material Breach"),
            ("p", "A material breach of this Agreement includes:"),
            ("ul", [
                "Deliberate circumvention in violation of Section 9",
                "Providing fraudulent information or materials",
                "Unauthorized disclosure or misuse of Confidential Information",
                "Deliberate failure to honour an accepted Campaign Agreement commitment",
                "Material misrepresentation of experience, credentials, or past work",
                "Unauthorized commercial use of confidential or Portfolio Materials outside the license "
                "granted in Section 5",
            ]),
            ("p",
             "Where a material breach occurs, the non-breaching party may pursue the remedies available under "
             "applicable law, in addition to terminating this Agreement. This Agreement does not create any "
             "predetermined penalty amount for breach; damages, where applicable, are to be determined "
             "according to applicable law."),
        ],
    },
    {
        "id": "19",
        "eyebrow": "SECTION 19",
        "title": "Indemnification & Limitation of Liability",
        "blocks": [
            ("h3", "Indemnification"),
            ("p",
             "Each party agrees to indemnify and hold the other harmless from direct losses, claims, or "
             "liabilities arising from that party's own:"),
            ("ul", [
                "Fraudulent representations", "Unauthorized use of third-party content or intellectual "
                "property", "Breach of confidentiality obligations under this Agreement",
                "Unauthorized commitments made on the other party's behalf",
                "Intentional misconduct or material breach of this Agreement",
            ]),
            ("h3", "Limitation of Liability"),
            ("p",
             "To the maximum extent permitted by applicable law, neither party shall be liable to the other "
             "for indirect, incidental, or consequential losses arising from this Agreement. Nothing in this "
             "Agreement excludes or limits liability that cannot lawfully be excluded or limited under "
             "applicable Indian law, including liability for fraud or wilful misconduct."),
        ],
    },
    {
        "id": "20",
        "eyebrow": "SECTION 20",
        "title": "Dispute Resolution & Governing Law",
        "blocks": [
            ("clauses", [
                "The parties agree to first attempt to resolve any dispute arising from this Agreement through "
                "good-faith discussion.",
                "If a dispute is not resolved through good-faith discussion within a reasonable period, the "
                "parties agree to attempt resolution through mediation before pursuing formal legal "
                "proceedings, where practicable.",
                "If a dispute remains unresolved, it shall be subject to arbitration or the jurisdiction of "
                "the competent courts, as set out below.",
            ]),
            ("table", [
                ["Governing law", "This Agreement is governed by the laws of India."],
                ["Scope of representation", "Pan-India — this Agreement and the talent network it forms "
                 "part of are not limited to any single state or region; the Talent and opportunities may be "
                 "based anywhere in India."],
                ["Courts / jurisdiction", f"Subject to the arbitration and mediation steps above, the courts "
                 f"at {JURISDICTION_CITY} (the registered address associated with {COMPANY['name']}) shall "
                 "have exclusive jurisdiction over any dispute arising from this Agreement."],
            ]),
            ("note",
             "Legal note for review: the parties have indicated the representation relationship operates on "
             "a pan-India basis, while anchoring courts/jurisdiction to the registered office location "
             "(Lucknow, Uttar Pradesh), which is standard Indian contracting practice. A lawyer should confirm "
             "this is the correct venue and should consider whether an arbitration clause (naming a specific "
             "seat, institution/rules, and language) is preferable to court litigation for this type of "
             "agreement."),
        ],
    },
    {
        "id": "21",
        "eyebrow": "SECTION 21",
        "title": "Minors & Eligibility",
        "blocks": [
            ("note",
             "Under Section 11 of the Indian Contract Act, 1872, as interpreted in Mohori Bibee v. Dharmodas "
             "Ghose (1903), a contract with a minor (a person under 18 years of age, or under 21 where a "
             "court-appointed guardian applies) is void from the outset, not merely voidable. A minor cannot "
             "be a binding contracting party to this Agreement, even with a parent or guardian's consent "
             "alongside their own signature."),
            ("clauses", [
                "The Talent confirms that the information provided regarding their age and legal capacity to "
                "enter into this Agreement is accurate.",
                "If the Talent is below the age of 18, this Agreement must instead be entered into by the "
                "Talent's parent or legal guardian, who becomes the contracting party on the Talent's behalf "
                "and for the Talent's benefit. The minor Talent does not sign this Agreement as an independent "
                "contracting party.",
                "Where a parent or legal guardian enters into this Agreement on behalf of a minor Talent, "
                "the parent/guardian signature section on the final page must be completed in addition to, "
                "and not instead of, the standard signature page.",
                "The Talent Manager reserves the right to request reasonable documentation to confirm "
                "eligibility or guardian authority before proceeding with onboarding a minor Talent.",
            ]),
            ("note",
             "Legal note for review: talent management involving minors may raise additional considerations "
             "specific to the entertainment, modelling, or influencer industry (for example, safeguarding, "
             "working hours, trust/earnings-protection arrangements for a minor's income, and content "
             "featuring minors) that are not fully codified in a single Indian statute at present. A qualified "
             "lawyer should review this Section, and any engagement involving a minor Talent, before "
             "proceeding."),
        ],
    },
    {
        "id": "22",
        "eyebrow": "SECTION 22",
        "title": "General Provisions",
        "blocks": [
            ("clauses", [
                "Entire Agreement. This Agreement, together with any Campaign Agreement entered into under "
                "it, constitutes the entire understanding between the parties regarding the subject matter "
                "described here, and supersedes any prior discussions on the same subject.",
                "Amendment. This Agreement may only be amended in writing, signed or accepted electronically "
                "by both parties.",
                "Severability. If any provision of this Agreement is found unenforceable by a competent "
                "authority, the remaining provisions continue in full force, and the unenforceable provision "
                "will be interpreted, to the extent possible, to achieve its original intent.",
                "No Waiver. A party's failure to enforce a provision of this Agreement on one occasion does "
                "not waive its right to enforce that or any other provision later.",
                "Notices. Notices under this Agreement may be given by email to the addresses stated on the "
                "signature page, and are deemed received when sent, subject to confirmation of delivery where "
                "reasonably required.",
                "Assignment. Neither party may assign this Agreement without the other's written consent, "
                "except that the Talent Manager may assign administrative functions connected to talent "
                "management to a professional collaborator without altering the substance of this Agreement.",
                "Electronic Execution. This Agreement may be executed and accepted electronically. Under "
                "Section 10A of the Information Technology Act, 2000, a contract shall not be denied "
                "enforceability solely because it was formed through electronic means, provided the essential "
                "requirements of a valid contract under the Indian Contract Act, 1872 are met. The parties "
                "acknowledge that a typed name or click-to-accept mechanism and a certified digital signature "
                "under the Information Technology Act carry different evidentiary weight, and agree that "
                "either method, properly executed, is intended to bind the parties under this Agreement.",
            ]),
        ],
    },
]

# ---------------------------------------------------------------------------
# Cover page and signature page copy (kept separate since they use bespoke
# layouts rather than the generic section renderer).
# ---------------------------------------------------------------------------

COVER_INTRO = (
    "This Agreement establishes a professional talent onboarding and representation relationship. "
    "It does not set the commercial terms of any individual campaign — those are governed by "
    "separate campaign-specific agreements."
)

SIGNATURE_INTRO = (
    "By signing below, the parties acknowledge that they have read, understood, and agree to be bound "
    "by this Agreement, including the acknowledgement that this Agreement does not guarantee income, "
    "bookings, or campaigns, and that individual campaigns are governed by separate Campaign Agreements."
)
