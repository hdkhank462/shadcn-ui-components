import { ThemeToggle } from "@/components/theme-toggle";
import RichtextEditor from "@/registry/default/components/richtext-editor";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container h-screen p-4">
      <div className="space-x-2 text-2xl font-bold text-center">
        <span>
          <Link href={""} className="underline">
            {"Hdkhank462's"}
          </Link>{" "}
          Shadcn/ui Components
        </span>
        <ThemeToggle />
      </div>

      <div className="mt-4">
        <RichtextEditor
          options={{
            content:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at dolorem accusamus ratione, hic consequatur! Nesciunt quas asperiores doloribus, architecto totam distinctio, ipsum quis officia nihil eligendi obcaecati, modi neque.</p>",
          }}
        />
      </div>
    </div>
  );
}
