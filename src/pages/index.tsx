import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/Select";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Inctagram</h1>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box">Select-box</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="def">Def</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
