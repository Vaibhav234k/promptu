import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SiMicrosoftexcel } from "react-icons/si";

export default function WholeProductPage() {
  return (
    <div className="flex flex-row my-4 mx-6 gap-4">
      <div className="border border-gray-400 rounded-lg w-full h-[90vh]"></div>
      <div className="flex items-end border border-gray-400 rounded-lg w-full h-[90vh]">
        <div className="flex flex-row gap-2 m-2 w-full">
          <Dialog>
            <DialogTrigger className="border border-gray-300 p-2 rounded-lg"><SiMicrosoftexcel /></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload your excel file here</DialogTitle>
              </DialogHeader>
              <Input type="file" accept=".xlsx,.xlsm,.xlsb,.xml,.csv,.xls,"></Input>
            </DialogContent>
          </Dialog>
          <Input placeholder="ex.Age beetween 20-30 and living in india" />

          <Button>Generate</Button>
        </div>
      </div>
    </div>
  );
}
