// 15 Lead Contributors shown on the Contact page.
// `authorSlug` links to authors.ts when the contributor has published posts.

export interface Contributor {
  name: string;
  focus: string;
  authorSlug: string;
}

export const contributors: Contributor[] = [
  {
    name: `Amy Wellington`,
    focus: `defense, security, infrastructure, dual-use`,
    authorSlug: `amywellington`,
  },
  {
    name: `Dr Anubha Tripathi`,
    focus: `science`,
    authorSlug: `anubha`,
  },
  {
    name: `Dr Jens Gudmundsson`,
    focus: `health`,
    authorSlug: `dr-jens-gudmundsson`,
  },
  {
    name: `Dr Olivia Lesslar`,
    focus: `space, medicine`,
    authorSlug: `olivia`,
  },
  {
    name: `Dr Nisha Money`,
    focus: `defense, health`,
    authorSlug: `nisha`,
  },
  {
    name: `Dr Rini Chatterjee`,
    focus: `health and wellness`,
    authorSlug: `rini`,
  },
  {
    name: `Elizabeth Angel`,
    focus: `tech, defense, health`,
    authorSlug: `angelnoworries-fi`,
  },
  {
    name: `Kim Henwood`,
    focus: `education`,
    authorSlug: `kim`,
  },
  {
    name: `Lili Rose`,
    focus: `education / health`,
    authorSlug: ``,
  },
  {
    name: `Marcus Bell`,
    focus: `technology, entertainment`,
    authorSlug: ``,
  },
  {
    name: `Melyssa Smith`,
    focus: `entertainment`,
    authorSlug: ``,
  },
  {
    name: `Thiago Ferreira`,
    focus: `technology`,
    authorSlug: `thiago`,
  },
  {
    name: `Tony Long`,
    focus: `technology`,
    authorSlug: `tony-long`,
  },
  {
    name: `Uyen Pham`,
    focus: `tech events`,
    authorSlug: `uyen-pham`,
  },
  {
    name: `Yuviraaj Nasir`,
    focus: `governance, governments`,
    authorSlug: `yuviraaj-nasir`,
  },
];
