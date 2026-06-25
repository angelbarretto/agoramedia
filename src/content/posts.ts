// Auto-generated from theagoramedia.com WordPress export (39 posts).
// Featured/in-body image URLs still point at theagoramedia.com/wp-content/uploads.
// After Supabase Storage migration, run scripts/rewrite-image-urls.ts to remap.

export interface Post {
  id: number;
  slug: string;
  date: string;            // ISO date
  title: string;
  authorSlug: string;
  authorName: string;
  categorySlugs: string[];
  tagSlugs: string[];
  featuredImage: string | null;
  excerpt: string;
  contentHtml: string;     // rendered HTML
  readingMinutes: number;
  sticky: boolean;
}

export const posts: Post[] = [
  {
    id: 287,
    slug: `quantumworldcongress2025`,
    date: `2025-09-19T10:10:00`,
    title: `QWC 2025: Policy heat, post‑quantum urgency, and a startup sprint in Tysons`,
    authorSlug: `angelnoworries-fi`,
    authorName: `Elizabeth Angel`,
    categorySlugs: ["culture", "defense", "export", "governance", "quantum", "ai"],
    tagSlugs: ["quantum"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/OurQuantumFutureSomeAssemblyRequired-2.webp`,
    excerpt: `If you wanted proof that quantum is edging from the lab toward the factory, the U.S. National Strategic Plan for Advanced Manufacturing town hall delivered.`,
    contentHtml: `
<p class="has-drop-cap"><strong>TYSONS, Virginia</strong> — Quantum World Congress 2025 didn’t so much open as detonate across Greater Washington. Over three packed days (Sept. 16–18), the policy‑heavy, industry‑savvy show convened government agencies, hardware builders, cloud providers, diplomats, and academics under one roof—Capital One Hall—to wrestle with the hard stuff: cryptography timelines, supply‑chain risk, global standards, and where the market actually goes next. Hosted by Connected DMV with the University of Maryland as Flagship Academic Partner, QWC framed this year’s gathering as part of the <strong>International Year of Quantum</strong>—and it showed.</p>



<p><strong>A forum with geopolitical teeth</strong></p>



<p>Day one set the tone. The <strong>International Forum: Advancing Global Strategic Partnerships</strong> ran the morning gauntlet—8:00 a.m. to noon in Maplewood Hall—where attachés, national quantum program leads, and cross‑sector executives compared notes on the uneasy overlap of collaboration and competition. The format was a moderated workshop: fewer polished decks, more frank talk on funding, export controls, and interoperability. It’s the rare conference session that airs the diplomatic laundry and then asks the room to help fold it. <strong>Finland, among a broad international slate, was out in force.</strong></p>



<p><strong>Manufacturing policy met the quantum shop floor</strong></p>



<p>If you wanted proof that quantum is edging from the lab toward the factory, the <strong>U.S. National Strategic Plan for Advanced Manufacturing</strong> town hall delivered. NIST staff used the Congress to collect on‑the‑ground input for the <strong>2026–2030</strong> plan—everything from workforce to testbeds—supplementing a live <strong>Federal Register</strong> request for information. Bonus: it was free for registered attendees, an on‑ramp for practitioners who usually sit outside Beltway comment funnels.</p>



<p><strong>Security got real: the post‑quantum clock started ticking (again)</strong></p>



<p>The afternoon’s marquee: <strong>“Charting the Path to Post‑Quantum Cryptography.”</strong> Organizers didn’t soft‑pedal the threat model. “Harvest‑now, decrypt‑later” is no longer a thought experiment; the guidance for agencies and critical industries is to inventory, prioritize, and migrate—early. The program leaned on three load‑bearing facts: <strong>NIST launched PQC standardization in 2016</strong>; <strong>the first three PQC standards landed in 2024</strong> (FIPS 203/204/205); and <strong>the White House expects Federal agencies to complete transition by 2035</strong>—a long runway that still feels short once you start touching production systems. The <strong>WEF’s estimate that 20+ billion digital services</strong> will need upgrading over the next two decades added a sobering market‑scale dimension. Location‑wise, it unfolded next door at Capital One HQ’s Maplewood Hall. <strong>Translation:</strong> crypto agility stops being a slogan and becomes a Gantt chart.</p>



<p><strong>Why it matters:</strong> PQC migration is a decade‑plus grind, not a patch Tuesday. <strong>Organizations that start with asset discovery and dependency mapping now will save years later.</strong></p>



<p><strong>NATO’s classified‑adjacent huddle</strong></p>



<p>Defense had its own lane: <strong>“Advancing the Understanding of Defense‑Related Use Cases of Quantum Technologies Through NATO–Industry Collaboration.”</strong> Invitation‑only, hosted by Denmark and NATO, and staged upstairs at <strong>The Nest</strong> (1:00–5:00 p.m.). The brief was straightforward—surface concrete military use cases across computing, sensing, and comms; compare them to what industry can deliver; and do it inside the guardrails of the Transatlantic Quantum Community. Not every quantum session needs a press release; this one favored signal over noise.</p>



<p><strong>Finland showed up like a partner nation—and a market leader</strong></p>



<p>If there was a national brand that punched above its weight this week, it was <strong>Finland</strong>. QWC gave it pride of place with a <strong>Country Pavilion</strong> and a dedicated site hub promoting a large official delegation—government, research, and industry stitched together under the Team Finland umbrella. It felt less like a booth and more like a strategy: visibility, deal flow, and talent.</p>



<p>On substance, Finland had receipts. <strong>IQM Quantum Computers</strong>—founded out of Aalto—came into QWC fresh off a <strong>$320M (€275M) raise</strong>, pushing total funding to roughly <strong>$600M</strong> and cementing its status as Europe’s superconducting heavyweight. The company’s footprint is real: deliveries to <strong>Forschungszentrum Jülich</strong> (as part of JUNIQ) and joint development with <strong>VTT</strong> that put a <strong>20‑qubit</strong> system on the map in Espoo—both staging posts toward error‑corrected machines. Meanwhile <strong>Bluefors</strong>, Helsinki’s cryogenics champion, reminded everyone that dilution refrigerators are the <strong>picks and shovels</strong> of quantum. Finland’s thesis—pair a leading cryo supply chain with homegrown processors and public R&D—looked less like ambition and more like execution.</p>



<p><strong>Bootcamps: from microwaves to megatons</strong></p>



<p>QWC’s educational spine has quietly become one of its best assets. This year’s <strong>Bootcamps, Workshops & More</strong> menu skewed practical:</p>



<ul class="wp-block-list">
<li><strong>Quantum Network Essentials</strong> (how to go from islands of qubits to distributed systems).</li>



<li><strong>Practical Microwave Techniques for Superconducting Quantum Computers</strong> (because control electronics are a career).</li>



<li><strong>Basic Mathematics for Quantum Computing</strong> (linear algebra without the grad‑school haze).</li>



<li><strong>Quantum‑Centric Supercomputing</strong> with IBM and RPI (inside the early <strong>QCSC</strong> architecture).</li>



<li><strong>Quantum & Space: Technologies Transforming the Final Frontier</strong> (space‑borne timing, comms, and sensing).</li>



<li><strong>From Qubits to Kilowatts: The Quantum‑Energy Challenge</strong> (energy optimization and materials).</li>



<li><strong>Quantum Sensing: Market Intelligence and Commercialization</strong> (where the near‑term dollars may actually be).</li>



<li><strong>Preparing for a Quantum‑Centric Supercomputing Future in Life Sciences & Healthcare</strong> (pipelines that mix AI, HPC, and quantum). </li>
</ul>



<p>The through‑line: less mystique, more <strong>systems thinking</strong>. If 2023 was “what’s a qubit,” and 2024 was “what’s my use case,” <strong>2025 was “what breaks when we integrate this.”</strong></p>



<p><strong>Outreach that actually converts skeptics</strong></p>



<p>You could feel the tone shift with <strong>LabEscape</strong>, the world’s first science‑based, quantum‑themed escape room. Running <strong>free missions</strong> on site, the UIUC team turned quantum into something tactile, collaborative, and—heresy—fun. With <strong>~16,000 agents</strong> to date and <strong>98% five‑star ratings</strong>, the show‑within‑a‑show doubled as a stealth talent funnel. (Locate the mission space on the 7th floor and listen for the “aha.”)</p>



<p><strong>Startups, sharpen your decks</strong></p>



<p>QWC’s <strong>4th Annual Startup Pitch Competition</strong>—<strong>presented by Booz Allen</strong>—anchored late afternoon on day one (3:00–5:00 p.m.). The twist this year aligned with the broader zeitgeist: <strong>quantum x AI</strong> convergence as a commercialization wedge. The prize: <strong>$25,000</strong> plus Launchpad visibility and mentorship. For founders living between “pre‑seed promise” and “post‑quantum patience,” the pitch stage is where pilots get resourced.</p>



<p><strong>Inclusion wasn’t an afterthought—it got a room (and a bill)</strong></p>



<p>One of the week’s best signals was also one of its simplest: the <strong>Women Pioneers in Quantum Lunch</strong> on <strong>Thursday, Sept. 18</strong> at <strong>The Wren</strong> (Watermark Hotel). <strong>$35</strong>, an intimate 90 minutes, and the right mix of senior operators and rising talent. No awkward “women in tech” paneling—just networking with intent, tied to a program that put women across main stages and workstreams. If the industry wants a bigger bench, this is how you recruit it.</p>



<p>So what did QWC 2025 actually move?</p>



<p><strong>1) PQC is now program‑managed, not proselytized.</strong> With <strong>NIST’s FIPS 203/204/205 in hand</strong>, the question has shifted from “what to deploy” to “how to inventory, prioritize, and sequence migrations.” The <strong>2035</strong> mandate on the Federal side—paired with annual inventories through that period—set a long fuse that agencies and vendors can now plan against. The <strong>market‑scale</strong> signal (tens of billions of digital services that need upgrading) will drag budgets and board attention toward crypto agility tools, not just proofs of concept.</p>



<p><strong>2) The defense conversation is growing up.</strong> NATO’s closed‑door workshop cut through theater. <strong>Quantum sensing</strong> continues to look like the first operational wedge; <strong>secure comms</strong> and <strong>hybrid compute</strong> are close behind, but the acquisition clock is unforgiving. The presence of the <strong>Transatlantic Quantum Community</strong> shows how industrial policy and alliance politics intersect in very practical ways.</p>



<p><strong>3) Finland made a strategic case that others will copy.</strong> The <strong>Country Pavilion</strong> and coordinated delegation weren’t just branding—<strong>IQM’s fresh $320M</strong> and deliveries to <strong>Jülich</strong> and <strong>VTT</strong>, plus <strong>Bluefors’</strong> de facto standard position in cryogenics, gave buyers and partners a one‑stop view of Finland’s stack. The nation’s <strong>Quantum Flagship</strong> provides the connective tissue. Expect more country‑level plays like this next year.</p>



<p><strong>4) Education and pipelines got pragmatic.</strong> Bootcamps were geared to the engineers who will actually <strong>wire this into HPC centers, labs, and data flows</strong>—not just to theorists. That matters: the next year of progress will be won by people who can debug microwave lines at 3 a.m. and shepherd cryptographic inventories through change‑control meetings.</p>



<p>The open questions (and where to watch)</p>



<ul class="wp-block-list">
<li><strong>Migration debt:</strong> Will large enterprises treat PQC like Y2K—with a funded, deadline‑driven program—or like another “upgrade someday” security initiative? The <strong>2035</strong> horizon risks looking distant right up until it doesn’t. </li>



<li><strong>Supply chain:</strong> If quantum‑centric supercomputing really is the architecture of record, how quickly can vendors like IBM/RPI, cryo suppliers like <strong>Bluefors</strong>, and control‑electronics makers scale without bottlenecks? </li>



<li><strong>Geo‑strategy:</strong> Forums are nice; export controls aren’t. Can cross‑border research and commercialization outpace the politics that slice ecosystems into blocs? QWC’s <strong>International Forum</strong> suggested the will is there; the playbooks will be written in the next 12 months. </li>
</ul>



<p><strong>Bottom line:</strong> QWC 2025 traded hype for homework. <strong>Finland</strong> used the week to show what a coordinated national ecosystem looks like. <strong>NIST/OMB/WEF</strong> supplied the numbers that make executives sit up. And the community left with fewer buzzwords and more checklists. For an industry that’s still figuring out what “deployment” even means, that’s progress.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-287 post type-post status-publish format-standard has-post-thumbnail category-culture category-defense category-export category-governance category-quantum category-ai tag-quantum cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/OurQuantumFutureSomeAssemblyRequired-2-380x250.webp" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="Quantum World Congress" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/quantumworldcongress2025/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">September 19, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/quantumworldcongress2025/">QWC 2025: Policy heat, post‑quantum urgency, and a startup sprint in Tysons</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>
`,
    readingMinutes: 7,
    sticky: false,
  },
  {
    id: 266,
    slug: `new-nuclear-capital-2025`,
    date: `2025-09-18T10:10:00`,
    title: `New Nuclear Capital 2025: Wall Street’s fission test arrives in New York`,
    authorSlug: `angelnoworries-fi`,
    authorName: `Elizabeth Angel`,
    categorySlugs: ["defense", "export", "nuclear"],
    tagSlugs: ["nuclear"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-2-21.png`,
    excerpt: `New Nuclear Capital 2025 isn’t a science conference; it’s a credibility conference.`,
    contentHtml: `
<p class="has-drop-cap">New Nuclear Capital has always been more banker’s notebook than science fair. That’s the point. The industry doesn’t need another reactor explainer; it needs term sheets. As the 2025 edition geared up in New York, organizers framed it (again) around one hard question: how do you finance first‑of‑a‑kind nuclear when the market wants power <em>yesterday</em> and risk <em>never</em>? Last year’s program read like a syllabus for that puzzle—DOE loan guarantees, private infrastructure capital, utility appetite, and state policy levers—and 2025 doubled down as energy‑hungry AI data centers, steel, chemicals, and hydrogen projects went shopping for 24/7 electrons.</p>



<p><strong>Why 2025 hit different: policy certainty meets a demand shock</strong></p>



<p>Two tailwinds changed the finance conversation this year. </p>



<p><strong>First, policy clarity.</strong> The U.S. Treasury and IRS finalized rules for the <strong>technology‑neutral 45Y (PTC) and 48E (ITC)</strong> credits that now cover <strong>zero‑emission generation, including fission</strong>, plus stackable bonuses for domestic content and “energy communities.” That’s not trivia; it tells underwriters exactly how projects pencil and when credits can be <strong>transferred</strong> or—in some cases—<strong>taken via direct pay</strong>. Translation: more credible pro formas, less regulatory hand‑waving.</p>



<p><strong>Second, demand went vertical.</strong> AI‑driven data centers upended load forecasts. Goldman Sachs pegs incremental demand so steep that meeting it <em>entirely</em> with nuclear would imply <strong>85–90 GW</strong> of new capacity by 2030—far more than can realistically be delivered on that timeline, but a sharp proxy for the scale at stake. Expect more corporate offtakers to kick the tires on long‑dated nuclear PPAs, tolling deals, and even <strong>behind‑the‑meter</strong> microreactor concepts for campuses.</p>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
<p>Layer on geopolitics: at <strong>COP28</strong>, 20‑plus countries signed a declaration to <strong>triple nuclear capacity by 2050</strong>, a signal to multilaterals and export‑credit agencies that fission isn’t a pariah in climate finance anymore. That mindshare shift matters when you’re pitching risk committees.</p>
</blockquote>



<p><strong>The capital stack: how these deals actually close</strong></p>



<p><strong>Tax credits as keystone equity.</strong> Under 45Y/48E, developers can monetize credits <strong>without</strong> relying solely on their own tax appetite, thanks to <strong>transferability</strong>—a growing, liquid market that effectively lowers the weighted average cost of capital. Public entities and certain nonprofits can opt for <strong>elective pay</strong> on eligible credits, further widening the universe of buyers and hosts (universities, public power, water authorities). <strong>Pro tip for CFOs:</strong> model both credit sale discounts and intercreditor terms early; sloppy assumptions here sink debt sizing later.</p>



<p><strong>Title 17 as the debt spine.</strong> The <strong>DOE Loan Programs Office (LPO)</strong> gave bankers a template in 2024 with its <strong>$1.52B</strong> loan guarantee to restart <strong>Palisades</strong>—the first use of the Energy Infrastructure Reinvestment authority for nuclear. Expect LPO to remain the anchor lender for early projects, enabling bank tranches, private placements, or even securitizations once plants approach COD.</p>



<p><strong>Corporate offtake as the de‑risking wedge.</strong> Data‑center and heavy‑industry buyers want multi‑decade, 24/7 contracts with credible <strong>ESG</strong> optics. Nuclear finally fits that brief under the Treasury’s tech‑neutral rules. The watch item is standardization: can the market converge on bankable PPA language (outage risk, refueling schedules, curtailment rights) that lenders will repeatedly accept?</p>



<p><strong>The choke points: fuel and rulebooks</strong></p>



<p>Finance doesn’t live in spreadsheets alone.</p>



<p><strong>HALEU is the hourglass.</strong> Most advanced reactors need <strong>high‑assay low‑enriched uranium</strong>. The DOE pegs U.S. demand at <strong>~50 metric tons/year by 2035</strong>, while domestic output today is measured in hundreds of kilos. DOE has been seeding the supply chain with FOAs and contracts, but the gap remains the biggest “non‑financial” financial risk in every model. Lenders will haircut timelines until HALEU supply is contracted at scale.</p>



<p><strong>Licensing is evolving (slowly).</strong> The NRC’s <strong>Part 53</strong> rulemaking—meant to create a technology‑inclusive, risk‑informed pathway for advanced reactors—is still in flight, with a statutory deadline out to <strong>2027</strong>. Developers are threading projects through existing frameworks and exemptions in the interim, but until Part 53 lands, permitting assumptions will carry fat contingency.</p>



<p><strong>Why New York keeps showing up in nuclear finance</strong></p>



<p>If you’re sourcing capital, you go where the money lives. <strong>USNIC’s</strong> New Nuclear Capital franchise has made Manhattan its home; <strong>the 2024 agenda</strong> pulled in DOE/LPO, State and Commerce, utilities like Constellation and Southern, and a bench of infra investors—i.e., the decision‑makers who can actually close a deal. That cross‑section is the draw in 2025, too. Meanwhile, New York’s pro‑nuclear civil society (see <strong>Nuclear New York</strong>) has turned the city into a year‑round forum, from the <strong>NEI Nuclear Financing Summit</strong> in February to investor mixers and “Discovery Day” showcases. The result: a thicker network between developers and capital than you’ll find in most U.S. metros.</p>



<p><strong>What to watch for at New Nuclear Capital 2025</strong></p>



<p><strong>State‑level accelerants.</strong> Post‑COP momentum has nudged states to treat nuclear as climate infrastructure; anything that shortens interconnect, siting, and cost‑recovery cycles will show up in IRR deltas.</p>



<p><strong>First‑of‑a‑kind (FOAK) templates.</strong> Will we see standardized FOAK term sheets—clear allocation of construction and performance risk, defined step‑in rights, and a credible contingency plan for fuel? If so, copy‑paste gets a lot easier for the “nth‑of‑a‑kind.”</p>



<p><strong>Data‑center PPAs that actually clear IC.</strong> Big Tech has flirted with nuclear procurement; a signed, financeable offtake would ripple across the sector. Look for novel structures (hybrid tolling, capacity + carbon attributes) tailored to 24/7 compute. </p>



<p><strong>LPO + private debt co‑underwrites.</strong> If one or two projects announce blended stacks with clear credit boxes, more banks will get off the fence. </p>



<p><strong>HALEU contracting at volume.</strong> Watch for multi‑year fuel MOUs converting to binding volumes—without Russian enrichment anywhere in the chain. That’s the milestone credit committees actually need. </p>



<p><strong>The takeaway</strong></p>



<p><strong>New Nuclear Capital 2025 isn’t a science conference; it’s a credibility conference.</strong> With <strong>45Y/48E</strong> rules settled, <strong>credit transferability</strong> working, and <strong>LPO</strong> playing lender‑of‑first‑resort, the financing skeleton exists. The bottlenecks—<strong>HALEU</strong> and <strong>licensing</strong>—are surmountable but still write the long pole in every schedule. If New York produces even a few repeatable stacks (FOAK + offtake + fuel + debt), nuclear stops being a slide in a climate deck and becomes a genuine asset class for infra funds, utilities, and corporate buyers alike. <strong>That’s the moment the market has been waiting for.</strong></p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-266 post type-post status-publish format-gallery has-post-thumbnail category-defense category-export category-nuclear tag-nuclear post_format-post-format-gallery cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-2-21-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="new nuclear capital" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/new-nuclear-capital-2025/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">September 18, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/new-nuclear-capital-2025/">New Nuclear Capital 2025: Wall Street’s fission test arrives in New York</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>
`,
    readingMinutes: 5,
    sticky: false,
  },
  {
    id: 4384,
    slug: `africa-climate-week-2025-addis-grid-water-blended-finance`,
    date: `2025-09-07T10:10:00`,
    title: `Africa Climate Week 2025 (Addis Ababa): Grids, water, and the finance to build them`,
    authorSlug: `kim`,
    authorName: `Kim Henwood`,
    categorySlugs: ["energy"],
    tagSlugs: ["climate", "sustainability"],
    featuredImage: null,
    excerpt: `Here’s the grid-first, water-secure, blended-finance agenda that could actually deploy. The UNFCCC rebuilt its regional model this year…`,
    contentHtml: `
<p>Here’s the grid-first, water-secure, blended-finance agenda that could actually deploy.</p>



<p>The UNFCCC rebuilt its regional model this year into <strong>“Climate Weeks—Dialogues for Ambition and Implementation.”</strong> That’s not just branding. In <strong>Addis Ababa, Sept 1–6</strong>, Africa’s edition begins a two-week corridor (followed by <strong>Africa Climate Summit 2</strong>, Sept 8–10) where ministers, cities, utilities and financiers have to agree on what gets built <strong>now</strong>. Venue and dates, confirmed: <strong>Addis International Convention Center (AICC), Sept 1–6, 2025</strong>.</p>



<h1 id="the-three-decisions-that-matter-this-week" class="wp-block-heading">The three decisions that matter this week</h1>



<p><strong>1) Grids before gigs.<br></strong> You can’t add renewable gigawatts without wires. Expect permitting on <strong>transmission</strong>, <strong>advanced conductors</strong>, and <strong>dynamic line rating</strong> to dominate, alongside <strong>DER orchestration</strong> that shaves peaks while interconnection queues unwind. (UNFCCC’s Addis schedule hub sets the frame.)</p>



<p><strong>2) Water + heat as financeable infrastructure.<br></strong> Cities want <strong>non-revenue water</strong> fixes, modular reuse, and <strong>district cooling</strong>—projects that lower bills and mortality while unlocking private capital. The credible decks bundle <strong>MRV</strong>, tariff pathways, and <strong>parametric insurance</strong> to turn avoided losses into bankable cash flows.<a href="https://unfccc.int/topics/climate-weeks?utm_source=chatgpt.com"></a></p>



<p><strong>3) Blended finance leaves the PDF.<br></strong> Concessional first-loss + commercial tranches are moving from panel talk to <strong>term sheets</strong>—particularly for distribution upgrades and resilience retrofits. If your plan doesn’t show the cash cascade from meter to bond coupon, it’s not ready.</p>



<h2 id="what-to-watch-on-the-ground-today-through-saturday" class="wp-block-heading"><strong>What to watch on the ground (today through Saturday)</strong></h2>



<ul class="wp-block-list">
<li><strong>Tender language.</strong> Do new procurement docs pay for <strong>performance</strong> (loss reduction, degrees cooled) rather than equipment?</li>



<li><strong>Local content.</strong> Hardware is great; <strong>maintenance</strong> wins. Who’s training operators?</li>



<li><strong>Utility billing integration.</strong> If savings don’t show up on bills, the pilot dies.</li>
</ul>



<p><strong>Where/when to follow:</strong> UNFCCC’s participant brief and live <strong>Addis schedule</strong> will update session times and webcasts across the week.<a href="https://unfccc.int/topics/climate-weeks?utm_source=chatgpt.com"></a></p>



<p></p>



<p></p>
`,
    readingMinutes: 1,
    sticky: false,
  },
  {
    id: 4393,
    slug: `iyce-2025-budapest-youth-energy-prototypes`,
    date: `2025-08-10T10:10:00`,
    title: `IYCE 2025 (Budapest): Student energy research, real hardware, fast feedback`,
    authorSlug: `amywellington`,
    authorName: `Amy Wellington`,
    categorySlugs: ["defense"],
    tagSlugs: ["defense", "energy", "technology"],
    featuredImage: null,
    excerpt: `Ten years in, the International Youth Conference on Energy (IYCE) still feels like a secret: a student-led meeting…`,
    contentHtml: `
<p>Ten years in, the <strong>International Youth Conference on Energy (IYCE)</strong> still feels like a secret: a student-led meeting where <strong>posters have wires</strong> and the coffee breaks turn into lab tours. The <strong>10th edition returned to Budapest, Aug 5–9</strong>, with undergrads through PhDs field-testing ideas in storage, power electronics, and grid optimization. It’s academic, sure—but also unapologetically <strong>applied</strong>.</p>



<h2 id="what-stood-out-and-why-industry-should-care" class="wp-block-heading"><strong>What stood out (and why industry should care)</strong></h2>



<ul class="wp-block-list">
<li><strong>Storage without buzzwords.</strong> We saw careful <strong>battery-management algorithms</strong>, second-life pack balancing, and thermal schemes tied to efficiency and <strong>cost curves</strong>, not vibes.</li>



<li><strong>Power electronics that print money.</strong> High-efficiency converters, grid-forming inverters, and <strong>HIL (hardware-in-the-loop)</strong> results that would not embarrass a factory floor review.</li>



<li><strong>Forecasting that respects the grid.</strong> ML meets market design: forecasts wired to <strong>tariffs, reserve products,</strong> and <strong>derating realities</strong>—because megawatts don’t move on Kaggle scores.<br></li>
</ul>



<h2 id="the-quiet-superpower-reproducibility" class="wp-block-heading"><strong>The quiet superpower: reproducibility</strong></h2>



<p>IYCE leans hard into <strong>open data and code links</strong>. For recruiters, that means a talent pool that can document, test, and <strong>ship</strong>. For founders, it’s a place to source interns who reduce converter losses on Monday and draft the preprint by Friday.</p>



<p><strong>Dates/location:</strong> <strong>Aug 5–9, 2025, Budapest</strong> (Student Association of Energy).</p>



<p></p>
`,
    readingMinutes: 1,
    sticky: false,
  },
  {
    id: 4397,
    slug: `win-global-2025-london-workforce-policy-and-tours-that-turn-theory-into-practice`,
    date: `2025-07-19T10:10:00`,
    title: `WiN Global 2025 (London): workforce, policy—and tours that turn theory into practice`,
    authorSlug: `thiago`,
    authorName: `Thiago Ferreira`,
    categorySlugs: ["nuclear"],
    tagSlugs: ["nuclear", "programming"],
    featuredImage: null,
    excerpt: `The Women in Nuclear Global Conference arrived in London with a clear brief: scale nuclear by scaling people—skills,…`,
    contentHtml: `
<p class="has-drop-cap">The <strong>Women in Nuclear Global Conference</strong> arrived in London with a clear brief: scale nuclear by scaling <strong>people</strong>—skills, leadership, and inclusive teams. Core programming ran <strong>July 14–16</strong>, bracketing <strong>technical tours on July 17</strong> and <strong>cultural tours July 18</strong>—an unusually hands-on format that made policy panels tangible.</p>



<h2 id="what-cut-through" class="wp-block-heading"><strong>What cut through</strong></h2>



<ul class="wp-block-list">
<li><strong>Skills pipelines > slogans.</strong> Utilities and vendors pitched apprenticeships and mid-career transitions (ops → digital) as the real bottleneck fix.</li>



<li><strong>Policy literacy as a career moat.</strong> Sessions coached attendees to navigate licensing change control and supply-chain QA—because growth equals scrutiny.</li>



<li><strong>Tours as talent magnets.</strong> Site visits showcased real kit—turning newcomers into recruits faster than any brochure.</li>
</ul>



<h2 id="founder-takeaway" class="wp-block-heading"><strong>Founder takeaway:</strong></h2>



<p>If you’re hiring, show <strong>training paths</strong> and <strong>credentialing</strong> in your JD. The best candidates optimize for mobility, not just salary.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-4384 post type-post status-publish format-standard category-energy tag-climate tag-sustainability cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">September 7, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/africa-climate-week-2025-addis-grid-water-blended-finance/">Africa Climate Week 2025 (Addis Ababa): Grids, water, and the finance to build them</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	


<p></p>



<ul class="wp-block-list"></ul>
</div></div>
`,
    readingMinutes: 1,
    sticky: false,
  },
  {
    id: 4403,
    slug: `uncrewed-naval-systems-2025-london-autonomy-counter-uas`,
    date: `2025-07-17T10:11:57`,
    title: `Uncrewed Naval Systems (UK): Autonomy, counter-UAS, and plug-and-fight C2`,
    authorSlug: `dr-jens-gudmundsson`,
    authorName: `Dr Jens Gudmundsson`,
    categorySlugs: ["devices"],
    tagSlugs: [],
    featuredImage: null,
    excerpt: `Hosted July 15–16 at the Copthorne Tara Hotel, Kensington, UNS 2025 traded defense-expo theatrics for practical integration—AUV/USV payloads,…`,
    contentHtml: `
<p>Hosted <strong>July 15–16</strong> at the <strong>Copthorne Tara Hotel, Kensington</strong>, UNS 2025 traded defense-expo theatrics for practical integration—<strong>AUV/USV payloads</strong>, contested-spectrum comms, and human-on-the-loop control that commanders trust.</p>



<p><strong>Three takeaways</strong></p>



<ul class="wp-block-list">
<li><strong>Counter-UAS goes afloat.</strong> Layered RF sensing + EO/IR + soft-kill jamming is moving aboard patrol craft and auxiliaries as modular kits.</li>



<li><strong>API-first C2.</strong> “Plug-and-fight” mattered: open interfaces for third-party autonomy stacks beat closed suites every time.</li>



<li><strong>Logistics is doctrine.</strong> Spares, batteries, and salt-proof connectors decided which demos felt deployable.<br></li>
</ul>



<p><strong>Founder takeaway:</strong> Document your <strong>LPI/LPD comms</strong> posture and publish integration docs—no API, no sale.</p>



<p><br><strong>Dates/place:July 15–16, 2025, Kensington, London.</strong></p>
`,
    readingMinutes: 1,
    sticky: false,
  },
  {
    id: 4371,
    slug: `asme-energy-sustainability-2025-colorado-decarbonization-grid`,
    date: `2025-07-11T10:10:00`,
    title: `ASME Energy & Sustainability 2025 (Colorado): Decarbonization Meets Grid Reality`,
    authorSlug: `amywellington`,
    authorName: `Amy Wellington`,
    categorySlugs: ["energy"],
    tagSlugs: ["ai-optimization-for-operations", "asme-energy-sustainability-2025", "audit-ready-machine-learning", "behind-the-meter-orchestration", "biotech", "capacity-payments-and-ancillary-services", "climate-tech-execution-mode", "defense", "demand-flexibility-and-load-management", "grid-interconnection-queues", "industrial-decarbonization", "long-duration-energy-storage", "model-cards-and-governance", "nuclear", "peak-shaving-hybrids", "process-heat-electrification", "protection-studies-and-nerc-compliance", "resource-adequacy-markets", "scada-bms-plant-historians", "tariff-aware-dispatch", "technology", "thermal-storage-and-heat-pumps", "transformer-supply-constraints", "utility-programs-and-rate-cases", "waste-heat-recovery"],
    featuredImage: null,
    excerpt: `At ASME’s Energy & Sustainability Conference 2025, the mood was unmistakably operator-grade: fewer lofty pledges, more line-items that…`,
    contentHtml: `
<p>At <strong>ASME’s Energy & Sustainability Conference 2025</strong>, the mood was unmistakably operator-grade: fewer lofty pledges, more line-items that clear risk committees. Across three days (July 8–10) at The Westin Westminster—midway between Denver and Boulder—engineers, plant managers, and grid hands traded playbooks on how to squeeze real megawatts and measured CO₂ cuts out of stubborn hardware, tariffs, and interconnection queues.</p>



<p>Co-located with ASME’s Summer Heat Transfer Conference, ES 2025 doubled down on practical thermal systems, storage, and integration sessions that treated “decarbonization” as a systems-engineering problem, not a keynote slogan. </p>



<p><strong>Translation:</strong> if it doesn’t pencil on a P&L or pass a NERC audit, it didn’t get airtime.</p>



<h2 id="three-signals-that-mattered" class="wp-block-heading"><strong>Three signals that mattered</strong></h2>



<h3 id="1-grid-constraints-are-the-boss" class="wp-block-heading"><strong>1) Grid constraints are the boss</strong></h3>



<p>Interconnection was the off-agenda keynote. Attendees compared queue wait times like war stories, with transformer lead times and protection-study bottlenecks dictating everything from siting to sequencing. The near-term answer isn’t magic transmission; it’s <strong>demand flexibility</strong> and <strong>longer-duration storage</strong> stitched into capacity and resource-adequacy markets. That means: thermal + battery hybrids for peak-shaving, behind-the-meter orchestration that can be called by utilities, and load-flex bids bundled with verifiable telemetry. In short, design for the grid you have, not the one you were promised. (If you needed a reminder, the interconnection debate is consuming every power conference this year.)</p>



<h3 id="2-industrial-decarbonization-became-practical" class="wp-block-heading"><strong>2) Industrial decarbonization became practical</strong></h3>



<p>Process heat finally moved from white papers to work orders. Teams showed <strong>process-temperature maps</strong> to decide where heat pumps slot in today, when hybrid boilers make sense, and how waste-heat recovery pairs with tariff-aware dispatch. The vibe was “don’t rip and replace; <strong>layer and sequence</strong>.” A recurring pattern: low-temp heat pumps plus thermal storage for baseload, gas-backup for spikes, and supervisory control tuned to demand-charge landmines. That’s not as shiny as a greenfield plant, but it’s how brownfield industry cuts tons without tripping uptime.</p>



<h3 id="3-ai-without-theater" class="wp-block-heading"><strong>3) AI without theater</strong></h3>



<p>Forget AI stagecraft. The systems that got attention were <strong>optimization engines sitting on plant historians and BMS/SCADA</strong>, not vendor demo reels. Two features made buyers lean in: <strong>model cards</strong> (what’s the model, trained on what, with what limits?) and <strong>audit trails</strong> for every control recommendation because somebody will ask when the lights flicker. The message from operators was brutally simple: if your AI can’t survive a <strong>root-cause analysis</strong> or an insurance review, it won’t run in production.</p>



<h2 id="why-this-matters" class="wp-block-heading"><strong>Why this matters</strong></h2>



<p><strong>The decarbonization stack is colliding with the grid stack.</strong> ES 2025 underscored that climate tech milestones will be throttled by interconnect studies, transformer scarcity, and protection settings—not just capex. That flips the startup brief from “sell features” to “sell capacity, stability, and measurable avoidance.” For investors, it means underwriting projects with <strong>grid-aware timelines</strong> and defensible revenue tied to programs (capacity payments, ancillary services) rather than loose to “sustainability budgets.”</p>



<p><strong>Thermal is back in fashion.</strong> With SHTC next door, thermal folks filled rooms on heat exchangers, hybridization, and storage media that make heat pumps viable across more of the temperature curve. That’s where emissions are: process heat is the industrial elephant, and the elephant finally has a Gantt chart.<a href="https://event.asme.org/Events/media/library/resources/shtc/SHTC-2025-Final-Program.pdf?utm_source=chatgpt.com"> </a></p>



<p><strong>Academic-to-operator handoff improved.</strong> ES historically leans research-heavy; this year still had rigor (selected papers head to ASME journals), but presenters framed results in <strong>dispatch logic, tariff tables,</strong> and <strong>O&M</strong>—the lingua franca of plant finance. That’s the bridge from poster sessions to purchase orders.<a href="https://event.asme.org/ES-2025?utm_source=chatgpt.com"> </a></p>



<h2 id="onstage-notes-hallway-math" class="wp-block-heading"><strong>Onstage notes & hallway math</strong></h2>



<ul class="wp-block-list">
<li>Keynotes and tracks spanned buildings-to-utility scale integration, carbon capture, storage, and renewables integration, with Westminster ballrooms packed for sessions on grid integration and alternative energy conversion. The agenda density made “choose your own capstone” a daily ritual.</li>



<li>Co-location benefits were real: heat-transfer researchers swapped failure modes with plant engineers, accelerating the “lab to line” feedback loop. <strong>Less marketing, more measurement.</strong></li>
</ul>



<p>A line you heard more than once: <em>“Show me the audited kW and who pays for it.”</em> That’s the culture shift. Climate wins now have to survive <strong>rate cases, capacity accreditation,</strong> and <strong>insurance</strong>.</p>



<h2 id="founder-takeaway-sell-outcomes-not-dashboards" class="wp-block-heading"><strong>Founder takeaway: sell outcomes, not dashboards</strong></h2>



<p>If you’re building for this buyer, pin your claims to three ledgers:</p>



<ul class="wp-block-list">
<li><strong>Capacity payments</strong> or resource-adequacy value you can enroll and clear.</li>



<li><strong>Avoided demand charges</strong> with sub-hourly evidence and utility-grade telemetry.</li>



<li><strong>Cost per ton abated</strong> that beats the customer’s internal hurdle rate—and survives the CFO’s sensitivity analysis.</li>
</ul>



<p>Bring <strong>grid artifacts</strong> (interconnection status, relay settings, utility program IDs) to the first call. Bring <strong>model cards</strong> and <strong>audit trails</strong> to the second. And if your product touches controls, build for <strong>human-in-the-loop</strong> from day one.</p>



<h2 id="what-to-watch-next" class="wp-block-heading"><strong>What to watch next</strong></h2>



<ul class="wp-block-list">
<li><strong>Queue realism:</strong> Will utilities and ISOs carve out faster lanes for load-flex + storage hybrids while transmission crawls?</li>



<li><strong>Thermal storage commoditization:</strong> Expect more SKUs tuned to industrial temperature bands that integrate cleanly with heat pumps.</li>



<li><strong>Audit-ready AI:</strong> Vendors that make compliance and forensics a feature—not an afterthought—will win plant-floor trust.</li>
</ul>



<p><strong>Bottom line:</strong> ES 2025 swapped platitudes for execution. The winners aren’t the flashiest; they’re the ones who can <strong>co-optimize electrons, heat, and tariffs</strong>—and prove it</p>



<p><a href="http://linkedin.com/in/amwellin" data-type="link" data-id="linkedin.com/in/amwellin">Amy Wellington</a> is a reporter at Agora Media specializing in health, defense, emerging technologies and entertainment.</p>



<p></p>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 273,
    slug: `nato-summit-2025-the-hague-5-percent-spending-ukraine`,
    date: `2025-06-30T10:10:00`,
    title: `NATO Summit 2025 (The Hague): Spending to 5%—and a new era of hard choices`,
    authorSlug: `angelnoworries-fi`,
    authorName: `Elizabeth Angel`,
    categorySlugs: ["cybersecurity", "defense", "regulatory", "export", "nuclear"],
    tagSlugs: ["defense"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/54615269072_22fc35b406_c.jpg`,
    excerpt: `At The Hague, NATO leaders endorsed a path toward 5% of GDP on defence and security by 2035—recasting Europe’s procurement tempo, industrial policy, and cyber posture. Protests outside highlighted the politics of guns‑vs‑butter budgeting.`,
    contentHtml: `
<p class="has-drop-cap">NATO wrapped a high‑stakes summit with a headline commitment: <strong>move the Alliance toward spending 5% of GDP on defence and broader security by 2035</strong>. It’s the clearest signal yet that Europe intends to bulk up—financially, industrially, and digitally—after two years of war‑economy lessons from Russia. The decision sits at the top of the official <strong>Hague Summit Declaration</strong> and the Alliance’s post‑summit brief, which frame the 5% as a long‑term investment envelope under Article 3 duties.</p>



<p>This wasn’t abstract posturing. The <strong>Declaration</strong> and ministerial guidance spell out a split: <strong>3.5% for “core defence”</strong> (the kit and forces) and <strong>1.5% for defence‑ and security‑related investments</strong> (infrastructure and resilience, read: cyber, critical nodes, industrial base)—a scaffolding ministers trailed ahead of the leaders’ decision. </p>



<p>Inside the World Forum venue, the mood was brisk, bordering on transactional. Outside, <strong>protests filled The Hague’s streets</strong>—a reminder that the new spending era will meet domestic resistance across Europe’s coalition governments. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="whats-materially-different-after-the-hague" class="wp-block-heading">What’s materially different after The Hague</h3>



<h4 id="the-5-signal" class="wp-block-heading">The 5% signal</h4>



<p>Timelines and enforcement mechanisms remain fluid, but the <strong>direction of travel is unambiguous</strong>. European treasuries now have a benchmark that will shape <strong>multi‑year order books</strong> for air defence, artillery, and <strong>munitions stockpiles</strong>, with scrutiny shifting to bottlenecked supply chains and production lead times. Early moves followed fast: the <strong>Netherlands</strong> signalled a 2026 defence budget rise toward the goal, citing the 5% track. Expect copy‑paste announcements as national budgets roll. </p>



<h4 id="ukraine-stays-front-and-center" class="wp-block-heading">Ukraine stays front‑and‑center</h4>



<p><strong>Kyiv’s needs dominated the subtext.</strong> NATO’s official recap explicitly twinned the 5% decision to sustaining support for Ukraine; leaders also used the NATO‑Ukraine formats to underline air‑defence and ammunition pipelines. At the Summit’s <strong>Defence Industry Forum</strong>, <strong>Volodymyr Zelenskyy</strong> sharpened the sanctions message, urging partners to choke off <strong>foreign components</strong> still turning up inside Russian missiles and drones—an enforcement push that ties directly to the “security‑related” 1.5% bucket. </p>



<h4 id="cyber-as-a-real-war-domain" class="wp-block-heading">Cyber as a real war domain</h4>



<p>The summit week delivered a teachable moment: <strong>rail chaos near Schiphol</strong> and <strong>DDoS waves against Dutch municipal sites</strong> were investigated as sabotage and pro‑Russian nuisance attacks, underscoring why resilience is now budgeted, reported—and regulated. The <strong>5% framework</strong> elevates cyber from a slide to a line item. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="the-inside-game-procurement-tempo-and-industrial-policy" class="wp-block-heading">The inside game: procurement tempo and industrial policy</h3>



<p>The Hague made it plain: <strong>European defence is entering an industrial‑policy era.</strong> The 5% banner doesn’t just fatten toplines; it <strong>rewires how Europe buys</strong>—pointing towards:</p>



<ul class="wp-block-list">
<li><strong>Framework buys</strong> for air defence and munitions that prioritize <strong>serial production</strong> and cross‑border standardization.</li>



<li><strong>Capacity reservations</strong> in private industry (explosives, propellants, electronics, composites) to reduce lead‑time volatility.</li>



<li><strong>Resilience spending</strong> (the 1.5%) on <strong>cyber, energy, and transport</strong> infrastructure that keeps forces and factories online. </li>
</ul>



<p>The politics are jagged. <strong>Spain</strong> publicly pushed back on the 5% idea ahead of the summit, and even supportive capitals will face “guns‑vs‑butter” arguments as budgets rise. <strong>Protesters</strong> in The Hague hammered exactly that point. But the <strong>Declaration</strong> gives defence ministries a reference text to take to parliaments—and to industry. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="the-geopolitics-around-the-table" class="wp-block-heading">The geopolitics around the table</h3>



<p><strong>Russia’s war economy</strong> loomed over every session. The communiqués thread deterrence with sanctions enforcement and industrial ramp‑up. Side conversations inevitably touched <strong>Iran’s risk calculus</strong> amid Middle East jitters; even the street politics bent that way, with <strong>protests</strong> linking NATO’s hike to fears of a wider conflict. That’s uncomfortable optics, but also the strategic backdrop for the 5% logic. </p>



<p><strong>Security posture at home</strong> was maximal. The Dutch state ran <strong>Operation Orange Shield</strong>—the country’s largest security operation on record—locking down air, sea, rail, and cyber corridors around the <strong>World Forum</strong>. The scale was the message: the Alliance treats <strong>hybrid disruption</strong> as part of the threat surface, not a footnote. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="what-to-watch-next-and-what-it-means-for-builders" class="wp-block-heading">What to watch next (and what it means for builders)</h3>



<p><strong>1) Definition fights—what counts toward 5%.</strong><br>The split (3.5% “core” + 1.5% “related”) gives room to steer money into <strong>infrastructure and resilience</strong>, but expect robust debates—and audits—over definitions. <strong>NATO’s own topics page</strong> now spells out the framework; national statisticians and defence auditors will sharpen it in practice. For industry, the safe bet is to <strong>tie your offer to a named capability plan</strong> and a <strong>trackable readiness metric</strong>. </p>



<p><strong>2) Sanctions enforcement becomes procurement policy.</strong><br>Zelenskyy’s component‑tracking plea aligns with EU moves (the <strong>18th sanctions package</strong>) to target <strong>dual‑use leakage</strong>. Translation: <strong>compliance</strong> is a competitive edge. Firms that can prove their supply chains are clean—and help primes and governments police theirs—will win faster. </p>



<p><strong>3) Cyber budgets with teeth.</strong><br>From <strong>DDoS</strong> to <strong>rail cable sabotage</strong>, the summit week was a case study in hybrid pressure. Follow the <strong>NCIA</strong> and national cyber agencies for <strong>RFPs</strong> that blend detection, hardening, and incident response with <strong>measurable uptime</strong>. If you sell cyber, map directly to <strong>mission assurance</strong> for critical infrastructure. </p>



<p><strong>4) Industrial base acceleration.</strong><br>The fastest money will chase <strong>ammo lines</strong>, <strong>air‑defence interceptors</strong>, and <strong>propellant chemistry</strong>—but watch adjacent needs: <strong>power electronics</strong>, <strong>machine tools</strong>, <strong>additive manufacturing</strong>, <strong>composites</strong>, and <strong>NDT equipment</strong>. The moment favours <strong>serializable designs</strong> and <strong>digital QA</strong> that cut time‑to‑acceptance. (And yes, Europe will reward local content.) </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="founder-prime-contractor-note" class="wp-block-heading">Founder & prime contractor note</h3>



<p>If you build for defence, <strong>align to the spend split</strong>:</p>



<ul class="wp-block-list">
<li><strong>3.5% Core defence:</strong> show <strong>unit economics</strong> and <strong>ramp curves</strong> that survive a reliability and throughput audit.</li>



<li><strong>1.5% Security‑related:</strong> sell <strong>resilience</strong> with <strong>SLAs</strong> (hours, MTTR, cyber controls) that plug into national readiness dashboards.</li>



<li>For both: <strong>compliance and traceability</strong>—on <strong>sanctions</strong>, <strong>components</strong>, and <strong>cyber</strong>—are now features, not footnotes. The Hague just made them part of the contract.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<p>The <strong>Hague Summit</strong> didn’t just move a target; it moved the <strong>centre of gravity</strong>. <strong>5% by 2035</strong> reframes European defence as an industrial programme with <strong>procurement speed</strong>, <strong>resilience</strong>, and <strong>sanctions enforcement</strong> baked in. The street protests underscored the politics. The <strong>rail and web disruptions</strong> highlighted the threat surface. But the policy arc is set. For treasuries, it’s a 10‑year capex plan. For factories, it’s visibility. For startups, it’s a runway—<strong>if you can deliver faster, cheaper, and provably better.</strong></p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h4 id="sources-further-reading" class="wp-block-heading">Sources & further reading</h4>



<p class="has-drop-cap"><strong>National follow‑through:</strong> <strong>Netherlands</strong> budget signal toward the goal. <a href="https://www.bloomberg.com/news/articles/2025-09-16/dutch-boost-defense-spending-to-27-billion-after-nato-pledge?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">Bloomberg</a></p>



<p><a href="https://nl.usembassy.gov/nato-summit-2025-highlights/#:~:text=The%20Netherlands%20hosted%20the%202025,NATO%20in%20the%20years%20to">Photo</a></p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-4393 post type-post status-publish format-standard category-defense tag-defense tag-energy tag-technology cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">August 10, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/iyce-2025-budapest-youth-energy-prototypes/">IYCE 2025 (Budapest): Student energy research, real hardware, fast feedback</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>
`,
    readingMinutes: 5,
    sticky: false,
  },
  {
    id: 291,
    slug: `icone32-weihai-2025-nuclear-engineering-manufacturability`,
    date: `2025-06-28T22:20:00`,
    title: `ICONE32 (Weihai): Nuclear’s engineering summit leans hard into manufacturability`,
    authorSlug: `amywellington`,
    authorName: `Amy Wellington`,
    categorySlugs: ["export", "nuclear"],
    tagSlugs: ["nuclear"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-2-22.png`,
    excerpt: `ICONE32 (June 22–27, Weihai) focused on buildability: modularization, digital QA, and supply‑chain realism for advanced and conventional reactors.`,
    contentHtml: `
<p class="has-drop-cap">The <strong>32nd International Conference on Nuclear Engineering (ICONE32)</strong> landed in <strong>Weihai, Shandong</strong> with a familiar premise and a sharper edge: make nuclear designs <em>buildable</em>—and provably so. Co‑hosted by <strong>ASME</strong>, <strong>JSME</strong>, and the <strong>Chinese Nuclear Society (CNS)</strong>, ICONE remains the rare venue where elegant reactor concepts run a gauntlet of fabrication, inspection, and operations reality. The core program ran <strong>June 22–26, 2025</strong> in Weihai, with the <strong>ASME</strong> listing the broader conference window as <strong>June 22–27</strong>—a small but telling reminder that schedules, like designs, stretch when you start counting workshops, tours, and paperwork.</p>



<p>At a high level, ICONE is a technical backbone for the field: tracks span <strong>operations & maintenance</strong>, <strong>codes and licensing</strong>, <strong>thermal‑hydraulics</strong>, <strong>CFD</strong>, <strong>advanced manufacturing</strong>, <strong>SMRs/advanced reactors</strong>, and <strong>code verification & validation</strong>—a map that mirrors the discipline’s pipeline from CAD to as‑built to licensed.</p>



<h2 id="the-engineerings-reality-check-modularization-knows-its-limits" class="wp-block-heading">The engineering’s reality check: <strong>Modularization knows its limits.</strong></h2>



<p>Glossy renders are cheap; <strong>lift plans</strong>, <strong>weld sequences</strong>, and <strong>inspection access</strong> are not. Sessions circling <strong>Track 10 (Advanced Methods of Manufacturing)</strong> and <strong>Track 6 (Codes, Standards, Licensing & Regulatory Issues)</strong> kept returning to the question that actually kills schedules: can a module be lifted, aligned, welded, inspected, and re‑worked (if needed) <strong>without</strong> cracking the whole assembly back open? A module isn’t modular if you can’t <strong>route cabling</strong> or <strong>place NDE probes</strong> once it’s set. ICONE’s agenda gave that problem pride of place.</p>



<h2 id="digital-qa-as-competitive-edge" class="wp-block-heading"><strong>Digital QA as competitive edge.</strong></h2>



<p>Talk of “digital twins” mattered less than <strong>audit trails</strong>. Teams leaned into <strong>Track 14 (Computer Code Verification & Validation)</strong> and <strong>Track 6</strong> to show end‑to‑end documentation—<strong>from design requirements and CAD</strong> to <strong>shop travelers, weld data, and as‑built deviations</strong>—that reduce regulator back‑and‑forth and make EPCs breathe easier. Call it the <strong>quiet moat</strong>: if your V&V and inspection records are machine‑searchable and immutable, your time to approval shrinks. ASME frames ICONE as exactly this kind of <strong>technical, standards‑aligned</strong> forum.</p>



<h2 id="thermal-hydraulics-meets-economics" class="wp-block-heading"><strong>Thermal‑hydraulics meets economics.</strong></h2>



<p>Optimization wasn’t academic show‑and‑tell. <strong>Track 7 (Thermal‑Hydraulics)</strong> and <strong>Track 8 (CFD)</strong> drilled into <strong>pressure‑drop</strong> and <strong>pump sizing</strong> choices that swing <strong>LCOE</strong> and <strong>maintenance intervals</strong>. Shaving turbulence where it doesn’t buy safety, and adding margin where it does, is how advanced designs survive cost review. ICONE’s track list makes clear that <strong>hydraulics and economics</strong> are now the same conversation.</p>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
<p><strong>Founder note:</strong> If you sell tools into nuclear <strong>EPC/QA</strong>, don’t pitch dashboards. Show exactly how your data flows into <strong>code compliance</strong> and <strong>inspection record systems</strong>—and how it shortens close‑out.</p>
</blockquote>



<h2 id="why-weihai-mattered-this-year" class="wp-block-heading"><strong>Why Weihai mattered this year</strong></h2>



<p>Beyond venue logistics, the host ecosystem signaled scale. The <strong>CNS</strong> served as main sponsor, acknowledging support from heavyweights including <strong>China Huaneng Group</strong>, <strong>CNNC</strong>, <strong>SPIC</strong>, <strong>CGN</strong>, and <strong>Harbin Engineering University</strong>—a lineup that reads like the procurement network for anyone planning serial builds. For attendees, that translated into <strong>factory‑first</strong> conversations about fixtures, tolerances, and proof of repeatability.</p>



<p>ICONE’s remit has always included <strong>conventional fleet issues</strong>—aging management, O&M, and upgrades—alongside <strong>next‑gen</strong> work on <strong>SMRs, advanced reactors, and fusion</strong> (Track 4). But this edition leaned harder into <strong>manufacturability</strong> and <strong>digital QA</strong> than the brand’s marketing lets on. The <strong>ASME page</strong> itself breaks out <strong>Advanced Methods of Manufacturing</strong> and <strong>V&V</strong> as core tracks—an implicit promise that the conference is about <strong>buildability</strong> as much as <strong>breakthroughs</strong>.</p>



<h2 id="the-themes-that-cut-through" class="wp-block-heading"><strong>The themes that cut through</strong></h2>



<p><strong>1) Design for Manufacture & Assembly (DfMA) grew up.</strong><br>“Ship it as a module” only works if you’ve matched <strong>shop constraints</strong>, <strong>transport envelopes</strong>, and <strong>site cranes</strong>—and if field welds can be qualified <strong>before</strong> you pour foundations. Across papers and panels, DfMA looked less like a buzzword and more like a <strong>discipline</strong>, with checklists that covered <strong>NDE access</strong>, <strong>bolt torque clearances</strong>, and <strong>rework pathways</strong>. (If your model doesn’t know where the torque wrench lives, it’s not finished.) The <strong>manufacturing</strong> and <strong>codes</strong> tracks made that explicit.</p>



<p><strong>2) Traceability is the new velocity.</strong><br>Teams that can <strong>prove</strong> their build history—who welded what, with which filler, under what procedure, inspected by whom, with which calibrated instrument—can move faster because they argue less. <strong>V&V</strong> plus <strong>digital QA</strong> systems are evolving into <strong>regulatory UX</strong>: fewer meetings, fewer surprises, more confidence. ICONE provides the standards‑adjacent forum where those practices cross‑pollinate.</p>



<p><strong>3) Thermal margins will decide winners.</strong><br>In a market where <strong>pump power</strong> and <strong>maintenance</strong> hit OPEX, and <strong>pressure‑drop</strong> hits CAPEX (via component sizing), the winners are designs that <strong>tune flow</strong> without bloating parts lists. The presence of dedicated <strong>Thermal‑Hydraulics</strong> and <strong>CFD</strong> tracks keeps that debate anchored in data and validation rather than slides.</p>



<h2 id="tracks-to-watch-engineers-edition" class="wp-block-heading"><strong>Tracks to watch (engineer’s edition)</strong></h2>



<p><strong>Track 7/8: Thermal‑Hydraulics & CFD</strong> — Where cost, reliability, and safety jockey in the same equation.</p>



<p><strong>Track 10: Advanced Methods of Manufacturing</strong> — From additive overlays to automated welds and inline metrology; where “serializable” stops being a dream.</p>



<p><strong>Track 6: Codes, Standards, Licensing & Regulatory Issues</strong> — The reality check; the <strong>QA bible</strong> for EPCs and vendors.</p>



<p><strong>Track 14: Computer Code V&V</strong> — The bridge from simulation claims to <strong>regulator‑ready</strong> evidence.</p>



<p><strong>Track 4: SMRs, Advanced Reactors & Fusion</strong> — The design‑space frontier, with manufacturability pressure from day one.</p>



<h2 id="talent-pipeline-a-60-student-bet" class="wp-block-heading"><strong>Talent pipeline: a 60‑student bet</strong></h2>



<p>One quiet standout was ICONE’s <strong>student program</strong>: <strong>60 selected students</strong> received <strong>complimentary</strong> conference registration, <strong>shared accommodation</strong> (up to <strong>six nights</strong>, June 21–26), <strong>banquet</strong>, <strong>workshops</strong>, and a <strong>technical tour</strong>. It’s not just generous; it’s strategic. The fastest way to industrialize next‑gen reactors is to seed graduates who <strong>speak QA</strong>, <strong>read drawings</strong>, and <strong>argue code</strong>.</p>



<h2 id="proceedings-and-permanence" class="wp-block-heading"><strong>Proceedings and permanence</strong></h2>



<p>If you weren’t in the room, <strong>proceedings</strong> are your friend. The <strong>ASME Digital Collection</strong> houses ICONE proceedings—bread‑and‑butter for practitioners who need the derivations, correlations, and test setups behind “we optimized this.” Several outlets also flagged that <strong>ICONE32</strong> ran <strong>June 22–26</strong> in Weihai and is <strong>hosted by CNS</strong>, underscoring the core program window noted above.</p>



<h2 id="bottom-line" class="wp-block-heading"><strong>Bottom line</strong></h2>



<p><strong>ICONE32</strong> was less about the next glossy reactor slide and more about whether that slide can survive <strong>the factory, the field, and the file room</strong>. The agenda—and the culture around it—signal a discipline shifting from “can we design it?” to <strong>“can we build it, inspect it, and maintain it at scale?”</strong> For an industry chasing both <strong>new builds</strong> and <strong>life‑extension</strong>, that’s the only question that matters.</p>



<p><strong>If you’re a founder selling into nuclear EPC/QA</strong>, bring <strong>traceability</strong>, <strong>standards mapping</strong>, and <strong>shop‑floor constraints</strong> to your demo—or don’t bother booking the flight.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-4397 post type-post status-publish format-standard category-nuclear tag-nuclear tag-programming cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">July 19, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/win-global-2025-london-workforce-policy-and-tours-that-turn-theory-into-practice/">WiN Global 2025 (London): workforce, policy—and tours that turn theory into practice</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>



<p></p>
`,
    readingMinutes: 5,
    sticky: false,
  },
  {
    id: 297,
    slug: `london-biotechnology-show-2025-regulation-automation-uk-biotech`,
    date: `2025-06-20T10:10:00`,
    title: `London Biotechnology Show 2025: The year red biotech got pragmatic`,
    authorSlug: `olivia`,
    authorName: `Dr Olivia Lesslar`,
    categorySlugs: ["biotech"],
    tagSlugs: ["biotech"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-1-23.png`,
    excerpt: `While the show’s site now frontloads 2026, the 2025 edition (18–19 June) still landed real punches—automation, regulation, and the messy middle from lab to compliant production. Post‑event recaps highlighted lab automation and innovation…`,
    contentHtml: `
<p>The <strong>London Biotechnology Show 2025</strong> wasn’t about hype cycles; it was about <strong>shipping</strong>. Even as the official site pivots to the <strong>2026 edition (June 9–10, ExCeL)</strong>, the <strong>2025 outing on June 18–19</strong> left a clear fingerprint: automation to stretch talent, <strong>regulators in the room</strong>, and a fixation on scaling from shiny lab data to <strong>compliant production</strong>. ExCeL’s own listing stamps the dates, while the show homepage now pushes 2026 front and center.</p>



<p>On the ground, coverage pointed to an agenda that mixed <strong>automation</strong>, <strong>regulatory pathways</strong>, and <strong>innovation tracks</strong>—and an exhibition floor that doubled as a <strong>partner‑hunting</strong> exercise for UK pilots and procurement. Several post‑event write‑ups underscored the mix, from “innovation pathways” and policy to nearly <strong>100 exhibitors</strong> spanning lab gear, health tech, compliance, and logistics.</p>



<p>The show’s organizers and partners are already crowing about momentum: a recap pegged the <strong>2025 edition at 2,200+ attendees, 110 exhibitors, 90+ speakers and 140+ hosted buyer meetings</strong>, with speakers ranging from <strong>MHRA</strong> to cloud majors—exactly the blend you need when your bottlenecks are <strong>CMC, data lineage, and scale‑up</strong>.</p>



<p><strong>Signals to watch</strong></p>



<h4 id="automation-as-the-hiring-plan" class="wp-block-heading">Automation as the hiring plan</h4>



<p>With talent markets tight, UK teams are translating headcount constraints into <strong>automation roadmaps</strong>: liquid handlers to de‑bottleneck assay throughput, orchestration/scheduling to keep instruments warm 18 hours a day, and <strong>data lineage</strong> so validations survive audit. The point isn’t robots for robots’ sake; it’s protecting <strong>velocity per pound</strong> while getting <strong>GxP</strong>‑grade traceability. Session coverage repeatedly flagged <strong>lab automation</strong> alongside innovation tracks. </p>



<h4 id="regulatory-clarity-capital-access" class="wp-block-heading">Regulatory clarity = capital access</h4>



<p>Founders reported better meetings when <strong>MHRA/EMA</strong> plans were baked into the pitch—<strong>endpoints, IND/CTA timing, QC/CMC trajectories</strong>, and a credible validation story. The presence of <strong>MHRA voices</strong> on stage fed that vibe: when investors hear how your endpoints map to guidance and your <strong>tech transfer</strong> isn’t wishful thinking, cheque‑writing risk drops. </p>



<h4 id="london-as-a-testbed" class="wp-block-heading">London as a testbed</h4>



<p>The cluster math still works. With hospitals, translational hubs and service providers jammed into a few postcodes, <strong>pilot wins</strong> can spin rapidly into <strong>multi‑site studies</strong>—provided you loop <strong>CDMOs</strong> in early and lock capacity. MedCity’s snapshots of London’s life‑sciences districts (East London, White City, Knowledge Quarter, Paddington) are basically a menu of places to run that playbook. </p>



<h4 id="procurement-gravity" class="wp-block-heading">Procurement gravity</h4>



<p>Exhibitors didn’t just scan badges; they <strong>courted UK partners</strong> for <strong>pilot runs</strong> and procurement. Post‑event notes highlighted formal buyer–seller programs and hosted meetings—signals that vendor discovery is merging with <strong>actual purchasing pathways</strong> rather than staying in expo‑land. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="what-got-real-in-2025" class="wp-block-heading">What got real in 2025</h3>



<p><strong>Scaling is the product.</strong> The conversation drifted from platform philosophy to <strong>execution mechanics</strong>: how to validate hits with clean assay provenance, map <strong>CMC</strong> from tox lots to PPQ, and choose CDMOs that won’t bust timelines. That’s why <strong>automation</strong> and <strong>regulation</strong> shared top billing—both convert science into <strong>bankable milestones</strong>. Recaps stressed that mix (automation + innovation + policy), underscoring the show’s practical tilt. </p>



<p><strong>The exhibitor profile shifted.</strong> Alongside therapeutics and discovery platforms, 2025’s floor showcased <strong>lab automation, compliance, cold chain, and logistics</strong>—the unglamorous pieces that decide whether a press release becomes a patient. Several outlets pegged the exhibitor count near <strong>triple digits</strong>, reflecting a value chain that stretches from <strong>pipettes to pharmacovigilance</strong>. </p>



<p><strong>Policy proximity helps.</strong> With <strong>MHRA</strong> on the docket and City Hall cheerleading growth, London’s show is morphing into a <strong>translational pit‑stop</strong>: you can meet a regulator, a CDMO, a hospital partner and a compute vendor in the same corridor. For startups, that compresses the loop from <strong>data → design → dossier</strong>. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="field-guide-how-to-engage-and-win-next-year" class="wp-block-heading">Field guide: how to engage (and win) next year</h3>



<ul class="wp-block-list">
<li><strong>Automate with intent.</strong> Bring a <strong>three‑column plan</strong> to meetings: <em>bottleneck → tool (liquid handler/orchestrator) → audit trail</em>. Layer in <strong>metadata capture</strong> so your DMS/ELN <strong>proves</strong> lineage during MHRA queries. Coverage explicitly put <strong>automation</strong> on the main program—not a sidecar. </li>



<li><strong>Pre‑wire regulators.</strong> Lead with <strong>endpoint rationale</strong>, <strong>decentralized ops</strong> where appropriate, and a <strong>CMC ladder</strong> (tech‑transfer steps, comparability). Name the guidance you’re following; if MHRA or EMA have spoken on it, cite and move on. </li>



<li><strong>Lock CDMO time early.</strong> Your Series B story should include <strong>slot reservations</strong>, not “we’ll shop after POC.” Use the show to triangulate <strong>capacity + capability + geography</strong>—and document a <strong>rapid tech‑transfer</strong> plan.</li>



<li><strong>Make London your pilot lab.</strong> Use MedCity’s cluster map to pick a <strong>hospital partner</strong> and <strong>translational unit</strong>; show how a successful pilot rolls into <strong>scalable supply</strong> with your CDMO already in the loop. </li>



<li><strong>Treat buyer meetings like diligence.</strong> Hosted buyer programs at LBS aren’t just networking; they’re warm procurement funnels. Arrive with <strong>unit economics</strong>, <strong>quality docs</strong> and <strong>SLA terms</strong> ready to discuss. </li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="why-it-matters" class="wp-block-heading">Why it matters</h3>



<p>Between <strong>NHS partnerships</strong> and a slowly thawing <strong>capital pool</strong>, <strong>2025 is a prove‑it‑or‑pivot year</strong> for UK red biotech. London Biotech 2025 captured that executional mood: <strong>automation</strong> to stretch teams, <strong>regulatory clarity</strong> to unlock capital, and <strong>CDMO realism</strong> to keep timelines honest. With the 2026 edition already live on the homepage, the homework for founders is obvious: <strong>show the data, show the process, show the path to scale</strong>—and bring the partners who can make it real.</p>



<h4 id="automation-as-the-hiring-plan-2" class="wp-block-heading">Automation as the hiring plan</h4>



<p>With talent markets tight, UK teams are translating headcount constraints into <strong>automation roadmaps</strong>: liquid handlers to de‑bottleneck assay throughput, orchestration/scheduling to keep instruments warm 18 hours a day, and <strong>data lineage</strong> so validations survive audit. The point isn’t robots for robots’ sake; it’s protecting <strong>velocity per pound</strong> while getting <strong>GxP</strong>‑grade traceability. Session coverage repeatedly flagged <strong>lab automation</strong> alongside innovation tracks. </p>



<h4 id="regulatory-clarity-capital-access-2" class="wp-block-heading">Regulatory clarity = capital access</h4>



<p>Founders reported better meetings when <strong>MHRA/EMA</strong> plans were baked into the pitch—<strong>endpoints, IND/CTA timing, QC/CMC trajectories</strong>, and a credible validation story. The presence of <strong>MHRA voices</strong> on stage fed that vibe: when investors hear how your endpoints map to guidance and your <strong>tech transfer</strong> isn’t wishful thinking, cheque‑writing risk drops. </p>



<h4 id="london-as-a-testbed-2" class="wp-block-heading">London as a testbed</h4>



<p>The cluster math still works. With hospitals, translational hubs and service providers jammed into a few postcodes, <strong>pilot wins</strong> can spin rapidly into <strong>multi‑site studies</strong>—provided you loop <strong>CDMOs</strong> in early and lock capacity. MedCity’s snapshots of London’s life‑sciences districts (East London, White City, Knowledge Quarter, Paddington) are basically a menu of places to run that playbook. </p>



<h4 id="procurement-gravity-2" class="wp-block-heading">Procurement gravity</h4>



<p>Exhibitors didn’t just scan badges; they <strong>courted UK partners</strong> for <strong>pilot runs</strong> and procurement. Post‑event notes highlighted formal buyer–seller programs and hosted meetings—signals that vendor discovery is merging with <strong>actual purchasing pathways</strong> rather than staying in expo‑land. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="what-got-real-in-2025-2" class="wp-block-heading">What got real in 2025</h3>



<p><strong>Scaling is the product.</strong> The conversation drifted from platform philosophy to <strong>execution mechanics</strong>: how to validate hits with clean assay provenance, map <strong>CMC</strong> from tox lots to PPQ, and choose CDMOs that won’t bust timelines. That’s why <strong>automation</strong> and <strong>regulation</strong> shared top billing—both convert science into <strong>bankable milestones</strong>. Recaps stressed that mix (automation + innovation + policy), underscoring the show’s practical tilt. </p>



<p><strong>The exhibitor profile shifted.</strong> Alongside therapeutics and discovery platforms, 2025’s floor showcased <strong>lab automation, compliance, cold chain, and logistics</strong>—the unglamorous pieces that decide whether a press release becomes a patient. Several outlets pegged the exhibitor count near <strong>triple digits</strong>, reflecting a value chain that stretches from <strong>pipettes to pharmacovigilance</strong>. </p>



<p><strong>Policy proximity helps.</strong> With <strong>MHRA</strong> on the docket and City Hall cheerleading growth, London’s show is morphing into a <strong>translational pit‑stop</strong>: you can meet a regulator, a CDMO, a hospital partner and a compute vendor in the same corridor. For startups, that compresses the loop from <strong>data → design → dossier</strong>. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="field-guide-how-to-engage-and-win-next-year-2" class="wp-block-heading">Field guide: how to engage (and win) next year</h3>



<ul class="wp-block-list">
<li><strong>Automate with intent.</strong> Bring a <strong>three‑column plan</strong> to meetings: <em>bottleneck → tool (liquid handler/orchestrator) → audit trail</em>. Layer in <strong>metadata capture</strong> so your DMS/ELN <strong>proves</strong> lineage during MHRA queries. Coverage explicitly put <strong>automation</strong> on the main program—not a sidecar. </li>



<li><strong>Pre‑wire regulators.</strong> Lead with <strong>endpoint rationale</strong>, <strong>decentralized ops</strong> where appropriate, and a <strong>CMC ladder</strong> (tech‑transfer steps, comparability). Name the guidance you’re following; if MHRA or EMA have spoken on it, cite and move on. </li>



<li><strong>Lock CDMO time early.</strong> Your Series B story should include <strong>slot reservations</strong>, not “we’ll shop after POC.” Use the show to triangulate <strong>capacity + capability + geography</strong>—and document a <strong>rapid tech‑transfer</strong> plan.</li>



<li><strong>Make London your pilot lab.</strong> Use MedCity’s cluster map to pick a <strong>hospital partner</strong> and <strong>translational unit</strong>; show how a successful pilot rolls into <strong>scalable supply</strong> with your CDMO already in the loop. </li>



<li><strong>Treat buyer meetings like diligence.</strong> Hosted buyer programs at LBS aren’t just networking; they’re warm procurement funnels. Arrive with <strong>unit economics</strong>, <strong>quality docs</strong> and <strong>SLA terms</strong> ready to discuss. </li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="why-it-matters-2" class="wp-block-heading">Why it matters</h3>



<p>Between <strong>NHS partnerships</strong> and a slowly thawing <strong>capital pool</strong>, <strong>2025 is a prove‑it‑or‑pivot year</strong> for UK red biotech. London Biotech 2025 captured that executional mood: <strong>automation</strong> to stretch teams, <strong>regulatory clarity</strong> to unlock capital, and <strong>CDMO realism</strong> to keep timelines honest. With the 2026 edition already live on the homepage, the homework for founders is obvious: <strong>show the data, show the process, show the path to scale</strong>—and bring the partners who can make it real.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-4403 post type-post status-publish format-standard category-devices cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">July 17, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/uncrewed-naval-systems-2025-london-autonomy-counter-uas/">Uncrewed Naval Systems (UK): Autonomy, counter-UAS, and plug-and-fight C2</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">		<div class="sight-block-portfolio  sight-block-portfolio-id-6a01b9247b755 sight-block-portfolio-layout-justified">
				<div class="sight-portfolio-area sight-portfolio-area-lightbox sight-last-row-justified">

		<div class="sight-portfolio-area__outer">
			<div class="sight-portfolio-area__main" >
							</div>
		</div>
	</div>
			</div>

		<style>		.sight-block-portfolio-id-6a01b9247b755 {
			--sight-portfolio-area-grid-image-height: 260px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b9247b755 {
				--sight-portfolio-area-grid-image-height: 260px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b9247b755 {
				--sight-portfolio-area-grid-image-height: 200px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b9247b755 {
				--sight-portfolio-area-grid-image-height: 100px;
			}
		}
				.sight-block-portfolio-id-6a01b9247b755 {
			--sight-portfolio-area-grid-gap: 15px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b9247b755 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b9247b755 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b9247b755 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
		</style>
		</div></div>
`,
    readingMinutes: 7,
    sticky: false,
  },
  {
    id: 260,
    slug: `bio-international-2025-boston-partnering-ai-deals`,
    date: `2025-06-20T10:10:00`,
    title: `BIO International 2025 (Boston): Partnering is back—and it’s algorithmic`,
    authorSlug: `thiago`,
    authorName: `Thiago Ferreira`,
    categorySlugs: ["ai"],
    tagSlugs: ["ai", "artificial-intelligence", "technology"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-4-22.png`,
    excerpt: `BIO International 2025 returned to Boston with a deal-making surge. Here’s what actually moved: AI target-ID, precision platforms, and capital-efficient clinical design.`,
    contentHtml: `
<p class="has-drop-cap">No glow sticks, no hype parade—just <strong>deal math as far as the eye could see</strong>. At the <strong>BIO International Convention 2025</strong> (June 16–19), the Boston Convention & Exhibition Center became a hive of <strong>BIO Partnering™</strong> cubbies, room blocks, and impromptu hallway term sheets. The organizers’ own scorecard tells the story: <strong>~21,600 registrants</strong> and a <strong>record 66,308 partnering meetings</strong>, with the official program literally scheduling <strong>“BIO Partnering™ Meetings” all day, every day</strong>. It’s not a conference; it’s an industrial‑scale matchmaker.</p>



<p>The through‑line on the floor: <strong>biopharma wants speed without runaway burn</strong>, and <strong>AI‑first startups are learning to speak validation</strong>. The hottest conversations clustered around <strong>AI‑driven target discovery</strong>, <strong>precision oncology</strong>, and <strong>capsid engineering</strong> from the gene therapy crowd—backed by an agenda with explicit <strong>AI & Digital Health</strong>, <strong>Oncology</strong>, and <strong>Biomanufacturing</strong> tracks.</p>



<p>Below, five takeaways that actually moved the needle.</p>



<p>1) AI’s grown‑up table moment</p>



<p>Buyers weren’t paying a premium for “<strong>AI</strong>” as a menu item. They were underwriting <strong>validated hits</strong>, <strong>clean assay packages</strong>, and <strong>translatability</strong>—with partnering slots thick with <strong>joint‑development frameworks</strong> that tie milestone checks to <strong>biomarker‑driven</strong> gates and <strong>adaptive trial</strong> triggers. BIO’s own daily brief hammered the collaboration theme, while sessions and recaps took a sober line: AI is <strong>across the value chain</strong>, but <strong>data quality and provenance</strong> are the bottleneck. In other words, <strong>demo rooms lost to data rooms</strong>.</p>



<p>What backs this up in the program: <strong>AI & Digital Health</strong> features dotted every day (from IP questions about <strong>inventions involving AI</strong> to hands‑on “augmented medicines” demos), and company presentations leaned heavily on <strong>target ID</strong> and <strong>model‑supported</strong> claims rather than “AI pixie dust.”</p>



<p><strong>Practical read:</strong> If you can’t <strong>show assay lineage, orthogonal confirmation, and bias checks</strong>, your “AI” won’t clear diligence.</p>



<p>2) Data rooms beat demo rooms</p>



<p>The founders who got traction arrived with <strong>IND‑enabling</strong> packets that looked <strong>submission‑grade</strong>: <strong>GLP tox</strong> or clear plans, <strong>CMC</strong> readiness, and <strong>realistic powering</strong> assumptions. Investors still want <strong>platform potential</strong> (multi‑asset upside), but this cycle puts <strong>target–disease fit</strong> ahead of platform poetry. BIO’s schedule and floor flow reinforced that bias: <strong>Company Presentations</strong> and <strong>Start‑Up Stadium</strong> time was precious—and the winners came with <strong>line‑of‑sight to clinic</strong>, not just a great deck.</p>



<p><strong>What that means:</strong> Carry <strong>module‑ready CMC</strong> notes and a <strong>trial‑design one‑pager</strong> to partnering. “We’ll figure it out later” is out.</p>



<p>3) Manufacturing is a board topic (and a partnering topic)</p>



<p>BIO used to relegate <strong>CMC</strong> to side rooms. Not this year. <strong>Biomanufacturing</strong> and “<strong>Beyond the Contract: Building Successful Biotech Partnerships</strong>” sessions drew standing rooms—because sponsors now treat <strong>process as product</strong>. Expect earlier <strong>tech transfers</strong>, <strong>modular bioprocess</strong> strategies, and <strong>CDMO slots locked</strong> well ahead of POC. If you’re drafting an S‑1 for late ’25/early ’26, assume <strong>“CMC‑forward”</strong> will be a section header.</p>



<p>Boston’s cluster makes that feasible: a dense belt of <strong>CDMOs, CROs, and trial networks</strong> sits within a ride‑share of the BCEC and Kendall. <strong>MassBio’s 2025 snapshot</strong> still pegs Massachusetts as a top‑tier hub (even amid a tougher funding year), which is why the <strong>BCEC</strong> was the perfect factory‑floor for partnering this June.</p>



<p>4) Regulators ≠ roadblocks</p>



<p>The vibe on <strong>endpoints, adaptive designs, and decentralized ops</strong> was conversational rather than combative. BIO’s session slate included <strong>clinical design</strong> modules explicitly covering <strong>adaptive</strong> and <strong>decentralized approaches</strong>—a mirror of FDA’s existing <strong>DCT guidance</strong>, which sets expectations for remote data capture, safety monitoring, and site responsibilities. Net effect: if your <strong>real‑world data</strong> is clean, bias‑aware, and protocol‑anchored, <strong>doors open faster</strong> than they did a few cycles ago.</p>



<p>Bring <strong>endpoint rationales</strong> and <strong>DCT mapping</strong> to the table. “We’ll comply if needed” won’t cut it; show <strong>how</strong> you comply.</p>



<p>5) Capsids & cancer: the quiet magnet tracks</p>



<p>Two themes quietly pulled a lot of partnering gravity:</p>



<p><strong>Capsid engineering.</strong> The gene‑therapy crowd came hunting—and pitching. Exhibitor and presenting‑company blurbs showcased <strong>AAV capsid</strong> work (novel tropism, NHP data, manufacturability), and buyers showed up with <strong>transduction & biodistribution</strong> checklists. Expect more <strong>licensing‑plus‑options</strong> constructs here. </p>



<p><strong>Precision oncology.</strong> From <strong>KPMG’s</strong> “practice gap” session to disease‑area breakouts, oncology remained the center of mass—now with stricter demands for <strong>biomarker strategy</strong> and <strong>trial enrichment</strong> to de‑risk spend. </p>



<p>The Boston effect</p>



<p>Holding BIO in Boston isn’t just convenient; it’s <strong>time‑to‑clinic arbitrage</strong>. <strong>Trial sites</strong>, <strong>Kendall Square talent</strong>, and a thick web of <strong>service providers</strong> compress iteration loops—despite a softer ’25 funding tape. <strong>MassBio’s Industry Snapshot</strong> highlights the cluster’s sheer depth even as it warns about venture pullback, which explains the <strong>partnering pragmatism</strong> on display: spend smarter, not larger.</p>



<p>If you’re planning 2026: how to engage (and win) at BIO‑scale</p>



<p><strong>Capsid crowd:</strong> arrive with <strong>NHP biodistribution</strong> summaries and <strong>immunogenicity</strong> plans; oncology teams, have <strong>companion‑diagnostic</strong> paths and <strong>tissue access</strong> solved.</p>



<p><strong>Carry the dossier, not the demo.</strong> Make your partnering packet <strong>QA‑able</strong>: assay provenance, blinded validations, and a <strong>CMC ladder</strong> (from tox lots to PPQ). Your room will have someone who reads it.</p>



<p><strong>Price risk into milestones.</strong> For AI‑led target plays, tie milestone tranches to <strong>pre‑specified biomarkers</strong>, <strong>adaptive triggers</strong>, and <strong>early futility rules</strong>.</p>



<p><strong>Pick a supply chain early.</strong> Have at least <strong>two CDMOs</strong> scoped and a <strong>tech‑transfer Gantt</strong> ready to share. The <strong>Biomanufacturing</strong> rooms rewarded that prep. </p>



<p><strong>Meet regulators where they are.</strong> Map your <strong>DCT</strong> and <strong>RWD</strong> plans to <strong>FDA’s guidance</strong>; bring a one‑slide signal‑to‑noise argument for your endpoints. </p>



<p>Why it matters</p>



<p>This cycle’s winners won’t just <strong>have models</strong>; they’ll <strong>have molecules and manufacturing</strong> lined up. BIO 2025’s partnering floor made that explicit: <strong>AI is table stakes</strong>, but <strong>evidence and execution write the checks</strong>. With partnering at record volume and Boston’s ecosystem compressing cycle time, the bar is higher—and clearer—than it’s been in years.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-4371 post type-post status-publish format-standard category-energy tag-ai-optimization-for-operations tag-asme-energy-sustainability-2025 tag-audit-ready-machine-learning tag-behind-the-meter-orchestration tag-biotech tag-capacity-payments-and-ancillary-services tag-climate-tech-execution-mode tag-defense tag-demand-flexibility-and-load-management tag-grid-interconnection-queues tag-industrial-decarbonization tag-long-duration-energy-storage tag-model-cards-and-governance tag-nuclear tag-peak-shaving-hybrids tag-process-heat-electrification tag-protection-studies-and-nerc-compliance tag-resource-adequacy-markets tag-scada-bms-plant-historians tag-tariff-aware-dispatch tag-technology tag-thermal-storage-and-heat-pumps tag-transformer-supply-constraints tag-utility-programs-and-rate-cases tag-waste-heat-recovery cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">July 11, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/asme-energy-sustainability-2025-colorado-decarbonization-grid/">ASME Energy & Sustainability 2025 (Colorado): Decarbonization Meets Grid Reality</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 276,
    slug: `ans-2025-chicago-boring-is-beautiful-nuclear`,
    date: `2025-06-19T10:10:00`,
    title: `ANS Annual Conference 2025 (Chicago):`,
    authorSlug: `tony-long`,
    authorName: `Tony Long`,
    categorySlugs: ["export", "manufacturing", "materials", "transport"],
    tagSlugs: ["manufacturing", "nuclear"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-1-22.png`,
    excerpt: `The mood turned quietly bullish: utilities want capacity, OEMs want repeatable designs, and regulators want fewer surprises. Call it nuclear’s boring‑is‑beautiful turn.`,
    contentHtml: `
<p>The American Nuclear Society’s <strong>2025 Annual Conference</strong> didn’t roar so much as hum—efficiently. In the warren of ballrooms at the Chicago Marriott Downtown (June 15–18), the industry consensus was stark: <strong>utilities want new capacity</strong>, <strong>OEMs want repeatable designs</strong>, and <strong>regulators want fewer surprises</strong>. Add in two co‑located technical heavyweights—<strong>PSA 2025</strong> (probabilistic safety) and <strong>NPIC&HMIT 2025</strong> (I&C and human–machine interface)—and you had the year’s most pragmatic checkpoint on how fission scales from memo to megawatts. </p>



<p>The program backed that vibe: a regulator‑and‑industry‑heavy plenary slate—<strong>including an NRC commissioner</strong>—plus a dense grid of “hot topic” sessions and executive forums. Translation: less chest‑thumping, more <strong>change‑control</strong>, <strong>fuel logistics</strong>, and <strong>QA artifacts</strong> you can take to an auditor. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="the-three-conversations-that-mattered" class="wp-block-heading">The three conversations that mattered</h3>



<h4 id="1-one-and-done-licensing-is-over-lifecycle-governance-is-in" class="wp-block-heading">1) “One‑and‑done” licensing is over; lifecycle governance is in.</h4>



<p>Panels leaned into <strong>living safety cases</strong> and <strong>digital‑twin‑backed change management</strong>—not as buzzwords, but as the way fleets stay coherent over decades. With <strong>PSA</strong> next door and <strong>NPIC&HMIT</strong> across the hall, configuration control turned into a cross‑discipline sport: risk models informing surveillance intervals; I&C updates packaged with V&V breadcrumbs; and site‑to‑site <strong>version drift</strong> treated as an existential hazard for SMR developers. If you’re an SMR hopeful without a plan to <strong>freeze and fork</strong> configurations across multiple sites, you’re already behind. (The official program’s “Plenaries/Executive Sessions” structure made this governance thread hard to miss.) </p>



<h4 id="2-supply-chains-are-becoming-strategic-assets" class="wp-block-heading">2) Supply chains are becoming strategic assets.</h4>



<p>No one was impressed by slideware. The winners surfaced <strong>dual‑sourcing</strong>, <strong>QA depth</strong>, and <strong>realistic lead times</strong>—and arrived with <strong>material traceability</strong> that maps into utility ERPs. The exhibitor wall told the rest of the story: <strong>EPRI, Sargent & Lundy, SEL, Yokogawa</strong> and a phalanx of labs (Argonne, ORNL, PNNL, Sandia) signaling that <strong>predictability beats peak output</strong>. If your supply claim can’t be traced from mill cert to module, it didn’t travel far in Chicago. </p>



<h4 id="3-fuel-cycles-move-center-stage" class="wp-block-heading">3) Fuel cycles move center stage.</h4>



<p>Fuel availability—<strong>including HALEU pathways</strong>—plus <strong>transport containers</strong> and <strong>enrichment timelines</strong> graduated from sidebars to <strong>P&L items</strong>. Sponsors and exhibitors such as <strong>Urenco</strong> and <strong>Global Laser Enrichment</strong> were visible on the program pages, and hallway traffic reflected it: more talk of long‑dated contracts, take‑or‑pay structures, and public‑private smoothing mechanisms to absorb volatility. Detection vendors like <strong>Mirion</strong> rounded out the ecosystem picture. Expect <strong>more fuel MOUs to go binding</strong> as utilities firm roadmaps. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="why-this-year-felt-different" class="wp-block-heading">Why this year felt different</h3>



<p><strong>Less evangelism, more execution.</strong> Utilities arrived with <strong>bundled roadmaps</strong>: life extensions and uprates for the existing fleet, <strong>selective new build</strong>, and grid‑aware constraints (interconnection, <strong>N‑1 security</strong>) all in the same plan. It’s not that the industry lost ambition; it <strong>lost patience</strong> for anything that isn’t bankable. Official ANS previews even flagged “hot‑topic technical sessions” and popular plenaries over generic rah‑rah. </p>



<p><strong>AI/data‑center demand made “firm” fashionable again.</strong> You couldn’t walk two booths without hearing “baseload”—and not in a nostalgic tone. The <strong>IEA’s April 2025</strong> analysis of AI‑driven electricity demand showed up in slides and small talk alike. Whatever you think of the precise forecasts, the directional signal is the same: <strong>24/7 load growth</strong> is pulling nuclear into resource plans faster than many budgeted for.</p>



<p><strong>Regulators ≠ roadblocks.</strong> The presence of an <strong>NRC commissioner</strong> on the opening plenary and the cross‑pollination from <strong>PSA/NPIC&HMIT</strong> made for a more <strong>conversational</strong> tone around endpoints, software common cause failure, and digital design changes. The subtext: “Show your evidence, show your maintenance of safety case, and we’ll talk.”</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="field-notes-for-builders-and-buyers" class="wp-block-heading">Field notes for builders and buyers</h3>



<p><strong>If you’re an SMR or uprate vendor:</strong></p>



<ul class="wp-block-list">
<li><strong>Prove your freeze process.</strong> Demonstrate how design iterations roll into site builds without creating a <strong>forked fleet</strong>. Bring a <strong>configuration ledger</strong> that a license reviewer can follow.</li>



<li><strong>Quantify digital twins.</strong> If you say “twin,” show the <strong>boundary conditions</strong>, the <strong>validation set</strong>, and the <strong>alerting</strong> that ties to your change board. (The PSA/NPIC crowd will ask anyway.) </li>
</ul>



<p><strong>If you’re selling equipment or services:</strong></p>



<ul class="wp-block-list">
<li><strong>Traceability or bust.</strong> Map certificates, lot numbers, and test results to <strong>utility asset hierarchies</strong>. The exhibitor lineup—engineering houses, labs, QA gear—telegraphed that the bar is rising. </li>



<li><strong>Lead‑time honesty wins.</strong> Buyers heard “predictability over peak.” Bring <strong>schedule confidence intervals</strong>, not brochure dates.</li>
</ul>



<p><strong>If you run fuel strategy:</strong></p>



<ul class="wp-block-list">
<li><strong>Lock the long tail.</strong> Engage early on <strong>HALEU</strong> pathways (where relevant), <strong>canister/transport</strong> availability, and <strong>enrichment windows</strong>. The sponsor slate (Urenco, GLE) mirrored what was buzzing in corridors: <strong>secure multi‑year optionality now</strong>. </li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="what-the-co-located-meetings-added" class="wp-block-heading">What the co‑located meetings added</h3>



<ul class="wp-block-list">
<li><strong>PSA 2025:</strong> Risk models as living documents—used to justify inspection intervals, maintenance, and digital upgrades—put <strong>lifecycle governance</strong> on an empirical footing. </li>



<li><strong>NPIC&HMIT 2025:</strong> The I&C/HMI shop floor supplied the <strong>V&V</strong> and human‑factors playbooks that make digital modernization licensable across a fleet. </li>
</ul>



<p>Together, they made “<strong>boring</strong>” the most beautiful word in Chicago: <strong>predictable</strong>, <strong>traceable</strong>, <strong>repeatable</strong>.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="shop-floor-takeaway" class="wp-block-heading">Shop‑floor takeaway</h3>



<p>For all the optimism, the growth lever isn’t a glossy concept; it’s the <strong>unsexy mechanics</strong>: licensing that lives past Day 1, supply chains that <strong>audit clean</strong>, and fuel contracts that <strong>survive a CFO’s red pen</strong>. If you sell into nuclear, make your value prop <strong>legible to licensing and QA</strong>. Bring the <strong>digital paperwork</strong> auditors love at 4 p.m. on a Tuesday—then bring the hardware to match. Chicago didn’t coronate the flashiest tech; it rewarded the <strong>teams that can ship the same answer twice</strong>.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 268,
    slug: `ren25-venice-2025-grid-first-renewables`,
    date: `2025-06-19T10:10:00`,
    title: `REN25 Global Summit (Venice): Climate pragmatists plot the grid‑first transition`,
    authorSlug: `tony-long`,
    authorName: `Tony Long`,
    categorySlugs: ["energy", "fintech"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-2-23.png`,
    excerpt: `At REN25, policymakers and operators pivoted to grid reality—permitting, flexible capacity, and financing models that actually deploy steel.`,
    contentHtml: `
<p class="has-drop-cap"><strong>REN25</strong> wasn’t a cheerleading session for wind and solar. It read like a project review meeting for Europe’s energy system: <strong>transmission first</strong>, flexible capacity close behind, and finance that clears real‑world diligence. Over <strong>June 16–18, 2025</strong>, at <strong>Hotel Indigo Sant’Elena</strong>, delegations traded notes on permitting reform, cross‑border cost allocation, advanced conductors, and the rise of <strong>24/7 “firm clean” PPAs</strong> shaped by the <strong>AI‑era demand surge</strong>. The official listings put the venue and dates squarely in Venice and framed the summit as a policy‑meets‑operators gathering, not a trade show.</p>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
<p><strong>The through‑line:</strong> adding renewables without adding <strong>wires, flexibility and bankable contracts</strong> is a false economy. REN25’s center of gravity was the plumbing—what gets built, when, and on whose balance sheet.</p>
</blockquote>



<p><strong>Why “grid‑first” became the default in 2025</strong></p>



<p>Three market realities set the tone.</p>



<p><strong>1) Transmission is the rate‑limiter.</strong><br>Europe’s grid operators (and their suppliers) have been blunt: system bottlenecks—not turbines—are holding back clean power. REN25 sessions tracked the <strong>fastest wins</strong>: <strong>reconductoring</strong> existing corridors with <strong>advanced (HTLS) conductors</strong> and deploying <strong>dynamic line rating (DLR)</strong> to safely run more current when weather allows. ENTSO‑E’s 2025 note on DLR, recent IEA‑Wind Task 25 work, and industry analyses all point to <strong>large near‑term headroom</strong> on today’s lines—often deliverable faster than new greenfield routes.</p>



<p><strong>2) Permitting reforms are finally codified.</strong><br>The EU’s revised <strong>Renewable Energy Directive (RED III)</strong> and <strong>Renewables Acceleration Areas</strong> guidance are now in force, with the Commission and Member States spelling out <strong>shorter, simpler permitting</strong> (and extending emergency measures to mid‑2025). That’s a real shift from aspiration to rules—and a signal to investors that lead times are compressing where nations actually implement.</p>



<p><strong>3) Long‑term contracts are being redesigned for stability.</strong><br>The EU’s 2024 <strong>electricity market design reform</strong> pushes <strong>PPAs</strong> and expands <strong>two‑way CfDs</strong>, encouraging Member States to set up PPA guarantee schemes and to green‑light more predictable revenue stacks. Functionally, it means <strong>less merchant risk</strong> and more capacity to finance the hard stuff—storage, flexible generation, and grid upgrades.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-273 post type-post status-publish format-gallery has-post-thumbnail category-cybersecurity category-defense category-regulatory category-export category-nuclear tag-defense post_format-post-format-gallery cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/54615269072_22fc35b406_c-380x250.jpg" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="NATO Summit 2025 The Hague, 5% GDP defence spending, Ukraine, European defence industry, cyber resilience" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/nato-summit-2025-the-hague-5-percent-spending-ukraine/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 30, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/nato-summit-2025-the-hague-5-percent-spending-ukraine/">NATO Summit 2025 (The Hague): Spending to 5%—and a new era of hard choices</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p><strong>Signals from the sessions</strong></p>



<p><strong>Transmission is the rate‑limiter.</strong><br>Delegations compared <strong>permitting</strong> fixes, <strong>advanced conductors</strong> (to double or triple ampacity via reconductoring) and <strong>DLR</strong>. The consensus: projects that squeeze more out of <strong>existing corridors</strong> are 2025’s quickest gains while new routes wind through the TEN‑E and <strong>PCI</strong> labyrinth. Europe’s grid groups even published a June 2025 <strong>joint roadmap</strong> calling for regulatory support and a stronger supply chain for equipment.</p>



<p><strong>Cross‑border cost allocation got practical.</strong><br>For interconnectors and PCI‑class lines, <strong>ACER’s CBCA</strong> framework decides who pays what when benefits cross borders. A fresh 2025 report chronicled <strong>50 decisions</strong> since 2014—a reminder that CBCA isn’t academic; it’s how megaprojects move when benefits and costs don’t line up neatly. Expect more CEF‑backed deals to lean on these rules in 2025–26.</p>



<p><strong>Firm clean PPAs are the product.</strong><br>Energy buyers are shifting from annual “green” claims to <strong>hourly matching</strong> and <strong>penalty‑aware delivery</strong>—bundling wind/solar, storage and dispatchables for <strong>24/7 coverage</strong>. <strong>EnergyTag’s</strong> 2024–25 <strong>Granular Certificate</strong> standardization and <strong>Eurelectric’s 24/7 CFE hub</strong> give the market machinery to verify delivery, while the EU’s market reform explicitly <strong>promotes PPAs</strong> and support schemes that make them bankable at scale.</p>



<p><strong>The data‑center surge rewrites the load forecast.</strong><br>The <strong>IEA’s April 2025 report</strong> tied <strong>AI</strong> to a jump in electricity demand, with data centers driving a big share of growth through 2030. U.S. forecasts show the same arc. For developers, that’s a new class of sophisticated offtaker asking for <strong>firm, time‑matched PPAs</strong>—and expecting delivery discipline.</p>



<p><strong>Blended finance goes operational.</strong><br>We heard less “white paper,” more <strong>term sheets</strong>: <strong>first‑loss</strong> and guarantee structures under <strong>InvestEU/EIB</strong> for grid manufacturing and PPAs; national tools like Italy’s <strong>SACE</strong> guarantee supporting big HV links; and <strong>project‑finance debt</strong> stacking against offtake for storage and district energy. Translation: capital is available, but only where <strong>revenue and risk</strong> are crisp.</p>



<p><strong>What changed in Venice</strong></p>



<p><strong>Grid steel, not just gigawatts.</strong><br>REN25 organizers pitched the summit as a convening of <strong>policymakers and analysts</strong>, but the 2025 edition leaned operator‑heavy: <strong>how</strong> to build transmission and distribution capacity at speed, how to <strong>audit</strong> it (digital QA, asset passports), and how to <strong>sequence</strong> reconductoring, DLR and transformer swaps before megaprojects land. The official listings emphasize exactly this policy‑meets‑deployment posture.</p>



<p><strong>24/7 moves from manifesto to mechanics.</strong><br>As <strong>Granular Certificate</strong> schemes earned first formal <strong>accreditations</strong> in June 2025, vendors and utilities pitched hourly products that <strong>reward flexibility</strong>—storage, hydro, demand response—rather than treating them as afterthoughts. That’s not just optics; it changes underwriting, because PPAs with <strong>time‑based performance</strong> and <strong>make‑whole provisions</strong> are easier to finance than fuzzy “annual” claims.</p>



<p><strong>AI‑era buyers push firmness upstream.</strong><br>Microsoft’s <strong>10.5‑GW</strong> procurement framework with Brookfield set a tone for hyperscale offtake: <strong>large, multi‑year, multi‑region</strong> deals tied to new build, not just unlabeled grid power. REN25 presenters referenced that kind of demand as a reason to align <strong>PPAs, CfDs, capacity revenues, and ancillary services</strong> into stacks that investors can believe.</p>



<p><strong>The to‑do list (operators, regulators, founders)</strong></p>



<p><strong>1) Treat reconductoring as infrastructure, not a pilot.</strong><br>The physics is worked; the process risk is in <strong>outage planning</strong> and <strong>QA</strong>. National regulators should set <strong>fast‑track pathways</strong> for HTLS swaps with standardized NDE and commissioning protocols. Evidence from Europe and the U.S. suggests <strong>capacity can double</strong> in‑corridor where towers allow.</p>



<p><strong>2) Make CBCA decisions boring.</strong><br>The more predictable ACER‑aligned <strong>cost‑benefit</strong> methods and <strong>CBCA</strong> templates become, the faster PCI‑class lines will close. ACER’s July 2025 review and guidance are the playbook; use them.</p>



<p><strong>3) Standardize 24/7 clauses.</strong><br>Borrow from <strong>EnergyTag</strong> and Eurelectric templates for <strong>granular certificates</strong>, <strong>hourly matching</strong>, curtailment rules, and <strong>penalty curves</strong>. The EU’s market design now <strong>blesses</strong> PPA uptake; the gap is contract standardization.</p>



<p><strong>4) Scale blended finance—on grid, too.</strong><br><strong>EIB/InvestEU</strong> envelopes for grid manufacturing, <strong>PPA guarantees</strong> for corporates, and <strong>sovereign‑backed HV links</strong> are already live. Copy the structures; don’t reinvent them. For storage, stack <strong>capacity markets</strong> and optimization agreements visible to lenders (see Scotland’s <strong>Coalburn 1</strong> as a template).</p>



<p><strong>Founder note</strong></p>



<p><strong>Build for interconnection and capacity markets.</strong> If your product <strong>shaves peaks</strong>, <strong>accelerates interconnection</strong>, or <strong>anchors firm, hourly PPAs</strong>, your sales cycle shortens because you’re plugging into <strong>recognized revenue</strong> and <strong>regulatory</strong> boxes. “Nice dashboard” doesn’t move steel; <strong>validated amps, hours and euros</strong> do. (REN25’s own materials repeatedly position the event at that policy‑meets‑finance‑meets‑operations intersection.)</p>



<p><strong>Bottom line</strong></p>



<p>By week’s end, REN25 had quietly aligned around a sober thesis: <strong>the energy transition is a grid program with generation attached</strong>. Europe’s permitting updates, market‑design reform, and maturing <strong>24/7</strong> standards are starting to sync with the money. The question is execution: can TSOs, DSOs and developers deliver <strong>more capacity per corridor</strong> while locking in <strong>firm‑clean contracts</strong> that satisfy CFOs—and the <strong>AI‑era</strong> demand curve barreling toward them? If Venice was any guide, the plans exist. Now it’s about <strong>steel, software, and signatures.</strong></p>
`,
    readingMinutes: 5,
    sticky: false,
  },
  {
    id: 290,
    slug: `incyber-forum-usa-2025-postponed-what-it-means`,
    date: `2025-06-17T10:10:00`,
    title: `InCyber Forum USA (San Antonio): Postponed—here’s what that means for the U.S. cyber circuit`,
    authorSlug: `amywellington`,
    authorName: `Amy Wellington`,
    categorySlugs: ["cybersecurity"],
    tagSlugs: ["cybersecurity"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-3-21.png`,
    excerpt: `The inaugural InCyber Forum USA (June 17–18, San Antonio) was postponed. What that says about policy risk, budgets, and how organizers are pivoting.`,
    contentHtml: `
<p class="has-drop-cap">The first U.S. edition of <strong>InCyber Forum</strong>—billed as the American debut of Europe’s largest annual cybersecurity conference—was supposed to land <strong>June 17–18</strong> at San Antonio’s <strong>Henry B. González Convention Center</strong>. Weeks before go‑time, organizers hit pause, citing a <strong>“challenging and unpredictable” U.S. policy and economic climate</strong>. Local outlets confirmed the postponement; <strong>Axios</strong> had previously broken the news of the big‑tent U.S. launch. </p>



<p>San Antonio’s tourism bureau had championed the event, projecting thousands of visitors and a reputation boost for “Cyber City USA.” In the end, the calculus changed: too much policy risk, too little forecast certainty. <strong>Visit San Antonio</strong> publicly backed the decision while acknowledging <strong>grant‑funding concerns</strong> that could dent attendance. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="whats-materially-different-after-the-postponement" class="wp-block-heading">What’s materially different after the postponement</h3>



<h4 id="1-the-policy-risk-premium-just-got-priced-in" class="wp-block-heading">1) The policy risk premium just got priced in</h4>



<p>The <strong>San Antonio Report</strong> framed the organizer statement plainly: the U.S. policy/economic backdrop is volatile enough to blow up attendance models. Local TV coverage echoed that logic. For events courting <strong>public‑sector buyers</strong>—or international delegations navigating visas, travel approvals, and election‑year optics—policy risk isn’t external noise; it’s a <strong>budget line</strong>. Expect more organizers to build <strong>contingency turnout cases</strong> (and force‑majeure‑style clauses) into contracts. </p>



<h4 id="2-the-calendar-is-saturated-and-unforgiving" class="wp-block-heading">2) The calendar is saturated—and unforgiving</h4>



<p><strong>RSA</strong>, <strong>Black Hat</strong>, and <strong>DEF CON</strong> already anchor the U.S. year. InCyber’s pitch was different—<strong>“everyone in one room,”</strong> heavy on policy, industry, and government. That’s a compelling thesis, but without guaranteed agency delegations (and the spend to match), cracking the U.S. slate is a knife fight. <strong>Axios</strong>’s original scoop captured the ambition; the postponement shows the <strong>bar for new flagships is higher than ever</strong>. </p>



<h4 id="3-supply-meets-narrative-5000-attendee-dreams-vs-2025-realities" class="wp-block-heading">3) Supply meets narrative: 5,000‑attendee dreams vs. 2025 realities</h4>



<p>The <strong>Express‑News</strong> reported the event was expected to draw <strong>5,000+</strong> participants and <strong>150+</strong> speakers—serious scale for a first U.S. run. But scale cuts both ways: a 20–30% attendance miss can sink sponsor ROI and torpedo P&L. In 2025, <strong>forecast risk is reputational risk</strong>; better to postpone than limp into a half‑empty hall. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="signals-from-organizers-and-where-theyre-going-next" class="wp-block-heading">Signals from organizers (and where they’re going next)</h3>



<p>The brand isn’t retreating; it’s <strong>re‑sequencing</strong>. InCyber said <strong>Montreal (October)</strong> remains on, with a <strong>first‑ever Tokyo</strong> conference slated for <strong>December</strong>. San Antonio “remains an option for the future,” which—translated from events‑speak—means <strong>2026 at best</strong>. That keeps the U.S. door ajar while preserving momentum in markets less exposed to the current U.S. policy whiplash. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h4 id="why-it-matters-beyond-one-event" class="wp-block-heading">Why it matters beyond one event</h4>



<ul class="wp-block-list">
<li><strong>Public‑sector exposure is existential</strong>: If your event model leans on federal, state, or municipal attendance, <strong>travel freezes, grant shifts, and visa friction</strong> can nuke your base overnight. San Antonio’s tourism officials explicitly flagged <strong>grant‑funding</strong> concerns as a near‑term drag. Build alternate funnels (virtual, regional roadshows) that don’t rely on a single policy outcome. </li>



<li><strong>Big‑tent positioning must be earned</strong>: “Policy‑meets‑industry‑meets‑research” is a great bumper sticker. But the U.S. cyber circuit rewards <strong>deep verticals</strong> (critical infrastructure, incident response, AI assurance) or <strong>credible convening power</strong> (agency heavyweights, procurement workshops). Without either, you’re competing with legends on their home turf. </li>



<li><strong>Sponsors will demand proof of life</strong>: After San Antonio’s false start, sponsors will ask for <strong>letter‑of‑intent headcounts</strong>, <strong>delegation MOUs</strong>, and <strong>penalty‑aware partner terms</strong>—in writing—before they cut checks for any new U.S. entry. (Local reporting shows how quickly expectations can shift when conditions change.) </li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="the-facts-straight" class="wp-block-heading">The facts, straight</h3>



<ul class="wp-block-list">
<li><strong>What was planned</strong>: InCyber Forum USA, <strong>June 17–18, 2025</strong>, San Antonio; positioned as the <strong>first U.S. edition</strong> of Europe’s largest annual cyber conference. </li>



<li><strong>What happened</strong>: <strong>Postponed</strong> weeks out over U.S. policy/economic uncertainty; local outlets <strong>confirmed</strong> the pause. Headlines ranged from “postponed” to “canceled,” though organizers left the door open to a future San Antonio run. </li>



<li><strong>What’s next for the brand</strong>: <strong>Montreal (Oct.)</strong> and <strong>Tokyo (Dec.)</strong> editions proceed, with <strong>San Antonio</strong> “an option for the future.” </li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="field-notes-for-operators-and-founders" class="wp-block-heading">Field notes for operators and founders</h3>



<p><strong>If you timed a launch around InCyber USA, salvage the pipeline:</strong></p>



<ul class="wp-block-list">
<li><strong>Re‑anchor your announcements</strong> at <strong>Black Hat/DEF CON</strong> or a <strong>regional critical‑infrastructure</strong> forum where buyers gather with intent.</li>



<li><strong>Book virtual briefings</strong> with targeted agency and Fortune 500 accounts you expected to meet in San Antonio. Convert sunk travel budgets into <strong>ABM‑style</strong> demos and <strong>CISO roundtables</strong>.</li>



<li><strong>Tighten your event ROI math</strong>: When evaluating U.S. shows for the next 12 months, value <strong>delegation guarantees</strong>, <strong>government co‑sponsorship</strong>, and <strong>procurement‑adjacent programming</strong> over raw expo size.</li>



<li><strong>Scenario‑plan attendance</strong>: Model <strong>base/low</strong> cases with 20–30% swings tied to policy headlines (funding, elections, immigration). If your break‑even requires “everything goes right,” it’s not real.</li>
</ul>



<p>This isn’t doom for new cyber convenings in the U.S.—it’s a reset. The <strong>San Antonio</strong> pause clarified the rule: in 2025, <strong>policy‑proofing</strong> is part of event design. The brands that <strong>lock delegations</strong>, <strong>hedge visas and travel</strong>, and <strong>offer contract‑ready programming</strong> will still win the year.</p>



<h4 id="" class="wp-block-heading"></h4>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-291 post type-post status-publish format-standard has-post-thumbnail category-export category-nuclear tag-nuclear cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-2-22-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="ICONE32 (June 22–27, Weihai) focused on buildability: modularization, digital QA, and supply‑chain realism for advanced and conventional reactors." />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/icone32-weihai-2025-nuclear-engineering-manufacturability/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 28, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/icone32-weihai-2025-nuclear-engineering-manufacturability/">ICONE32 (Weihai): Nuclear’s engineering summit leans hard into manufacturability</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">		<div class="sight-block-portfolio  sight-block-portfolio-id-6a01b9248559b sight-block-portfolio-layout-justified">
				<div class="sight-portfolio-area sight-portfolio-area-lightbox sight-last-row-justified">

		<div class="sight-portfolio-area__outer">
			<div class="sight-portfolio-area__main" >
							</div>
		</div>
	</div>
			</div>

		<style>		.sight-block-portfolio-id-6a01b9248559b {
			--sight-portfolio-area-grid-image-height: 260px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b9248559b {
				--sight-portfolio-area-grid-image-height: 260px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b9248559b {
				--sight-portfolio-area-grid-image-height: 200px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b9248559b {
				--sight-portfolio-area-grid-image-height: 100px;
			}
		}
				.sight-block-portfolio-id-6a01b9248559b {
			--sight-portfolio-area-grid-gap: 15px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b9248559b {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b9248559b {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b9248559b {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
		</style>
		</div></div>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 270,
    slug: `https-theagoramedia-com-indo-defence-2025-jakarta-jiexpo-deals-drones-ew`,
    date: `2025-06-15T10:10:00`,
    title: `Indo Defence 2025 (Jakarta): Jakarta turns into a defense super-market`,
    authorSlug: `agora-media`,
    authorName: `Agora Media`,
    categorySlugs: ["defense", "export"],
    tagSlugs: ["defense", "indonesia"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-39.png`,
    excerpt: `Indo Defence (June 11–14, JIExpo) mixed mega‑pavilions with actionable buys—from mobile counter‑UAS and EW kit to shipyard tie‑ups and local‑content deals. Jakarta wasn’t a catwalk; it was a checkout line.`,
    contentHtml: `
<p></p>



<p class="has-drop-cap">Indonesia’s flagship tri‑service expo turned <strong>JIExpo Kemayoran</strong> into a high‑functioning defence marketplace. <strong>June 11–14</strong>, the aisles were thick with delegations working real problems—air defence layering for archipelagic terrain, counter‑UAS you can move at short notice, naval refreshes you can actually build, and the data‑and‑spectrum plumbing that ties it together. The vibe was unmistakable: <strong>less theatrics, more transactions</strong>.</p>



<p>The show’s center of gravity was pragmatic. National pavilions were busy, sure, but the real signal came from signed paperwork and factory‑floor conversations: who can deliver, how fast, and with what traceability. Indonesia leaned into that tone by closing <strong>domestic</strong> contracts on site and using the floor to push industrial partnerships that survive the Monday‑morning audit.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="three-things-to-know" class="wp-block-heading">Three things to know</h3>



<h4 id="1-it-wasnt-all-mous-indonesia-walked-out-with-contracts" class="wp-block-heading">1) It wasn’t all MoUs—Indonesia walked out with contracts</h4>



<p>The expo <strong>ended with 17 domestic defence cooperation contracts</strong>—not just photo‑op letters of intent. Those weren’t blockbuster numbers by value, but they were <strong>operationally relevant</strong> and pointed squarely at local‑content growth: sustainment, components, and services that keep capability inside the country. Earlier in the week, organisers tallied dozens of MoUs; by close, hard signatures had separated from handshakes. That’s the kind of signal CFOs and planners can build around.</p>



<h4 id="2-counter-drone-capability-got-wheels" class="wp-block-heading">2) Counter‑drone capability got wheels</h4>



<p>Static jammers are yesterday’s answer. The traffic magnet was a <strong>locally built anti‑drone/jammer vehicle</strong> built for quick re‑tasking and <strong>spectrum‑agile</strong> interdiction around VIP routes, bases, and event perimeters. It’s exactly the format ASEAN buyers have been asking for—<strong>maneuverable C‑UAS</strong> with logs, emissions discipline, and a training plan, not just a rifle‑style disruptor. The booth crowds were a tell: every commander has a drone problem; not all of them have a runway.</p>



<h4 id="3-turkiye-came-loaded-for-bear" class="wp-block-heading">3) Türkiye came loaded for bear</h4>



<p>On foreign presence, <strong>Türkiye owned the optics</strong>: the largest overseas cohort, a deep lineup across <strong>drones, comms, munitions, naval</strong>, and the kind of mid‑tier systems that slot into existing force structures. The messaging was clear: not just hero platforms, but the <strong>ecosystem</strong>—radios, optronics, EW pieces, coastal defence modules—plus industrial partnerships. For Southeast Asia, where budgets have to stretch, that full‑stack approach travels.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="what-flew-under-the-radar-but-matters" class="wp-block-heading">What flew under the radar (but matters)</h3>



<ul class="wp-block-list">
<li><strong>Shipyard muscle got new friends.</strong> Indonesia’s <strong>PT PAL</strong> used the show to ink <strong>multi‑part agreements</strong>—from MRO and weapons‑system sustainment to <strong>submarine business</strong> development. In a region where dry‑dock time is the real bottleneck, these are the agreements that <strong>unclog availability</strong> later.</li>



<li><strong>Numbers, context.</strong> The floor count hovered around <strong>~1,180 companies from ~55 countries</strong>, with <strong>national pavilions north of 30</strong>. For all the noise, that’s a workable scale for targeted sourcing—especially if you’re shopping sensors, EW test/measurement, coastal craft, and C2 software that can plug into existing networks.</li>



<li><strong>Domestic prototypes with a point.</strong> Alongside the mobile C‑UAS, local players demoed <strong>shoulder‑fired anti‑drone dazzlers</strong>, a modular <strong>USV</strong> for coastal denial, and new <strong>light anti‑armor</strong> kit. Not all of it is procurement‑ready, but the <strong>direction of travel</strong>—shorten chains, own sustainment—was finger‑on‑the‑map obvious.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="why-this-edition-felt-different" class="wp-block-heading">Why this edition felt different</h3>



<p><strong>Procurement discipline showed up in the small print.</strong> Indonesian officials and SOEs used the exhibition to <strong>structure</strong> deals—delivery windows, tech‑transfer lanes, and where the work physically happens (yards, factories, labs). You could hear it on the floor: <em>tell me which plant, which line, which test bench</em>.</p>



<p><strong>The region’s shopping list is converging.</strong> Air‑defence layers that talk to each other. <strong>C‑UAS that moves</strong> with the convoy. <strong>ISR and EW</strong> that can live with electromagnetic clutter. <strong>Naval refreshes</strong> that live inside dry‑dock reality. Buyers weren’t asking for miracles; they were asking for <strong>lead‑time honesty</strong> and <strong>logistics sanity</strong>.</p>



<p><strong>Politics stayed in the wings; industry led the dance.</strong> The VIP openers were there, of course, but most of the action was at <strong>program‑manager altitude</strong>. That usually means deals may be smaller—but <strong>more likely to happen</strong>.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="if-youre-selling-into-indonesia-or-southeast-asia-next-cycle" class="wp-block-heading">If you’re selling into Indonesia (or Southeast Asia) next cycle</h3>



<ul class="wp-block-list">
<li><strong>Ship your QA, not just your kit.</strong> Come with <strong>material traceability</strong>, calibration histories, and <strong>ERP‑friendly</strong> data models. If your paperwork doesn’t scan, your booth won’t either.</li>



<li><strong>Make C‑UAS mobile by design.</strong> Show <strong>vehicle‑mounted</strong> options with RF discipline and <strong>after‑action</strong> logging. Bonus: a training curriculum you can stand up <strong>in‑country</strong>.</li>



<li><strong>Price the yard time.</strong> For anything with hulls or hardpoints, bring a <strong>dock/line plan</strong> and a <strong>spares manifest</strong> sized to Indonesia’s archipelagic operations.</li>



<li><strong>Pair MoUs with “day‑two” tasks.</strong> If you sign something soft, add a <strong>30‑day joint work item</strong> (requirements, integration, site survey). If there’s no day two, there’s no deal.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="the-read-through" class="wp-block-heading">The read‑through</h3>



<p class="has-drop-cap">Southeast Asia is drifting from <strong>showroom to shop counter</strong>. Jakarta’s expo still has the flags and flyovers, but the decisions are plumbing‑level: <strong>who can deliver</strong>, <strong>who can sustain</strong>, <strong>who can localise</strong>. Indo Defence 2025 didn’t crown a new headline platform so much as it <strong>rewarded repeatability</strong>—and that’s what makes budgets move.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-297 post type-post status-publish format-standard has-post-thumbnail category-biotech tag-biotech cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-1-23-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="London Biotech" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/london-biotechnology-show-2025-regulation-automation-uk-biotech/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 20, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/london-biotechnology-show-2025-regulation-automation-uk-biotech/">London Biotechnology Show 2025: The year red biotech got pragmatic</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">		<div class="sight-block-portfolio  sight-block-portfolio-id-6a01b92488ba5 sight-block-portfolio-layout-justified">
				<div class="sight-portfolio-area sight-portfolio-area-lightbox sight-last-row-justified">

		<div class="sight-portfolio-area__outer">
			<div class="sight-portfolio-area__main" >
							</div>
		</div>
	</div>
			</div>

		<style>		.sight-block-portfolio-id-6a01b92488ba5 {
			--sight-portfolio-area-grid-image-height: 260px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b92488ba5 {
				--sight-portfolio-area-grid-image-height: 260px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b92488ba5 {
				--sight-portfolio-area-grid-image-height: 200px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b92488ba5 {
				--sight-portfolio-area-grid-image-height: 100px;
			}
		}
				.sight-block-portfolio-id-6a01b92488ba5 {
			--sight-portfolio-area-grid-gap: 15px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b92488ba5 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b92488ba5 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b92488ba5 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
		</style>
		</div></div>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 284,
    slug: `radwaste-summit-2025-savannah-waste-governance-robotics`,
    date: `2025-06-13T10:10:00`,
    title: `RadWaste Summit 2025: Waste is where nuclear earns trust`,
    authorSlug: `agora-media`,
    authorName: `Agora Media`,
    categorySlugs: ["export", "nuclear"],
    tagSlugs: ["nuclear", "radwastesummit"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-1-19.png`,
    excerpt: `In Savannah (June 10–12, The DeSoto), RadWaste Summit swapped slogans for schedules: decommissioning timelines, interim storage, packaging & transport, and community transparency took center stage.`,
    contentHtml: `
<p class="has-drop-cap">If you want to know whether nuclear power is serious about its future, don’t look at reactor slides—look at <strong>waste</strong>. Over three focused days (June 10–12) at <strong>The DeSoto</strong>, the <strong>RadWaste Summit</strong> assembled utilities, DOE program leads and contractors, technology suppliers, and local stakeholders to wrestle with the hard parts: <strong>decommissioning schedules, packaging and transport, interim storage, and the shop-floor realities of QA and logistics</strong>. Even the pre-conference golf ran on time. The mood: less chest-beating, more <strong>work orders</strong>.</p>



<p>Two housekeeping notes set the tone. First, the detailed agenda clearly anchored the event <strong>in Savannah at The DeSoto</strong>—handy, because a separate save-the-date page elsewhere in the ExchangeMonitor universe still had a <strong>TBD</strong> location. Second, the program mixed <strong>policy and plant</strong>: plenaries with regulators and DOE decision-makers, then panels on how to move drums, certify difficult waste streams, and keep communities informed <strong>every step of the way</strong>.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="what-moved-the-needle" class="wp-block-heading">What moved the needle</h3>



<h4 id="1-schedule-certainty-became-a-currency" class="wp-block-heading">1) Schedule certainty became a currency</h4>



<p>Procurement managers said the quiet part out loud: <strong>predictability beats a pretty bid</strong>. Teams that showed integrated plans—<strong>waste characterization → remote handling → packaging/transport</strong>—under one governance model got the best conversations. Expect more <strong>framework agreements</strong> that bundle scope under unified SLAs, with change control tied to <strong>living safety cases</strong> rather than one-and-done binders. That same logic seeped into DOE-facing discussions on <strong>TRU waste certification</strong> and site-to-site standardization: the less reinvention, the fewer slips.</p>



<h4 id="2-robotics-and-sensing-stepped-out-of-the-lab" class="wp-block-heading">2) Robotics and sensing stepped out of the lab</h4>



<p>Nobody was chasing moonshots; they were buying <strong>risk days and paperwork hours</strong>. Portable gamma/spectrometry for fast characterization, <strong>wall-climbing or pipe-crawling remotes</strong> for dose-sparing inspections, and <strong>container telemetry</strong> to track integrity across long dwell times—these weren’t sci-fi demos, they were procurement checklists. When a contractor can show <strong>dose reduction</strong>, <strong>fewer entries</strong>, and <strong>traceable measurements</strong> that flow straight into a QA system, the cost and safety math gets simple fast.</p>



<h4 id="3-packaging-transport-and-storage-got-the-spotlight-they-deserve" class="wp-block-heading">3) Packaging, transport, and storage got the spotlight they deserve</h4>



<p>A trio of sessions hammered the chain from <strong>new packaging rules</strong> to <strong>routing and carrier constraints</strong> to <strong>interim storage</strong>. DOE’s Storage & Disposal updates gave attendees a read on <strong>consolidated interim storage facility (CISF)</strong> planning and the interface with collaboration-based siting efforts. On the commercial side, vendors leaned into practical improvements—aging container management, transport scheduling, and <strong>documentation that regulators actually want to see</strong>.</p>



<h4 id="4-community-optics-werent-an-afterthought-they-were-a-workstream" class="wp-block-heading">4) Community optics weren’t an afterthought—they were a workstream</h4>



<p>Attendees kept returning to <strong>transparent dashboards</strong> for decon milestones and <strong>groundwater monitoring</strong>—updated, plain-English, and verifiable. That wasn’t window dressing; <strong>public patience</strong> and <strong>project timelines</strong> travel together. Several speakers argued that publishing <strong>milestone baselines vs. actuals</strong> and showing how monitoring triggers corrective action is the fastest way to hold support during multi-year jobs.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="what-felt-new-compared-to-last-year" class="wp-block-heading">What felt new compared to last year</h3>



<p><strong>Less evangelism, more execution.</strong> Utilities showed roadmaps that bundle <strong>life extension and uprates</strong> for existing plants with new capacity <strong>only where the grid can take it</strong>—interconnection queues, <strong>N-1 security</strong>, and yes, <strong>data-center growth</strong> all factored into the waste and decommissioning playbooks. The result: more attention to <strong>standard work</strong> and <strong>repeatable documentation</strong> across sites.</p>



<p><strong>Waste moved from sidebar to centerpiece.</strong> With SMRs in the headlines, it was notable how often buyers asked, <strong>“Show me your end-of-life plan.”</strong> Decom scope, packaging options, and <strong>long-lead container availability</strong> are now part of the sales cycle for <em>new</em> build conversations. If you can’t close the loop on paper, you won’t open it in the field.</p>



<p><strong>Local context sharpened the stakes.</strong> Savannah has been living the broader water-quality debate around <strong>PFAS</strong>, and while that chemistry sits outside radiological waste, the <strong>public-health lens</strong> it brings has clear parallels. Several hallway conversations blended <strong>co-remediation logistics</strong> and community reporting expectations: if a site is already communicating transparently on groundwater, waste programs should meet that bar by default.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="field-guide-how-to-show-up-next-year-and-win" class="wp-block-heading">Field guide: how to show up next year (and win)</h3>



<ul class="wp-block-list">
<li><strong>Bring the plan that survives Tuesday at 4 p.m.</strong> Don’t sell a widget—sell a <strong>sequence</strong>. Map characterization tools to container choices, to route constraints, to <strong>CISF</strong> implications, and show the change-management triggers that keep the schedule from drifting.</li>



<li><strong>Make robots legible to QA.</strong> Your glossy video is cute; your <strong>calibration records</strong>, failure modes, and data-integrity pipeline to the customer’s <strong>DMS/ERP</strong> are what land POs.</li>



<li><strong>Pre-wire the regulator and the receiver.</strong> Packaging and transport are now <strong>co-signed deliverables</strong>. Show the exact <strong>form numbers</strong>, <strong>NRC/DOE guidance</strong> you’re mapping to, and the <strong>contact points</strong> you’ve already engaged.</li>



<li><strong>Publish the community version.</strong> If your job touches a town, arrive with a draft <strong>public dashboard</strong>: milestones, groundwater checks, who to call when something looks off. It’s not PR; it’s <strong>schedule insurance</strong>.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="the-takeaway" class="wp-block-heading">The takeaway</h3>



<p class="has-drop-cap"><strong>Nuclear’s social license will be earned in waste.</strong> Savannah made that unmistakable. The organizations that win this cycle won’t just promise innovation; they’ll <strong>prove reliability</strong>—with schedules that hold, measurements that audit, and dashboards that the public understands. Less press release, more purchase order. That’s how the industry scales—SMRs or not.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-260 post type-post status-publish format-standard has-post-thumbnail category-ai tag-ai tag-artificial-intelligence tag-technology cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-4-22-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="BIO 2025 (Boston): Partnering at scale, AI that proves itself, and CMC on the main stage" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/bio-international-2025-boston-partnering-ai-deals/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 20, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/bio-international-2025-boston-partnering-ai-deals/">BIO International 2025 (Boston): Partnering is back—and it’s algorithmic</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 283,
    slug: `nic-school-2025-barcelona-nuclear-astrophysics`,
    date: `2025-06-13T10:10:00`,
    title: `NIC School 2025 (Barcelona): Training tomorrow’s nuclear‑astrophysicists—fast`,
    authorSlug: `olivia`,
    authorName: `Dr Olivia Lesslar`,
    categorySlugs: ["nuclear", "space"],
    tagSlugs: ["astrophysics", "nuclear"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-3-19.png`,
    excerpt: `The NIC School (June 10–13) distilled nuclear‑astrophysics essentials—reaction networks, lab measurements, and simulation craft—before NIC XVIII in Girona.`,
    contentHtml: `
<p class="has-drop-cap">For four focused days in downtown Barcelona, the <strong>Nuclei in the Cosmos (NIC) School</strong> turned a notoriously sprawling discipline into something graspable—and testable—by lunchtime. Held <strong>June 10–13</strong> at the <strong>Royal Academy of Sciences and Arts of Barcelona (RACAB)</strong> on <strong>La Rambla, 115</strong>, the School offered a compressed, hands‑on primer geared to <strong>PhD students and early‑career researchers</strong>, timed as a ramp‑up to the main <strong>NIC XVIII symposium in Girona (June 15–20)</strong>.</p>



<p>The organizers kept the value proposition clean: <strong>teach the essentials of nuclear astrophysics</strong>—from stellar evolution and nucleosynthesis to detectors, beams, and observational spectroscopy—<strong>then put those ideas to work</strong> with practical sessions (including <strong>remote observations on the Nordic Optical Telescope</strong>) and a <strong>Big Bang Nucleosynthesis</strong> lab. The format was the opposite of conference bloat: short, crisp lectures; tool‑heavy exercises; and a faculty drawn from labs and observatories that actually generate the field’s data.</p>



<p><strong>The setup: a school with a mission—and a cap</strong></p>



<p>NIC School is <strong>explicitly designed as the on‑ramp</strong> to the biennial NIC meeting—long described as a central forum for nuclear astrophysics—so that newcomers can <strong>speak the language</strong> when the big questions land later in the week at Girona’s <strong>Palau de Congressos</strong>. Capacity was <strong>capped at 50 participants</strong>; fees were set at <strong>€250</strong> (lunches and a school dinner included), with a small pool of fee waivers for students already registered for the symposium. A venue note doubled as local color: RACAB sits <strong>inside the Teatre Poliorama</strong> near Plaça Catalunya.</p>



<p><strong>Program, in plain English</strong></p>



<p>The faculty list read like a cross‑section of the field:</p>



<p><strong>Stellar explosions</strong> (Alan C. Calder, Stony Brook): from novae to supernovae and neutron‑star mergers—i.e., where <strong>r‑process</strong> pathways light up.</p>



<p><strong>Stellar evolution</strong> (Alessandro Chieffi, INAF): how stars build the periodic table in hydrostatic phases before anything explodes.</p>



<p><strong>High‑energy astrophysics</strong> (Roland Diehl, MPE): what gamma‑ray lines tell us about nucleosynthesis sites.</p>



<p><strong>Detectors, beams & targets</strong> (Fairouz Hammache, IJCLab): the hardware that turns beam time into cross‑sections.</p>



<p><strong>Spectroscopy & stellar abundances</strong> (Andreas Korn, Uppsala): converting spectra into elements and isotopes.</p>



<p><strong>Experimental nuclear physics</strong> (Richard Longland, NC State): how we measure the reaction rates that drive the models.</p>



<p><strong>Nuclear theory</strong> (Xavier Roca‑Maza, ICCUB): calculating the inputs you can’t (yet) measure.</p>



<p><strong>Cosmochemistry</strong> (Sheri Singerling, Goethe): what meteorites and presolar grains say about stellar forensics.</p>



<p><strong>Hands‑on blocks</strong> did the glue work: a <strong>Big Bang Nucleosynthesis</strong> session to push through a full reaction network workflow, plus <strong>remote nighttime observations at the Nordic Optical Telescope (NOT) on La Palma</strong>—arranged <strong>courtesy of the ChETEC‑INFRA network</strong>. The point wasn’t sightseeing; it was to <strong>tie stellar spectra to abundance tables</strong> the students would then feed into models.</p>



<p><strong>Translation:</strong> NIC School collapsed the lab–sky loop into a single week: <strong>measure, model, compare</strong>—then repeat with better priors.</p>



<p><strong>What the School did exceptionally well</strong></p>



<p><strong>1) Bridging lab and sky.</strong><br>The lecture flow mirrored the actual scientific pipeline: <strong>detectors and cross‑sections → reaction rates and networks → stellar abundances from spectra → model validation</strong>. By the time students hit the NOT session, “tables” had turned into <strong>astrophysical levers</strong>—you could see which rates mattered for which features in a kilonova light curve or a metal‑poor star’s spectrum. That through‑line—<strong>rates to r‑process and back again</strong>—made the abstractions stick.</p>



<p><strong>2) Reproducible modelling as a habit.</strong><br>The <strong>BBN hands‑on</strong> and theory blocks forced good hygiene: notebooks, versioned inputs, and results traceable back to specific cross‑section sets. It’s the right muscle memory given the <strong>validation debates</strong> waiting at <strong>NIC XVIII</strong> (where r‑, s‑, and i‑process yields, EOS choices, and network solvers will be argued on stage). The School didn’t treat “reproducibility” as a manifesto; it made it <strong>a workflow</strong>, which is the only way it sticks. (NIC XVIII’s topic grid—<strong>r‑/p‑process, s‑/i‑process, nuclear reactions, abundances</strong>—is exactly where that rigor pays off.)</p>



<p><strong>3) Community building.</strong><br>The best value wasn’t a single slide—it was a <strong>shared vocabulary</strong>. A detector specialist and a simulation PhD could <strong>solve the same problem by lunch</strong>, because they’d just built the same toy model and looked at the <strong>same spectrum</strong> the night before. NIC has always been a <strong>people pipeline</strong>; the School compresses <strong>months of ramp‑up into four days</strong>, so the symposium can <strong>skip the remedial</strong> and go straight to frontier questions.</p>



<p><strong>Why Barcelona before Girona?</strong></p>



<p>The split is intentional. <strong>Barcelona’s RACAB</strong> offers a quiet, central location made for teaching and code—<strong>small rooms, short walks, no distractions</strong>—while <strong>Girona’s Palau de Congressos</strong> is built for a <strong>plenary‑only</strong> symposium where hundreds of specialists argue about the fine print of <strong>galactic chemical evolution, reaction networks, and nucleosynthesis sites</strong>. The School’s timeline (ending Friday) left a weekend buffer for travel and brain reset before the <strong>Sunday welcome</strong> in Girona.</p>



<p><strong>A few practicals (that tell a story)</strong></p>



<p><strong>Nordic Optical Telescope tie‑in.</strong> Beyond the NIC bubble, <strong>NOT</strong> is a workhorse 2.56‑m facility whose <strong>remote observing</strong> slots are now a training norm across Europe—boosted by <strong>ChETEC‑INFRA</strong>, which stitches together the field’s labs, telescopes, and compute. (You learn a lot faster when the telescopes are real.)</p>



<p><strong>Limited to 50 participants.</strong> Scarcity keeps the ratio tight; students actually talk to lecturers. </p>



<p><strong>€250 fee</strong> with lunch and a dinner baked in. Inclusion isn’t just policy—<strong>it’s a budget line</strong>. </p>



<p><strong>The broader NIC arc</strong></p>



<p>NIC is <strong>biennial</strong> and <strong>it matters</strong>. Since 1990, it’s become the meeting where nuclear physics, astronomy, and cosmochemistry <strong>actually cross‑pollinate</strong>. NIC XVIII’s <strong>topic list</strong> read like a map of the field’s hard problems: <strong>BBN and the early universe; presolar grains; nuclear reactions; neutrinos; r/s/i processes; high‑density matter and neutron‑star EOS; and galactic chemical evolution</strong>. The promise of the School is that by day one in Girona, <strong>students aren’t spectators</strong>—they can <strong>interrogate a rate, parse a spectrum, or debug a network</strong> with the adults. That raises the floor for everyone.</p>



<p><strong>Takeaway</strong></p>



<p><strong>NIC School 2025 did the simple thing well</strong>: it taught <strong>what matters</strong> and <strong>how to do it</strong>. The recipe—<strong>rates you can trust, models you can reproduce, and spectra you can defend</strong>—sends its alumni into NIC XVIII with enough shared context to argue about the right things. That’s the point. In a field where <strong>one cross‑section can swing an abundance</strong> and <strong>one systematic can flip an interpretation</strong>, the fastest way to build the future is to train people who <strong>see the whole loop</strong>.</p>



<p>Barcelona handled that part. <strong>Girona gets the fireworks.</strong></p>



<p><a href="https://indico.icc.ub.edu/event/341/attachments/1390/3065/Second_Circular_NICXVIII.pdf" target="_blank" rel="noreferrer noopener"></a></p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-276 post type-post status-publish format-standard has-post-thumbnail category-export category-manufacturing category-materials category-transport tag-manufacturing tag-nuclear cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-1-22-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="traceability" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/ans-2025-chicago-boring-is-beautiful-nuclear/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 19, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/ans-2025-chicago-boring-is-beautiful-nuclear/">ANS Annual Conference 2025 (Chicago):</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>
`,
    readingMinutes: 5,
    sticky: false,
  },
  {
    id: 285,
    slug: `ispe-biotech-2025-boston-ai-gmp-biomanufacturing`,
    date: `2025-06-04T10:10:00`,
    title: `ISPE Biotechnology Conference 2025 (Boston): AI meets GMP—with a reality check`,
    authorSlug: `olivia`,
    authorName: `Dr Olivia Lesslar`,
    categorySlugs: ["biotech"],
    tagSlugs: ["technology"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/ispe-biotech.png`,
    excerpt: `From model risk to tech transfers, ISPE Biotech 2025 in Boston showcased how AI, process intensification, and multi-modal facilities are reshaping GMP biomanufacturing.`,
    contentHtml: `
<p class="has-drop-cap">Call it the anti-demo conference. For two days (2–3 June) the <strong>ISPE Biotechnology Conference</strong> parked itself at the <strong>Westin Boston Seaport District</strong> and talked about the unglamorous things that make biologics ship on time: <strong>downtime math, deviation handling, change control, and AI that leaves an audit trail</strong>. Floor conversations were gloriously specific—<em>Which historian? Which alarm philosophy? How do you reconcile predictive maintenance with data integrity rules?</em>—and the agenda mirrored that mood with tracks built around <strong>AI/ML, biomanufacturing, process intensification, digital initiatives, analytical quality, facility lifecycle</strong>, and a culture/operations strand pointedly titled <strong>Operational Readiness & Cultural Excellence</strong>.</p>



<p>The headline wasn’t “AI everywhere.” It was <strong>AI that behaves like a GxP system</strong>—documented, versioned, and explainable to a quality reviewer on a rainy Tuesday.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="three-storylines-that-actually-moved-work-forward" class="wp-block-heading">Three storylines that actually moved work forward</h3>



<h4 id="1-ai-with-guardrails-or-it-doesnt-belong-on-the-floor" class="wp-block-heading">1) AI with guardrails (or it doesn’t belong on the floor)</h4>



<p>Vendors arrived with big claims; the sessions cut them down to what clears validation:</p>



<ul class="wp-block-list">
<li><strong>Model risk management inside GMP.</strong> Presenters walked through risk registers for models, not just equipment—<em>intended use, training data lineage, drift detection, retraining SOPs,</em> and <strong>who signs the periodic review</strong>.</li>



<li><strong>Explainability & auditability.</strong> If an algorithm proposes a batch hold or a maintenance deferral, the <strong>rationale has to be human-readable</strong> and <strong>immutable</strong>. Several talks showed change-control workflows where model updates ride the same rails as software revisions.</li>



<li><strong>PdM without breaking Part 11/Annex 11.</strong> The winning pattern: keep raw sensor data, derived features, and model decisions <strong>separately</strong> with cross-references; treat the model as a <strong>“calibrated instrument”</strong> with qualification and re-qualification steps.</li>
</ul>



<p>The vibe was not “AI will replace SOPs,” it was <strong>“AI must <em>be</em> an SOP.”</strong> And yes, the <strong>AI/ML</strong> and <strong>digital-initiatives</strong> sessions were packed for exactly this reason.</p>



<h4 id="2-process-intensification-meets-multi-modality-cell-gene-mabs-under-one-roof" class="wp-block-heading">2) Process intensification meets multi-modality (cell/gene + mAbs under one roof)</h4>



<p>The facilities conversation matured. Instead of one-off moonshots, we heard <strong>modular skids</strong>, <strong>single-use strategies</strong>, and <strong>continuous upstream</strong> designs that let CDMOs and sponsors <strong>swing capacity across modalities</strong> with minimal re-qualification:</p>



<ul class="wp-block-list">
<li><strong>Fast changeovers</strong> as a design constraint, not an afterthought: segregated flow, valve-manifold logic, closed transfers, and practical <strong>cleanability claims</strong> that QA actually buys.</li>



<li><strong>Common recipes + parameter envelopes</strong> for families of processes, so adding a new molecule doesn’t nuke your master data.</li>



<li><strong>People systems</strong> got equal time: the “<strong>Operational Readiness & Cultural Excellence</strong>” track hammered role clarity, shift handoffs, and how to get <strong>operators and QA</strong> to co-own digital workflows. Culture, in this framing, is a throughput metric.</li>
</ul>



<h4 id="3-tech-transfer-but-faster-think-90-day-clinical-ramps" class="wp-block-heading">3) Tech transfer, but faster (think: 90-day clinical ramps)</h4>



<p>Sponsors want <strong>clinical supply inside a quarter</strong>, which means fewer bespoke handovers and more <strong>template playbooks</strong>:</p>



<ul class="wp-block-list">
<li><strong>Standardized data packs</strong> (process descriptions, CPPs/CMAs, batch records, analytics) that <strong>drop into</strong> a recipient’s MES/LIMS with minimal re-mapping.</li>



<li><strong>Digital twins for handover</strong>—not sci-fi simulations, but parameter-bounded, verified models tied to actual historian tags, used to rehearse <strong>first-article runs</strong> and de-risk set-points.</li>



<li><strong>Phased validation</strong> where PPQ evidence accumulates sensibly: <em>start with pre-agreed guardrails, expand the design space after confirmation runs</em>.</li>
</ul>



<p>Follow-on activities extended beyond the two-day program: <strong>post-conference facility tours</strong> (e.g., ElevateBio and Takeda Lexington) gave teams a look at how these patterns feel on a real floor.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="field-guide-how-to-show-up-next-year-and-win-the-hallway" class="wp-block-heading">Field guide: how to show up next year and win the hallway</h3>



<ul class="wp-block-list">
<li><strong>Bring the dossier, not just the demo.</strong> One slide should map each AI use case to <strong>intended use, data sources, model governance, and change control</strong>—with a pointer to where the evidence lives.</li>



<li><strong>Automate with purpose.</strong> If you pitch orchestration or robotics, tie it to <strong>deviation reduction, right-first-time, and time-to-release</strong>. Bonus: show how your system <strong>writes to the batch record</strong> and supports <strong>electronic signatures</strong>.</li>



<li><strong>Pre-wire tech transfer.</strong> Arrive with a <strong>data-mapping matrix</strong> (source → destination systems), a <strong>Gantt</strong> for knowledge transfer, and a <strong>first-run readiness checklist</strong>.</li>



<li><strong>Make culture measurable.</strong> If you sell “operational excellence,” instrument it: shift adherence, alarm floods per batch, review-by-exception rates. Culture changes faster when it’s visible.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="why-this-matters-and-who-gets-the-edge" class="wp-block-heading">Why this matters (and who gets the edge)</h3>



<p>The moat in 2025 isn’t a shinier biologic; it’s <strong>dependable throughput under inspection pressure</strong>. ISPE’s Boston readout says the advantage goes to platforms that combine:</p>



<ul class="wp-block-list">
<li><strong>Single-use agility</strong> (to juggle smaller lots and multi-product scheduling), <strong>and</strong></li>



<li><strong>Auditable AI</strong> that speeds investigations, maintenance, and release <strong>without</strong> creating a second job for QA.</li>
</ul>



<p class="has-drop-cap">If your models can explain themselves and your skids turn faster without tripping validation, you’re not just innovative—you’re <strong>bankable</strong>.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-268 post type-post status-publish format-standard has-post-thumbnail category-energy category-fintech cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-2-23-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="REN25 (Venice): Grid build‑out, flexible capacity, and the data‑center surge" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/ren25-venice-2025-grid-first-renewables/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 19, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/ren25-venice-2025-grid-first-renewables/">REN25 Global Summit (Venice): Climate pragmatists plot the grid‑first transition</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>
`,
    readingMinutes: 3,
    sticky: false,
  },
  {
    id: 261,
    slug: `asco-2025-chicago-practice-changing-trials`,
    date: `2025-06-04T10:10:00`,
    title: `ASCO 2025 (Chicago): Practice‑changing oncology, by the numbers`,
    authorSlug: `nisha`,
    authorName: `Dr Nisha Money`,
    categorySlugs: ["medicine"],
    tagSlugs: ["medicine"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/06/oncology.png`,
    excerpt: `ATOMIC, SERENA‑6, MATTERHORN, VERIFY and NIVOPOSTOP headlined ASCO 2025. Here’s what the data means for clinics, payers and startups building in oncology.`,
    contentHtml: `
<p class="has-drop-cap">The <strong>ASCO Annual Meeting</strong> is oncology’s Super Bowl. In <strong>2025</strong>, the game was delivered—and then some. The plenary boards weren’t just crowded; they were <strong>clinically actionable</strong>, with results that will rewrite guidelines, reshape procurement, and redirect biopharma pipelines. Beyond the headlines, what matters is how these trials <strong>change Monday morning</strong> in clinics and what they imply for startups building diagnostics, decision support, and next‑gen therapeutics.</p>



<h2 id="five-results-that-moved-the-field" class="wp-block-heading"><strong>Five results that moved the field</strong></h2>



<p><strong>1) ATOMIC (stage III dMMR colon cancer):</strong> Adding <strong>atezolizumab</strong> to adjuvant <strong>FOLFOX</strong> significantly improved <strong>disease‑free survival (DFS)</strong> vs chemotherapy alone, with a double‑digit <strong>absolute</strong> improvement at three years in dMMR tumors. Translation: <strong>IO moves into the adjuvant colon</strong> for the right biology, and ctDNA‑guided escalation/de‑escalation frameworks just got momentum.</p>



<p><strong>2) SERENA‑6 (HR+, HER2‑ breast cancer):</strong> A <strong>ctDNA‑guided switch</strong> to the oral SERD <strong>camizestrant</strong> at the earliest sign of <strong>ESR1</strong> mutation (while radiology still looks stable) cut the <strong>risk of progression by ~56%</strong> vs staying the course on an AI + CDK4/6 inhibitor. Translation: <strong>molecular MRD monitoring</strong> is not a boutique hobby; it’s <strong>a scheduling tool</strong> for when to pivot therapy.</p>



<p><strong>3) MATTERHORN (resectable gastric/GEJ):</strong> <strong>Durvalumab + FLOT</strong> delivered a <strong>significant EFS benefit</strong> and higher pCR vs placebo + FLOT. Translation: <strong>perioperative immunotherapy</strong> is maturing beyond single‑center enthusiasm, with event‑free survival now a board‑room metric for access committees.</p>



<p><strong>4) VERIFY (polycythemia vera):</strong> Weekly <strong>rusfertide</strong> (a hepcidin mimetic) reduced <strong>phlebotomy burden</strong> and improved hematocrit control in PV patients in a phase 3 setting. Translation: <strong>physiology‑native drugs</strong> can reset standards in classic hematology if they simplify life for both patient and clinic.</p>



<p><strong>5) NIVOPOSTOP (high‑risk HNSCC):</strong> <strong>Adjuvant nivolumab</strong> layered on top of post‑op chemoradiation improved <strong>DFS</strong> in PD‑L1 all‑comers. Translation: the H&N space finally gets a broadly applicable adjuvant IO win, with workflow questions (timing, toxicity management) now worth solving at scale.</p>



<h2 id="what-changes-on-monday" class="wp-block-heading"><strong>What changes on Monday</strong></h2>



<ul class="wp-block-list">
<li><strong>Colon cancer (dMMR stage III):</strong> Expect guideline bodies to move quickly; hospital P&T committees will plan <strong>IO infusion slots</strong> in adjuvant schedules and budget for additional toxicity clinics. <strong>ctDNA</strong> becomes the tie‑breaker for adjuvant tailoring.<br></li>



<li><strong>HR+ breast (metastatic):</strong> Oncology practices will operationalize <strong>ESR1 surveillance</strong> (liquid biopsy every 2–3 months), with <strong>pre‑authorized switches</strong> to camizestrant pathways. Payers will push for <strong>testing compliance</strong> as a condition of coverage.<br></li>



<li><strong>Gastric/GEJ peri‑op:</strong> Multidisciplinary boards will tighten timelines between <strong>neoadj chemo, surgery, and adjuvant IO</strong>, with navigation teams managing steroid use and infection risk.<br></li>



<li><strong>PV clinics:</strong> Infusion centers rethink capacity; <strong>fewer phlebotomies</strong>, more nursing time for <strong>injection education</strong> and <strong>iron monitoring</strong>.<br></li>



<li><strong>Head & neck programs:</strong> Speech/swallow teams and survivorship clinics get baked into adjuvant IO pathways; toxicity tracking moves earlier.<br></li>
</ul>



<h2 id="the-diagnostics-and-data-ripple" class="wp-block-heading"><strong>The diagnostics and data ripple</strong></h2>



<p><strong>ctDNA platforms</strong> are the quiet winners. SERENA‑6 validates <strong>mutation‑triggered therapy switches</strong> ahead of radiologic progression—a new <strong>clinical decision category</strong>. Lab vendors that can guarantee <strong>turnaround, sensitivity</strong>, and <strong>payer‑friendly reports</strong> will capture share. On the software side, expect <strong>pathway engines</strong> to embed <strong>trial‑validated triggers</strong> (e.g., ESR1 emergence → SERD switch) and push <strong>real‑time prior auth packets</strong> so clinicians don’t spend Fridays on hold.</p>



<h2 id="payer-math-to-watch" class="wp-block-heading"><strong>Payer math to watch</strong></h2>



<ul class="wp-block-list">
<li><strong>Total cost of care</strong> vs line‑of‑therapy churn: payers will accept higher drug costs if <strong>hospitalizations and ineffective cycles</strong> drop. <strong>Value‑based contracts</strong> tied to <strong>ctDNA adherence</strong> will proliferate.<br></li>



<li><strong>Site of care shifts:</strong> oral SERDs bring dispensing logistics; watch for <strong>specialty pharmacy</strong> plays and adherence monitoring bundled into contracts.<br></li>



<li><strong>Real‑world evidence (RWE):</strong> coverage committees will demand <strong>post‑launch registries</strong> proving that trial‑grade benefits translate outside academic centers.<br></li>
</ul>



<h2 id="startup-playbook-for-the-asco-afterglow" class="wp-block-heading"><strong>Startup playbook for the ASCO afterglow</strong></h2>



<ul class="wp-block-list">
<li><strong>Build to the new triggers.</strong> Codify ATOMIC/SERENA‑6/MATTERHORN/NIVOPOSTOP logic into workflow tools so clinics don’t rely on memory.<br></li>



<li><strong>Shave administrative friction.</strong> Automate <strong>prior authority</strong> and <strong>financial counseling</strong> tied to the new standards.<br></li>



<li><strong>Integrate with labs.</strong> APIs for <strong>ctDNA results</strong> that drive <strong>order sets</strong> and <strong>EHR nudges</strong>.<br></li>



<li><strong>Measure what payers care about.</strong> Time‑to‑switch, avoided chemo cycles, infusion chair utilization—you know, the cash flow.<br></li>
</ul>



<h2 id="the-cultural-shift-at-mccormick" class="wp-block-heading"><strong>The cultural shift at McCormick</strong></h2>



<p>ASCO has seen many hype cycles. 2025 felt different: <strong>less moonshot rhetoric, more operational detail</strong>. Every plenary talk was followed by panels on <strong>who to test, when to switch, how to document</strong>, and how to pay for it. That’s what progress looks like when science is ready for scale.</p>
`,
    readingMinutes: 3,
    sticky: false,
  },
  {
    id: 275,
    slug: `black-sea-security-forum-2025-odesa`,
    date: `2025-06-02T10:10:00`,
    title: `Black Sea Security Forum 2025: Odesa’s defense tech is built for tonight, not 2030`,
    authorSlug: `amywellington`,
    authorName: `Amy Wellington`,
    categorySlugs: ["defense", "export", "nuclear", "ai"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/01/man-and-drone.png`,
    excerpt: `On the ground in Odesa: maritime drones, air defense, demining and AI ISR dominate the Black Sea Security Forum, as Ukraine’s port city hosts a wartime summit.`,
    contentHtml: `
<p class="has-drop-cap">In Odesa—where air-raid alerts, naval drones on the horizon, and grain ships dodging threats are routine—the <strong>Black Sea Security Forum 2025</strong> read like an operations review, not a concept expo. The brief was clear: <strong>keep ports open, keep skies manageable, and keep insurance viable</strong> as the threat surface shifts week to week.</p>



<h3 id="the-maritime-moment" class="wp-block-heading">The maritime moment</h3>



<p>The headline hardware was at sea. <strong>Uncrewed surface vessels (USVs)</strong> and <strong>semi-submersibles</strong> showed up with longer endurance, smaller radar signatures, and <strong>modular payload bays</strong> that turn the same hull into a smart minehunter one day and an electronic-warfare decoy the next. Buyers drilled into the boring-but-critical details: sea-keeping in chop, <strong>comms resilience</strong> (satcom plus low-probability-of-intercept/low-probability-of-detection RF links), and <strong>turnaround time</strong> for swapping payloads at the pier.</p>



<p>The <strong>unsung winners</strong> were de-mining toolchains: synthetic aperture sonar, autonomous side-scan routines, and <strong>AI anomaly detection</strong> that reduces diver exposure and—crucially—<strong>squeezes risk premiums</strong> for shippers still calling at Black Sea ports.</p>



<h3 id="air-defense-gets-granular" class="wp-block-heading">Air defense gets granular</h3>



<p>If 2023–24 was about “get any system you can,” <strong>2025 is about integrating what you have</strong>. Panels focused on <strong>sensor fusion</strong> across radar, EO/IR, and passive RF, with <strong>kill-chain orchestration</strong> that lets operators escalate from soft-kill (jamming, spoofing) to hard-kill with less cognitive load. The most convincing demos weren’t flashy: <strong>mission replay tools</strong>, <strong>evidence packages suitable for legal review</strong>, and <strong>flight-path heat maps</strong> that turn last night’s lessons into tomorrow’s doctrine.</p>



<h3 id="the-freight-layer-insurance-sanctions-corridors" class="wp-block-heading">The freight layer: insurance, sanctions, corridors</h3>



<p>You can’t discuss the Black Sea without <strong>insurance math</strong>. Brokers walked through risk ladders tied to route choice, naval escorts, and <strong>port hardening</strong>. Sanctions sessions traded playbooks on stopping <strong>dual-use component leakage</strong> and performing <strong>end-user verification</strong> without throttling legitimate trade. Meanwhile, the grain corridor conversation advanced from “whether” to <strong>“how to keep it open under fire”</strong>—with emphasis on AIS discipline, traffic separation schemes, and <strong>rapid-repair capacity</strong> for port infrastructure.</p>



<h3 id="what-the-floor-signaled-for-the-next-12-months" class="wp-block-heading">What the floor signaled for the next 12 months</h3>



<ul class="wp-block-list">
<li><strong>Attritable air and sea drones will proliferate.</strong> Budgets will be won on <strong>cost per effect</strong>, not one-off hero shots.</li>



<li><strong>Counter-UAS becomes a service.</strong> Expect layered systems bundled with training, SLAs, and <strong>export-compliant software</strong> for regional partners.</li>



<li><strong>Space + sea fusion goes mainstream.</strong> Satellite SAR and RF geolocation will feed coastal command-and-control in near-real time, backed by <strong>commercial imagery workflows</strong> insurers and prosecutors can trust.</li>
</ul>



<h3 id="builders-playbook-dual-use-included" class="wp-block-heading">Builder’s playbook (dual-use included)</h3>



<ul class="wp-block-list">
<li><strong>Design for contested spectrum from day one.</strong> If autonomy collapses under jamming, it’s a demo, not a product.</li>



<li><strong>Be plug-and-fight.</strong> Publish APIs and show clean integrations with the dominant C2 platforms—no custom middleware required.</li>



<li><strong>Bring through-life support plans.</strong> Spares pipelines, operator training, and field-upgradable kits should be priced and scheduled.</li>



<li><strong>Know your export narrative cold.</strong> Compliance is a feature: software bills of materials, provenance, and tiered capabilities ready for review.</li>
</ul>



<p><strong>Dates & place:</strong> <strong>May 30 – June 1, 2025 • Odesa, Ukraine.</strong></p>



<p class="has-drop-cap"><strong>The takeaway:</strong> Odesa trimmed the theatrics and focused on <strong>systems that work under pressure</strong>. If your technology can keep a port moving, keep the sky manageable, and keep an underwriter calm, you’re in the conversation. Everyone else is background noise.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-290 post type-post status-publish format-gallery has-post-thumbnail category-cybersecurity tag-cybersecurity post_format-post-format-gallery cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-3-21-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="InCyber Forum USA 2025 postponed: implications for the U.S. cyber conference map" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/incyber-forum-usa-2025-postponed-what-it-means/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 17, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/incyber-forum-usa-2025-postponed-what-it-means/">InCyber Forum USA (San Antonio): Postponed—here’s what that means for the U.S. cyber circuit</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>
`,
    readingMinutes: 2,
    sticky: false,
  },
  {
    id: 279,
    slug: `national-medtech-biotech-summit-2025-dublin`,
    date: `2025-05-30T10:10:00`,
    title: `National MedTech & Biotech Summit 2025 (Dublin): Ireland’s device machine gets software‑native`,
    authorSlug: `thiago`,
    authorName: `Thiago Ferreira`,
    categorySlugs: ["biotech", "manufacturing", "materials", "medtech"],
    tagSlugs: ["biotech"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/lifecycle.png`,
    excerpt: `From SaMD and AI quality to sterilization and supply chains, Dublin’s 2025 National MedTech & Biotech Summit shows how Ireland’s device cluster scales in 2025.`,
    contentHtml: `
<p class="has-drop-cap">If you want to see where European MedTech actually ships, go to the <strong>RDS Simmonscourt</strong> at the end of May. The <strong>National MedTech & Biotech Summit</strong> isn’t the flashiest show on the calendar, but it’s one of the most instructive: procurement leads, QA heads, device founders and contract manufacturers comparing notes on how to <strong>design, validate and build</strong> medical devices that can survive audits and hit margins. The 2025 edition had a clear leitmotif: <strong>software‑native MedTech</strong>. Whether you’re selling hardware, reagents or services, your competitive edge now lives in <strong>software quality, data governance and lifecycle control</strong>.</p>



<h2 id="three-currents-you-could-feel-on-every-stage" class="wp-block-heading"><strong>Three currents you could feel on every stage</strong></h2>



<p><strong>1) SaMD maturity (finally) looks like a moat, not a hurdle.</strong> Teams that once treated software as a bolt‑on now lead with <strong>IEC 62304 discipline</strong>, <strong>post‑market surveillance loops</strong>, and <strong>model cards</strong> for anything with AI inside. Buyers and notified bodies are rewarding suppliers who can prove <strong>version control, drift monitoring</strong> and <strong>change‑impact analysis</strong>—particularly as more devices ship with embedded models for triage, image analysis or control.</p>



<p><strong>2) QA and manufacturing are going digital—without becoming theater.</strong> Instead of demo‑ware dashboards, line managers showed <strong>work‑instruction systems with step verification</strong>, <strong>inline vision</strong> pumping defect tags straight into the eQMS, and <strong>electronic batch records</strong> that actually reduce CAPA panic. The proof was in <strong>process capability indices</strong>, not pitch decks.</p>



<p><strong>3) Sterilization and sustainability graduate from afterthoughts to design inputs.</strong> Capacity in <strong>EtO/gamma/e‑beam</strong> remains the pacing item for many programs. The smart teams arrived with <strong>dual sterilization validations</strong>, energy‑aware HVAC for cleanrooms, and <strong>mono‑material packaging</strong> that hits sustainability targets without violating dose delivery or tamper evidence.</p>



<h2 id="why-ireland-still-punches-above-its-weight" class="wp-block-heading"><strong>Why Ireland still punches above its weight</strong></h2>



<p>The cluster effect is real: <strong>OEMs, contract design shops and CDMOs</strong> cross‑pollinate talent, while universities and testing houses create a deep bench in <strong>human factors, biocompatibility and software validation</strong>. The Summit’s co‑location with wider manufacturing events means MedTech taps adjacent expertise—automation, robotics, and sustainability—fast. If you’re an overseas founder looking for an EU foothold, the pattern is clear: set up <strong>clinical and regulatory brains</strong> here, <strong>manufacturing where it makes sense</strong>, and wire the two with quality systems that survive audits on both sides of the Atlantic.</p>



<h2 id="buyer-questions-that-closed-or-killed-deals" class="wp-block-heading"><strong>Buyer questions that closed (or killed) deals</strong></h2>



<ul class="wp-block-list">
<li><strong>“Show me your FMEA and what has changed since the last audit.”</strong> If your risk file is a PDF, it’s dead. If it’s living and mapped to complaints and field actions, you’re credible.<br></li>



<li><strong>“How will you ship software changes?”</strong> Release cadence, validation evidence, rollback plans and how you’ll notify customers. Bonus points for <strong>SBOMs</strong> and <strong>cyber bills of materials</strong>.<br></li>



<li><strong>“Where’s your sterilization slot?”</strong> Vague answers got polite nods; <strong>purchase orders for time on line</strong> got handshakes.<br></li>



<li><strong>“Prove your UDI/serialization can talk to my ERP/LIMS.”</strong> Open protocols and references beat “we’re integrating soon.”<br></li>
</ul>



<h2 id="the-human-factors-turn" class="wp-block-heading"><strong>The human factors turn</strong></h2>



<p>Summative testing used to be an end‑of‑project tax. In 2025 it’s <strong>part of agile</strong>, with <strong>formative cycles</strong> closing in weeks. Teams brought <strong>quick‑change tooling</strong> so the insights could land in the next build, not the next quarter. Hospitals buying at scale demanded <strong>inclusive design</strong> (glove use, low‑light usability, multilingual labelling) with fewer assumptions about training and environment.</p>



<h2 id="the-deal-landscape" class="wp-block-heading"><strong>The deal landscape</strong></h2>



<p>Startups that led with a <strong>narrow clinical beachhead</strong> (cardiac rehab, wound care, home infusion) and clear reimbursement roadmaps got the love. The bigger cheques flowed to platforms bundling <strong>hardware + remote services + analytics</strong> with outcomes‑linked pricing and clean procurement stories for hospitals and home‑care providers.</p>



<h2 id="founder-playbook-for-dublin" class="wp-block-heading"><strong>Founder playbook for Dublin</strong></h2>



<ul class="wp-block-list">
<li><strong>Evidence before adjectives.</strong> Bring <strong>bench + formative + summative</strong> data, and if you’re claiming AI, bring <strong>external validation</strong> and a plan for <strong>post‑market vigilance</strong>.<br></li>



<li><strong>Book your steri slot.</strong> Even if you’re pre‑market, a <strong>conditional allocation</strong> signals adulthood.<br></li>



<li><strong>Industrialize your documentation.</strong> eQMS configured to your process (not the other way round), <strong>supplier qualification</strong> depth, and <strong>EU MDR</strong> readiness if you want to cross the Channel.<br></li>



<li><strong>Integrate with reality.</strong> EHR interoperability (FHIR), <strong>UDI</strong>, and service plans that work outside Dublin.<br></li>
</ul>



<p class="has-drop-cap"><strong>Dates & place: </strong><strong>May 28–29, 2025, RDS Simmonscourt, Dublin.</strong></p>
`,
    readingMinutes: 3,
    sticky: false,
  },
  {
    id: 282,
    slug: `sosv-biomanufacturing-matchup-2025-vc-founder`,
    date: `2025-04-28T22:10:00`,
    title: `SOSV Biomanufacturing Matchup 2025: Where synbio’s factory floor meets the cap table`,
    authorSlug: `dr-jens-gudmundsson`,
    authorName: `Dr Jens Gudmundsson`,
    categorySlugs: ["biotech", "lifesciences", "manufacturing", "materials"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/01/biomanufact.png`,
    excerpt: `Inside SOSV’s week‑long virtual biomanufacturing Matchup: what 1:1s revealed about capacity, COGS, CDMOs—and how founders can actually close.`,
    contentHtml: `
<p class="has-drop-cap">There’s a certain poetry to a deal room that runs on enzymes. <strong>SOSV’s Biomanufacturing VC‑Founder Matchup 2025</strong> took place online over five dense days, turning calendar grids into cap‑table gravity. On paper it was just 20‑minute 1:1s between founders and investors; in practice, it was a referendum on whether <strong>biology as manufacturing</strong> can finally scale beyond the hype cycle.</p>



<p>By week’s end, hundreds of founders and investors had compared notes on everything from <strong>fermentation bottlenecks and downstream pain</strong> to the state of <strong>CDMO capacity</strong>, <strong>COGS curves</strong>, and <strong>project‑finance‑meets‑equity</strong> hybrids for plants. Unlike the average conference mingle, meetings started with data: feedstock price sensitivity, kLa limits, yield trajectories per round, and how quickly a process can jump reactors without shattering mass transfer. This wasn’t vibes. It was <strong>unit operations, unit economics</strong>—and who can finance the jump from demo to deployment.</p>



<h3 id="the-2025-biomanufacturing-mood" class="wp-block-heading"><strong>The 2025 biomanufacturing mood</strong></h3>



<p><strong>1) Capacity is a product.</strong> Founders who led with <strong>where</strong> they’ll run and <strong>how</strong> they’ll run—naming specific sites, line items, and backup slots—were the ones who got follow‑ups. Buyers are exhausted by PowerPoints that assume mythical 200 m³ fermenters; they want <strong>letters of intent from CDMOs</strong>, time on skid, and a technician training plan. If you don’t own the tank, own the schedule.</p>



<p><strong>2) COGS honesty wins.</strong> The breakout decks put <strong>COGS vs throughput</strong> right up front and showed sensitivity to sugar price, nitrogen sources, oxygenation costs, and clean‑in‑place cycles. The craftiest teams brought <strong>scenario trees</strong>: what happens when you’re forced to run at 10 m³ for 12 months? When your distillation step loses 2% recovery? If your economics only work at fantasy scale, investors can smell it.</p>



<p><strong>3) Downstream is destiny.</strong> Everyone can ferment; few can <strong>purify cheaply</strong>. In 2025, the edge comes from <strong>continuous clarification</strong>, membrane hacks, smart crystallization, or <strong>affinity tricks</strong> that let you skip columns. If you’re pitching a bioproduct, bring your <strong>DSP mass balance</strong> and a plan for <strong>solvent recovery</strong>.</p>



<p><strong>4) AI with a factory ID badge.</strong> The useful AI wasn’t generic LLM gloss— it was <strong>strain design bounded by process constraints</strong>, <strong>soft sensors</strong> inferring off‑gas composition, and <strong>predictive control</strong> that nudges feeds before your DO graph screams. Model cards plus <strong>drift monitoring</strong> are now table stakes.</p>



<p><strong>5) Financing is getting hybrid.</strong> That shiny Series A is now joined by <strong>equipment leases, offtake‑linked debt</strong>, and <strong>project SPVs</strong>. The founders who laid out a sequencing of capital—pilot equity → commercial line debt → project finance—looked like adults in the room.</p>



<h3 id="what-founders-did-right-and-wrong" class="wp-block-heading"><strong>What founders did right (and wrong)</strong></h3>



<p><strong>Right:</strong></p>



<ul class="wp-block-list">
<li>Converted techno‑optimism into <strong>MRL/TRL roadmaps</strong> with kill‑criteria.<br></li>



<li>Brought <strong>COAs</strong> and real‑world variability, not lab‑perfect fairy dust.<br></li>



<li>Named <strong>feedstock suppliers</strong>, transport plans, and <strong>siting logic</strong> (utilities, wastewater, zoning).<br></li>



<li>Showed <strong>customer discovery</strong> beyond a friendly DTC test—industrial buyers, tolling partners, and <strong>LCAs</strong> that align with customer ESG claims.<br></li>
</ul>



<p><strong>Wrong:</strong></p>



<ul class="wp-block-list">
<li>Waving at “capacity constraints” without an <strong>allocation plan</strong>. (If your CDMO is popular, assume you are not.)<br></li>



<li>Hand‑waving <strong>regulatory</strong> for anything touching human/animal feed or pharma. Show HACCP, GRAS/novel foods, or GMP/QMS intent.<br></li>



<li>Pretending AI replaces <strong>process engineers</strong>. Your model augments operators; it doesn’t magic away fouling.<br></li>
</ul>



<h3 id="the-deal-patterns-that-emerged" class="wp-block-heading"><strong>The deal patterns that emerged</strong></h3>



<ul class="wp-block-list">
<li><strong>Industrial chemicals & materials</strong> regained momentum with customers starved for green drop‑ins. Short‑cycle wins clustered around <strong>solvents, monomers and specialty intermediates</strong> where purity specs are tough but reachable.<br></li>



<li><strong>Alt‑protein</strong> founders showed a second act: ingredients and processing aids beating commodity meat analogues on <strong>margin and reliability</strong>.<br></li>



<li><strong>Enzymes</strong> remained the stealth moneymaker—high value, small volumes, tight specs. The best teams combined <strong>directed evolution</strong> with <strong>cheap expression</strong> and a ruthless cost story.<br></li>



<li><strong>Cell‑free and continuous</strong> crept from posters into plans. Not everywhere, but in <strong>niche high‑value lanes</strong>, the CAPEX math is starting to pencil.<br></li>
</ul>



<h3 id="how-to-win-the-next-matchup-a-founder-checklist" class="wp-block-heading"><strong>How to win the next Matchup (a founder checklist)</strong></h3>



<ul class="wp-block-list">
<li><strong>Lead with the line:</strong> Name your fermenter, agitation, aeration, and heat‑removal constraints; show your <strong>scale‑down model</strong> that predicts failures before you book an expensive batch.<br></li>



<li><strong>Show your SOPs.</strong> Investors aren’t operators, but auditors are. A glimpse of your <strong>deviation handling</strong> and <strong>batch records</strong> signals you’re factory‑minded.<br></li>



<li><strong>Map your COGS glidepath.</strong> Put <strong>learning‑curve assumptions</strong> in writing; if you’re counting on yield jumps, tie them to specific genetic or process levers.<br></li>



<li><strong>Bring buyers.</strong> A letter of interest with test results beats a hundred TAM slides.<br></li>



<li><strong>Prove resilience.</strong> Dual suppliers, dual sites, and a <strong>utility outage plan</strong>. If you can’t run through a power dip, your plant can’t either.<br></li>
</ul>



<h3 id="the-investor-lens" class="wp-block-heading"><strong>The investor lens</strong></h3>



<p>The best investors at Matchup behaved like <strong>mini‑EPCs</strong>: they probed piping, utilities, water, waste, and labor. They cared less about moon‑shots than <strong>boring reliability</strong>—SOPs, audit trails, and how much <strong>OEE</strong> you can wrestle from not‑quite‑perfect equipment. Valuations favored teams with purchase orders and <strong>capacity access</strong> over pure biology breakthroughs.</p>



<p><strong>Bottom line:</strong> Biomanufacturing earned its <strong>second wind</strong> this spring—not because the science got shinier, but because more teams showed up with <strong>factory muscle</strong>. The winners know their numbers, their tanks, and their buyers.ebanon,” says founder Laura Tabet. “In these dark times, it’s deeply heartening to witness the artistic community coming together to create a movement that is beyond politics and beyond borders.”</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-270 post type-post status-publish format-image has-post-thumbnail category-defense category-export tag-defense tag-indonesia post_format-post-format-image cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-39-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="Indo Defence 2025: Southeast Asia’s biggest defence expo goes deal-first in Jakarta" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/https-theagoramedia-com-indo-defence-2025-jakarta-jiexpo-deals-drones-ew/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 15, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/https-theagoramedia-com-indo-defence-2025-jakarta-jiexpo-deals-drones-ew/">Indo Defence 2025 (Jakarta): Jakarta turns into a defense super-market</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 262,
    slug: `maghreb-pharma-expo-2025-algiers-gmp`,
    date: `2025-04-25T22:10:00`,
    title: `Maghreb Pharma Expo 2025 (Algiers): North Africa’s pharma workshop goes from import substitution to export ambition`,
    authorSlug: `nisha`,
    authorName: `Dr Nisha Money`,
    categorySlugs: ["manufacturing", "medtech"],
    tagSlugs: ["pharma"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/02/manufacturing.png`,
    excerpt: `On the floor at Maghreb Pharma Expo 2025: sterile lines, traceability, HVAC, and how Algeria’s localization push is maturing into regional export capacity.`,
    contentHtml: `
<p>Walk the <strong>SAFEX</strong> halls in Algiers during Maghreb Pharma and you’ll feel a market that’s outgrown training wheels. What began as a pragmatic <strong>import substitution</strong> drive is maturing into <strong>regional manufacturing</strong> with credible GMP chops, real QA talent, and bolder supply‑chain bets. The 2025 edition had fewer gimmicks and more <strong>validation binders</strong>—a good sign in pharma.</p>



<h3 id="the-strategic-arc" class="wp-block-heading"><strong>The strategic arc</strong></h3>



<p>Algeria and its neighbors have spent the last few years incentivizing local fill‑finish, packaging, and eventually <strong>API steps</strong>. The calculus is familiar: foreign exchange, medicine security, and jobs. What’s new is the <strong>confidence</strong>: cleanrooms that pass audits, HVAC that holds in August, and serialization that plays nicely with national track‑and‑trace.</p>



<h3 id="what-stood-out-on-the-floor" class="wp-block-heading"><strong>What stood out on the floor</strong></h3>



<ul class="wp-block-list">
<li><strong>Sterile injectables</strong> gear everywhere: <strong>isolators</strong>, RABS, and compact <strong>lyophilizers</strong> sized for hospitals and mid‑tier manufacturers. Vendors pushed <strong>modular cleanroom pods</strong> as a way to shortcut permitting headaches.<br></li>



<li><strong>HVAC and environmental monitoring</strong> went from procurement checkbox to engineering obsession. The best booths showed <strong>energy‑aware systems</strong> with pressure cascades, low‑turbulence diffusers, and continuous particle counting that actually links to <strong>deviation alerts</strong>.<br></li>



<li><strong>Packaging & serialization</strong> sharpened up: line vision systems, tamper‑evident closures, and <strong>aggregation to pallets</strong> designed for both export requirements and local inspectors.<br></li>



<li><strong>QC labs</strong> got love: <strong>rapid microbiology</strong> tools, stability chambers, and LIMS integrations pitched not just for compliance, but for <strong>faster batch release</strong>.<br></li>
</ul>



<h3 id="buyers-questions-and-what-won" class="wp-block-heading"><strong>Buyers’ questions (and what won)</strong></h3>



<ul class="wp-block-list">
<li>Can you install and <strong>validate</strong> in six months, not sixteen? (Pre‑fab modules, pre‑validated skids.)<br></li>



<li>How painful is <strong>spares and service</strong> in the interior, not just Algiers? (Local service partners, training academies.)<br></li>



<li>Do your systems talk about MES<strong>/LIMS</strong> without a six‑figure integration? (Open protocols and real references.)<br></li>



<li>What’s your <strong>power and water</strong> budget? (Energy‑efficient HVAC and <strong>CIP/SIP</strong> recovery plans helped close deals.)<br></li>
</ul>



<h3 id="regulatory-reality" class="wp-block-heading"><strong>Regulatory reality</strong></h3>



<p>Workshops were heavy on <strong>EU GMP</strong> alignment, <strong>WHO PQ</strong> expectations for vaccines/biologics, and <strong>change control</strong> that keeps documentation sane as plants add SKUs. With serialization maturing, the hot potato is <strong>data integrity</strong>—ALCOA+ principles moving from posters to audits. Site heads swapped horror stories about <strong>paper‑electronic hybrids</strong>; the consensus: pick a lane, go fully digital, and train relentlessly.</p>



<h3 id="talent-and-training" class="wp-block-heading"><strong>Talent and training</strong></h3>



<p>A shortage of validation and QA engineers is the region’s growth choke. Smart vendors arrived with <strong>training pipelines</strong>, local <strong>demo labs</strong>, and partnerships with universities. Manufacturers winning export work are building <strong>QA guilds</strong>: internal academies that cross‑train operators on GMP, deviations, CAPA, and audit survival.</p>



<h3 id="supply-chain-and-localization" class="wp-block-heading"><strong>Supply chain and localization</strong></h3>



<p>Import friction isn’t disappearing, so manufacturers are hedging with <strong>regional suppliers</strong> for packaging, labels, and some <strong>formulation ingredients</strong>. APIs remain globally sourced, but there’s movement on <strong>simple molecules</strong> and <strong>sterile water</strong>. Contract manufacturers pitching <strong>tech transfer</strong> muscle—validated protocols, on‑site trainers, and knowledge capture—were mobbed.</p>



<h3 id="founder-and-operator-notes" class="wp-block-heading"><strong>Founder and operator notes</strong></h3>



<ul class="wp-block-list">
<li><strong>Design for climate, not catalogues.</strong> Insist on HVAC designs proven for <strong>North African summers</strong>; energy bills are not a rounding error.<br></li>



<li><strong>Document like exports depend on it</strong>—because they will. Build <strong>digital batch records</strong> and <strong>audit‑ready</strong> change logs now, not later.<br></li>



<li><strong>Think beyond tenders.</strong> Hospital contracts pay bills, but <strong>regional private markets</strong> are where margins live. If you can pass a Moroccan or Tunisian audit, your pipeline broadens fast.<br></li>



<li><strong>Serialization is a platform.</strong> Use it for <strong>recall drills, warehouse accuracy</strong>, and even adherence pilots—not just a compliance tax.<br></li>
</ul>



<h3 id="the-bigger-picture" class="wp-block-heading"><strong>The bigger picture</strong></h3>



<p>Maghreb Pharma 2025 felt <strong>self‑assured</strong>. No one’s pretending this is Basel, but the region is past copy‑paste assembly. It’s building the muscle for <strong>validated, export‑capable</strong> manufacturing—one HVAC map, one SOP, one audited batch at a time. For equipment vendors and CDMOs, this is the moment to plant flags and train teams. For local manufacturers, it’s time to graduate from import substitution to <strong>regional champions</strong>.</p>



<p><strong>Dates & venue:</strong> 22–24 April 2025, <strong>SAFEX – Palais des Expositions</strong>, Algiers.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-284 post type-post status-publish format-standard has-post-thumbnail category-export category-nuclear tag-nuclear tag-radwastesummit cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2025/06/generated-image-1-19-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="RadWaste Summit 2025: Decommissioning, DOE Contracts & the Nuclear Waste Playbook" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/radwaste-summit-2025-savannah-waste-governance-robotics/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 13, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/radwaste-summit-2025-savannah-waste-governance-robotics/">RadWaste Summit 2025: Waste is where nuclear earns trust</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>
`,
    readingMinutes: 3,
    sticky: false,
  },
  {
    id: 295,
    slug: `sot-2025-orlando-computational-toxicology`,
    date: `2025-03-21T10:10:00`,
    title: `SOT 2025 (Orlando): Toxicology gets computational—and clinically relevant`,
    authorSlug: `nisha`,
    authorName: `Dr Nisha Money`,
    categorySlugs: ["biotech", "lifesciences", "medtech", "medicine"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/03/nam.png`,
    excerpt: `Inside SOT 2025: new approach methodologies (NAMs), organ‑on‑chip, PBPK and AI are moving from posters to programs as regulators demand decision‑grade data.`,
    contentHtml: `
<p class="has-drop-cap">Toxicology used to be about animal counts and LD₅₀ trivia. In 2025 it’s a <strong>software‑first, systems‑biology discipline</strong> colliding with the real world of regulators and drug developers. The Society of Toxicology’s Annual Meeting in Orlando showed a field that’s both <strong>more computational</strong> and <strong>more translational</strong>—closer to the clinic, closer to manufacturing, and closer to regulators’ inboxes.</p>



<h3 id="four-shifts-you-could-feel-in-the-sessions" class="wp-block-heading"><strong>Four shifts you could feel in the sessions</strong></h3>



<ol class="wp-block-list">
<li><strong>NAMs are getting operational.</strong> Cell‑based assays, high‑content imaging and adverse outcome pathway (AOP) frameworks are now wired into screening cascades. The question is no longer “if” but <strong>“which NAM for which decision?”</strong><strong><br></strong></li>



<li><strong>Microphysiological systems (MPS)</strong>—organ‑on‑chip, multi‑organ platforms—are earning their keep in DILI and cardiotox risk, especially when paired with <strong>omics readouts</strong> and longitudinal imaging. The trick is standardization: vendors who showed robust <strong>assay performance metrics</strong> got the crowds.<br></li>



<li><strong>PBPK meets QIVIVE</strong> in the mainstream. Exposure modeling is moving earlier in discovery and later into clinical supporting evidence, tying together in vitro data with human relevance.<br></li>



<li><strong>AI and knowledge graphs</strong> are cleaning up the literature mess—normalizing ontologies, flagging inconsistent endpoints, and surfacing read‑across candidates. The grown‑up teams arrived with <strong>model cards, drift monitoring</strong> and transparent training sets.<br></li>
</ol>



<h3 id="hot-topics-that-spilled-into-the-hallways" class="wp-block-heading"><strong>Hot topics that spilled into the hallways</strong></h3>



<ul class="wp-block-list">
<li><strong>Nitrosamines and extractables/leachables:</strong> manufacturing controls, sensitive analytics, and risk evaluation playbooks dominated standing‑room sessions.<br></li>



<li><strong>PFAS and microplastics:</strong> regulators are leaning into precaution; industry wants <strong>exposure‑based thresholds</strong> and better fate/transport models.<br></li>



<li><strong>Occupational exposure</strong> in battery and semiconductor supply chains: expect new guidance on chronic low‑dose risks.<br></li>
</ul>



<h3 id="what-regulators-want-and-will-reward" class="wp-block-heading"><strong>What regulators want (and will reward)</strong></h3>



<ul class="wp-block-list">
<li><strong>Decision‑grade validation</strong>: inter‑lab reproducibility and performance envelopes, not one‑off heroic datasets.<br></li>



<li><strong>Transparent uncertainty</strong>: show the sensitivity analysis and where your model breaks.<br></li>



<li><strong>Lifecycle thinking</strong>: how will your method support <strong>post‑marketing</strong> safety and change control, not just INDs?<br></li>
</ul>



<h3 id="startup-and-vendor-playbook" class="wp-block-heading"><strong>Startup and vendor playbook</strong></h3>



<ul class="wp-block-list">
<li>Sell <strong>workflow</strong>, not widgets: ELNs, LIMS, data standards and audit trails that make NAMs usable at scale.<br></li>



<li>Be <strong>OECD‑test‑guideline‑literate</strong> and map your assays to AOPs and regulatory decisions.<br></li>



<li>Offer <strong>SaaS + services</strong> packages that help teams convert old data into machine‑readable, ontology‑aligned assets.<br></li>
</ul>



<h3 id="why-this-matters-beyond-the-tox-community" class="wp-block-heading"><strong>Why this matters beyond the tox community</strong></h3>



<p>As biology goes software‑defined, <strong>safety becomes a data problem</strong>. The companies that win will treat toxicology as a continuous signal across R&D and manufacturing, not a gate at the end. That means better drugs faster—and safer consumer products by design.</p>



<p><strong>Dates & place:</strong> 16–20 March 2025, Orlando, Florida.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-283 post type-post status-publish format-standard has-post-thumbnail category-nuclear category-space tag-astrophysics tag-nuclear cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/generated-image-3-19-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="NIC School 2025 (Barcelona): R-process fundamentals, reaction rates, and stellar modelling Excerpt: The NIC School (June 10–13) distilled nuclear‑astrophysics essentials—reaction networks, lab measurements, and simulation craft—before NIC XVIII in Girona." />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/nic-school-2025-barcelona-nuclear-astrophysics/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 13, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/nic-school-2025-barcelona-nuclear-astrophysics/">NIC School 2025 (Barcelona): Training tomorrow’s nuclear‑astrophysicists—fast</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>
`,
    readingMinutes: 2,
    sticky: false,
  },
  {
    id: 274,
    slug: `ceraweek-2025-houston-energy-ai-grid`,
    date: `2025-03-17T22:10:00`,
    title: `CERAWeek 2025 (Houston): The energy transition meets the AI power surge`,
    authorSlug: `yuviraaj-nasir`,
    authorName: `Yuviraaj Nasir`,
    categorySlugs: ["energy", "ai", "transport"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/01/energy.png`,
    excerpt: `At CERAWeek 2025, energy heavyweights wrestle with LNG cycles, grid build‑out, CCUS reality, and the data‑center wave that’s redrawing power demand.`,
    contentHtml: `
<p class="has-drop-cap">CERAWeek is energy’s Davos—ministers, majors, financiers and an armada of consultants swarming downtown Houston. In 2025 the agenda finally clicked: <strong>how to add terawatts of capacity fast enough for AI/data centres without blowing up energy security or emissions targets</strong>. Last year was narrative. This year was <strong>steel, transformers and rights-of-way</strong>.</p>



<h3 id="the-three-elephants-in-the-ballroom" class="wp-block-heading">The three elephants in the ballroom</h3>



<p><strong>1) AI eats power.</strong><br>Hyperscalers spent the week speed-dating utilities for <strong>multi-gigawatt</strong> pipelines. The constraints aren’t PPAs; they’re <strong>interconnection queues</strong>, <strong>long-lead transformers</strong>, and <strong>permits for firming capacity</strong> so 24/7 claims survive scrutiny. Nuclear slid back into polite conversation—not as ideology, but as <strong>baseload scaffolding</strong> for “clean firm” portfolios that have to clear audits as well as press releases.</p>



<p><strong>2) LNG’s steady drumbeat.</strong><br>With geopolitics still messy, LNG kept its crown as the <strong>flex fuel</strong> smoothing wind/solar lulls and coal exits. The subtext moved from PR to finance: <strong>methane management and Scope 1–3 disclosure</strong> are now credit questions. Projects that win show <strong>credible abatement</strong> and <strong>market-aligned offtake</strong>, not just geography and steel.</p>



<p><strong>3) CCUS without fairy dust.</strong><br>The mood shifted from moonshots to <strong>brownfield retrofits</strong>, <strong>CO₂ pipeline corridors</strong>, and <strong>industrial clusters</strong> where capture + utilization actually pencil. Tax credits help, but <strong>capex discipline rules</strong>—with investors asking for throughput, uptime and signed hosts before they ink term sheets.</p>



<h3 id="the-grid-build-out-obsession" class="wp-block-heading">The grid build-out obsession</h3>



<p><strong>Transmission is the choke point.</strong> Panels wrestled with <strong>permitting reform</strong>, <strong>cost allocation</strong>, and <strong>reconductoring with advanced conductors</strong> to squeeze more out of existing corridors while greenfield lines crawl. On the distribution edge, utilities swapped notes on <strong>non-wires alternatives</strong> and <strong>DER orchestration</strong> to shave peaks now, not in 2030. Translation: the cheapest capacity this decade might be <strong>smarter wires</strong>, not new wires.</p>



<h3 id="what-actually-shipped-or-will" class="wp-block-heading">What actually shipped (or will)</h3>



<ul class="wp-block-list">
<li><strong>Firm-clean PPAs:</strong> Contracts that bundle wind/solar with <strong>batteries and dispatchables</strong> to guarantee hourly delivery for AI-heavy loads.</li>



<li><strong>Gas peakers with CCS-readiness:</strong> Not always capturing on day one, but <strong>pre-engineered for retrofit</strong> as policy and hub infrastructure catch up.</li>



<li><strong>Grid-scale batteries:</strong> <strong>4–8 hour</strong> durations are landing real offtakes; <strong>LFP</strong> dominates today while <strong>flow</strong> sniffs niche wins where long life and deep cycling matter.</li>
</ul>



<h3 id="founder-operator-notes" class="wp-block-heading">Founder & operator notes</h3>



<ul class="wp-block-list">
<li><strong>Build for interconnection reality.</strong> Site where queues are shorter, design for <strong>grid-forming inverters</strong>, and partner early with the wires company.</li>



<li><strong>Measure methane if you touch gas.</strong> Satellites, aerial, continuous monitors—if you can’t measure, <strong>lenders assume the worst</strong>.</li>



<li><strong>Cluster or bust for CCUS/H₂.</strong> Design around <strong>industrial clusters</strong> and CO₂ corridors where offtake and transport are hard-wired; lone-wolf projects are tourist traps.</li>
</ul>



<h3 id="the-geopolitics-layer" class="wp-block-heading">The geopolitics layer</h3>



<p>Energy security is back <strong>in bold</strong> on board slides. <strong>Sanctions, shipping risk, and Global South demand</strong> are steering capital as much as ESG scorecards. The smartest players hedged across <strong>fuels, routes, and politics</strong>—and treated disclosure as table stakes, not optional.</p>



<p class="has-drop-cap"><strong>Dates & place:</strong> <strong>March 10–14, 2025 • Houston.</strong></p>
`,
    readingMinutes: 2,
    sticky: false,
  },
  {
    id: 293,
    slug: `world-sustainable-development-summit-2025-new-delhi`,
    date: `2025-03-10T22:10:00`,
    title: `World Sustainable Development Summit 2025 (New Delhi): Where climate finance meets real deployment`,
    authorSlug: `thiago`,
    authorName: `Thiago Ferreira`,
    categorySlugs: ["energy", "export", "governance"],
    tagSlugs: ["sustainability"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/01/generated-image-2-18.png`,
    excerpt: `At WSDS 2025 in New Delhi, the center of gravity shifts from targets to tools: climate finance, resilient grids, water security and adaptation tech that can scale.`,
    contentHtml: `
<p class="has-drop-cap">If climate conferences are often vibes and virtuous panels, <strong>WSDS 2025</strong> is the one where ministers, financiers and founders start swapping spreadsheets. Hosted in New Delhi, the World Sustainable Development Summit is equal parts policy lab and startup marketplace, with India’s scale setting the reality check: <strong>solutions must work for 1.4 billion people</strong> across heat, water, energy and urbanization.</p>



<h3 id="the-2025-mood-from-promises-to-procurement" class="wp-block-heading"><strong>The 2025 mood: from promises to procurement</strong></h3>



<p>The hallway math ran like this: adaptation now claims just a sliver of climate finance, yet cities are already paying for floods, heatwaves and water stress. This year’s thesis: <strong>shift capital and technology from mitigation‑only to adaptation‑plus‑resilience</strong> without letting net‑zero drift. That unlocks new buyers (utilities, city governments, insurers) and new unit economics (risk‑based pricing, performance‑linked contracts).</p>



<h3 id="five-signals-that-actually-matter" class="wp-block-heading"><strong>Five signals that actually matter</strong></h3>



<ol class="wp-block-list">
<li><strong>Climate finance is getting more catalytic.</strong> Blended‑finance stacks are moving from theory to term sheets: concessional capital derisks first‑loss tranches so pension funds can come in on resilience infrastructure—district cooling, flood defenses, sponge‑city retrofits, microgrids.<br></li>



<li><strong>The grid is the new growth hack.</strong> India’s renewables problem isn’t generation; it’s <strong>transmission and balancing</strong>. Expect boring but decisive tenders: high‑voltage lines, flexible gas peakers, grid‑scale batteries, and <strong>demand‑response</strong> baked into DISCOM tariffs and data center agreements.<br></li>



<li><strong>Water tech is getting serious.</strong> Utilities want <strong>non‑revenue water</strong> loss detection, advanced metering, and modular wastewater reuse for industry clusters. Founders pitching satellites + IoT without a trenching plan didn’t get far; those offering <strong>financed outcomes</strong> did.<br></li>



<li><strong>Heat resilience is now an industry.</strong> From cool roofs and high‑albedo streets to passive design retrofits and <strong>district cooling</strong>, buyers want interventions that slash wet‑bulb risk for the poorest neighborhoods while cutting grid peaks.<br></li>



<li><strong>Carbon markets sober up.</strong> The vibe is no longer offsets as indulgences; it’s <strong>credits as cash‑flow</strong> for landholders and project developers with verifiable MRV. Co‑benefits (biodiversity, water) are becoming part of pricing, not add‑ons.<br></li>
</ol>



<h3 id="what-founders-got-right-this-year" class="wp-block-heading"><strong>What founders got right this year</strong></h3>



<ul class="wp-block-list">
<li><strong>Policy‑native products.</strong> Tooling that speaks MNRE, CEA, CERC, and city procurement constraints. If your widget can’t pass a tender, it’s a toy.<br></li>



<li><strong>Meter‑to‑money clarity.</strong> Bridging telemetry to billing: if a utility can’t book the saving, they won’t scale the pilot.<br></li>



<li><strong>Local supply chains.</strong> India’s production‑linked incentives and local content rules reward hardware that can be assembled domestically with credible service networks.<br></li>
</ul>



<h3 id="what-to-watch-next" class="wp-block-heading"><strong>What to watch next</strong></h3>



<ul class="wp-block-list">
<li><strong>Green hydrogen reality checks:</strong> industrial offtakes (fertilizer, refineries) will decide the pace—watch storage and electrolyzer uptime claims.<br></li>



<li><strong>EV and bus electrification:</strong> financing models that bundle depot charging, batteries and maintenance as a service will win over CAPEX‑averse transit agencies.<br></li>



<li><strong>Urban decarbonization:</strong> retrofits and heating/cooling optimization for the mid‑rise building stock—less sexy than solar, more immediate on bills and health outcomes.<br></li>
</ul>



<h3 id="the-investor-lens" class="wp-block-heading"><strong>The investor lens</strong></h3>



<p>Infrastructure investors sniffed around <strong>district energy, desal + renewables</strong>, and <strong>mid‑market battery storage</strong>. The best pitches converted avoided losses (blackouts, leakage, flood damage) into bankable cash flows with <strong>parametric insurance backstops</strong>. Climate tech VCs, meanwhile, chased <strong>grid orchestration software</strong>, <strong>forecasting</strong>, and <strong>low‑capex adaptation</strong> like cool materials.</p>



<h3 id="bottom-line" class="wp-block-heading"><strong>Bottom line</strong></h3>



<p>WSDS 2025 tells us the energy transition is <strong>grid + water + heat</strong> as much as it is solar + wind. For founders, that means selling <strong>outcomes to public buyers</strong> and building alliances with EPCs and insurers. For policymakers, it means writing tenders that pay for performance, not press releases.</p>



<p><strong>Dates & place:</strong> 5–7 March 2025, New Delhi.</p>
`,
    readingMinutes: 3,
    sticky: false,
  },
  {
    id: 294,
    slug: `idex-2025-abu-dhabi-drones-ew-edge`,
    date: `2025-02-24T10:10:00`,
    title: `IDEX 2025 (Abu Dhabi): Drones, EW and the platform war to own the kill‑chain`,
    authorSlug: `amywellington`,
    authorName: `Amy Wellington`,
    categorySlugs: ["defense", "export"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/01/drones.png`,
    excerpt: `Inside Abu Dhabi’s IDEX 2025: uncrewed systems, counter‑UAS, electronic warfare and the arms‑length AI stack reshaping the modern battlespace.`,
    contentHtml: `
<p class="has-drop-cap">IDEX is the defense world’s mirror—if it’s on this floor, it’ll be on a border soon. The 2025 run at <strong>ADNEC, Feb 17–21</strong> (co-located <strong>IDEX/NAVDEX</strong>) delivered precisely that reflection: <strong>uncrewed platforms everywhere, counter-uncrewed layered over the top, and electronic warfare in every conversation</strong>. The leitmotif was ruthless practicality—<strong>sensor → decision → effect</strong>—with modular, export-friendly software turning mixed hardware into a system that commanders can actually fight.</p>



<p>The headline wasn’t a single wunderwaffe; it was a <strong>playbook</strong>: fuse everything, automate the boring parts, leave humans the decisive calls. And do it in a way lawyers, logisticians, and export-control officers can live with.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="three-theaters-of-innovation" class="wp-block-heading">Three theaters of innovation</h3>



<h4 id="1-counter-uas-becomes-a-layered-service" class="wp-block-heading">1) Counter-UAS becomes a layered service</h4>



<p>The floor treated <strong>C-UAS</strong> like air defense in miniature. <strong>Radar + EO/IR + RF</strong> fused by edge-AI is now table stakes. The <strong>new edge</strong> is <strong>cost per intercept</strong> and <strong>rules-of-engagement tooling</strong> that lets operators climb the ladder—detect, track, jam, spoof, <strong>then</strong> hard-kill—without melting their cognitive budget. Vendors that showed <strong>operator-grade ROE UIs</strong> (jam timeouts, geofenced no-fire, auto-evidence capture) and <strong>post-action telemetry</strong> kept their demo pods full. Hardware is proliferating; <strong>repeatable workflows</strong> are the moat.</p>



<h4 id="2-ai-isr-without-the-hype" class="wp-block-heading">2) AI ISR without the hype</h4>



<p>Forget cloud-only magic. The useful kits shipped <strong>on-platform models</strong> for <strong>target recognition</strong> that survive <strong>bandwidth-denied</strong> environments, plus <strong>mission replanning</strong> that respects <strong>human-in-the-loop</strong> approvals. The best demos closed the loop with <strong>auto-compiled debrief packages</strong> (tracks, comms, ROE checks) formatted for <strong>commanders and prosecutors</strong> alike. If your AI can’t <strong>explain itself</strong> and <strong>write its own audit trail</strong>, it’s a gimmick.</p>



<h4 id="3-maritime-autonomy-grows-teeth" class="wp-block-heading">3) Maritime autonomy grows teeth</h4>



<p>At <strong>NAVDEX</strong>, <strong>USVs/UUVs</strong> shed “novelty” and showed up as <strong>modular payload trucks</strong>: minehunting sonars, EW pods, one-way strike kits. The architecture was the story—<strong>containerized mission modules</strong>, common C2, and <strong>export-conscious interfaces</strong> that let regional shipyards and primes slot in <strong>local content</strong> without breaking the fight. Littorals are contested again; the winning boats act more like <strong>software buses</strong> than bespoke hulls.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="the-geopolitics-you-could-feel" class="wp-block-heading">The geopolitics you could feel</h3>



<ul class="wp-block-list">
<li><strong>Export controls as product features.</strong> Vendors put <strong>sanction-safe parts lists</strong>, <strong>origin documentation</strong>, and <strong>software partitioning</strong> front-and-center. A clean export narrative isn’t legalese anymore—it’s a <strong>sales asset</strong>.</li>



<li><strong>Middle East primes as integrators.</strong> Regional champions positioned as <strong>system houses</strong>: take a Western sensor, a regional effector, wrap them in <strong>homegrown C2/EW</strong>, and deliver in months, not years. If you bring a clever widget, be <strong>plug-and-fight</strong> with their stacks or expect to be re-architected out.</li>



<li><strong>EW everywhere.</strong> From <strong>emissions control</strong> on drones to <strong>resilient PNT</strong> and <strong>LPI/LPD comms</strong>, the RF layer is no longer a specialty; it’s the atmosphere. The booths that won had <strong>hardening stories</strong> and <strong>TTP-aware</strong> UI, not just better antennas.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="builders-brief-if-youre-dual-use-heres-how-you-land-the-meeting" class="wp-block-heading">Builder’s brief: if you’re dual-use, here’s how you land the meeting</h3>



<ul class="wp-block-list">
<li><strong>Quantify cost per effect.</strong> Dollars per intercept, per mile of shoreline denied, <strong>per mission hour</strong> of ISR that stands up in court. Not “AI accuracy,” <strong>mission availability</strong>.</li>



<li><strong>Bring your cyber badge.</strong> Show <strong>SBOMs</strong>, <strong>signed builds</strong>, and <strong>zero-trust comms</strong>. One slide should trace how you fail safe under jamming/spoofing.</li>



<li><strong>Live inside the C2 that wins RFPs.</strong> If your app doesn’t already publish to <strong>the two or three dominant C2s</strong>, your TAM is hypothetical. Ship adapters.</li>



<li><strong>Design for export.</strong> Parameterize the sensitive bits. Offer <strong>tiered capabilities</strong> and <strong>red/black separation</strong> so friendly MoDs can buy without an interagency migraine.</li>



<li><strong>Attritables are ascendant.</strong> If you’re building exquisite, be honest about <strong>throughput and unit economics</strong>. If you’re building <strong>attritable</strong>, prove <strong>sustainment math</strong> and <strong>replenishment cadence</strong>.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="what-this-show-told-us-about-2025-27" class="wp-block-heading">What this show told us about 2025–27</h3>



<p>Defense is moving from <strong>platform maximalism</strong> to <strong>architecture realism</strong>. The kit that mattered at DEX didn’t just perform; it <strong>composed</strong>. Counter-UAS turned into a <strong>service</strong>, not a box. ISR AI became <strong>documentation</strong> and <strong>due process</strong>, not just detections. Maritime autonomy matured into <strong>payload logistics</strong> at sea. And the RF layer finally got treated like oxygen.</p>



<p><strong>Translation for founders and primes:</strong> win the stack, not the slide. If your gear can be <strong>trusted, integrated, and exported</strong>—quickly—you’ve got a market. If not, you’ve got a booth.</p>
`,
    readingMinutes: 3,
    sticky: false,
  },
  {
    id: 288,
    slug: `esmo-summit-africa-2025-cape-town-oncology`,
    date: `2025-02-10T10:10:00`,
    title: `ESMO Summit Africa 2025 (Cape Town): Oncology’s next billion‑patient problem meets African ingenuity`,
    authorSlug: `nisha`,
    authorName: `Dr Nisha Money`,
    categorySlugs: ["longevity", "medtech", "medicine"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/01/72541008231109497870541023817436-1.png`,
    excerpt: `Inside ESMO Summit Africa 2025: how African clinicians are localizing global oncology—access, trials, AI pathology and the gritty realities of delivering care.`,
    contentHtml: `
<p class="has-drop-cap">If you want a reality check on oncology’s grand promises, you fly to Cape Town, not Cannes. ESMO Summit Africa 2025 is where guidelines meet the constraints of the real world—clinic bandwidth, pathology turnaround, drug availability, and whether your patient can afford the taxi. The energy this year: <strong>take global best practice, strip it down to what actually works, then scale it across fragile systems.</strong></p>



<h3 id="the-theme-pragmatism-perfection" class="wp-block-heading"><strong>The theme: pragmatism > perfection</strong></h3>



<p>The plenary wave focused on what African oncologists can deploy <strong>this quarter</strong>: streamlined regimens, smarter triage, and diagnostics that don’t collapse under power cuts or reagent delays. Precision medicine is here, but it’s being <strong>localized</strong>—variant panels tuned for regional prevalence; digital pathology networks that share scarce expertise; and trial designs that accept logistically messy reality.</p>



<h3 id="where-the-frontier-is-moving" class="wp-block-heading"><strong>Where the frontier is moving</strong></h3>



<ul class="wp-block-list">
<li><strong>AI‑assisted pathology and radiology</strong> are no longer novelty demos. Remote reads and active‑learning models are cutting report times and helping junior clinicians prioritize cases. Crucially, programs are embedding <strong>human‑in‑the‑loop QA</strong> and offline modes to survive patchy connectivity.</li>



<li><strong>Chemo‑lite protocols</strong>—hypofractionation in radiotherapy, shorter adjuvant courses, and oral alternatives—are emerging as the fastest path to better outcomes when infusion seats and linear accelerators are the choke point.</li>



<li><strong>Trial participation from the Global South</strong> is being reframed as a capability, not a burden. Expect more <strong>pragmatic trials</strong> with simplified endpoints, community follow‑up, and mobile health ops to reduce loss to follow‑up.</li>
</ul>



<h3 id="supply-chain-truths-and-hacks" class="wp-block-heading"><strong>Supply chain truths (and hacks)</strong></h3>



<p>The hallway conversations were blunt: sterile compounding capacity, cold chain, and diagnostic reagent stockouts—not fancy molecules—decide survival curves. The clever workarounds:</p>



<ul class="wp-block-list">
<li><strong>Regional procurement clubs</strong> for generics and biosimilars to stabilize pricing.</li>



<li><strong>Hub‑and‑spoke lab models</strong> that preserve quality while cutting costs.</li>



<li><strong>Nurse‑led navigation</strong> and digital reminders to lift adherence without adding headcount.</li>
</ul>



<h3 id="what-buyers-asked-vendors-all-week" class="wp-block-heading"><strong>What buyers asked vendors all week</strong></h3>



<ol class="wp-block-list">
<li>Can your device or assay <strong>run offline</strong> and sync later? </li>



<li>What’s the <strong>consumables cost per patient</strong> at our volumes? </li>



<li>Does your data model <strong>export cleanly</strong> into our national registries? Vendors who answered in numbers, not adjectives, won the meetings.</li>
</ol>



<h3 id="founder-notes" class="wp-block-heading"><strong>Founder notes</strong></h3>



<p>If you’re a startup, your Africa playbook in 2025 is <strong>co‑build</strong> with ministries and leading cancer institutes, ship with <strong>training and maintenance baked in</strong>, and anchor your business case on <strong>reduced time‑to‑diagnosis</strong> and <strong>retention in care</strong>. The optics of “pilotitis” won’t fly here—bring implementation partners and a road map to reimbursement.</p>



<p><strong>Dates & place:</strong> 7–9 February 2025, Cape Town.</p>



<p></p>
`,
    readingMinutes: 2,
    sticky: false,
  },
  {
    id: 263,
    slug: `mdm-west-2025-anaheim-medical-device-manufacturing`,
    date: `2025-02-07T10:10:00`,
    title: `MD&M West 2025 (Anaheim): The quiet factory revolution inside MedTech`,
    authorSlug: `olivia`,
    authorName: `Dr Olivia Lesslar`,
    categorySlugs: ["manufacturing", "medtech"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/02/med-tech.png`,
    excerpt: `From assembly lines to firmware lines, MD&M West 2025 shows how MedTech manufacturing is getting faster, safer and more software‑native.`,
    contentHtml: `
<p class="has-drop-cap">Most medical devices don’t die in the clinic; they die on the factory floor or in the audit room. MD&M West is where the survivors learn to scale—<strong>design controls that don’t suffocate speed</strong>, automation that passes validation, and supply chains that keep their nerve. This year, the Anaheim vibe: <strong>software eats the shop floor.</strong></p>



<h2 id="what-the-smartest-teams-shipped" class="wp-block-heading"><strong>What the smartest teams shipped</strong></h2>



<ul class="wp-block-list">
<li><strong>Closed‑loop assembly with inline vision</strong> that logs defects straight into the eQMS so CAPA isn’t a quarterly panic.</li>



<li><strong>Digital work instructions</strong> with step‑verification, making line changes auditable and training times less medieval.</li>



<li><strong>Human factors by design, not afterthought:</strong> summative testing embedded in agile sprints, with formative feedback flowing back into tooling changes within days—not quarters.</li>



<li><strong>SaMD and firmware change control</strong> wired into product lifecycle systems—model cards, target‑performance specs, and cybersecurity bills of materials shipped by default.</li>
</ul>



<h2 id="supply-chain-realism" class="wp-block-heading"><strong>Supply chain realism</strong></h2>



<p>Sterilization capacity (EtO, e‑beam, gamma) remains the pacing item. Teams that pre‑qualified <strong>dual sterilization</strong> routes and validated <strong>accelerated aging</strong> are months ahead. On materials, the migration to <strong>recyclable mono‑materials</strong> is real—but dose accuracy and needle safety remain non‑negotiable.</p>



<h2 id="the-anaheim-checklist-for-founders" class="wp-block-heading"><strong>The Anaheim checklist for founders</strong></h2>



<ul class="wp-block-list">
<li>Arrive with <strong>process capability indices</strong>, not just cost curves.</li>



<li>Show <strong>supplier qualification</strong> depth and your plan for MDR/IVDR annexes if you touch Europe.</li>



<li>Bring your <strong>post‑market surveillance loop</strong>: complaint coding, trend detection, and how you’ll trigger design changes without CHAOS.</li>
</ul>



<p><strong>Dates & place:</strong> 4–6 February 2025, Anaheim Convention Center.</p>



<p></p>
`,
    readingMinutes: 1,
    sticky: false,
  },
  {
    id: 267,
    slug: `whx-dubai-2025-arab-health-ai-procurement-gcc`,
    date: `2025-02-03T10:10:00`,
    title: `WHX Dubai (formerly Arab Health): The trade show that behaves like a health system`,
    authorSlug: `anubha`,
    authorName: `Dr Anubha Tripathi`,
    categorySlugs: ["health", "performance"],
    tagSlugs: ["ai-imaging-bundles", "arab-health-2025", "biotech", "cssd-sterilization", "dubai-health-authority", "gcc-healthcare-procurement", "health", "healthcare-ai-governance", "infection-control-gcc", "malaffi", "nabidh", "on-prem-ai-inference", "payer-provider-platforms", "uae-data-localization", "uae-pdpl", "whx-dubai", "world-health-expo-dubai-2025"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/02/arab-health.png`,
    excerpt: `In Dubai, procurement has a new grammar: AI that ships with governance, payer-provider platforms with insurer rails, and unsexy sterilization upgrades that move CFOs—and outcomes.`,
    contentHtml: `
<h4 id="the-operational-layer" class="wp-block-heading"><strong>The operational layer</strong></h4>



<p><strong>Verticalized buying blocks.</strong> Regional buyers treated hardware, software, managed services, and financing as one procurement object. Imaging suites arrived bundled with inference-ready AI, observability, and explicit SLAs—“no more science projects.” Philips and GE HealthCare leaned in with AI-driven diagnostics and monitoring tied to enterprise platforms, an unmistakable signal that AI is now part of the kit, not an upsell.</p>



<p><strong>Payer-provider platforms as single contracts.</strong> The most crowded conversations were about connecting primary care to specialty triage, remote monitoring, and insurer workflows inside a single commercial wrapper. InterSystems’ TrakCare deals—pitched with unified clinical plus revenue-cycle and HIE connectivity—embodied the direction: fewer interfaces, faster authorizations, cleaner claims.</p>



<p><strong>Sterilization and CSSD: the quiet kingmakers.</strong> Infection prevention sold executive committees on measurable bed-day savings. CSSD had its own technical agenda in Dubai that emphasized standards and throughput; vendors from STERIS to regional specialists showcased reprocessing capacity, contingency services, and barrier solutions aimed squarely at wet-pack failures and turnaround time.</p>



<h4 id="why-the-gcc-context-changes-the-playbook" class="wp-block-heading"><strong><strong>Why the GCC context changes the playbook</strong></strong></h4>



<p><strong>Data localization is a requirement, not a preference.</strong> UAE’s federal Personal Data Protection Law—and health-sector policies led by Dubai Health Authority and Dubai Healthcare City—shape how AI is deployed: models must respect residency, consent, and exchange standards (think NABIDH in Dubai, Malaffi in Abu Dhabi). That’s why “on-prem or local-cloud inference with governance controls” is now a standard line item in RFPs.</p>



<p><strong>Arabic-first patient UX and local service muscle.</strong> As payers consolidate and state-backed groups scale, buyers rewarded vendors who invest in Arabic interfaces, clinical content, and training pipelines (nursing, biomed, health IT). The rebrand to WHX Dubai underlines that this market is no longer peripheral—it’s a global node that expects true localization and multi-year service depth.</p>



<p><strong>Follow the capital.</strong> Most healthcare deal flow in the Gulf in the last several years concentrated in the UAE and Saudi Arabia. That capital gravity shows up on the floor as larger, multi-facility rollouts and platform consolidation bets—exactly the environment where integrated contracts beat point solutions.</p>



<h4 id="where-the-rubber-met-the-road" class="wp-block-heading"><strong>Where the rubber met the road</strong></h4>



<p><strong>AI that ships with governance.</strong> What resonated were AI packages coupled to data-use policies, role-based access, model registries, and monitoring—so compliance officers can sign off. Teams asked for documented pathways to run inference on-premises or in-region clouds, and for evidence that vendors align to NABIDH/Malaffi exchanges and DHA’s updated interoperability standards. That dovetails with the UAE Health Ministry’s own showcase of digital services in the official pavilion.</p>



<p><strong>Referral-to-reimbursement plumbing.</strong> Hospitals didn’t want six contracts for referrals, telemonitoring, prior auth, and claims. They wanted one. Announced TrakCare projects stressed exactly that—unified clinical + RCM and live pipes into national HIEs—reducing denials and leakage while speeding specialty access. In May, Al Zahra Hospital Dubai publicly committed to that direction.</p>



<p><strong>CSSD as a margin lever.</strong> CFOs ran the math: lower surgical cancellations, shorter stays, and fewer readmissions from better sterilization are worth more than another pilot on predictive widgets. Dedicated CSSD programming in Dubai focused on standards, automation, and staff training—areas that hit operating metrics within the same fiscal year.</p>



<h4 id="competitive-and-market-context" class="wp-block-heading"><strong><strong>Competitive and market context</strong></strong></h4>



<p><strong>WHX Dubai is not just bigger—it’s repositioned.</strong> The rebrand from Arab Health to World Health Expo (WHX) was announced during the 50th edition and will move to Expo City in 2026. Translation: more space, more stages, more policy on-ramps, and a single global label for Informa’s healthcare network. Scale matters when you’re trying to standardize procurement playbooks across nine countries and four continents.</p>



<p><strong>Exhibitor math backs the mood.</strong> 2025’s edition delivered thousands of exhibitors and tens of thousands of visitors; Gulf media and organizers framed it as the largest to date, with emphasis on AI, robotics, and connected care—less sizzle, more throughput.</p>



<h4 id="hidden-implications-what-most-coverage-missed" class="wp-block-heading"><strong><strong><strong>Hidden implications (what most coverage missed)</strong></strong></strong></h4>



<p><strong>AI governance is the moat.</strong> In GCC procurement, model accuracy is table stakes; the differentiator is provable compliance with PDPL and health-data rules, evidence of residency, and clean integration with NABIDH/Malaffi schemas. Vendors who productized this governance layer will win multi-site awards.<a href="https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws?utm_source=chatgpt.com"><br></a></p>



<p><strong>RCM + HIE beats niche RPM.</strong> Remote monitoring point solutions struggled to justify themselves against platforms that collapse referrals, authorizations, documentation, and claim adjudication into one fabric. That aligns with a payer consolidation arc the region’s been on since 2021.<a href="https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1510401/full?utm_source=chatgpt.com"><br></a></p>



<p><strong>Sterilization is the stealth AI use case.</strong> The fastest path to an “AI ROI” sticker may be in CSSD—computer-vision checks for tray assembly, predictive maintenance for washers/sterilizers, and scheduling algorithms for instrument flow—because the counterfactuals (wet packs, delays, cancellations) hit the P&L immediately. (Exhibitor lineups and new barrier products confirm the spend.)</p>



<h4 id="stakeholder-impact" class="wp-block-heading"><strong><strong><strong><strong>Stakeholder impact</strong></strong></strong></strong></h4>



<p><strong>Providers:</strong> Expect fewer, bigger contracts with outcome SLAs, and explicit compliance artifacts for data controllers. CSSD upgrades should be prioritized alongside imaging refreshes—both change case mix and throughput.<a href="https://prod65.arabhealthonline.com/content/dam/Informa/arabhealthonline/en/2025/downloads/syllabus/27-jan/AHC25-CSSD.pdf?utm_source=chatgpt.com"><br></a></p>



<p><strong>Payers:</strong> Integration into provider platforms will reduce denial cycles; Arabic-first UX and local service centers will become non-negotiable in member apps and prior-auth tooling.<br></p>



<p><strong>Vendors:</strong> “Bring your own governance” is the new demo. Publish your residency architecture, consent flows, and audit plans. Partner with local integrators trained on NABIDH standards.<a href="https://www.dha.gov.ae/uploads/102022/NABIDH%20Policies%20%26%20Standards%20-%20Interoperability%20and%20Data%20Exchange%20Standards2022100429.pdf?utm_source=chatgpt.com"><br></a></p>



<p><strong>Policy makers:</strong> WHX’s global brand and 2026 venue shift increase surface area for regulatory harmonization—use it to standardize procurement templates and data-exchange test suites across the region.</p>



<h4 id="what-happens-next-6-12-months" class="wp-block-heading"><strong><strong><strong><strong><strong>What happens next (6–12 months)</strong></strong></strong></strong></strong></h4>



<p><strong>Deals will bundle AI + data obligations by default.</strong> RFPs will require documented inference locations, model-update cadences, bias reporting, and breach playbooks. (Baseline: PDPL + DHA/NABIDH.)<a href="https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws?utm_source=chatgpt.com"><br></a></p>



<p><strong>HIE-aware EHR modernization accelerates.</strong> More TrakCare-style announcements that explicitly reference national exchanges; watch for insurer APIs living inside clinical workflows.<a href="https://www.zawya.com/en/press-release/events-and-conferences/megamind-it-solutions-and-intersystems-agree-to-work-together-to-deliver-ehr-dwlnok7s?utm_source=chatgpt.com"><br></a></p>



<p><strong>Sterilization investment cycle continues.</strong> Expect CSSD automation and service outsourcing (onsite/offsite) to close faster than frontier AI pilots, because the savings are immediate and auditable.</p>



<h4 id="key-insights" class="wp-block-heading"><strong><strong><strong><strong><strong><strong>KEY INSIGHTS</strong></strong></strong></strong></strong></strong></h4>



<p><strong>Main development:</strong> Procurement blocks bundled AI, services, and financing—governed from day one.<br></p>



<p><strong>Why it matters:</strong> GCC buyers are rewarding compliance-ready, Arabic-first platforms over point tools.<br></p>



<p><strong>What to watch:</strong> CSSD automation and HIE-aware EHR deals will outpace shiny pilots through 2026.</p>



<p></p>



<p></p>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 286,
    slug: `mrna-therapeutics-summit-frankfurt-2025`,
    date: `2025-02-01T22:10:00`,
    title: `mRNA Therapeutics Summit Europe (Frankfurt): After the gold rush comes the build`,
    authorSlug: `dr-jens-gudmundsson`,
    authorName: `Dr Jens Gudmundsson`,
    categorySlugs: ["biotech", "lifesciences", "medicine"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/02/mrna.png`,
    excerpt: `mRNA Summit Frankfurt 2025: Beyond vaccines—oncology, delivery and scale. Inside Europe’s mRNA summit: oncology pipelines, LNP breakthroughs, saRNA, thermostability—and the manufacturing math that decides who survives.`,
    contentHtml: `
<p class="has-drop-cap">mRNA had its Cambrian explosion; 2025 is the <strong>speciation</strong>. At the <strong>mRNA‑Based Therapeutics Summit Europe</strong> in Frankfurt (Jan <strong>28–30</strong>, Sheraton Frankfurt Airport), the industry is done debating whether mRNA works. Now it’s racing to make it <strong>reliable, affordable and indication‑specific</strong>. </p>



<p><strong>What’s moving fast</strong></p>



<p><strong>Oncology</strong> steals the show: patient‑specific neoantigen vaccines collide with manufacturing TAT, while <strong>off‑the‑shelf shared‑antigen</strong> programs chase broader economics. Watch for trials pairing mRNA with checkpoint inhibitors and oncolytic viruses.</p>



<p><strong>Delivery tech</strong> is the kingmaker. Lipid nanoparticles (LNPs) still dominate, but the edge goes to platforms proving <strong>extra‑hepatic delivery</strong> with tolerable reactogenicity. Keep an eye on adaptive ionizable lipids and charge‑shielding tricks.</p>



<p><strong>Self‑amplifying RNA (saRNA)</strong> graduates from poster to plan, promising lower dose and longer expression windows—if innate immunity can be tamed.</p>



<p><strong>Thermostability</strong> and <strong>cold‑chain relief</strong> are no longer nice‑to‑haves. The winning decks show weeks at 2–8°C or room‑temp stability using sugar glass or novel excipients without nuking potency.</p>



<h2 id="manufacturing-reality-the-cost-curve-decides-the-winners" class="wp-block-heading"><strong>Manufacturing reality: the cost curve decides the winners</strong></h2>



<p>Everyone loves a platform until they see the <strong>COGS line</strong>. If your release testing and plasmid prep aren’t automated, your margin disappears. Expect lively hallway talk on:</p>



<ul class="wp-block-list">
<li><strong>Continuous in‑vitro transcription</strong> and next‑gen capping (co‑transcriptional vs enzymatic) trade‑offs.</li>



<li><strong>Template supply chains:</strong> synthetic DNA and cell‑free plasmid alternatives.</li>



<li><strong>In‑process analytics</strong> that predict potency early and cut failed batches.</li>
</ul>



<h2 id="regulation-quality-trust" class="wp-block-heading"><strong>Regulation, quality, trust</strong></h2>



<p>EMA/MHRA expectations are converging on <strong>lifecycle control</strong>, not just batch release. Sponsors need living control strategies, validated analytical methods and <strong>change‑managed</strong> process tweaks. Real‑world evidence from post‑authorization safety studies will tip payer decisions.</p>



<h2 id="what-to-watch-for-in-dealflow" class="wp-block-heading"><strong>What to watch for in dealflow</strong></h2>



<ul class="wp-block-list">
<li><strong>CDMOs</strong> with credible extra‑hepatic delivery data will be over‑subscribed.</li>



<li><strong>IP around LNP libraries</strong> remains a minefield—expect cross‑licensing and defensive M&A.</li>



<li><strong>Companion diagnostics</strong> for oncology vaccines become a serious line item.</li>
</ul>



<p><strong>Dates & venue:</strong> Jan <strong>28–30, 2025</strong>, <strong>Sheraton Frankfurt Airport Hotel & Conference Center</strong>; the summit is positioned as Europe’s end‑to‑end mRNA forum with 200+ participants. </p>
`,
    readingMinutes: 1,
    sticky: false,
  },
  {
    id: 264,
    slug: `pharmapack-paris-2025-drug-delivery`,
    date: `2025-01-25T22:10:00`,
    title: `Pharmapack Paris 2025: Drug delivery grows up—and goes green`,
    authorSlug: `agora-media`,
    authorName: `Agora Media`,
    categorySlugs: ["biotech", "digitaltherapeutics", "medicine"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2020/01/pharmapack.png`,
    excerpt: `Pharmapack 2025: Sustainable drug delivery and connected devices take center stage. From prefilled syringes to smart auto‑injectors, Pharmapack Paris 2025 shows how sustainability and connectivity are reshaping drug delivery.`,
    contentHtml: `
<p class="has-drop-cap">In pharma, the last mile isn’t a pharmacy; it’s the <strong>device</strong> in a patient’s hand. At <strong><a href="https://www.pharmapackeurope.com/en/home.html">Pharmapack 2025</a></strong> in Paris, that last mile gets a sustainability makeover and a firmware update. The event—<strong>Jan 22–23 at <a href="https://www.viparis.com/en/our-venues/paris-expo-porte-de-versailles-en">Paris Expo Porte de Versailles</a></strong>—is where packaging engineers, device designers and regulatory leads agree on what actually ships this year. </p>



<h2 id="three-currents-to-watch" class="wp-block-heading">Three currents to watch</h2>



<p><strong>1) The sustainability mandate moves from slideware to tooling.</strong> Expect lifecycle assessments on every booth, but the interesting bit is <strong>design for disassembly</strong> and <strong>mono‑material</strong> choices that keep dose accuracy while reducing incineration. Recyclability claims will be challenged by hospital waste pathways; the leaders are designing for <strong>local waste realities</strong>, not just lab tests.</p>



<p><strong>2) Connected delivery gets pragmatic.</strong> Smart caps and auto‑injectors are shedding bloated apps in favor of <strong>standards‑based data pushes</strong> into EHRs and specialty‑pharmacy systems. Think adherence proof for payers, not consumer dashboards. The best UX often looks invisible.</p>



<p><strong>3) High‑viscosity biologics meet at‑home convenience.</strong> Expect <strong>on‑body injectors</strong> and warmed cartridges targeting 1–5 mL at higher viscosities. Mechanical reliability, needle safety and alarm logic are the battlegrounds.</p>



<h2 id="regulation-the-combo-product-squeeze" class="wp-block-heading">Regulation: the combo‑product squeeze</h2>



<p>With MDR/IVDR now real, design teams are aligning risk management files with <strong>SaMD playbooks</strong>. Change‑control for firmware, cyber bills of materials, and <strong>UDI traceability</strong> are table stakes. If your Post‑Market Surveillance (PMS) plan doesn’t include real‑world device telemetry, it’s outdated.</p>



<h2 id="supply-chain-reality-check" class="wp-block-heading">Supply chain reality check</h2>



<p>Polymer availability, sterilization capacity (EtO, gamma) and <strong>accelerated aging validation</strong> are still long poles in the tent. The quiet winners are the contract partners who pre‑reserve sterilization slots and run <strong>in‑line vision</strong> that halves complaint rates.</p>



<h2 id="whats-likely-to-ship-in-the-next-12-months" class="wp-block-heading">What’s likely to ship in the next 12 months</h2>



<ul class="wp-block-list">
<li><strong>Reusable auto‑injector platforms</strong> with disposable cartridges for chronic indications.</li>



<li><strong>Unit‑dose inhalers</strong> with simpler actuation and dose‑tracking built into the label.</li>



<li><strong>Connected pill packs</strong> that push anonymous adherence data for outcomes contracts.</li>
</ul>



<p><strong>Dates & venue confirmed:</strong> Jan 22–23, 2025, <strong>Paris Expo Porte de Versailles (Hall 7.2)</strong> with staged access times by pass type. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<p><a href="https://www.linkedin.com/in/nisha-money-m-d-mfa-mph-abihm-52aaa036/">Dr Nisha Money</a> is a reporter at Agora Media specializing in health, defense, emerging technologies.</p>
`,
    readingMinutes: 2,
    sticky: false,
  },
  {
    id: 280,
    slug: `ces-2025-digital-health-summit`,
    date: `2025-01-10T10:10:00`,
    title: `CES Digital Health Summit`,
    authorSlug: `angelnoworries-fi`,
    authorName: `Elizabeth Angel`,
    categorySlugs: ["biotech", "cybersecurity", "devices", "digitaltherapeutics", "ecosystem", "health", "lifesciences", "longevity", "medtech", "medicine"],
    tagSlugs: [],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/01/ces-health-tech.png`,
    excerpt: `CES 2025 Digital Health: AI, wearables and the new clinic-at-home Inside CES 2025’s Digital Health Summit: AI triage, smart rings, home diagnostics and the battle for data interoperability.`,
    contentHtml: `
<p class="has-drop-cap">The CES 2025 Digital Health Summit: Where AI, sensors and smart rings try to make healthcare suck less</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<p>If you want to know where healthcare is heading, don’t start in a hospital. Start in a Las Vegas convention center where wristbands, rings, toilets, mirrors and even pet bowls are quietly training to be clinicians. <a href="https://www.ces.tech/">CES</a> 2025’s <a href="https://www.ces.tech/explore-ces/digital-health-summit/">Digital Health Summit</a> is where the consumerization of care meets enterprise-grade regulation—and this year the signal is clear: <strong>AI is moving from ‘cute demo’ to clinical workflow.</strong> </p>



<h2 id="whats-hot-and-real-in-2025" class="wp-block-heading">What’s hot (and real) in 2025</h2>



<p><strong>Smart rings and wristables</strong> graduate from steps and sleep to <strong>screening</strong>—nighttime SpO₂, HRV, and passive arrhythmia flags feed AI triage layers that hand off to telehealth. Battery life and continuous sensing win here; vendors betting on 24/7 wear plus periodic blood-spot tests look most credible.</p>



<p><strong>Home diagnostics</strong> stop pretending to be gadgets and start acting like <strong>micro-labs</strong>: connected antigen/chemistry cartridges, camera-based analyzers in the bathroom, and urine/patch sensors moving beyond wellness into CPT-coded reimbursable claims. Expect FDA/CE-mark chatter to dominate.</p>



<p><strong>AI copilots for clinicians</strong> finally embed inside EHR add‑ons and scribe tools. The pitch: fewer clicks, better coding, cleaner notes. The challenge: governance and drift testing. If you’re not logging prompts and model versions, you’re not enterprise-ready.</p>



<p><strong>AgeTech</strong> cashes in on the demographic curve—fall detection, medication adherence, social-companion bots—and grabs the mainstream limelight at CES’s elder-tech programming. </p>



<h2 id="why-this-matters-now" class="wp-block-heading">Why this matters now</h2>



<p>CES is no longer the place you soft-launch vaporware. Healthcare buyers arrive with checklists: <strong>interoperability (FHIR/TEFCA), audit trails, cybersecurity, and reimbursement pathways.</strong> Companies showing real integrations and human-subject data will separate from those waving PDFs. Media‑day teases across AI wearables and neurotech also set the tone for the week.</p>



<h2 id="what-ill-be-looking-for-on-the-floor" class="wp-block-heading">What I’ll be looking for on the floor</h2>



<ul class="wp-block-list">
<li><strong>Signal over noise in AI wearables.</strong> If a device claims AFib, respiration, stress and glycemic prediction, ask for reference datasets and external validation. Bonus points for blinded studies and preprints.</li>



<li><strong>Data liquidity:</strong> FHIR export, consent portability and patient‑held keys. If your ‘platform’ is an API without governance, it’s not a platform.</li>



<li><strong>Safety cases for generative AI:</strong> show me your red‑team results, hallucination rate benchmarks and a living model card.</li>



<li><strong>Battery‑science innovation:</strong> thin‑film, energy harvesting, sub‑1mA continuous sensing—these win UX and compliance.</li>
</ul>



<h2 id="the-dealscape" class="wp-block-heading">The dealscape</h2>



<p>Digital health is rediscovering <strong>bundles</strong>. Expect employers and payers to demand outcomes‑priced packages—hardware + remote care + analytics—with step‑down risk corridors. For startups, the smartest play is <strong>narrow use cases with provable ROI</strong> (post‑op monitoring, cardiac rehab, metabolic programs), then land‑and‑expand.</p>



<h2 id="regulatory-drumbeat" class="wp-block-heading">Regulatory drumbeat</h2>



<p>2025 will be the year consumer devices learn to speak regulator. That means <strong>software as a medical device (SaMD) lifecycles</strong>, post‑market surveillance, and <strong>change‑control</strong> for ML models. The winners will turn these constraints into moats—<strong>deployment logs and drift alarms</strong> are as marketable as glossy OLEDs.</p>



<h2 id="whats-likely-over-hyped" class="wp-block-heading">What’s likely over‑hyped</h2>



<ul class="wp-block-list">
<li><strong>BCIs for everyone:</strong> incredible science, but still niche outside specific indications. Keep expectations tethered to rehab and severe disability assistive tech.</li>



<li><strong>Non‑calibrated glucose from optics:</strong> progress is real, but read the fine print. Expect proxy risk scoring, not diabetic management replacements.</li>



<li><strong>Magic AI ‘diagnoses’:</strong> triage and risk prediction? Yes. Standalone diagnostic claims? Show me the trial.</li>
</ul>



<h2 id="founder-playbook-for-ces-week" class="wp-block-heading">Founder playbook for CES week</h2>



<ul class="wp-block-list">
<li><strong>Anchor your story in outcomes, not sensors.</strong> “10% fewer readmissions” beats “8 wavelengths.”</li>



<li><strong>Show your integrations.</strong> A 30‑second live export to Epic or a payer portal earns more credibility than another pitch deck.</li>



<li><strong>Bring your QA lead.</strong> Buyers want to grill your MDR/ISO 13485 and HIPAA posture, not just your sales VP.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<p><a href="https://www.linkedin.com/in/westerlund77/">Elizabeth Angel</a> is a reporter at Agora Media specializing in health, defense, emerging technologies and entertainment.</p>
`,
    readingMinutes: 3,
    sticky: false,
  },
  {
    id: 277,
    slug: `agora-innovation-media-2025`,
    date: `2025-01-01T22:10:00`,
    title: `AGORA 2025: Media that Moves the World: 3,000+ events / 2,8 million technologies – novel and emerging`,
    authorSlug: `agora-media`,
    authorName: `Agora Media`,
    categorySlugs: ["sticky"],
    tagSlugs: ["2025", "conferences", "technology"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2025/01/agora-media-1.png`,
    excerpt: `Agora is an innovation intelligence news agency highlighting novel emerging technologies in all 6 continents. We bring you a new perspective on often hidden solutions providing valuable insights for Fortune 500’s and government…`,
    contentHtml: `
<p class="has-drop-cap">Some of the events to watch that we’ll be covering in 2025:</p>



<h3 id="jan-2025" class="wp-block-heading has-text-align-left">Jan 2025</h3>



<ul class="wp-block-list">
<li><strong>Jan 7–10, 2025 </strong><em>– <a href="https://www.ces.tech/">CES Digital Health Summit Technology </a>– </em>Technology</li>



<li><strong>Jan 22–23, 2025</strong> – <a href="https://www.pharmapackeurope.com/en/home.html">Pharmapack</a> (Paris) – <em>Health / MedTech</em> </li>



<li><strong>Jan 28–30, 2025</strong> – <a href="https://mrnabased-therapeutics.com/">mRNA-based Therapeutics Summit</a> (Frankfurt) – <em>Health / MedTech</em> </li>
</ul>



<h3 id="feb-2025" class="wp-block-heading">Feb 2025</h3>



<ul class="wp-block-list">
<li><strong>Feb 7–9, 2025</strong> – <a href="https://www.esmo.org/meeting-calendar/esmo-summit-africa-2025">ESMO Summit Africa</a> (Cape Town) – <em>Health / MedTech</em> </li>



<li><strong>Feb 9–12, 2025</strong> – <a href="https://prod-aem.worldhealthexpo.com/events/healthcare/dubai/en/home.html">World Health Expo</a> (Dubai) – <em>Health / MedTech</em> </li>



<li><strong>Feb (Q4)</strong> – <a href="https://www.mdmwest.com/en/home.html">MD&M West</a> (Anaheim) – <em>Health / MedTech</em> </li>



<li><strong>Feb 17–21, 2025</strong> – <a href="https://www.idexuae.ae/">IDEX 2025</a> (Abu Dhabi) – <em>Defense / Security</em> </li>
</ul>



<h3 id="mar-2025" class="wp-block-heading">Mar 2025</h3>



<ul class="wp-block-list">
<li><strong>Mar 5–7, 2025</strong> – <a href="https://wsds.teriin.org/2026/">World Sustainable Development Summit</a> (New Delhi) – <em>Energy & Sustainability</em> </li>



<li><strong>Mar 10–14, 2025</strong> – <a href="https://www.ceraweek.com/en">CERAWeek by S&P Global</a> (Houston) – <em>Energy & Sustainability</em> </li>



<li><strong>Mar 17–20, 2025</strong> – <a href="https://www.toxicology.org/events/am/AM2025/index.asp">SOT Annual Meeting</a> (Orlando) – <em>Health / MedTech</em> </li>
</ul>



<h3 id="apr-2025" class="wp-block-heading">Apr 2025</h3>



<ul class="wp-block-list">
<li><strong>Apr 21–25, 2025</strong> – <a href="https://sosv.com/sosv-matchups/">SOSV Biomanufacturing Matchup </a>(virtual) – <em>Health / MedTech</em> </li>



<li><strong>Apr 22–24, 2025</strong> – <a href="https://www.maghrebpharma.com/en/">Maghreb Pharma Expo</a> (Algiers) – <em>Health / MedTech</em> </li>
</ul>



<h3 id="may-2025" class="wp-block-heading">May 2025</h3>



<ul class="wp-block-list">
<li><strong>May 28–29, 2025</strong> – <a href="https://dublin.ie/whats-on/listings/national-medtech-biotech-summit/">National MedTech & Biotech Summit</a> (Dublin) – <em>Health / MedTech</em> </li>



<li><strong>May 30–Jun 1, 2025</strong> – <a href="https://odesaforum.org/">Black Sea Security Forum</a> (Odesa) – <em>Defense / Security</em> </li>



<li><strong>May 30–Jun 3, 2025</strong> – <a href="https://www.asco.org/annual-meeting">ASCO</a> (Chicago) – <em>Health / MedTech</em> </li>
</ul>



<h3 id="jun-2025" class="wp-block-heading">Jun 2025</h3>



<ul class="wp-block-list">
<li><strong>Jun 2–3, 2025</strong> – <a href="https://ispe.org/conferences/2025-biotechnology-conference">ISPE Biotechnology Conference</a> (Boston) – <em>Health / MedTech</em> </li>



<li><strong>Jun 10–12, 2025</strong> – <a href="https://www.exchangemonitor.com/go/radwaste-summit-2025/">RadWaste Summit</a> (Savannah) – <em>Nuclear</em> </li>



<li><strong>Jun 10–13, 2025</strong> – <a href="https://indico.icc.ub.edu/event/560/overview">NIC School</a>: Nuclei in the Cosmos (Barcelona) – <em>Nuclear / Life Sciences</em> <a href="https://indico.icc.ub.edu/event/560/?utm_source=chatgpt.com">Indico</a><a href="https://www.jinaweb.org/events/international-symposium-nuclei-cosmos-xviii-nic-xviii?utm_source=chatgpt.com">jinaweb.org</a> </li>



<li><strong>Jun 11–14, 2025</strong> –<a href="https://indodefence.com/"> Indo Defence Expo & Forum</a> (Jakarta) – <em>Defense / Security</em> </li>



<li><strong>Jun 15–18, 2025</strong> – ANS Annual Conference (Las Vegas) – <em>Nuclear</em></li>



<li><strong>Jun 16–19, 2025</strong> – <a href="https://convention.bio.org/">BIO International Conventio</a>n (Boston) – <em>Health / MedTech</em></li>



<li><strong>Jun 16–18, 2025</strong> – REN25 Global Summit (Venice) – <em>Energy & Sustainability</em> </li>



<li><strong>Jun 17–18, 2025</strong> – <a href="https://www.govevents.com/details/84881/incyber-forum-usa">InCyber Forum USA</a> (San Antonio) – <em>Defense / Security</em>  (Updated: was <strong>postponed</strong> by organizers due to the U.S. policy climate.)</li>



<li><strong>Jun 18–19, 2025</strong> – <a href="https://londonbiotechshow.com/">London Biotechnology Show</a> – <em>Health / MedTech</em> </li>



<li><strong>Jun 22–27, 2025</strong> – <a href="http://event.asme.org" data-type="link" data-id="event.asme.org">ASME ICONE & Nuclear Engineering Conf</a><strong>.</strong> (Weihai) – <em>Nuclear</em></li>



<li><strong>Jun 24–25, 2025</strong> – <a href="https://www.nato.int/cps/en/natohq/235800.htm?selectedLocale=en">NATO Summit</a> (The Hague) – <em>Defense / Security</em> </li>
</ul>



<h3 id="jul-2025" class="wp-block-heading">Jul 2025</h3>



<ul class="wp-block-list">
<li><strong>Jul 1–2, 2025</strong> – <a href="https://www.nuclearny.org/events/">New Nuclear Capital 2025</a> (New York) – <em>Nuclear</em> </li>



<li><strong>Jul 4, 2025</strong> – ARPA-E Energy Innovation Summit (Washington DC) – <em>Energy & Sustainability</em> <a href="https://www.arpae-summit.com/Agenda">https://www.arpae-summit.com/Agenda</a></li>



<li><strong>Jul 8–10, 2025</strong> – ASME Energy & Sustainability Conference (Colorado) – <em>Energy & Sustainability</em> <a href="https://event.asme.org/ES">https://event.asme.org/ES</a></li>



<li><strong>Jul 14–18, 2025</strong> – Women in Nuclear Global Conference (London) – <em>Nuclear</em> <a href="https://www.winuk.org.uk/event/win-global-conference-2025/">https://www.winuk.org.uk/event/win-global-conference-2025/</a></li>



<li><strong>Jul 15–16, 2025</strong> – Uncrewed Naval Systems (UK) – <em>Defense / Security</em>  <a href="https://www.defenseadvancement.com/events/uncrewed-naval-systems/">https://www.defenseadvancement.com/events/uncrewed-naval-systems/</a></li>



<li><strong>Jul 16–17, 2025</strong> – EOD / IED & Countermine Symposium (USA) – <em>Defense / Security</em>  <a href="https://www.defenseadvancement.com/events/eod-ied-countermine-symposium/">https://www.defenseadvancement.com/events/eod-ied-countermine-symposium/</a></li>



<li><strong>Jul 18–20, 2025</strong> – Royal International Air Tattoo (UK) – <em>Defense / Security</em> <a href="https://www.cgi.com/uk/en-gb/event/space-maritime-defence-and-intelligence/royal-international-air-tattoo-2025-riat">https://www.cgi.com/uk/en-gb/event/space-maritime-defence-and-intelligence/royal-international-air-tattoo-2025-riat</a></li>



<li><strong>Jul 20–23, 2025</strong> – ANFM Advances Nuclear Fuel (Clearwater) – <em>Nuclear</em> <a href="https://www.ans.org/meetings/anfm2025/">https://www.ans.org/meetings/anfm2025/</a></li>



<li><strong>Jul 22–23, 2025</strong> – ETEC Nuclear Opportunities Workshop (Knoxville) – <em>Nuclear</em> <a href="https://www.eteconline.org/nuclear-industry-hub/nuclear-opportunities/">https://www.eteconline.org/nuclear-industry-hub/nuclear-opportunities/</a></li>



<li><strong>Jul 23–24, 2025</strong> – Maritime Security Summit (USA) – <em>Defense / Security</em> <a href="https://www.defenseadvancement.com/events/maritime-security-summit/">https://www.defenseadvancement.com/events/maritime-security-summit/</a></li>



<li><strong>Jul 27–Aug 1, 2025</strong> – PATRAM 2025 (San Antonio) – <em>Nuclear</em> <a href="https://patram.eventscribe.net/?mc_cid=ad625293ac&mc_eid=38d9b775cc">https://patram.eventscribe.net/?mc_cid=ad625293ac&mc_eid=38d9b775cc</a></li>



<li><strong>Jul 28–30, 2025</strong> – U.S. Women in Nuclear (New Orleans) – <em>Nuclear</em> <a href="https://nuclearn.com/event/u-s-women-in-nuclear/">https://nuclearn.com/event/u-s-women-in-nuclear/</a></li>
</ul>



<h3 id="aug-2025" class="wp-block-heading">Aug 2025</h3>



<ul class="wp-block-list">
<li><strong>Aug 4–8, 2025</strong> – Africa Climate Week (Kigali) – <em>Energy & Sustainability</em> <a href="https://fossilfueltreaty.org/africaclimateweek2025">https://fossilfueltreaty.org/africaclimateweek2025</a></li>



<li><strong>Aug 5–9, 2025</strong> – <a href="https://fossilfueltreaty.org/africaclimateweek2025">IYCE Youth Energy Conf. (Budapest)</a> – <em>Energy & Sustainability</em> <a href="https://www.iyce-conf.org/program">https://www.iyce-conf.org/program</a></li>



<li><strong>Aug 7–10, 2025</strong> – DEF CON 33 (Las Vegas) – <em>Defense / Security (Cyber)</em> <a href="https://www.appsecvillage.com/events/dc-2025">https://www.appsecvillage.com/events/dc-2025</a></li>



<li><strong>Aug 12–13, 2025</strong> – Nuclear Energy Systems Conference (ICENES) (Amsterdam) – <em>Nuclear</em> <a href="https://waset.org/nuclear-engineering-conferences-in-august-2025-in-amsterdam">https://waset.org/nuclear-engineering-conferences-in-august-2025-in-amsterdam</a></li>



<li><strong>Aug 14, 2025</strong> – ICNRRM & ICNEET (Venice) – <em>Nuclear</em> <a href="https://waset.org/nuclear-engineering-conference-in-august-2025-in-venice">https://waset.org/nuclear-engineering-conference-in-august-2025-in-venice</a></li>



<li><strong>Aug 21–22, 2025</strong> – Intl Conference on Renewable & Sustainable Energy (Dubai) – <em>Energy & Sustainability</em> <a href="https://inovscitechconferences.com/25/dubai/renewable-energy/">https://inovscitechconferences.com/25/dubai/renewable-energy/</a></li>



<li><strong>Aug 25–29, 2025</strong> – Biotechgate Digital Partnering (Hybrid) – <em>Health / MedTech</em> <a href="https://biorn.org/news-events/events/biotechgate-digital-partnering/">https://biorn.org/news-events/events/biotechgate-digital-partnering/</a></li>
</ul>



<h3 id="sep-2025" class="wp-block-heading">Sep 2025</h3>



<ul class="wp-block-list">
<li><strong>Sep 1–5, 2025</strong> – World Nuclear Symposium (London) – <em>Nuclear</em> <a href="https://www.wna-symposium.org/events/forms/1012">https://www.wna-symposium.org/events/forms/1012</a></li>



<li><strong>Sep 2–5, 2025</strong> – MSPO 2025 (Poland) – <em>Defense / Security</em> <a href="https://www.defenceprocurementinternational.com/news/land/mspo-2025-expo">https://www.defenceprocurementinternational.com/news/land/mspo-2025-expo</a></li>



<li><strong>Sep 3–4, 2025</strong> – AI for Defense Summit (MD) – <em>Defense / Security</em> <a href="https://www.aerospacedefenserevieweurope.com/news/announcing-4th-annual-ai-for-defense-summit-nwid-2266.html">https://www.aerospacedefenserevieweurope.com/news/announcing-4th-annual-ai-for-defense-summit-nwid-2266.html</a></li>



<li><strong>Sep 3–4, 2025</strong> – Counter‑UAS & Integrated Protection Summit (USA) – <em>Defense / Security</em> <a href="https://cuas.dsigroup.org/">https://cuas.dsigroup.org/</a></li>



<li><strong>Sep 7–10, 2025</strong> – COMEX / EDEX Oman – <em>Defense / Security</em> <a href="https://ocec.om/Whatson/Detail/466">https://ocec.om/Whatson/Detail/466</a></li>



<li><strong>Sep 8–11, 2025</strong> – NECX Nuclear Energy Conference & Expo (Atlanta) – <em>Nuclear</em> <a href="https://nuclearenergyconference.org/?source=NEIIDEA">https://nuclearenergyconference.org/?source=NEIIDEA</a></li>



<li><strong>Sep 14–18, 2025</strong> – Nuclear Criticality Safety Division Meeting (USA) – <em>Nuclear</em> <a href="https://ncsd.ans.org/">https://ncsd.ans.org/</a></li>



<li><strong>Sep 15–19, 2025</strong> – ICAPP Nuclear Power Plants Congress (Antibes) – <em>Nuclear</em> <a href="https://www.ans.org/meetings/view-449/">https://www.ans.org/meetings/view-449/</a></li>



<li><strong>Sep 17–19, 2025</strong> – Explosive Ordnance Seminar Europe (Athens) – <em>Defense / Security</em> <a href="https://www.asdevents.com/event.asp?id=25527">https://www.asdevents.com/event.asp?id=25527</a></li>



<li><strong>Sep 24–25, 2025</strong> – Defence Exports Conference (London) – <em>Defense / Security</em>  <a href="https://www.defence-industries.com/events/18th-annual-defence-exports">https://www.defence-industries.com/events/18th-annual-defence-exports</a></li>



<li><strong>Sep 23, 2025</strong> – Fleet Maintenance Symposium (San Diego) – <em>Defense / Security</em> <a href="https://www.ssi-corporate.com/about-us/events/fleet-maintenance-modernization-symposium-2025/">https://www.ssi-corporate.com/about-us/events/fleet-maintenance-modernization-symposium-2025/</a></li>



<li><strong>Sep 23–25, 2025</strong> – National Cyber Summit (Huntsville) – <em>Defense / Security</em> <a href="https://cyberhuntsville.org/event-5783212">https://cyberhuntsville.org/event-5783212</a></li>



<li><strong>Sep 29–30, 2025</strong> – Energy Trends (Lisbon) – <em>Energy & Sustainability</em> <a href="https://renewableenergyconferences.com/program-schedule">https://renewableenergyconferences.com/program-schedule</a></li>



<li><strong>Sep 29–30, 2025</strong> – C‑UAS Homeland Security Europe (London) – <em>Defense / Security</em> <a href="https://www.sourcesecurity.com/events/counter-uas-homeland-security-europe-2025.html?ref=red-pop-int">https://www.sourcesecurity.com/events/counter-uas-homeland-security-europe-2025.html?ref=red-pop-int</a></li>
</ul>



<h3 id="oct-2025" class="wp-block-heading">Oct 2025</h3>



<ul class="wp-block-list">
<li><strong>Oct 1, 2025</strong> – Net Zero Conference (Los Angeles) – <em>Energy & Sustainability</em> <a href="https://netzeroconference.com/">https://netzeroconference.com/</a></li>



<li><strong>Oct 1–2, 2025</strong> – ICNMNS & ICNAP (Tbilisi) – <em>Nuclear</em> <a href="https://waset.org/nuclear-materials-and-nuclear-security-conference-in-october-2025-in-tbilisi">https://waset.org/nuclear-materials-and-nuclear-security-conference-in-october-2025-in-tbilisi</a></li>



<li><strong>Oct 6–9, 2025</strong> – IFNEC Nuclear Forum (Idaho Falls) – <em>Nuclear</em> <a href="https://www.ifnec.org/ifnec/jcms/g_5745/workshops-and-conferences">https://www.ifnec.org/ifnec/jcms/g_5745/workshops-and-conferences</a></li>



<li><strong>Oct 6–10, 2025</strong> – MILCOM 2025 (Los Angeles) – <em>Defense / Security</em> <a href="https://milcom2025.ieee-milcom.org/">https://milcom2025.ieee-milcom.org/</a></li>



<li><strong>Oct 9, 2025</strong> – ICRRP (Shanghai) – <em>Nuclear</em> <a href="https://waset.org/radiation-safety-conferences-in-october-2025-in-shanghai">https://waset.org/radiation-safety-conferences-in-october-2025-in-shanghai</a></li>



<li><strong>Oct 12–15, 2025</strong> – <a href="https://waset.org/radiation-safety-conferences-in-october-2025-in-shanghai">World Health Summit (Berlin)</a> – <em>Health / MedTech</em> <a href="https://www.worldhealthsummit.org/">https://www.worldhealthsummit.org/</a></li>



<li><strong>Oct 12, 2025</strong> – World Summit on Innovation Ecosystems (A Coruña) – <em>Ecosystem</em> <a href="https://thewsie.com/">https://thewsie.com/</a></li>



<li><strong>Oct 13–16, 2025</strong> – <a href="https://thewsie.com/">SMPTE Media Technology Summit (Pasadena)</a> – <em>Media Tech</em> <a href="https://summit.smpte.org/2025">https://summit.smpte.org/2025</a></li>



<li><strong>Oct 13, 2025</strong> – AUSA Annual Meeting (Washington, DC) – <em>Defense / Security</em> <a href="https://www.defenseadvancement.com/events/ausa/">https://www.defenseadvancement.com/events/ausa/</a></li>



<li><strong>Oct 14–15, 2025</strong> – AI & CX Conference Romania (Bucharest) – <em>Tech / Ecosystem</em> <a href="https://cx-conference.ro/">https://cx-conference.ro/</a></li>



<li><strong>Oct 20–24, 2025</strong> – IAEA Climate & Nuclear Power Conf. (Vienna) – <em>Nuclear</em> <a href="https://www.iaea.org/newscenter/news/deadline-extended-for-call-for-papers-conference-on-resilience-of-nuclear-installations">https://www.iaea.org/newscenter/news/deadline-extended-for-call-for-papers-conference-on-resilience-of-nuclear-installations</a></li>
</ul>



<h3 id="nov-2025" class="wp-block-heading">Nov 2025</h3>



<ul class="wp-block-list">
<li><strong>Nov 3–6, 2025</strong> – World Nuclear Exhibition (Paris) – <em>Nuclear</em> <a href="https://www.world-nuclear-exhibition.com/#/">https://www.world-nuclear-exhibition.com/#/</a></li>



<li><strong>Nov 5–6, 2025</strong> – Global Renewable Energy Summit (Sydney) – <em>Energy & Sustainability</em></li>



<li><strong>Nov 9–12, 2025</strong> – ANS Winter Conference (Washington DC) – <em>Nuclear</em> <a href="https://www.ans.org/meetings/wc2025/">https://www.ans.org/meetings/wc2025/</a></li>



<li><strong>Nov 17–19, 2025</strong> – World Summit on Green Energy & Sustainable Development (Dubai) – <em>Energy & Sustainability</em> <a href="https://greenenergy.scientificsummits.org/">https://greenenergy.scientificsummits.org/</a></li>



<li><strong>Nov 18–21, 2025</strong> – Milipol Paris – <em>Defense / Security</em> <a href="https://www.milipol.com/en">https://www.milipol.com/en</a></li>



<li><strong><strong>Nov 19–20, 2025</strong> – </strong>ICNDWMA Nuclear Decommissioning (Las Vegas) <strong>– </strong><em>Nuclear</em>                                  <a href="https://conferenceinusa.com/event_detail/3120983">https://conferenceinusa.com/event_detail/3120983</a></li>



<li><strong><strong>Nov 19–20, 2025</strong> – </strong>Slush 2025 (Helsinki)                                                           <a href="https://slush.org/">https://slush.org/</a></li>



<li><strong> 21–23, 2025</strong> – Halifax International Security Forum (Canada) – <em>Defense / Security</em>                                                     <a href="https://halifaxtheforum.org/forum">https://halifaxtheforum.org/forum</a></li>
</ul>



<h3 id="dec-2025" class="wp-block-heading">Dec 2025</h3>



<p><strong>Dec 1–4, 2025</strong> – Egypt Defence Expo (Cairo) – <em>Defense / Security</em> <a href="https://www.egyptdefenceexpo.com/what-is-edex">https://www.egyptdefenceexpo.com/what-is-edex</a></p>



<p><strong>Dec 4, 2025</strong> – ICNMR Nuclear Medicine & Radiopharmacy (Sydney) – <em>Nuclear</em> <a href="https://waset.org/nuclear-medicine-and-radiopharmacy-conference-in-december-2025-in-sydney?utm_source=conferenceindex&utm_medium=referral&utm_campaign=listing">https://waset.org/nuclear-medicine-and-radiopharmacy-conference-in-december-2025-in-sydney?utm_source=conferenceindex&utm_medium=referral&utm_campaign=listing</a></p>



<p><strong>Dec 7–11, 2025</strong> – MiNES NuclearMaterials Conf. (Cleveland) – <em>Nuclear</em> <a href="https://www.tms.org/portal/MEETINGS___EVENTS/TMS_Meetings___Events/Upcoming_TMS_Meetings/MiNES2025/portal/Meetings___Events/2025/MiNES2025/default.aspx?hkey=bc8b9921-064f-41c5-8090-cc7d365686e5">https://www.tms.org/portal/MEETINGS___EVENTS/TMS_Meetings___Events/Upcoming_TMS_Meetings/MiNES2025/portal/Meetings___Events/2025/MiNES2025/default.aspx?hkey=bc8b9921-064f-41c5-8090-cc7d365686e5</a></p>



<p><strong>Dec 9, 2025</strong> – AOC International Symposium & Convention (MD) – <em>Defense / Security</em> <a href="https://aoc2025.org/">https://aoc2025.org/</a></p>



<ul class="wp-block-list">
<li></li>
</ul>



<h3 id="about" class="wp-block-heading">About</h3>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
<p>Agora  Media is an innovation intelligence news agency highlighting novel emerging technologies in tech, health and wellness, defense, entertainment, and cross‑industry discoveries. Through rigorous reporting, data research, and executive briefings, we guide Fortune 500s, governments and organizations accelerating systemic renaissance on a global scale.</p>
<cite>At the forefront of innovation</cite></blockquote>



<p>Agora Media is a premier innovation publisher and strategic intelligence partner at the intersection of technology, healthcare, defense, and industry-wide innovation. Through insightful journalism, rigorous research, and impactful advisory services, we connect the world’s leading minds and organizations to transformative ideas that shape the future.</p>



<figure class="wp-block-image alignwide size-full"><img loading="lazy" decoding="async" width="500" height="500" src="https://theagoramedia.com/wp-content/uploads/2020/02/B9DF6622-51C3-4353-9B1E-AD0D2738F1F3-export.png" alt="" class="wp-image-3996" srcset="https://theagoramedia.com/wp-content/uploads/2020/02/B9DF6622-51C3-4353-9B1E-AD0D2738F1F3-export.png 500w, https://theagoramedia.com/wp-content/uploads/2020/02/B9DF6622-51C3-4353-9B1E-AD0D2738F1F3-export-300x300.png 300w, https://theagoramedia.com/wp-content/uploads/2020/02/B9DF6622-51C3-4353-9B1E-AD0D2738F1F3-export-150x150.png 150w, https://theagoramedia.com/wp-content/uploads/2020/02/B9DF6622-51C3-4353-9B1E-AD0D2738F1F3-export-80x80.png 80w, https://theagoramedia.com/wp-content/uploads/2020/02/B9DF6622-51C3-4353-9B1E-AD0D2738F1F3-export-110x110.png 110w, https://theagoramedia.com/wp-content/uploads/2020/02/B9DF6622-51C3-4353-9B1E-AD0D2738F1F3-export-380x380.png 380w" sizes="auto, (max-width: 500px) 100vw, 500px" /><figcaption class="wp-element-caption">Agora Media – Collective Intelligence</figcaption></figure>



<p>Conferences partner with Agora Media to amplify their reach, elevate their brand, and deepen their industry influence. Our dedicated coverage and expert-led storytelling help events achieve broader visibility among influential executives, policymakers, and industry leaders worldwide. By leveraging our extensive networks and highly engaged audiences, Agora Media ensures your conference captures the attention it deserves, fostering meaningful connections that extend well beyond the event itself.</p>



<p>Whether through live reporting, feature articles, exclusive interviews, or interactive content, Agora Media is committed to making your event an essential destination for groundbreaking dialogue, strategic collaboration, and transformative action.</p>



<ul class="wp-block-list">
<li></li>
</ul>



<p>Discover how Agora Media can enhance your next event and put your ideas on the global stage.</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-285 post type-post status-publish format-video has-post-thumbnail category-biotech tag-technology post_format-post-format-video cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/ispe-biotech-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="ISPE Biotechnology Conference 2025 (Boston): AI, GMP & Biomanufacturing Reality Check" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/ispe-biotech-2025-boston-ai-gmp-biomanufacturing/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 4, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/ispe-biotech-2025-boston-ai-gmp-biomanufacturing/">ISPE Biotechnology Conference 2025 (Boston): AI meets GMP—with a reality check</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p></p>
`,
    readingMinutes: 6,
    sticky: false,
  },
  {
    id: 281,
    slug: `slush-2024`,
    date: `2024-11-21T22:10:00`,
    title: `Slush 2024: the founders’ winter rave where dealflow meets dopamine`,
    authorSlug: `uyen-pham`,
    authorName: `Uyen Pham`,
    categorySlugs: ["ai"],
    tagSlugs: ["startups", "technology"],
    featuredImage: `https://theagoramedia.com/wp-content/uploads/2024/11/54155881272_1f110af700_c.jpg`,
    excerpt: `If Coachella had a baby with a data room, you’d get Slush 2024. The whole thing went down Nov 20–21 at Messukeskus (Helsinki Expo & Convention Center)—neon rigs, fog, and a crowd that runs equally on coffee and cap tables.`,
    contentHtml: `
<p class="has-drop-cap">Two icy days. 13k people. Record investor density. AI takes the wheel. A €1M pitch win. And Helsinki proves (again) that a startup conference can feel like a festival <em>and</em> a spreadsheet at the same time. </p>



<h3 id="the-vibe-check" class="wp-block-heading">The Vibe Check</h3>



<p></p>



<p>If Coachella had a baby with a data room, you’d get <strong>Slush 2024</strong>. The whole thing went down <strong>Nov 20–21</strong> at <strong>Messukeskus (Helsinki Expo & Convention Center)</strong>—neon rigs, fog, and a crowd that runs equally on coffee and cap tables. </p>



<p>This year’s headline stats were loud: <strong>~13,000 attendees</strong>, including <strong>5,500+ startups</strong> and <strong>3,300 investors</strong> with <strong>$3T+ AUM</strong> prowling the aisles. Slush keeps calling itself the world’s biggest VC gathering—and honestly, the investor-per-founder density backs the brag. </p>



<p>Theme? <strong>“Metamorphosis — a call for radical transformation.”</strong> Translation: less pontificating, more evolving. The official line from Slush’s new CEO <strong>Aino Bergius</strong>: founders are in a hard market; tech-led change is how you break out. Mood matched the weather: crisp, focused, zero fluff. </p>



<p>What actually happened (aka: the feed you’d send your investor)</p>



<h3 id="1-ai-isnt-a-feature-anymore-its-a-business-model-smell-test" class="wp-block-heading">1) AI isn’t a feature anymore; it’s a business model smell test</h3>



<p>Founders pitching “AI-powered X” got polite nods; founders showing <strong>validated performance, data rights, and unit economics</strong> got investor calendars. Macro-wise, people were <em>cautiously</em> optimistic that the funding bottleneck eases in 2025, with AI still the magnet. (Bergius told <a href="https://www.reuters.com/technology/entrepreneurs-start-up-show-hopeful-funding-bottlenecks-ease-2025-2024-11-20/?utm_source=chatgpt.com">Reuters</a> the quiet part out loud; the optimism is real but measured.) </p>



<h3 id="2-speed-dating-but-make-it-enterprise" class="wp-block-heading">2) Speed dating, but make it enterprise</h3>



<p>Slush’s <strong>Matchmaking Tool</strong> did numbers—<strong>20,000+ pre-booked 1:1s</strong> across two days. If you landed in Helsinki with a clean deck and a calendar, you left with a pipeline (and probably a sauna slot). </p>



<h3 id="3-the-e1000000-mic-drop" class="wp-block-heading">3) The €1,000,000 mic drop</h3>



<p><strong>OASYS NOW</strong> took home <strong>Slush 100</strong>, the marquee pitch crown, with a <strong>€1M equity investment</strong> from Cherry Ventures + General Catalyst. They’re attacking clinical-trial matching and patient engagement—one of those “boring, giant” problems that VCs secretly love. (If you’re entering next year: Slush 100’s timeline & rules are public—read them.) </p>



<h3 id="4-big-brain-keynotes-minimal-cringe" class="wp-block-heading">4) Big-brain keynotes, minimal cringe</h3>



<p><strong>NVIDIA</strong> co-founder <strong>Chris Malachowsky</strong> went full “30-year roadmap” on how compute shifts make new markets inevitable. <strong>Figma</strong>’s <strong>Dylan Field</strong> traced the meme-to-platform arc and why design velocity is the new moat. <strong>Vinted</strong> co-founder <strong>Milda Mitkutė</strong> served marketplace truths (and wardrobe chaos). These weren’t vanity slots; they were builder clinics. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="field-notes-how-slush-2024-was-different" class="wp-block-heading">Field notes: how Slush 2024 was different</h3>



<p><strong>Helsinki is the main character.</strong> The city leans all the way in: logistics behave, trams show up, and even the airport feels like it ships product. There’s a reason teams keep calling this <em>the</em> founder-focused event. </p>



<p><strong>Operator core > celebrity panels.</strong> Fewer “thought leadership” panels, more <strong>how-to</strong>: GTM in a recession, CFO-level metrics at seed, COGS discipline in AI infra. Founders came to <em>do meetings</em>, not collect lanyards. (Numbers check out: investor/startup ratio stayed intense.) </p>



<p><strong>Side events became a second conference.</strong> From LP/GP breakfasts to climate tracks and corporate venture open days, Slush Week is now a city-wide mesh of micro-summits. If you didn’t plan, you watched the best rooms fill up on X in real time. </p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-261 post type-post status-publish format-gallery has-post-thumbnail category-medicine tag-medicine post_format-post-format-gallery cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2025/06/oncology-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="ASCO 2025: Plenary data that actually changes oncology practice" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/asco-2025-chicago-practice-changing-trials/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 4, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/asco-2025-chicago-practice-changing-trials/">ASCO 2025 (Chicago): Practice‑changing oncology, by the numbers</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p>The money angle (because your runway cares)</p>



<p>Reuters’ read on the ground: founders + funds are aligned on cautious momentum, with a clear eye on election-driven policy risk. Translation: <strong>terms are still terms</strong>, but if you’ve got real traction (and not just “AI pixie dust”), <em>doors opened</em>. <a href="https://www.reuters.com/technology/entrepreneurs-start-up-show-hopeful-funding-bottlenecks-ease-2025-2024-11-20/?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">Reuters</a></p>



<p>If you’re building:</p>



<ul class="wp-block-list">
<li><strong>Bring data rooms, not demos.</strong> Investors chased <strong>evidence</strong>—clean metrics, customer references, minimal fluff.</li>



<li><strong>Own your data rights.</strong> Training on borrowed datasets? Investors will ding you.</li>



<li><strong>Know your infra bill.</strong> If you’re on foundation models, show pricing resilience when usage pops. (And yes, everyone asked about margins.)</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="the-slush-100-cheat-sheet-bookmark-this-for-2025" class="wp-block-heading">The Slush 100 cheat sheet (bookmark this for 2025)</h3>



<ul class="wp-block-list">
<li><strong>Prize:</strong> €1,000,000 equity (Cherry Ventures + General Catalyst).</li>



<li><strong>Eligibility:</strong> Young companies (2022+), < €2M raised, Europe or North America focus.</li>



<li><strong>Timeline:</strong> Openings in August, finals on Day 2 at Slush.</li>



<li><strong>Perks:</strong> Hands-on mentoring (think 20VC deck workshop, Slack co-founder Q&A—last year’s flavor).</li>
</ul>



<p>That €1M check isn’t an outlier; it’s a signal. Slush 100 is now <em>the</em> seed-stage Olympics for Europe. Start prepping in summer, not November. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="screenshots-or-it-didnt-happen-speaker-gems" class="wp-block-heading">Screenshots or it didn’t happen (speaker gems)</h3>



<ul class="wp-block-list">
<li><strong>Malachowsky (NVIDIA):</strong> Chips aren’t just faster; they <strong>rewrite what’s buildable</strong>—so your category might not exist <em>yet</em>. Build like it will. <a href="https://www.youtube.com/watch?v=mbWQAs7ihC4&utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">YouTube</a></li>



<li><strong>Dylan Field (Figma):</strong> The moat isn’t features; it’s how fast teams go from idea to shipped. Design velocity > design vanity. <a href="https://www.youtube.com/watch?pp=0gcJCf8Ao7VqN5tD&v=vMLB03XIfDE&utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">YouTube</a></li>



<li><strong>Milda Mitkutė (Vinted):</strong> Marketplaces grow when <em>one</em> side has an overwhelming reason to show up every day. Start there, then earn the other side. <a href="https://www.youtube.com/watch?v=2t2UnW1NK90&utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">YouTube</a></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="practical-intel-for-founders-steal-this-playbook" class="wp-block-heading">Practical intel for founders (steal this playbook)</h3>



<ol class="wp-block-list">
<li><strong>Land with a calendar, not vibes.</strong> Use the Matchmaking Tool <em>before</em> your flight. Aim for <strong>12–16 short meetings/day</strong>, then triage at night. That’s how 20k+ meetings happen. <a href="https://vendelux.com/event-guides/slush-conference/?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">Vendelux</a></li>



<li><strong>Rotate two decks.</strong> A 5-slide “walk-and-talk” for the floor; a 15-slide version for quiet tables.</li>



<li><strong>Treat Helsinki like a campus.</strong> The best convos often happen at side events within walking distance of Messukeskus. Pack boots and battery packs. <a href="https://www.nefco.int/events/slush-2024/?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">Nefco</a></li>



<li><strong>If you’re pitching Slush 100 next year:</strong> ship a crisp 90-sec video, rehearse <em>timers</em>, and get a dry run with someone who will roast you. (Judges did.) <a href="https://slush.org/audience/startups/slush100?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">slush.org</a></li>
</ol>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h2 id="why-slush-still-slaps" class="wp-block-heading">Why Slush still slaps</h2>



<p>Because it merges <strong>founder energy</strong> with <strong>operator discipline</strong>. The production is festival-level, but the content is spreadsheet-serious. It’s also run by people who clearly care about <em>mechanics</em>: logistics, curation, and density. That’s why the investor math is insane, and why a November show in sub-zero Finland keeps outranking sunny conferences elsewhere. </p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<h3 id="receipts-for-your-boss-your-lps-or-your-skeptic-co-founder" class="wp-block-heading">Receipts (for your boss, your LPs, or your skeptic co-founder)</h3>



<p><strong>Macro read:</strong> cautious optimism for 2025 dealmaking. <a href="https://www.reuters.com/technology/entrepreneurs-start-up-show-hopeful-funding-bottlenecks-ease-2025-2024-11-20/?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">Reuters</a></p>



<p><strong>When/where:</strong> Nov 20–21, 2024, <strong>Messukeskus</strong>, Helsinki. </p>



<p><strong>Scale:</strong> ~13k attendees; <strong>5,500+ startups</strong>; <strong>3,300 investors</strong>; record density. <a href="https://www.hel.fi/en/news/slush-focusing-on-change-a-record-number-of-startup-entrepreneurs-and-investors-attending?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">Helsingin kaupunki</a><a href="https://finlandabroad.fi/web/tur/current-affairs/-/asset_publisher/h5w4iTUJhNne/content/slush-brings-together-finnish-and-turkish-startup-ecosystem/384951?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener"> </a></p>



<p><strong>Theme:</strong> <strong>Metamorphosis</strong>—a call for radical transformation. <a href="https://www.hel.fi/en/news/slush-focusing-on-change-a-record-number-of-startup-entrepreneurs-and-investors-attending?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">Helsingin kaupunki</a></p>



<p><strong>Investor AUM:</strong> <strong>~$3T</strong> cited by media roundups. <a href="https://techfundingnews.com/slush-2024-ai-and-healthtech-innovations-e1m-investment-and-female-leadership/?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">Tech Funding News</a></p>



<p><strong>Slush 100 winner:</strong> <strong>OASYS NOW</strong>—€1M equity from Cherry + General Catalyst. <a href="https://tech.eu/2024/11/21/oasys-now-wins-eur1m-in-slush-100-competition/?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">Tech.eu</a></p>



<p><strong>Speakers:</strong> <strong>Chris Malachowsky (NVIDIA)</strong>, <strong>Dylan Field (Figma)</strong>, <strong>Milda Mitkutė (Vinted)</strong>—talks published by Slush. <a href="https://www.youtube.com/watch?v=mbWQAs7ihC4&utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">YouTube</a></p>



<p>See you next November. Bring warm socks, a tight pitch, and a calendar that can take a beating.</p>



<p><a href="https://www.flickr.com/photos/slushmedia/54155881272/in/album-72177720322112008">Photo</a></p>



<p></p>
`,
    readingMinutes: 5,
    sticky: false,
  },
  {
    id: 271,
    slug: `all-about-the-architecture-of-tsunami-resistant-buildings`,
    date: `2020-02-08T11:18:59`,
    title: `All About the Architecture of Tsunami-Resistant Buildings`,
    authorSlug: `angelnoworries-fi`,
    authorName: `Elizabeth Angel`,
    categorySlugs: ["uncategorized"],
    tagSlugs: [],
    featuredImage: null,
    excerpt: `Venenatis tempor. Luctus consectetuer augue est, nulla sollicitudin dignissim maecenas. Ante leo montes suspendisse libero a tristique lacinia inceptos dui tempor.`,
    contentHtml: `
<p class="has-drop-cap">Dana describes her projects as ones that “reveal answers and lead to more questions.” Whether something related to her own life or a more universal topic, the idea is the solve something which appears unsolvable. Take, for example, Dana’s recent ongoing project called Scarf Collection. “I sell the scarfs and give half of the money to a Black person or Black-led organisation,” she explains. “Capitalism functions in a space of scarcity, so I wanted to prove to myself that there can be enough, and giving is something that can be built into my art practice.” In turn, the project questions labour, ownership, love and abundance.</p>



<p>It means Dana’s practice today is multifaceted, something which allows her to pull from a history of signals, references and symbols to “draw out emotions and memories we may have forgotten we had.” This often sees her working with found imagery from Ebony Magazine that “highlight[s] the idea of upward mobility and a growing Black middle class.” By utilising a language of humour and familiarity, Dana opens up “complex spaces of laughter and irony, while retaining an empathetic quality.” All this means she can communicate elaborate concepts in understated ways, drawing viewers in before opening up to them.</p>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"><p>Art, and the process of making things has always been the primary way that I am able to process, and understand the world</p><cite>Albert Flores</cite></blockquote>



<p>Whatever the project, however, the exciting part for Dana is “the way I can surprise myself with a combination of colours I have never seen before but remind me of something that I miss.” And this is exactly what she plans to continue doing, with plans for a group show in October and several artists residencies in the coming year. “Between now and then I am continuing to explore materials, ask questions and make scarfs,” she says.</p>



<figure class="wp-block-image alignwide size-large"><img decoding="async" src="http://schematictheme.com/schematic/wp-content/uploads/sites/2/2022/06/demo-image-00001-1024x683.jpeg" alt="" class="wp-image-3955"/><figcaption>Pen Mendonça: 100 Great Black Britons (Copyright © Pen Mendonça)</figcaption></figure>



<p>Currently based in New York, a city she’s called home since graduating from the School of Visual Arts with an MFA in fine art in 2019, Dana tells us she’s simply never been interested in being anything other than an artist. “Art, and the process of making things has always been the primary way that I am able to process, and understand the world,” she explains. It was at SVA that her unique practice formed, as she explored “digital art, web, fashion, 3D design and printmaking on top of painting and drawing” during her undergrad in graphic design.</p>



<ul class="wp-block-list"><li>Through her artistic practice, Johanna Tagada Hoffbeck invites positivity into everyday life</li><li>Art duo Mazaccio & Drowilal use collage to deconstruct popular culture</li><li>Rosanna Webster, Fon and Fa, and Parker Heyl embody the human qualities of creativity through experimentation</li><li>Through rich and colourful symbolism, Bony Ramírez uses art to reflect on his Caribbean culture</li></ul>



<p>Founded by French-Lebanese sisters Laura and Sophie Tabet, as well as Ulysse Sabbagh, in partnership with Lebanese creatives Flavie Audi and Emilie Kareh, stock will be added to the store weekly until early January. “We have been humbled by the number of people who have come forward and answered the call to help Lebanon,” says founder Laura Tabet. “In these dark times, it’s deeply heartening to witness the artistic community coming together to create a movement that is beyond politics and beyond borders.”</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-275 post type-post status-publish format-standard has-post-thumbnail category-defense category-export category-nuclear category-ai cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/01/man-and-drone-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="Odessa's Black Sea Forum 2025: Drones, sea lanes and layered defense" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/black-sea-security-forum-2025-odesa/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">June 2, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/black-sea-security-forum-2025-odesa/">Black Sea Security Forum 2025: Odesa’s defense tech is built for tonight, not 2030</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p>One example of this is Ebony Reprinted, a series of monoprints that present “the healing possibilities of abstraction.” To make the works, Dana used images that circulated in printed adverts and distorted them using paint to “remove traces of exploitative, white-dominated, capitalist, visual language and allow the individuals in these images to regain their agency.” She does this by smearing, pressing and adding texture to paint and, as the individuals and their faces becomes more abstract, the notion is that they also become “exponentially more present.”</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">		<div class="sight-block-portfolio  sight-block-portfolio-id-6a01b924b8773 sight-block-portfolio-layout-justified">
				<div class="sight-portfolio-area sight-portfolio-area-lightbox sight-last-row-justified">

		<div class="sight-portfolio-area__outer">
			<div class="sight-portfolio-area__main" >
							</div>
		</div>
	</div>
			</div>

		<style>		.sight-block-portfolio-id-6a01b924b8773 {
			--sight-portfolio-area-grid-image-height: 260px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b924b8773 {
				--sight-portfolio-area-grid-image-height: 260px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b924b8773 {
				--sight-portfolio-area-grid-image-height: 200px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b924b8773 {
				--sight-portfolio-area-grid-image-height: 100px;
			}
		}
				.sight-block-portfolio-id-6a01b924b8773 {
			--sight-portfolio-area-grid-gap: 15px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b924b8773 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b924b8773 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b924b8773 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
		</style>
		</div></div>



<p>As well as Beirut Re-Store’s marketplace, towards the end of October the platform will launch a “special collection of bespoke items” made in collaboration with non-profit organisation Creatives For Lebanon. This collection is already confirmed to feature contributions from Dior, Jean Paul Gaultier and Supriya Lee.</p>



<p>With a background in both graphic design and art, Dana Robinson’s practice sits at a fascinating intersection. She understands the power of combining imagery and text and the cultural and social connotations that come along with doing so, but she also embodies a freedom of expression often lacking in graphic design, meaning Dana’s portfolio errs towards abstraction and conceptual investigations. The onus of these investigations is on youth, Black female identity, ownership and nostalgia, topics she explores by combining, reproducing and deconstructing vintage materials, found objects and paint.</p>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 67,
    slug: `could-tall-wood-construction-be-the-future-of-high-rise-buildings`,
    date: `2020-02-07T00:34:58`,
    title: `Could Tall Wood Construction Be the Future of High-Rise Buildings?`,
    authorSlug: `angelnoworries-fi`,
    authorName: `Elizabeth Angel`,
    categorySlugs: ["uncategorized"],
    tagSlugs: [],
    featuredImage: null,
    excerpt: `The Madrid-raised and New York-based designer sees his medium as a coherent medley of art, culture, technology, media theory and psychology.`,
    contentHtml: `
<p class="has-drop-cap">Dana describes her projects as ones that “reveal answers and lead to more questions.” Whether something related to her own life or a more universal topic, the idea is the solve something which appears unsolvable. Take, for example, Dana’s recent ongoing project called Scarf Collection. “I sell the scarfs and give half of the money to a Black person or Black-led organisation,” she explains. “Capitalism functions in a space of scarcity, so I wanted to prove to myself that there can be enough, and giving is something that can be built into my art practice.” In turn, the project questions labour, ownership, love and abundance.</p>



<p>It means Dana’s practice today is multifaceted, something which allows her to pull from a history of signals, references and symbols to “draw out emotions and memories we may have forgotten we had.” This often sees her working with found imagery from Ebony Magazine that “highlight[s] the idea of upward mobility and a growing Black middle class.” By utilising a language of humour and familiarity, Dana opens up “complex spaces of laughter and irony, while retaining an empathetic quality.” All this means she can communicate elaborate concepts in understated ways, drawing viewers in before opening up to them.</p>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"><p>Art, and the process of making things has always been the primary way that I am able to process, and understand the world</p><cite>Albert Flores</cite></blockquote>



<p>Whatever the project, however, the exciting part for Dana is “the way I can surprise myself with a combination of colours I have never seen before but remind me of something that I miss.” And this is exactly what she plans to continue doing, with plans for a group show in October and several artists residencies in the coming year. “Between now and then I am continuing to explore materials, ask questions and make scarfs,” she says.</p>



<figure class="wp-block-image alignwide size-large"><img decoding="async" src="http://schematictheme.com/schematic/wp-content/uploads/sites/2/2022/06/demo-image-00001-1024x683.jpeg" alt="" class="wp-image-3955"/><figcaption>Pen Mendonça: 100 Great Black Britons (Copyright © Pen Mendonça)</figcaption></figure>



<p>Currently based in New York, a city she’s called home since graduating from the School of Visual Arts with an MFA in fine art in 2019, Dana tells us she’s simply never been interested in being anything other than an artist. “Art, and the process of making things has always been the primary way that I am able to process, and understand the world,” she explains. It was at SVA that her unique practice formed, as she explored “digital art, web, fashion, 3D design and printmaking on top of painting and drawing” during her undergrad in graphic design.</p>



<ul class="wp-block-list"><li>Through her artistic practice, Johanna Tagada Hoffbeck invites positivity into everyday life</li><li>Art duo Mazaccio & Drowilal use collage to deconstruct popular culture</li><li>Rosanna Webster, Fon and Fa, and Parker Heyl embody the human qualities of creativity through experimentation</li><li>Through rich and colourful symbolism, Bony Ramírez uses art to reflect on his Caribbean culture</li></ul>



<p>Founded by French-Lebanese sisters Laura and Sophie Tabet, as well as Ulysse Sabbagh, in partnership with Lebanese creatives Flavie Audi and Emilie Kareh, stock will be added to the store weekly until early January. “We have been humbled by the number of people who have come forward and answered the call to help Lebanon,” says founder Laura Tabet. “In these dark times, it’s deeply heartening to witness the artistic community coming together to create a movement that is beyond politics and beyond borders.”</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-279 post type-post status-publish format-standard has-post-thumbnail category-biotech category-manufacturing category-materials category-medtech tag-biotech cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/lifecycle-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="Dublin’s MedTech Summit 2025: SaMD, QA and scale‑up" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/national-medtech-biotech-summit-2025-dublin/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">May 30, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/national-medtech-biotech-summit-2025-dublin/">National MedTech & Biotech Summit 2025 (Dublin): Ireland’s device machine gets software‑native</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p>One example of this is Ebony Reprinted, a series of monoprints that present “the healing possibilities of abstraction.” To make the works, Dana used images that circulated in printed adverts and distorted them using paint to “remove traces of exploitative, white-dominated, capitalist, visual language and allow the individuals in these images to regain their agency.” She does this by smearing, pressing and adding texture to paint and, as the individuals and their faces becomes more abstract, the notion is that they also become “exponentially more present.”</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">		<div class="sight-block-portfolio  sight-block-portfolio-id-6a01b924ba9c3 sight-block-portfolio-layout-justified">
				<div class="sight-portfolio-area sight-portfolio-area-lightbox sight-last-row-justified">

		<div class="sight-portfolio-area__outer">
			<div class="sight-portfolio-area__main" >
							</div>
		</div>
	</div>
			</div>

		<style>		.sight-block-portfolio-id-6a01b924ba9c3 {
			--sight-portfolio-area-grid-image-height: 260px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b924ba9c3 {
				--sight-portfolio-area-grid-image-height: 260px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b924ba9c3 {
				--sight-portfolio-area-grid-image-height: 200px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b924ba9c3 {
				--sight-portfolio-area-grid-image-height: 100px;
			}
		}
				.sight-block-portfolio-id-6a01b924ba9c3 {
			--sight-portfolio-area-grid-gap: 15px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b924ba9c3 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b924ba9c3 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b924ba9c3 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
		</style>
		</div></div>



<p>As well as Beirut Re-Store’s marketplace, towards the end of October the platform will launch a “special collection of bespoke items” made in collaboration with non-profit organisation Creatives For Lebanon. This collection is already confirmed to feature contributions from Dior, Jean Paul Gaultier and Supriya Lee.</p>



<p>With a background in both graphic design and art, Dana Robinson’s practice sits at a fascinating intersection. She understands the power of combining imagery and text and the cultural and social connotations that come along with doing so, but she also embodies a freedom of expression often lacking in graphic design, meaning Dana’s portfolio errs towards abstraction and conceptual investigations. The onus of these investigations is on youth, Black female identity, ownership and nostalgia, topics she explores by combining, reproducing and deconstructing vintage materials, found objects and paint.</p>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 278,
    slug: `home-office-23-solutions-for-more-flexible-workspaceshome-office-23-solutions-for-more-flexible-workspaces`,
    date: `2020-02-06T03:33:48`,
    title: `Home Office: 23 Solutions for More Flexible Workspaces`,
    authorSlug: `angelnoworries-fi`,
    authorName: `Elizabeth Angel`,
    categorySlugs: ["uncategorized"],
    tagSlugs: [],
    featuredImage: null,
    excerpt: `The New York-based creative director Rajeev Basu got the idea for the project just over a year ago, when he adopted Remy, a puppy who loves to snooze.`,
    contentHtml: `
<p class="has-drop-cap">Dana describes her projects as ones that “reveal answers and lead to more questions.” Whether something related to her own life or a more universal topic, the idea is the solve something which appears unsolvable. Take, for example, Dana’s recent ongoing project called Scarf Collection. “I sell the scarfs and give half of the money to a Black person or Black-led organisation,” she explains. “Capitalism functions in a space of scarcity, so I wanted to prove to myself that there can be enough, and giving is something that can be built into my art practice.” In turn, the project questions labour, ownership, love and abundance.</p>



<p>It means Dana’s practice today is multifaceted, something which allows her to pull from a history of signals, references and symbols to “draw out emotions and memories we may have forgotten we had.” This often sees her working with found imagery from Ebony Magazine that “highlight[s] the idea of upward mobility and a growing Black middle class.” By utilising a language of humour and familiarity, Dana opens up “complex spaces of laughter and irony, while retaining an empathetic quality.” All this means she can communicate elaborate concepts in understated ways, drawing viewers in before opening up to them.</p>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"><p>Art, and the process of making things has always been the primary way that I am able to process, and understand the world</p><cite>Albert Flores</cite></blockquote>



<p>Whatever the project, however, the exciting part for Dana is “the way I can surprise myself with a combination of colours I have never seen before but remind me of something that I miss.” And this is exactly what she plans to continue doing, with plans for a group show in October and several artists residencies in the coming year. “Between now and then I am continuing to explore materials, ask questions and make scarfs,” she says.</p>



<figure class="wp-block-image alignwide size-large"><img decoding="async" src="http://schematictheme.com/schematic/wp-content/uploads/sites/2/2022/06/demo-image-00001-1024x683.jpeg" alt="" class="wp-image-3955"/><figcaption>Pen Mendonça: 100 Great Black Britons (Copyright © Pen Mendonça)</figcaption></figure>



<p>Currently based in New York, a city she’s called home since graduating from the School of Visual Arts with an MFA in fine art in 2019, Dana tells us she’s simply never been interested in being anything other than an artist. “Art, and the process of making things has always been the primary way that I am able to process, and understand the world,” she explains. It was at SVA that her unique practice formed, as she explored “digital art, web, fashion, 3D design and printmaking on top of painting and drawing” during her undergrad in graphic design.</p>



<ul class="wp-block-list"><li>Through her artistic practice, Johanna Tagada Hoffbeck invites positivity into everyday life</li><li>Art duo Mazaccio & Drowilal use collage to deconstruct popular culture</li><li>Rosanna Webster, Fon and Fa, and Parker Heyl embody the human qualities of creativity through experimentation</li><li>Through rich and colourful symbolism, Bony Ramírez uses art to reflect on his Caribbean culture</li></ul>



<p>Founded by French-Lebanese sisters Laura and Sophie Tabet, as well as Ulysse Sabbagh, in partnership with Lebanese creatives Flavie Audi and Emilie Kareh, stock will be added to the store weekly until early January. “We have been humbled by the number of people who have come forward and answered the call to help Lebanon,” says founder Laura Tabet. “In these dark times, it’s deeply heartening to witness the artistic community coming together to create a movement that is beyond politics and beyond borders.”</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-282 post type-post status-publish format-gallery has-post-thumbnail category-biotech category-lifesciences category-manufacturing category-materials post_format-post-format-gallery cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/01/biomanufact-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/sosv-biomanufacturing-matchup-2025-vc-founder/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">April 28, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/sosv-biomanufacturing-matchup-2025-vc-founder/">SOSV Biomanufacturing Matchup 2025: Where synbio’s factory floor meets the cap table</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p>One example of this is Ebony Reprinted, a series of monoprints that present “the healing possibilities of abstraction.” To make the works, Dana used images that circulated in printed adverts and distorted them using paint to “remove traces of exploitative, white-dominated, capitalist, visual language and allow the individuals in these images to regain their agency.” She does this by smearing, pressing and adding texture to paint and, as the individuals and their faces becomes more abstract, the notion is that they also become “exponentially more present.”</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">		<div class="sight-block-portfolio  sight-block-portfolio-id-6a01b924bcc1b sight-block-portfolio-layout-justified">
				<div class="sight-portfolio-area sight-portfolio-area-lightbox sight-last-row-justified">

		<div class="sight-portfolio-area__outer">
			<div class="sight-portfolio-area__main" >
							</div>
		</div>
	</div>
			</div>

		<style>		.sight-block-portfolio-id-6a01b924bcc1b {
			--sight-portfolio-area-grid-image-height: 260px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b924bcc1b {
				--sight-portfolio-area-grid-image-height: 260px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b924bcc1b {
				--sight-portfolio-area-grid-image-height: 200px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b924bcc1b {
				--sight-portfolio-area-grid-image-height: 100px;
			}
		}
				.sight-block-portfolio-id-6a01b924bcc1b {
			--sight-portfolio-area-grid-gap: 15px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b924bcc1b {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b924bcc1b {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b924bcc1b {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
		</style>
		</div></div>



<p>As well as Beirut Re-Store’s marketplace, towards the end of October the platform will launch a “special collection of bespoke items” made in collaboration with non-profit organisation Creatives For Lebanon. This collection is already confirmed to feature contributions from Dior, Jean Paul Gaultier and Supriya Lee.</p>



<p>With a background in both graphic design and art, Dana Robinson’s practice sits at a fascinating intersection. She understands the power of combining imagery and text and the cultural and social connotations that come along with doing so, but she also embodies a freedom of expression often lacking in graphic design, meaning Dana’s portfolio errs towards abstraction and conceptual investigations. The onus of these investigations is on youth, Black female identity, ownership and nostalgia, topics she explores by combining, reproducing and deconstructing vintage materials, found objects and paint.</p>
`,
    readingMinutes: 4,
    sticky: false,
  },
  {
    id: 272,
    slug: `the-10-most-picturesque-castles-from-around-the-world`,
    date: `2020-02-05T22:20:07`,
    title: `The 10 Most Picturesque Castles From Around the World`,
    authorSlug: `angelnoworries-fi`,
    authorName: `Elizabeth Angel`,
    categorySlugs: ["uncategorized"],
    tagSlugs: [],
    featuredImage: null,
    excerpt: `Fusce consequat consectetuer, lorem nostra leo egestas. Nisi tellus dignissim nonummy bibendum auctor. Bibendum sed rhoncus varius varius feugiat gravida gravida vestibulum ultricies.`,
    contentHtml: `
<p class="has-drop-cap">Dana describes her projects as ones that “reveal answers and lead to more questions.” Whether something related to her own life or a more universal topic, the idea is the solve something which appears unsolvable. Take, for example, Dana’s recent ongoing project called Scarf Collection. “I sell the scarfs and give half of the money to a Black person or Black-led organisation,” she explains. “Capitalism functions in a space of scarcity, so I wanted to prove to myself that there can be enough, and giving is something that can be built into my art practice.” In turn, the project questions labour, ownership, love and abundance.</p>



<p>It means Dana’s practice today is multifaceted, something which allows her to pull from a history of signals, references and symbols to “draw out emotions and memories we may have forgotten we had.” This often sees her working with found imagery from Ebony Magazine that “highlight[s] the idea of upward mobility and a growing Black middle class.” By utilising a language of humour and familiarity, Dana opens up “complex spaces of laughter and irony, while retaining an empathetic quality.” All this means she can communicate elaborate concepts in understated ways, drawing viewers in before opening up to them.</p>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"><p>Art, and the process of making things has always been the primary way that I am able to process, and understand the world</p><cite>Albert Flores</cite></blockquote>



<p>Whatever the project, however, the exciting part for Dana is “the way I can surprise myself with a combination of colours I have never seen before but remind me of something that I miss.” And this is exactly what she plans to continue doing, with plans for a group show in October and several artists residencies in the coming year. “Between now and then I am continuing to explore materials, ask questions and make scarfs,” she says.</p>



<figure class="wp-block-image alignwide size-large"><img decoding="async" src="http://schematictheme.com/schematic/wp-content/uploads/sites/2/2022/06/demo-image-00001-1024x683.jpeg" alt="" class="wp-image-3955"/><figcaption>Pen Mendonça: 100 Great Black Britons (Copyright © Pen Mendonça)</figcaption></figure>



<p>Currently based in New York, a city she’s called home since graduating from the School of Visual Arts with an MFA in fine art in 2019, Dana tells us she’s simply never been interested in being anything other than an artist. “Art, and the process of making things has always been the primary way that I am able to process, and understand the world,” she explains. It was at SVA that her unique practice formed, as she explored “digital art, web, fashion, 3D design and printmaking on top of painting and drawing” during her undergrad in graphic design.</p>



<ul class="wp-block-list"><li>Through her artistic practice, Johanna Tagada Hoffbeck invites positivity into everyday life</li><li>Art duo Mazaccio & Drowilal use collage to deconstruct popular culture</li><li>Rosanna Webster, Fon and Fa, and Parker Heyl embody the human qualities of creativity through experimentation</li><li>Through rich and colourful symbolism, Bony Ramírez uses art to reflect on his Caribbean culture</li></ul>



<p>Founded by French-Lebanese sisters Laura and Sophie Tabet, as well as Ulysse Sabbagh, in partnership with Lebanese creatives Flavie Audi and Emilie Kareh, stock will be added to the store weekly until early January. “We have been humbled by the number of people who have come forward and answered the call to help Lebanon,” says founder Laura Tabet. “In these dark times, it’s deeply heartening to witness the artistic community coming together to create a movement that is beyond politics and beyond borders.”</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<div class="cnvs-block-row cnvs-block-row-1653055124374 cnvs-block-row-columns-2" >
	<div class="cnvs-block-row-inner">
		

<div class="cnvs-block-column cnvs-block-column-1653055124356" >
	<div class="cnvs-block-column-inner">
		<div>
			

<h2 id="read-next" class="cnvs-block-section-heading cnvs-block-section-heading-1653055124353 halignleft" >
	<span class="cnvs-section-title">
		<span>Read Next</span>
	</span>
</h2>

		</div>
	</div>
</div>



<div class="cnvs-block-column cnvs-block-column-1653055124371" >
	<div class="cnvs-block-column-inner">
		<div>
					</div>
	</div>
</div>

	</div>
</div>


	<div class="cnvs-block-posts cnvs-block-posts-1653054825037 cnvs-block-posts-layout-horizontal-type-1" data-layout="horizontal-type-1" data-min-height="">
		<div class="cs-posts-area" data-posts-area="">
			<div class="cs-posts-area__outer">
				<div class="cs-posts-area__main cs-block-posts-layout-horizontal-type-1 cs-posts-area__image-width-half">
					
<article class="post-262 post type-post status-publish format-standard has-post-thumbnail category-manufacturing category-medtech tag-pharma cs-entry cs-video-wrap">
	<div class="cs-entry__outer">
		
					<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-landscape-3-2">
		
							<div class="cs-overlay-background cs-overlay-transparent">
					<img loading="lazy" decoding="async" width="380" height="250" src="https://theagoramedia.com/wp-content/uploads/2020/02/manufacturing-380x250.png" class="attachment-csco-thumbnail size-csco-thumbnail wp-post-image" alt="Maghreb Pharma 2025: GMP, localization and the rise of North African manufacturing" />				</div>
			
			
			
			
			<a href="https://theagoramedia.com/maghreb-pharma-expo-2025-algiers-gmp/" class="cs-overlay-link"></a>
		</div>
		
		<div class="cs-entry__inner cs-entry__content">
			<div class="cs-entry__post-meta " ><div class="cs-meta-date">April 25, 2025</div></div>
			<div class="cs-entry__content-inner">
					<h2 class="cs-entry__title ">
					<a href="https://theagoramedia.com/maghreb-pharma-expo-2025-algiers-gmp/">Maghreb Pharma Expo 2025 (Algiers): North Africa’s pharma workshop goes from import substitution to export ambition</a>
			</h2>
	
				
							</div>
		</div>
	</div>
</article>
				</div>
			</div>

					</div>
	</div>
	</div></div>



<p>One example of this is Ebony Reprinted, a series of monoprints that present “the healing possibilities of abstraction.” To make the works, Dana used images that circulated in printed adverts and distorted them using paint to “remove traces of exploitative, white-dominated, capitalist, visual language and allow the individuals in these images to regain their agency.” She does this by smearing, pressing and adding texture to paint and, as the individuals and their faces becomes more abstract, the notion is that they also become “exponentially more present.”</p>



<div class="wp-block-group alignwide"><div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">		<div class="sight-block-portfolio  sight-block-portfolio-id-6a01b924bf388 sight-block-portfolio-layout-justified">
				<div class="sight-portfolio-area sight-portfolio-area-lightbox sight-last-row-justified">

		<div class="sight-portfolio-area__outer">
			<div class="sight-portfolio-area__main" >
							</div>
		</div>
	</div>
			</div>

		<style>		.sight-block-portfolio-id-6a01b924bf388 {
			--sight-portfolio-area-grid-image-height: 260px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b924bf388 {
				--sight-portfolio-area-grid-image-height: 260px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b924bf388 {
				--sight-portfolio-area-grid-image-height: 200px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b924bf388 {
				--sight-portfolio-area-grid-image-height: 100px;
			}
		}
				.sight-block-portfolio-id-6a01b924bf388 {
			--sight-portfolio-area-grid-gap: 15px;
		}
				@media (max-width: 1199.98px) {
			.sight-block-portfolio-id-6a01b924bf388 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 991.98px) {
			.sight-block-portfolio-id-6a01b924bf388 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
				@media (max-width: 575.98px) {
			.sight-block-portfolio-id-6a01b924bf388 {
				--sight-portfolio-area-grid-gap: 15px;
			}
		}
		</style>
		</div></div>



<p>As well as Beirut Re-Store’s marketplace, towards the end of October the platform will launch a “special collection of bespoke items” made in collaboration with non-profit organisation Creatives For Lebanon. This collection is already confirmed to feature contributions from Dior, Jean Paul Gaultier and Supriya Lee.</p>



<p>With a background in both graphic design and art, Dana Robinson’s practice sits at a fascinating intersection. She understands the power of combining imagery and text and the cultural and social connotations that come along with doing so, but she also embodies a freedom of expression often lacking in graphic design, meaning Dana’s portfolio errs towards abstraction and conceptual investigations. The onus of these investigations is on youth, Black female identity, ownership and nostalgia, topics she explores by combining, reproducing and deconstructing vintage materials, found objects and paint.</p>
`,
    readingMinutes: 4,
    sticky: false,
  },
];

export const postBySlug = (slug: string): Post | undefined =>
  posts.find(p => p.slug === slug);

export const postsByCategory = (slug: string): Post[] =>
  posts.filter(p => p.categorySlugs.includes(slug));

export const postsByTag = (slug: string): Post[] =>
  posts.filter(p => p.tagSlugs.includes(slug));

export const postsByAuthor = (slug: string): Post[] =>
  posts.filter(p => p.authorSlug === slug);
