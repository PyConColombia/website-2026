import type { TestimonialItem } from "@/components/blocks/testimonials/testimonial-card";

export const testimonials: TestimonialItem[] = [
  {
    name: "Emily Watson",
    username: "@emilywatson",
    avatar: "/images/avatar/avatar-7.webp",
    rating: 5,
    content: (
      <>
        PyCon Colombia is an{" "}
        <span className="bg-primary/5 text-primary">
          incredible gathering of pythonistas across Latin America
        </span>
        . The talks were inspiring and I left with new ideas, friends, and
        projects I can&apos;t wait to ship.
      </>
    ),
  },
  {
    name: "Alex Rivera",
    username: "@alexrivera",
    avatar: "/images/avatar/avatar-8.webp",
    rating: 5,
    content: (
      <>
        From keynotes to hallway track, the conference balances{" "}
        <span className="bg-primary/5 text-primary">
          technical depth with a welcoming community vibe
        </span>
        . It&apos;s easily one of the best Python events in the region.
      </>
    ),
  },
  {
    name: "Marcus Johnson",
    username: "@marcusjohnson",
    avatar: "/images/avatar/avatar-9.webp",
    rating: 4.5,
    content: (
      <>
        Medellín was the perfect host. The organizing team paid attention to
        every detail and made sure{" "}
        <span className="bg-primary/5 text-primary">
          everyone felt included from day one
        </span>
        . Highly recommend attending.
      </>
    ),
  },
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    avatar: "/images/avatar/avatar-10.webp",
    rating: 5,
    content: (
      <>
        The Opportunity Scholarship Program brought a{" "}
        <span className="bg-primary/5 text-primary">
          truly global mix of speakers and attendees
        </span>{" "}
        together. I learned as much from the conversations as from the talks.
      </>
    ),
  },
  {
    name: "Daniela Patiño",
    username: "@daniela_dev",
    avatar: "/images/avatar/avatar-2.webp",
    rating: 5,
    content: (
      <>
        Submitting my first proposal to PyCon Colombia was a game-changer. The{" "}
        <span className="bg-primary/5 text-primary">
          mentorship and support from the speakers community
        </span>{" "}
        made me feel right at home on stage.
      </>
    ),
  },
  {
    name: "Lisa Thompson",
    username: "@lisathompson",
    avatar: "/images/avatar/avatar-1.webp",
    rating: 5,
    content: (
      <>
        Workshops, keynotes, sponsors, and the after-movie energy. PyCon
        Colombia keeps{" "}
        <span className="bg-primary/5 text-primary">
          raising the bar for what a regional Python conference can be
        </span>
        .
      </>
    ),
  },
];
