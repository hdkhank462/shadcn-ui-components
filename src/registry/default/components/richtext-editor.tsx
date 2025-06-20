"use client";

import { Button } from "@/components/ui/button";
import { Toggle, toggleVariants } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import TextAlign from "@tiptap/extension-text-align";
import {
  EditorContent,
  useEditor,
  UseEditorOptions,
  type Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { VariantProps } from "class-variance-authority";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";
import { ReactNode } from "react";

interface RichtextEditorProps {
  options?: UseEditorOptions;
  className?: string;
}

const RichtextEditor = ({ options, className }: RichtextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "min-h-[300px] p-2 focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert !w-full !max-w-none",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
    ...options,
  });

  return (
    <div
      className={cn(
        "w-full border border-input rounded-lg overflow-hidden dark:bg-input/30",
        className
      )}
    >
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

interface MenuBarProps {
  editor: Editor | null;
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border border-t-0 rounded-t-lg border-x-0 border-input bg-card">
      <TooltipProvider>
        <div className="flex flex-wrap gap-1">
          <MenuBarButton
            name="Bold"
            icon={<Bold />}
            isActive={editor.isActive("bold")}
            onChange={() => editor.chain().focus().toggleBold().run()}
          />
          <MenuBarButton
            name="Italic"
            icon={<Italic />}
            isActive={editor.isActive("italic")}
            onChange={() => editor.chain().focus().toggleItalic().run()}
          />
          <MenuBarButton
            name="Strike"
            icon={<Strikethrough />}
            isActive={editor.isActive("strike")}
            onChange={() => editor.chain().focus().toggleStrike().run()}
          />
        </div>

        <div className="w-px h-6 mx-2 bg-border" />

        <div className="flex flex-wrap gap-1">
          <MenuBarButton
            name="Heading 1"
            icon={<Heading1 />}
            isActive={editor.isActive("heading", { level: 1 })}
            onChange={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          />
          <MenuBarButton
            name="Heading 2"
            icon={<Heading2 />}
            isActive={editor.isActive("heading", { level: 2 })}
            onChange={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          />
          <MenuBarButton
            name="Heading 3"
            icon={<Heading3 />}
            isActive={editor.isActive("heading", { level: 3 })}
            onChange={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          />
          <MenuBarButton
            name="Bullet List"
            icon={<List />}
            isActive={editor.isActive("bulletList")}
            onChange={() => editor.chain().focus().toggleBulletList().run()}
          />
          <MenuBarButton
            name="Ordered List"
            icon={<ListOrdered />}
            isActive={editor.isActive("orderedList")}
            onChange={() => editor.chain().focus().toggleOrderedList().run()}
          />
        </div>

        <div className="w-px h-6 mx-2 bg-border" />

        <div className="flex flex-wrap gap-1">
          <MenuBarButton
            name="Align Left"
            icon={<AlignLeft />}
            isActive={editor.isActive({ textAlign: "left" })}
            onChange={() => editor.chain().focus().setTextAlign("left").run()}
          />
          <MenuBarButton
            name="Align Center"
            icon={<AlignCenter />}
            isActive={editor.isActive({ textAlign: "center" })}
            onChange={() => editor.chain().focus().setTextAlign("center").run()}
          />
          <MenuBarButton
            name="Align Right"
            icon={<AlignRight />}
            isActive={editor.isActive({ textAlign: "right" })}
            onChange={() => editor.chain().focus().setTextAlign("right").run()}
          />
        </div>

        <div className="w-px h-6 mx-2 bg-border" />

        <div className="flex flex-wrap gap-1">
          <MenuBarButton
            name="Undo"
            type="button"
            icon={<Undo />}
            onChange={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
          />
          <MenuBarButton
            name="Redo"
            type="button"
            icon={<Redo />}
            onChange={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
          />
        </div>
      </TooltipProvider>
    </div>
  );
};

type MenuBarToggleButtonProps = VariantProps<typeof toggleVariants> & {
  name: string;
  icon: ReactNode;
  onChange: () => void;
  type?: "button" | "toggle";
  isActive?: boolean;
  disabled?: boolean;
};

const MenuBarButton = ({
  type = "toggle",
  size = "sm",
  name,
  icon,
  isActive,
  disabled,
  onChange,
}: MenuBarToggleButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {type == "toggle" ? (
          <Toggle
            size={size}
            pressed={isActive}
            onPressedChange={onChange}
            className={cn(isActive && "bg-muted text-muted-foreground")}
          >
            {icon}
          </Toggle>
        ) : (
          <Button
            size={size}
            variant={"ghost"}
            type="button"
            onClick={onChange}
            disabled={disabled}
          >
            {icon}
          </Button>
        )}
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default RichtextEditor;
