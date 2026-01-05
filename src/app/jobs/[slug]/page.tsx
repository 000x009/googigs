import JobPageComponent from "@/pages/(job-page)/ui/job-page";

export default function JobPage({ params }: { params: { slug: string } }) {
  return <JobPageComponent slug={params.slug} />;
}
