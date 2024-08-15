import Editor from "@/components/editor/Editor";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Live docs</h1>
      <p>Welcome to the live docs.</p>
      <Button asChild>
        <Link href="/documents">Go to Documents</Link>
      </Button>
      {/* <Editor /> */}
    </main>
  );
}
