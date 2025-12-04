import ResearchDetail from "@/pages/research-detail"

export default function Page({ params }: { params: { id: string } }) {
  return <ResearchDetail id={params.id} />
}
