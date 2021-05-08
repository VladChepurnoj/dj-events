import Layout from "@/components/Layout";

export default function EventsPage() {
  return (
    <Layout>
      <h1>My events</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("/api/events");
}
